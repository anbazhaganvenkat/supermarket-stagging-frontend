import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import AddButton from "../../components/AddButton";
import PageSearch from "../../components/PageSearch";



class Inventory extends Component {
  constructor(props) {
    super(props);
  }
  // Search playbook
  _handleInputChange = e => {
    console.log(e.target.value);
  };

  render() {
    const data = [{
      OrderNumber:'1',
      shopcode:'235',
      status:'Available ',
      qunatity:'1',
      price:'200',
      itemcode:'300'
    },{
      OrderNumber:'2',
      name: 'Ahana',
      age: 'Mega Mart',
      itemcode:'967',
      status:'Available',
      qunatity:'6',
      price:'600'
    },{
      OrderNumber:'3',
      name: 'Peter',
      age: 'Mega More Mart',
      itemcode:'890',
      status:'Available',
      qunatity:'6',
      price:'260'

    },{
      OrderNumber:'4',
      name: 'Virat',
      age: 'D-Mart',
      itemcode:'455',
      status:'Available',
      qunatity:'8',
      price:'290'
    },{
      OrderNumber:'5',
      name: 'Rohit',
      age: 'Murugan Shop',
      itemcode:'800',
      status:'Available',
      qunatity:'10',
      price:'204'
    },{
      OrderNumber:'6',
      name: 'Dhoni',
      age: 'Anu Shop',
      itemcode:'803',
      status:'Available',
      qunatity:'13',
      price:'700',
      itemname:'Biscuit'
    },{
      OrderNumber:'7',
      name: 'Peter',
      age: 'Mega More Mart',
      itemcode:'12',
      status:'Available',
      qunatity:'14',
      price:'250',
      itemname:'Colgate'
    },{
      OrderNumber:'8',
      name: 'Virat',
      age: 'D-Mart',
      itemcode:'13',
      status:'Available',
      qunatity:'15',
      price:'80',
      itemname:'Horlicks'
    },{
      OrderNumber:'9',
      name: 'Rohit',
      age: 'Murugan Shop',
      itemcode:'14',
      status:'Available',
      qunatity:'25',
      price:'60',
      itemname:'SHAMPOO'
    },{
      OrderNumber:'10',
      name: 'Dhoni',
      age: 'Anu Shop',
      itemcode:'18',
      status:'Available',
      qunatity:'95',
      price:'876',
      itemname:'SOAP'
    }]
    const columns = [
      {

        Header: 'Item No',
        accessor: 'OrderNumber',
      },
      {

        Header: 'Item Code',
        accessor: 'itemcode',
      },
      {
        Header: 'Item Name',
        accessor: 'itemname'
      },

      {
        Header: 'Price',
        accessor: 'price'
      },
      {
        Header: 'Qunatity',
        accessor: 'qunatity'
      }
      ,
      {
        Header: 'Stock',
        accessor: 'status'
      }
      ]


    return (
      <div className="animated fadeIn">
        <div className="col-md-4">
          <PageSearch
            classnames="page-search text-right"
            placeholder={"Search inventory..."}
            onChange={this._handleInputChange.bind(this)}
          />
        </div>
        <div className="text-right">
          <AddButton
            type="button"
            className="mb-3"
            onClick={event =>  window.location.href='/add'}
          />
        </div>
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

export default Inventory;
