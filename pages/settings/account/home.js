import React from 'react'
import EmailAndPhoneNumber from '../../../components/settings/account/EmailAndPhoneNumber'
import NameGenderAndBirthday from '../../../components/settings/account/NameGenderAndBirthday'

const Home = () => {
  return (
    <div className='p-4'>
        <EmailAndPhoneNumber />
        
        <div className='pt-10'>
            <NameGenderAndBirthday />
        </div>
        
    </div>
  )
}

export default Home