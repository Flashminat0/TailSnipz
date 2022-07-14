import React from 'react'
import Modallayout from '../layouts/modallayout'

const PurchaseHistoryModal = ({item , isOpen , setIsOpen}) => {
    
  return (
    <div>
        <Modallayout  modalOpenState={isOpen} setModalOpenState={setIsOpen} modalTopic={"Purchase history"}>
            <div className="my-4">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Product
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {item.product}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Price
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {item.price}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                User
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {item.user}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                               Date
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {item.date}
                            </p>
                        </td>
                    </tr>
                   
                    </tbody>
                </table>

            </div>
            
        </Modallayout>
    </div>
  )
}

export default PurchaseHistoryModal