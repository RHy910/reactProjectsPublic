import React from "react";
import title from './assets/images/popuptitle.webp'

const Header = ()=>{
    return(
        <div class="image-container">
            <img src={title} alt="POPUPS AND FARMERS MARKETS">
                <div class="overlay-text">
                    POPUPS AND FARMERS MARKETS
                </div>
            </img>
        </div>

    )
}

export default Header;