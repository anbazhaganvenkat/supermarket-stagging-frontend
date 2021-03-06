import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import AddButton  from "../../../src/components/AddButton";



class SalesExctiveList extends Component {
  constructor(props) {
    super(props);
  }

  render() {



    const data = [{
      sno:'1',
      name: 'Ayaan',
      username: 'ayaan@gmail.com',
      city:'Banagalore',
      state:'12-2-2012',
      date:'02-02-2020'
    },{
      sno:'2',
      name: 'Ahana',
      username: 'ahana@gmail.com',
      city:'Banagalore',
      state:'22-12-2012',
      date:'02-02-2020'
    },{
      sno:'3',
      name: 'Peter',
      username: 'peter@gmail.com',
      city:'Chennai',
      state:'12-12-2012',
      status:'Active',
      date:'02-02-2020'
    },{
      sno:'4',
      name: 'Virat',
      username: 'virat@gmail.com',
      city:'Banagalore',
      state:'12-12-2012',
      date:'02-02-2020'
    },{
      sno:'5',
      name: 'Rohit',
      username: 'rohit@gmail.com',
      shopcode:'800',
      state:'12-12-2012',
      city:'Banagalore',
      date:'02-02-2020'
    },{
      sno:'6',
      name: 'Dhoni',
      username: 'dhoni@gmail.com',
      shopcode:'803',
      state:'12-12-2012',
      city:'Chennai',
      date:'02-02-2020'
    },{
      sno:'7',
      name: 'Peter',
      username: 'peter@gmail.com',
      city:'Chennai',
      state:'12-12-2012',
      status:'Active',
      date:'02-02-2020'
    },{
      sno:'8',
      name: 'Virat',
      username: 'virat@gmail.com',
      status:'Active',
      state:'12-12-2012',
      city:'Banagalore',
      date:'02-02-2020'
    },{
      sno:'9',
      name: 'Rohit',
      username: 'rohit@gmail.com',
      city:'Chennai',
      state:'12-12-2012',
      status:'Active',
      date:'02-02-2020'
    },{
      sno:'10',
      name: 'Dhoni',
      username: 'dhoni@gmail.com',
      city:'Banagalore',
      state:'12-12-2012',
      status:'In-Active',
      total:'1000',
      date:'02-02-2020'
    }]
    const columns = [
      {

        Header: 'Emp ID',
        accessor: 'sno',
      },
      {

        Header: 'Name',
        accessor: 'name',
      },
      {

        Header: 'User Name',
        accessor: 'username',
      },
      {
        Header: 'Address',
        accessor: 'address'
      },

      {
        Header: 'City',
        accessor: 'city'
      }
      ,

      {
        Header: 'Joining Date',
        accessor: 'state'
      }
      ,

      {
        Header: 'Status',
        accessor: 'status'
      }
    ]

    return (
      <div className="animated fadeIn">
        <div className="text-right">
          <AddButton
            type="button"
            className="mb-3"
            onClick={event =>  window.location.href='/add'}
            />
        </div>
        <div>
          <div className={"bg-white"}>
            <ReactTable
              data={data}
              columns={columns}
              defaultPageSize = {10}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default SalesExctiveList;
