import React from "react";
import Header from '../Header/index';
import Main from "../Container";
import Footer from '../Footer/footer';


function Layout({children}){
    return(
        <>
            <Header/>
            <Main>
                {children}
            </Main>
            {/* <Footer/> */}
        </>
    )
}

export default Layout;