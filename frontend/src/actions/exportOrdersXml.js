//import React from 'react'
//import * as FileSaver from 'file-saver';
//import * as XLSX from 'xlsx';
//
//export const ExportCSV = ({ csvData, fileName }) => {
//    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//    const fileExtension = '.xlsx';
//    const exportToCSV = (csvData, fileName) => {
//        const ws = XLSX.utils.json_to_sheet(csvData);
//        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
//        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//        const data = new Blob([excelBuffer], { type: fileType });
//        FileSaver.saveAs(data, fileName + fileExtension);
//    }
//    return (
//
//        <button className='my-3' onClick={(e) => exportToCSV(csvData, fileName)}>
//            <i className='fas fa-plus'></i>Экспорт заказов
//        </button>
//    )
//}
//    order._id,
//    order.user && order.user.name,
//    order.createdAt.substring(0, 10),
//    order.totalPrice,
//{
//    orders.map((order) => (
//        <tr key={order._id}>
//            <td>{order._id}</td>
//            <td>{order.user && order.user.name}</td>
//            <td>{order.createdAt.substring(0, 10)}</td>
//            <td>{order.totalPrice} Руб.</td>
//        </tr>
//    ))
//}
//
//
//<ExportCSV csvData={orderxml} fileName={fileName}/>
//import ReactToExcel from 'react-html-to-excel'