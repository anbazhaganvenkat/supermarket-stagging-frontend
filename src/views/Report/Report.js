import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const data = [{
      sno:'1',
      name: 'Ayaan',
      empid:'235',
    },{
      sno:'2',
      name: 'Ahana',
      empid:'967',
    },{
      sno:'3',
      name: 'Peter',
      empid:'890',
    },{
      sno:'4',
      name: 'Virat',
      empid:'455',
    },{
      sno:'5',
      name: 'Rohit',
      empid:'800',
    },{
      sno:'6',
      name: 'Dhoni',
      empid:'803',
    },{
      sno:'7',
      name: 'Peter',
      empid:'12',
    },{
      sno:'8',
      name: 'Virat',
      empid:'13',
    },{
      sno:'9',
      name: 'Rohit',
      empid:'14',
    },{
      sno:'10',
      name: 'Dhoni',
      empid:'18',
    }]
    const columns = [
      {

        Header: 'S No',
        accessor: 'sno',
      },
      {

        Header: 'Emp ID',
        accessor: 'empid'
      },
      {
        Header: 'Sales Excutive Name',
        accessor: 'name'
      },
      {
        Header: 'Action',
        accessor: 'VIEW'
      },
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

export default Report;
