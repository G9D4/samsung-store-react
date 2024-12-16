
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faYoutubeSquare } from "@fortawesome/fontawesome-free-brands";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";


const StyleFooter = styled.div`
    border-top: 1px solid #757575;
    width: 100%;
    a {
        color: #000000;
        text-decoration: none;
    }
    a:hover {
        color: #006BB4;
        text-decoration: underline;
    }
`
const StyleFooterLinks = styled.div`
    display: flex;
    gap: 60px;
    justify-content: center;
    padding: 40px 0;
`
const StyleFooterLinksColumns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 
`

const StyleFooterLinksRedes = styled.span`
    display: flex;
    gap: 16px;
`

function Footer(){
    return(
        <StyleFooter>
        <StyleFooterLinks>
            <StyleFooterLinksColumns>
                <h4>Otras secciones</h4>
                <a href="/nosotros">Conócenos</a>
            </StyleFooterLinksColumns>
            <StyleFooterLinksColumns>
                <h4>¿Necesitas soporte?</h4>
                <a href="/faqs">Soporte técnico</a>
                <a href="/condiciones-compra">Condiciones de Compra</a>
            </StyleFooterLinksColumns>
            <StyleFooterLinksColumns>
                <h4>Redes sociales</h4>
                <StyleFooterLinksRedes>
                    <a href="https://www.linkedin.com/company/samsunglatin/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.youtube.com/user/SamsungLatin" target="_blank">
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                    </a>
                    <a href="https://x.com/SamsungLatin/" target="_blank">
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                    <a href="https://www.facebook.com/SamsungLatin" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.facebook.com/SamsungLatin" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    
                </StyleFooterLinksRedes>
            </StyleFooterLinksColumns>
        </StyleFooterLinks>
        </StyleFooter>
    )
}

export default Footer;