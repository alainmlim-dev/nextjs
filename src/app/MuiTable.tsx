import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function MuiTable({ rows }: any) {
  return (
    <TableContainer component={Paper} sx={{ mt: 6 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>E-mail</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.length === 0 ?
            <>
              <TableRow>
                 <TableCell colSpan={4}>No data found</TableCell>
              </TableRow>
            </>
            :
            <>
              {rows.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.website}</TableCell>
                </TableRow>
              ))}
            </>
          }



        </TableBody>
      </Table>
    </TableContainer>
  );
}
