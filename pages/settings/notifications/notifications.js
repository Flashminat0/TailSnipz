import React from 'react'
import EmailNotifications from '../../../components/settings/notifications/EmailNotifications'
import EnableEmailNotifications from '../../../components/settings/notifications/EnableEmailNotifications'
import HighPriorityNotifications from '../../../components/settings/notifications/HighPriorityNotifications'
import OtherNotifications from '../../../components/settings/notifications/OtherNotifications'

const NotificationsHome = () => {
  return (
    <div className='grid gap-y-4 p-4'>
        <EnableEmailNotifications />
        <EmailNotifications />
        <HighPriorityNotifications />
        <OtherNotifications />
    </div>
  )
}

export default NotificationsHome