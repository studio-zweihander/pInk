const { supabase } = require("../config/database");

class ComicsController {
  async getAllComics(req, res) {
    try {
      const { data, error } = await supabase
        .from("Comic")
        .select(
          `
          id, 
          title, 
          issues, 
          year, 
          cover, 
          idiomId, 
          publisherId,
          Idiom(name),
          Publisher(name)
        `
        )
        .order("title", { ascending: true });

      if (error) throw error;

      const comics = data.map((comic) => ({
        id: comic.id,
        title: comic.title,
        total_issues: comic.issues,
        year: comic.year,
        cover: comic.cover,
        language: comic.Idiom?.name || null,
        publisher: comic.Publisher?.name || null,
      }));

      res.json({
        success: true,
        count: comics.length,
        data: comics,
      });
    } catch (error) {
      console.error("Error fetching comics:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching comics",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      });
    }
  }

  async getComicById(req, res) {
    try {
      const { id } = req.params;

      const { data, error } = await supabase
        .from("Comic")
        .select(
          `
          *,
          Idiom(name),
          Publisher(name)
        `
        )
        .eq("id", id)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          return res.status(404).json({
            success: false,
            message: "Comic not found",
          });
        }
        throw error;
      }

      const { data: authorsData } = await supabase
        .from("ComicAuthor")
        .select("Author(*)")
        .eq("comicId", id);

      const authors = authorsData?.map((ca) => ca.Author) || [];

      const comic = {
        id: data.id,
        title: data.title,
        total_issues: data.issues,
        year: data.year,
        cover: data.cover,
        language: data.Idiom?.name || null,
        publisher: data.Publisher?.name || null,
        authors: authors,
      };

      res.json({
        success: true,
        data: comic,
      });
    } catch (error) {
      console.error("Error fetching comic by ID:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching comic details",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      });
    }
  }

  async getComicIssues(req, res) {
    try {
      const { id } = req.params;

      const [comicCheck, issuesData] = await Promise.all([
        supabase.from("Comic").select("id").eq("id", id).single(),
        supabase
          .from("Issue")
          .select("*, Idiom(name)")
          .eq("comicId", id)
          .order("issueNumber", { ascending: true }),
      ]);

      if (comicCheck.error) {
        if (comicCheck.error.code === "PGRST116") {
          return res.status(404).json({
            success: false,
            message: "Comic not found",
          });
        }
        throw comicCheck.error;
      }

      if (issuesData.error) throw issuesData.error;

      const issues = issuesData.data.map((issue) => ({
        id: issue.id,
        title: issue.title,
        issueNumber: issue.issueNumber,
        year: issue.year,
        size: issue.size,
        series: issue.series,
        genres: issue.genres,
        link: issue.link,
        cover: issue.cover,
        synopsis: issue.synopsis,
        language: issue.Idiom?.name || null,
      }));

      res.json({
        success: true,
        comic_id: parseInt(id),
        count: issues.length,
        data: issues,
      });
    } catch (error) {
      console.error("Error fetching comic issues:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching comic issues",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      });
    }
  }
}

module.exports = new ComicsController();
