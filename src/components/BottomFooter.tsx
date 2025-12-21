import React from "react";

const BottomFooter: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-info">
                    <div className="footer-section">
                        <h3 className="footer-section-title">Contato</h3>
                        <div className="footer-links">
                            <a
                                href="mailto:comics.pink@gmail.com"
                                className="footer-link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="16px"
                                    viewBox="0 -960 960 960"
                                    width="16px"
                                    fill="currentColor"
                                >
                                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                                </svg>
                                comics.pink@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-section-title">Navegação</h3>
                        {/* <div className="footer-links">
                            <a href="about.html" class="footer-link">Sobre o pInk</a>
                            <a href="how-to-use.html" class="footer-link">Como usar</a>
                        </div> */}
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-section-title">Redes Sociais</h3>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="footer-brand-name">
                        <span className="footer-logo">pInk</span>
                    </div>
                    <div className="footer-copyright">
                        <span>© 2025. Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BottomFooter;
