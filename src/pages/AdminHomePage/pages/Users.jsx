import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {  Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 190,
  },
  {
    field: 'userName',
    headerName: 'User name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 190,
    renderCell:(params)=>{
      return(
        <div>
          <Button variant="contained" className='userListEdit'>Edit</Button>
          <Button variant="outlined"className='userListDelete'>Delete</Button>
        </div>
      )
    }
  },
  {
    field: 'note',
    headerName: 'Note',
    width: 170,
    renderCell:(params)=>{
      return(
        <div>
        <EditIcon/>
        </div>
      )
  }},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: '35@gmail.com',status:'active' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: '35@gmail.com',status:'active' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: '35@gmail.com',status:'active' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: '35@gmail.com' ,status:'active'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: '35@gmail.com',status:'inactive' },
  { id: 6, lastName: 'Melisandre', firstName: null, email: '35@gmail.com',status:'active' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: '35@gmail.com',status:'active' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: '35@gmail.com' ,status:'active'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: '35@gmail.com' ,status:'inactive'},
];

export default function Users() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography>List of Users</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
