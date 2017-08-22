import React from "react";

module.exports = class PageHeader extends React.Component
{
    render(){
        return (
            <li>
                <a href="/">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="http://google.com">GOOGLE</a>
            </li>
        );
    }
}