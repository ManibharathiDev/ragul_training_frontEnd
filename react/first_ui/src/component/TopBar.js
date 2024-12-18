import React from 'react';
import mylogo from './../image/logo.png';
const TopBar = () =>{
    return(
        <>
            <div className="myTopBar">
                <img src={mylogo} width="100px"/>
            </div>
        </>
    );
};
export default TopBar;