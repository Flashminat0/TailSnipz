import React from 'react';
import {useRouter} from "next/router";
import Ordermobiletablepage from "../components/ordertable/ordertableseller/ordermobiletablepage";

const About = () => {
    const router = useRouter();

    return (
        <div>
            <Ordermobiletablepage/>
        </div>
    );
};

export default About;
