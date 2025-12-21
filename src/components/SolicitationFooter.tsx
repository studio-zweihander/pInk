import React from "react";

const SolicitationFooter: React.FC = () => {
    return (
        <div className="footer-main">
            <div className="footer-brand">
                <h2 className="footer-title">Solicite um quadrinho!</h2>
                <p className="footer-subtitle">
                    Não encontrou o que procurava? Envie uma sugestão e nós
                    adicionaremos ao nosso acervo.
                </p>
            </div>

            <div className="footer-email-form">
                <div className="email-input-group">
                    <input
                        type="text"
                        id="footer-email"
                        placeholder="Digite apenas o nome do quadrinho"
                        aria-label="Solicite um quadrinho"
                    />
                    <button
                        type="button"
                        id="submit-request"
                        className="email-submit-btn"
                        aria-label="Enviar solicitação"
                    >
                        <span>Solicitar</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16px"
                            viewBox="0 -960 960 960"
                            width="16px"
                            fill="currentColor"
                        >
                            <path d="M647-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h487L423-744q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L480-216q-11 11-27.5 11T424-216q-12-12-12-28.5t12-28.5l224-224Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SolicitationFooter;
