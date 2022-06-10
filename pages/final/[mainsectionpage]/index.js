import React from 'react';
import ProductItemsFilterSection from "../../../components/filter/ProductItemsFilterSection";
import FooterSection from "../../../components/footer/FooterSection";
import BasicPageWrapper from "../../../components/layouts/BasicPageWrapper";
import DesktopView from "../../../components/header/DesktopView";

const SectionPage = () => {


    return (
        <BasicPageWrapper>
            <DesktopView/>
            <ProductItemsFilterSection/>
            <FooterSection/>
        </BasicPageWrapper>
    );
};

export default SectionPage;