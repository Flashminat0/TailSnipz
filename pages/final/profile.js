import React from 'react';
import ProfilePageWrapper from "../../components/layouts/ProfilePageWrapper";
import ProfileBio from "../../components/member/ProfileBio";
import FooterSection from "../../components/footer/FooterSection";

const Profile = () => {
    return (
        <ProfilePageWrapper>
            <ProfileBio/>
            <FooterSection/>
        </ProfilePageWrapper>
    );
};

export default Profile;