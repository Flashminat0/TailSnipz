import React, {useEffect, useState} from 'react';

const Ordertableseller = ({data, setData, setSelectedRows}) => {
    const [allChecked, setAllChecked] = useState(true);

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
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Order ID / Buyer ID
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Order Date
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Product Name / Order Amount
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Payment Status
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Order Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Action</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.length > 0 ? <>
                    {data.map((order) => (
                        <tr
                            className={`${data.indexOf(order) % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            key={order.orderId}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <input
                                    onChange={() => {
                                        setData(data.map((item) => {
                                            if (item.orderId === order.orderId) {
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
                            <td className="px-6 pl-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div
                                            className="text-sm font-medium text-gray-900">{order.orderId.length > 20 ? order.orderId.slice(0, 20) + '...' : order.orderId}</div>
                                        <div className="text-xs text-gray-500">{order.buyerId}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{order.createdAt}</div>
                            </td>
                            <td className="px-6 pl-2 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div
                                            className="inline-flex mr-3 text-sm font-medium text-gray-900">{order.product}</div>
                                        <div
                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-500">{order.amount}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {order.paymentStatus === "Paid" ? <>
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </> : <>
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Unpaid</span>
                                </>}

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
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
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                                    {order.orderStatus === "Pending" || order.orderStatus === "On Process" ? <>
                                                        <button
                                                            type="button"
                                                            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </> : <></>}
                                                    <button
                                                        type="button"
                                                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                                    >
                                                      View Order
                                                    </button>
                                                </span>
                            </td>
                        </tr>
                    ))}
                </> : <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                                            No results found. Please refine your search.
                                        </span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </>}
                </tbody>
            </table>
        </>
    );
};

export default Ordertableseller;