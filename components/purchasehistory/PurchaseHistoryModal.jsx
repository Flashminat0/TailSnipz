import React from 'react'
import Modallayout from '../layouts/modallayout'
import moment from "moment";

const PurchaseHistoryModal = ({title, item , isOpen , setIsOpen}) => {

    console.log(title)
    
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
                                : &nbsp; {item.productName}
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
                        {
                            title == "buyer" ? <>
                             <td>
                                <p className="my-1 text-xs text-gray-500">
                                    Seller &nbsp;
                                </p>
                                </td>
                                <td>
                                    <p className="my-1 text-xs text-gray-500">
                                        : &nbsp; {item.buyerName}
                                    </p>
                            </td>
                            </>
                            :
                            <>
                                <td>
                                    <p className="my-1 text-xs text-gray-500">
                                        Buyer &nbsp;
                                    </p>
                                </td>
                                <td>
                                    <p className="my-1 text-xs text-gray-500">
                                        : &nbsp; {item.sellerName}
                                    </p>
                                </td>
                            </>
                        }
                       
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                               Date &nbsp;
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : &nbsp; {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}                                
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