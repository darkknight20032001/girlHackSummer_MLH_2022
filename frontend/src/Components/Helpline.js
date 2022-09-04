import * as React from "react";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {useNavigate} from 'react-router-dom'
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


export default function Helpline() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  let [myComments, setMyComments] = React.useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const getComments = async () => {
      const getData = await fetch("http://127.0.0.1:5000/complaintInfoDisplay");
      const data = await getData.json();
      setMyComments(data.complaintArray.reverse());
    };

    getComments();
  }, []);


  return (
    <Paper
      sx={{ width: "80%" }}
      style={{
        margin: "3% 11%",
        border: "2px solid grey",
        boxShadow: "0px 10px 0px grey",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">DATE</TableCell>
              <TableCell align="center">DETAILS</TableCell>
              <TableCell align="center">STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myComments.length > 0 &&
              myComments.map((list) => {
                return (
                  <TableRow key={list._id}>
                    <TableCell align="center">{list.dateComplaint}</TableCell>
                    <TableCell align="center">{list.complaint}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit" style={{margin: '15px auto'}} onClick={(e)=>{e.preventDefault();
      navigate('/mainPage')}}>
          Go Back
        </button>
       </Paper>
  );
}
