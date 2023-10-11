import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Typography,
  Avatar,
  Stack,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
const Details = () => {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const events = axios
      .get("http://localhost:4000/api/get-events")
      .then((response) => {
        console.log(response.data);
        setinfo(response.data?.data?.items);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const [currentPage, setcurrentPage] = useState(1);
  const eventsPerPage = 7;

  // Pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = info.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (e, value) => {
    e.preventDefault();
    setcurrentPage(value);
  };

  return (
    <TableContainer component={Paper}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          variant="h4"
          textAlign={"center"}
          m={2}
          textTransform={"uppercase"}
        >
          Details|
          <span style={{ fontSize: "25px" }}> {info[0]?.end?.timeZone}</span>
        </Typography>
        <Tooltip title="Profile">
        <Link to={'/profile'}>  <Avatar sx={{ margin: 2 }}>H</Avatar></Link>
        </Tooltip>
      </Stack>
     {info.length>0? <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">End Time</TableCell>
            <TableCell align="center">Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentEvents.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                {new Date(row.start.dateTime).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {new Date(row.end.dateTime).toLocaleString()}
              </TableCell>
              <TableCell align="center">{row.summary}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>:<div className="loader"></div> }
      {info.length > 7 && (
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(info.length / eventsPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          sx={{ display: "flex", justifyContent: "center", mt: 4 }}
        />
      )}
    </TableContainer>
  );
};

export default Details;
