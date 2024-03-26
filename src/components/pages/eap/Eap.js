import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";

import CustomLoader from "../../common/CustomLoader";

const Eap = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setIsLoading(false);
        } , 1100); 
    }, []);

    return (
        <>
            {isLoading && <CustomLoader />}

            
            <div class="calendly-inline-widget" data-url="https://calendly.com/karbiswa098/30min" style="min-width:320px;height:700px;"></div>
             
        </>
    );
};

export default Eap;
