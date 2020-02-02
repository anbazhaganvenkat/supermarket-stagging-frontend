import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class CollectionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    const data = [{
      OrderNumber:'1',
      name: 'Ayaan',
      shopname: 'D-Mart',
      shopcode:'235',
      paymentway:'Bank',
      date:'02-02-2020'
    },{
      OrderNumber:'2',
      name: 'Ahana',
      shopname: 'Mega Mart',
      shopcode:'967',
      paymentway:'Bank',
      date:'02-02-2020'
    },{
      OrderNumber:'3',
      name: 'Peter',
      shopname: 'Mega More Mart',
      shopcode:'890',
      paymentway:'Cash',
      cashamount:'800',
      date:'02-02-2020'
    },{
      OrderNumber:'4',
      name: 'Virat',
      shopname: 'D-Mart',
      shopcode:'455',
      paymentway:'Bank',
      date:'02-02-2020'
    },{
      OrderNumber:'5',
      name: 'Rohit',
      shopname: 'Murugan Shop',
      shopcode:'800',
      paymentway:'Bank',
      date:'02-02-2020'
    },{
      OrderNumber:'6',
      name: 'Dhoni',
      shopname: 'Anu Shop',
      shopcode:'803',
      paymentway:'Cash',
      date:'02-02-2020'
    },{
      OrderNumber:'7',
      name: 'Peter',
      shopname: 'Mega More Mart',
      shopcode:'12',
      paymentway:'Cash',
      cashamount:'800',
      date:'26-01-2020'
    },{
      OrderNumber:'8',
      name: 'Virat',
      shopname: 'D-Mart',
      shopcode:'13',
      paymentway:'Bank',
      date:'26-01-2020'
    },{
      OrderNumber:'9',
      name: 'Rohit',
      shopname: 'Murugan Shop',
      shopcode:'14',
      paymentway:'Cash',
      cashamount:'300',
      date:'26-01-2020'
    },{
      OrderNumber:'10',
      name: 'Dhoni',
      shopname: 'Anu Shop',
      shopcode:'18',
      paymentway:'Bank',
      bankamount:'1000',
      cashamount:'Null',
      total:'1000',
      date:'26-01-2020'
    }]
    const columns = [
      {

        Header: 'Shop code',
        accessor: 'OrderNumber',
        headerClassName: 'text-align:center'
      },
      {

        Header: 'Date',
        accessor: 'date'
      },
      {

        Header: 'Shop Name',
        accessor: 'shopname',
        headerClassName: 'text-align:center'
      },
      {
        Header: 'Sales Excutive Name',
        accessor: 'name'
      },

      {
        Header: 'Payment Way',
        accessor: 'paymentway'
      }
      ,

      {
        Header: 'Bank(Amount)',
        accessor: 'bankamount'
      }
      ,

      {
        Header: 'Cash(Amount)',
        accessor: 'cashamount'
      },
      {
        Header: 'Total',
        accessor: 'total'
      }
      ]

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

export default CollectionList;
