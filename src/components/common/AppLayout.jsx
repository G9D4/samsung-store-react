
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../../styles/styles.css';



function AppLayout(){
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout;