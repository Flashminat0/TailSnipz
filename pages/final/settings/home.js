import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    CalendarIcon,
    HomeIcon,
    MapIcon,
    MenuIcon,
    SearchCircleIcon,
    SpeakerphoneIcon,
    UserGroupIcon,
    XIcon,
  } from '@heroicons/react/outline'

import AccountHome from './account/account'
import NotificationHome from './notifications/notifications'
import PrivacySettingsHome from './privacysettings/privacysettings'
import ProfileHome from './profile/profile'
import SelectDiscountHome from './selectdiscount/selectdiscount'
import ShippingHome from './shipping/shipping'
import SettingsSideBarWrapper from '../../../components/layouts/SettingsSideBarWrapper'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Profile Details', href: '',component: <ProfileHome/>, icon: HomeIcon, current: false },
    { name: 'Account Settings', href: '/settings/account/home',component: <AccountHome/>,icon: HomeIcon, current: false },
    { name: 'Shipping', href: '#', component: <ShippingHome /> , icon: UserGroupIcon, current: false },
    { name: 'Select discount', href: '#', component: < SelectDiscountHome/> ,icon: SpeakerphoneIcon, current: false },
    { name: 'Notifications', href: '#',component: <NotificationHome />, icon: MapIcon, current: false },
    { name: 'Privacy Settings', href: '#',component: <PrivacySettingsHome />, icon: MapIcon, current: false },
]

const SettingsHome = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarElement, setSidebarElement] = useState(navigation[0].component)
    const [selectedItem, setSelectedItem] = useState(0)
    const [arrayElements, setArrayElements] = useState(navigation)

    return (
        <div className={'bg-gray-100'}>
            <SettingsSideBarWrapper
                arrayElements = {arrayElements}
                sidebarOpen = {sidebarOpen}
                sidebarElement = {sidebarElement}
                selectedItem = {selectedItem}
                setSidebarOpen = {setSidebarOpen}
                setSidebarElement = {setSidebarElement}
                setSelectedItem = {setSelectedItem}
            >
                {sidebarElement}
            </SettingsSideBarWrapper>
        </div>
      )
}

export default SettingsHome