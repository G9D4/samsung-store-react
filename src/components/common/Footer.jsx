import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faYoutube } from "@fortawesome/fontawesome-free-brands";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import '../../styles/styles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="footer-links_columnas">
                    <h4 className="text-color-dark">Otras secciones</h4>
                    <a href="https://www.samsung.com/pe/about-us/company-info/" target="_blank">Conócenos</a>
                </div>
                <div className="footer-links_columnas">
                    <h4 className="text-color-dark">¿Necesitas soporte?</h4>
                    <a href="https://www.samsung.com/pe/support/" target="_blank">Soporte técnico</a>
                    <a href="https://www.samsung.com/pe/refunds-and-exchanges/" target="_blank">Condiciones de Compra</a>
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
                    <a href="https://www.samsung.com/latin/sustainability/accessibility/overview/" target="_blank">Ayuda para accesibilidad</a>
                    <a href="https://www.samsung.com/pe/privacy/" target="_blank">Privacidad</a>
                    <a href="https://www.samsung.com/pe/info/legal/" target="_blank">Legal</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;