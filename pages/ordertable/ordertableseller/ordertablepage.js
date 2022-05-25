import React, {useState} from 'react';
import Tablelayout from "../../layouts/tablelayout";
import Ordertableseller from "./ordertableseller";

const orderStaticData = [{
    "orderId": "0e6eab6c-91c7-4f01-adef-2de1cb161c15",
    "order_desc": "TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01TEST 01",
    "product": "TEST 01",
    "order_price": "1000",
    "amount": 1,
    "paymentStatus": "UnPaid",
    "orderStatus": "Cancelled by Customer",
    "sellerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "buyerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "purchaseDate": "2022-04-28T13:57:29.000Z",
    "createdAt": "2022-04-28T13:57:29.000Z",
    "updatedAt": "2022-04-28T13:57:29.000Z"
}, {
    "orderId": "2d2a0d55-a42f-4028-9e10-c72ffd668f70",
    "order_desc": "a black t shirt that  is black ",
    "product": "Black T shirt",
    "order_price": "5.12",
    "amount": 1,
    "paymentStatus": "Paid",
    "orderStatus": "Pending",
    "sellerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "buyerId": "63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b",
    "purchaseDate": "2022-04-18T08:43:40.000Z",
    "createdAt": "2022-04-18T08:43:40.000Z",
    "updatedAt": "2022-04-18T08:43:40.000Z"
}, {
    "orderId": "368f8a49-dd0b-4d43-adfc-0a075808499e",
    "order_desc": "black t shirt",
    "product": "Black T shirt",
    "order_price": "211",
    "amount": 1,
    "paymentStatus": "UnPaid",
    "orderStatus": "Cancelled by Customer",
    "sellerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "buyerId": "63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b",
    "purchaseDate": "2022-04-26T11:02:11.000Z",
    "createdAt": "2022-04-26T11:02:11.000Z",
    "updatedAt": "2022-04-26T11:02:11.000Z"
}, {
    "orderId": "4d450ae1-4305-4624-bf9e-932ff14bc202",
    "order_desc": "a black t shirt that  is black ",
    "product": "Black T shirt",
    "order_price": "5.12",
    "amount": 1,
    "paymentStatus": "UnPaid",
    "orderStatus": "Cancelled by Customer",
    "sellerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "buyerId": "63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b",
    "purchaseDate": "2022-04-18T08:32:44.000Z",
    "createdAt": "2022-04-18T08:32:44.000Z",
    "updatedAt": "2022-04-18T08:32:44.000Z"
}, {
    "orderId": "8463fde9-a21b-4718-9eff-095ee0ce5739",
    "order_desc": "a black t shirt that  is black ",
    "product": "Black T shirt",
    "order_price": "5.12",
    "amount": 1,
    "paymentStatus": "UnPaid",
    "orderStatus": "Cancelled by Customer",
    "sellerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "buyerId": "63c9d7e4-5575-4d7e-bba8-edd84e7d7b2b",
    "purchaseDate": "2022-04-18T08:50:41.000Z",
    "createdAt": "2022-04-18T08:50:41.000Z",
    "updatedAt": "2022-04-18T08:50:41.000Z"
}, {
    "orderId": "eb38dda6-c9aa-4a46-92a0-062950994553",
    "order_desc": "black t shirt",
    "product": "Black T shirt",
    "order_price": "211",
    "amount": 1,
    "paymentStatus": "UnPaid",
    "orderStatus": "Cancelled by Customer",
    "sellerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "buyerId": "d11efd04-650d-4679-9458-6ce8e0f72d35",
    "purchaseDate": "2022-04-28T13:43:44.000Z",
    "createdAt": "2022-04-28T13:43:44.000Z",
    "updatedAt": "2022-04-28T13:43:44.000Z"
}]

const Ordertablepage = () => {
    const [results, setResults] = useState(orderStaticData);
    const [selectedRows, setSelectedRows] = useState(orderStaticData);

    return (
        <Tablelayout>
            <Ordertableseller data={results} setData={setResults} setSelectedRows={setSelectedRows}/>
        </Tablelayout>
    );
};

export default Ordertablepage;