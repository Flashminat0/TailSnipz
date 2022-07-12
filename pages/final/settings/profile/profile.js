import React from 'react'
import Name from "../../../../components/settings/profile/Name";
import Location from "../../../../components/settings/profile/Location";
import Language from "../../../../components/settings/profile/Language";
import SettingsHome from "../home";

const ProfileHome = () => {
  return (
      <SettingsHome>
          <div className='grid gap-y-4 p-4'>
              <Name />
              <Location />
              <Language />
          </div>
      </SettingsHome>
  )
}

export default ProfileHome