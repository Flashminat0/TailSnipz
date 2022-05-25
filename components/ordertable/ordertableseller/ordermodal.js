import React from 'react';
import Modallayout from "../../layouts/modallayout";

const Ordermodal = ({order , isOpen , setIsOpen}) => {
    return (
        <Modallayout  modalOpenState={isOpen} setModalOpenState={setIsOpen} modalTopic={"Order Details"}>
            <div className="my-4">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Order id
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.orderId}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Buyer id
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.buyerId}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Order Date
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.createdAt}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Product Name
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.product}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Order Amount
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.amount}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Payment Status
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.paymentStatus}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                Order Status
                            </p>
                        </td>
                        <td>
                            <p className="my-1 text-xs text-gray-500">
                                : {order.orderStatus}
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <span
                className="relative z-0 shadow-sm rounded-md">
                                                {order.orderStatus === "Pending" || order.orderStatus === "On Process" ? <>
                                                    <button
                                                        onClick={() => {
                                                            cancelOrder(order.id)
                                                        }}
                                                        type="button"
                                                        className="-ml-px relative inline-flex items-center px-14 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                </> : <></>}
                <button
                    type="button"
                    className="-ml-px relative inline-flex items-center px-14 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                >
                                                    View Order
                                                </button>

                                            </span>
        </Modallayout>
    );
};

export default Ordermodal;