import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class StoreList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = [{
      OrderNumber:'1',
      storename: 'D-Mart',
      balanceamount:'235',
      beatname:'Kuttipuram'
    },{
      OrderNumber:'2',
      storename: 'Mega Mart',
      balanceamount:'967',
      beatname:'Kuttipuram'
    },{
      OrderNumber:'3',
      storename: 'Mega More Mart',
      balanceamount:'890',
      beatname:'Valanchery'
    },{
      OrderNumber:'4',
      storename: 'D-Mart',
      balanceamount:'455',
      beatname:'Kuttipuram'
    },{
      OrderNumber:'5',
      storename: 'Murugan Shop',
      balanceamount:'800',
      beatname:'Kuttipuram'
    },{
      OrderNumber:'6',
      storename: 'Anu Shop',
      balanceamount:'803',
      beatname:'Valanchery'
    },{
      OrderNumber:'7',
      storename: 'Mega More Mart',
      balanceamount:'12',
      beatname:'Valanchery'
    },{
      OrderNumber:'8',
      storename: 'D-Mart',
      balanceamount:'13',
      beatname:'Kuttipuram'
    },{
      OrderNumber:'9',
      storename: 'Murugan Shop',
      balanceamount:'14',
      beatname:'Kuttipuram'
    },{
      OrderNumber:'10',
      storename: 'Anu Shop',
      balanceamount:'18',
      beatname:'Valanchery'
    }]
    const columns = [
      {

        Header: 'Store Code',
        accessor: 'OrderNumber',
      },
      {

        Header: 'Store Name',
        accessor: 'storename',
      },{
        Header: 'Beat Name',
        accessor: 'beatname'
      },
      {
        Header: 'Balance Amount',
        accessor: 'balanceamount'
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

export default StoreList;
