import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class OrderList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = [{
      OrderNumber:'1',
      name: 'Ayaan',
      age: 'D-Mart',
      shopcode:'235',
      status:'Pending'
    },{
      OrderNumber:'2',
      name: 'Ahana',
      age: 'Mega Mart',
      shopcode:'967',
      status:'Pending'
    },{
      OrderNumber:'3',
      name: 'Peter',
      age: 'Mega More Mart',
      shopcode:'890',
      status:'Delivered'
    },{
      OrderNumber:'4',
      name: 'Virat',
      age: 'D-Mart',
      shopcode:'455',
      status:'Pending'
    },{
      OrderNumber:'5',
      name: 'Rohit',
      age: 'Murugan Shop',
      shopcode:'800',
      status:'Pending'
    },{
      OrderNumber:'6',
      name: 'Dhoni',
      age: 'Anu Shop',
      shopcode:'803',
      status:'Delivered'
    },{
      OrderNumber:'7',
      name: 'Peter',
      age: 'Mega More Mart',
      shopcode:'12',
      status:'Delivered'
    },{
      OrderNumber:'8',
      name: 'Virat',
      age: 'D-Mart',
      shopcode:'13',
      status:'Pending'
    },{
      OrderNumber:'9',
      name: 'Rohit',
      age: 'Murugan Shop',
      shopcode:'14',
      status:'Pending'
    },{
      OrderNumber:'10',
      name: 'Dhoni',
      age: 'Anu Shop',
      shopcode:'18',
      status:'Delivered'
    }]
    const columns = [
      {

        Header: 'Order Number',
        accessor: 'OrderNumber',
        headerClassName: 'text-align:center'
      },
      {

      Header: 'Sales Excutive Name',
      accessor: 'name',
        headerClassName: 'text-align:center'
    },{
      Header: 'Shop Name',
      accessor: 'age'
    },
      {
        Header: 'Shop Code',
        accessor: 'shopcode'
      },

      {
        Header: 'Status',
        accessor: 'status'
      }]


    return (
      <div className="animated fadeIn">
        <div className={"bg-white"}>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize = {10}
          />
        </div>
      </div>
    );
  }
}

export default OrderList;
