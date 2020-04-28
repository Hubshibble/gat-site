import React from "react";
import { Link } from "gatsby";

import Header  from "../components/header";
import Footer  from "../components/footer";

export default () => (
    <div>
        <Header />
        
        <div class="container">
    
            <p>Picture of the day:</p>
            <img src="https://source.unsplash.com/random/300x300" alt="" />
    
        </div>
    
        <Footer />
    </div>
)
