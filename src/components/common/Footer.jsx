
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import '../../styles/styles.css';


// const StyleFooter = styled.div`
//     border-top: 1px solid #757575;
//     width: 100%;
//     a {
//         color: #000000;
//         text-decoration: none;
//     }
//     a:hover {
//         color: #006BB4;
//         text-decoration: underline;
//     }
// `
// const StyleFooterLinks = styled.div`
//     display: flex;
//     gap: 60px;
//     justify-content: center;
//     padding: 40px 0;
// `
// const StyleFooterLinksColumns = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 8px; 
// `

// const StyleFooterLinksRedes = styled.span`
//     display: flex;
//     gap: 16px;
// `

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="footer-links_columnas">
                    <h4 className="text-color-dark">Otras secciones</h4>
                    <a href="/nosotros">Conócenos</a>
                </div>
                <div className="footer-links_columnas">
                    <h4 className="text-color-dark">¿Necesitas soporte?</h4>
                    <a href="/faqs">Soporte técnico</a>
                    <a href="/condiciones-compra">Condiciones de Compra</a>
                </div>
                <div className="footer-links_columnas">
                    <h4 className="text-color-dark">Redes sociales</h4>
                    <span className="footer-links_redes">
                        <a href="https://www.linkedin.com/company/samsunglatin/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" />
                        </a>
                        <a href="https://www.youtube.com/user/SamsungLatin" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="xl" />
                        </a>
                        <a href="https://x.com/SamsungLatin/" target="_blank">
                            <FontAwesomeIcon icon={faTimes} size="xl" />
                        </a>
                        <a href="https://www.facebook.com/SamsungLatin" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="xl" />
                        </a>
                        <a href="https://www.facebook.com/SamsungLatin" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>
                    </span>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 1995-2020 SAMSUNG. Todos los derechos reservados.</p>
                <div className="footer-copyright_links">
                    <a href="/accesibilidad">Ayuda para accesibilidad</a>
                    <a href="/privacidad">Privacidad</a>
                    <a href="/legal">Legal</a>
                </div>
            </div>
        </footer>
        // <StyleFooter>
        // <StyleFooterLinks>
        //     <StyleFooterLinksColumns>
        //         <h4>Otras secciones</h4>
        //         <a href="/nosotros">Conócenos</a>
        //     </StyleFooterLinksColumns>
        //     <StyleFooterLinksColumns>
        //         <h4>¿Necesitas soporte?</h4>
        //         <a href="/faqs">Soporte técnico</a>
        //         <a href="/condiciones-compra">Condiciones de Compra</a>
        //     </StyleFooterLinksColumns>
        //     <StyleFooterLinksColumns>
        //         <h4>Redes sociales</h4>
        //         <StyleFooterLinksRedes>
        //             <a href="https://www.linkedin.com/company/samsunglatin/" target="_blank">
        //                 <FontAwesomeIcon icon={faLinkedin} />
        //             </a>
        //             <a href="https://www.youtube.com/user/SamsungLatin" target="_blank">
        //                 <FontAwesomeIcon icon={faYoutubeSquare} />
        //             </a>
        //             <a href="https://x.com/SamsungLatin/" target="_blank">
        //                 <FontAwesomeIcon icon={faTimes} />
        //             </a>
        //             <a href="https://www.facebook.com/SamsungLatin" target="_blank">
        //                 <FontAwesomeIcon icon={faFacebook} />
        //             </a>
        //             <a href="https://www.facebook.com/SamsungLatin" target="_blank">
        //                 <FontAwesomeIcon icon={faInstagram} />
        //             </a>

        //         </StyleFooterLinksRedes>
        //     </StyleFooterLinksColumns>
        // </StyleFooterLinks>
        // </StyleFooter>
    )
}

export default Footer;