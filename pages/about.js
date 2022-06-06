import React from 'react';
import {useRouter} from "next/router";
import CTA from "../components/home/CTA";

const About = () => {
    const router = useRouter();

    return (
        <div>
            <CTA/>
        </div>
    );
};

export default About;
