

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const StyleAppLayout = styled.div`
    height: 100vh;
    margin: 0;
`

function AppLayout(){
    return(
        <StyleAppLayout>
            <Header />
            <Outlet />
            <Footer />
        </StyleAppLayout>
    )
}

export default AppLayout;