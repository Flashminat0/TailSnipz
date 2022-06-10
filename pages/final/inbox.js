import React from 'react'
import InboxWrapper from '../../components/layouts/InboxWrapper'
import MessageList from '../../components/inbox/MessageList'
import DesktopView from '../../components/header/DesktopView'

const Inbox = () => {
  return (
    <InboxWrapper>
        <MessageList />
    </InboxWrapper>
   
  )
}

export default Inbox
