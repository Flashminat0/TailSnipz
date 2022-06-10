import React from 'react'
import DeliveryOptions from '../../../components/settings/shipping/DeliveryOptions'
import MyAddress from '../../../components/settings/shipping/MyAddress'

const ShippingHome = () => {
  return (
    <div className='grid gap-y-4 p-4'>
        <DeliveryOptions />
        <MyAddress />
    </div>
  )
}

export default ShippingHome