import { forwardRef } from 'react';
import React from 'react';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import { AddBox } from "@material-ui/icons";
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Check from '@material-ui/icons/Check';

const tableIcons = {
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'ID', field:'id'},
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Department', field: 'dept' },
      { title: 'E-mail ID', field: 'mail' },
      { title: 'Hire Year', field: 'hireyear', type: 'numeric' },
      { title: 'Phone Number', field: 'mobile', type: 'numeric' }
      
     
    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    ],
    data: [
      { id: 'ra161', name: 'Mehmet', surname: 'Baran', hireyear: 2020, dept: 'IT',mail: 'mailme@mail.com',mobile: '960010121' },
      {
        id: 'ra162'  ,
        name: 'Zerya Betül',
        surname: 'Baran',
        hireyear: 2017,
        dept: 'IT',
        mobile: '909090909',
        mail: 'mail@mail.com'

      },
    ],
  });
//   const rowEvents = {
//       onRowClick: (data) => {
//           console.log(data)
//       }
//   }

  return (
    <MaterialTable
      
      icons={tableIcons}
      title="Employee Details"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
        // onRowDelete: (oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
      }}
    />
  );
}
