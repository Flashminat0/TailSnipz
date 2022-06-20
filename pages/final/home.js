import React from 'react';
import BasicPageWrapper from "../../components/layouts/BasicPageWrapper";
import CTA from "../../components/home/CTA";
import PopularItems from "../../components/item/PopularItems";
import ShopByBrand from "../../components/home/ShopByBrand";
import SuggestedSearches from "../../components/home/SuggestedSearches";
import NewsFeedItems from "../../components/item/NewsFeedItems";
import ClosetSpotlightItems from "../../components/item/ClosetSpotlightItems";
import CommonItems from "../../components/item/CommonItems";
import FooterSection from "../../components/footer/FooterSection";

const Home = () => {
    return (
        <BasicPageWrapper>
            <CTA/>
            <PopularItems/>
            <ShopByBrand/>
            <SuggestedSearches/>
            <NewsFeedItems/>
            <ClosetSpotlightItems/>
            <CommonItems/>
            <FooterSection/>
        </BasicPageWrapper>
    );
};

export default Home;