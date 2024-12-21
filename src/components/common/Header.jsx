import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faSearch } from '@fortawesome/fontawesome-free-solid'


export const StyledLink = styled(Link)`
   display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    border-radius: 24px;
    padding: 8px 12px;
    &:hover{
        background-color: black;
        color: white !important;
    }
    &:active{
        background-color: black;
        color: white !important;
    }
`;

const StyleHeader = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    background-color: #FFFFFF;
`
const StyleHeaderItem =styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 12px;
    `

const StyleImg = styled.img`
    height: 100%;
    width: 120px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    &.img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}
`

function Header(){
    return(
        <StyleHeader>
            <StyleHeaderItem>
                <Link to="/">
                    <StyleImg src="https://static.vecteezy.com/system/resources/thumbnails/014/018/566/small_2x/samsung-logo-on-transparent-background-free-vector.jpg"></StyleImg>
                </Link>
            </StyleHeaderItem>
            <div style={{flexDirection: "row",display:'flex'}}>
                <StyleHeaderItem>
                    <StyledLink to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </StyledLink>
                </StyleHeaderItem>
                <StyleHeaderItem>
                    <StyledLink to="/shoppingCart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </StyledLink>
                </StyleHeaderItem>
                <StyleHeaderItem>
                    <StyledLink to="/">
                        <FontAwesomeIcon icon={faSearch} />
                    </StyledLink>
                </StyleHeaderItem>
            </div>

        </StyleHeader>
    )
}

export default Header;