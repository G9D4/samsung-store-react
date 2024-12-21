
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../../styles/styles.css';



function AppLayout(){
    return(
        <body>
            <Header />
            <Outlet />
            <Footer />
        </body>
    )
}

export default AppLayout;