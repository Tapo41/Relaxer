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
                
            <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }}>
                <InlineWidget url="https://calendly.com/karbiswa098/30min" />
            </div>
        </>
    );
};

export default Eap;
