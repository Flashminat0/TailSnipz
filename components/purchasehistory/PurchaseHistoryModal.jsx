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
                                Product &nbsp;
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : &nbsp; {item.product}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Price &nbsp;
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : &nbsp; {item.price}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                User &nbsp;
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : &nbsp; {item.user}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                               Date &nbsp;
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : &nbsp; {item.date}
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