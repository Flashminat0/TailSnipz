import React from 'react';
import ProductItemsFilterSection from "../../../components/filter/ProductItemsFilterSection";
import FooterSection from "../../../components/footer/FooterSection";
import BasicPageWrapper from "../../../components/layouts/BasicPageWrapper";

const SectionPage = () => {


    return (
        <BasicPageWrapper>
            <ProductItemsFilterSection/>
            <FooterSection/>
        </BasicPageWrapper>
    );
};

export default SectionPage;