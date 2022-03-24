import React from "react";
import Header from '../Header/index';
// import Footer from '../Footer/footer';


function Layout({children}){
    return(
        <>
            <Header/>
            {children}
            {/* <Footer/> */}
        </>
    )
}

export default Layout;