import React, {useEffect, useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/solid";

const Ordermobiletableseller = ({data, setData, setSelectedRows}) => {
    const [allChecked, setAllChecked] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        setAllChecked(data.every(item => item.isChecked));
    }, [data])

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-100">
                <tr>
                    <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input
                            onChange={(e) => {
                                setAllChecked(!allChecked);
                                setData(data.map(item => {
                                    return {...item, isChecked: !allChecked}
                                }))
                                if (allChecked) {
                                    setSelectedRows([])
                                } else if (!allChecked) {
                                    setSelectedRows(data);
                                }
                            }}
                            checked={allChecked}
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                    </th>
                    <th
                        scope="col"
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Order ID
                    </th>
                    <th
                        scope="col"
                        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Order Status
                    </th>
                    <th scope="col" className="relative px-5 py-3">
                        <span className="sr-only">Action</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.length > 0 ? <>
                    {data.map((order) => (
                        <tr
                            className={`${data.indexOf(order) % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            key={order.id}>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                <input
                                    onChange={() => {
                                        setData(data.map((item) => {
                                            if (item.id === order.id) {
                                                item.isChecked = !item.isChecked;
                                            }
                                            return item;
                                        }));
                                        setSelectedRows(data.filter((item) => item.isChecked));
                                    }}
                                    checked={order.isChecked}
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                                />
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                                <div
                                    className="text-sm text-gray-900">{order.orderId.length > 10 ? order.orderId.slice(0, 10) + '...' : order.orderId}</div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {order.orderStatus === "Pending" && <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>}
                                    {order.orderStatus === "On Process" && <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">On Process</span>}
                                    {order.orderStatus === "On Delivery" && <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">On Delivery</span>}
                                    {order.orderStatus === "Delivered" && <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>}
                                    {order.orderStatus === "Cancelled by Seller" && <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled by Seller</span>}
                                    {order.orderStatus === "Cancelled by Customer" && <span
                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled by Customer</span>}
                                </div>
                            </td>
                            <td className="px-2 mr-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <span
                                        className="relative z-0 inline-flex bg-gray-100 hover:bg-gray-200 shadow-sm rounded-md">
                                        <ChevronRightIcon className={"w-5 h-5"}/>
                                    </span>
                            </td>

                        </tr>
                    ))}
                </> : <>
                    <td></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                                            No results found.
                                        </span>
                    </td>
                    <td></td>
                </>}
                </tbody>
            </table>
        </>
    );
};

export default Ordermobiletableseller;