import React from "react";
import fruit from './assets/images/fruit.png'

const Header = ()=>{
    return(
        <>
            <img src={fruit} style={{
                height:"200px"}}></img>
            <div class="header-text-container">
                <div class="header-text">
                    <h1>Farmers markets and pop ups</h1>
                </div>
            </div>
        </>
    )
}

export default Header;