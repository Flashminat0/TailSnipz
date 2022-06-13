import React from 'react';
import ProfilePageWrapper from "../../components/layouts/ProfilePageWrapper";
import ProfileBio from "../../components/member/ProfileBio";
import FooterSection from "../../components/footer/FooterSection";
import BasicPageWrapper from "../../components/layouts/BasicPageWrapper";

const Profile = () => {
    return (
        <BasicPageWrapper>
            <ProfilePageWrapper>
                <ProfileBio/>
                <FooterSection/>
            </ProfilePageWrapper>
        </BasicPageWrapper>
    );
};

export default Profile;