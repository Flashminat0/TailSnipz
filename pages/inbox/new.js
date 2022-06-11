import React from 'react'
import InboxWrapper from '../../components/layouts/InboxWrapper'
import SendNewMessage from '../../components/inbox/SendNewMessage'

const NewMessage = () => {
  return (
    <InboxWrapper>
        <SendNewMessage />
    </InboxWrapper>
  )
}

export default NewMessage