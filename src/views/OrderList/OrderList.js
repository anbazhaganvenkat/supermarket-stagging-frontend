import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class OrderList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = [{
      name: 'Ayaan',
      age: 26
    },{
      name: 'Ahana',
      age: 22
    },{
      name: 'Peter',
      age: 40
    },{
      name: 'Virat',
      age: 30
    },{
      name: 'Rohit',
      age: 32
    },{
      name: 'Dhoni',
      age: 37
    }]
    const columns = [{
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'Age',
      accessor: 'age'
    }]

    return (
      <div className="animated fadeIn">
       <p>Order List</p>
        <div className={"bg-white"}>
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize = {5}
          />
        </div>
      </div>
    );
  }
}

export default OrderList;
