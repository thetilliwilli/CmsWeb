import React from "react";

import PageHeader from "./pageHeader.jsx";
import PageNavbar from "./pageNavbar.jsx";
import PageContent from "./pageContent.jsx";


module.exports = class MainView extends React.Component
{
    render(){
        return (
            <div>
                <PageHeader/>
                <PageNavbar/>
                <PageContent/>
            </div>
        );
    }
}