import React from 'react';
import {useRouter} from "next/router";
import Closetspotlightitems from "../components/closet-spotlight/closetspotlightitems";

const About = () => {
    const router = useRouter();

    return (
        <div>
            <Closetspotlightitems/>
        </div>
    );
};

export default About;
