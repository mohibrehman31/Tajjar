import "./index.css";
import Table from "@mui/joy/Table";
import { useState } from "react";

import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

export default function AddBids() {
  const rowsPerPage = 5;
  const [page, setPage] = useState(0);

  const [dateFilter, setDateFilter] = useState<string[]>(["", ""]);

  const columns = [
    "Posting Id",
    "User Name",
    "Cost",
    "Bidding Status",
    "Bid Type",
    "Added Dete",
    "Details",
  ];

  function createData(
    postingId: string,
    userName: string,
    cost: string,
    status: string,
    type: string,
    date: string,
    details: string
  ) {
    return { postingId, userName, cost, status, type, date, details };
  }

  const rows = [
    createData("101", "Sammam", "600", "accepted", "xyz", "10/12/23", "none"),
    createData("101", "Sammam", "600", "accepted", "xyz", "10/12/23", "none"),
    createData("101", "Sammam", "600", "accepted", "xyz", "10/12/23", "none"),
    createData("101", "Sammam", "600", "accepted", "xyz", "10/12/23", "none"),
    createData("101", "Sammam", "600", "accepted", "xyz", "10/12/23", "none"),
  ];

  const handleChangeRowsPerPage = (event: any) => {
    const selectedValue = Number(event.target.value);
    console.log("Selected value:", selectedValue);
    setPage(0);
  };

  return (
    <div className="add-bids-page">
      <div className="add-bids-body">
        <div className="add-bids-options-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              slots={{ field: SingleInputDateRangeField }}
              onChange={(e: any) =>
                setDateFilter([
                  e[0].$D + "/" + (e[0].$M + 1) + "/" + e[0].$y,
                  e[1] !== null
                    ? e[1].$D + "/" + (e[1].$M + 1) + "/" + e[1].$y
                    : "",
                ])
              }
            />
          </LocalizationProvider>
        </div>

        <Paper sx={{ width: "80%", overflow: "hidden" }}>
          <TableContainer
            sx={{ maxHeight: 400, boxShadow: "50px 10px #888888" }}
            className="tfoot"
            style={{ boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.35)" }}
          >
            <Table
              stickyHeader
              aria-label="sticky table"
              className="tfoot"
              size="md"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      // align="start"
                      style={{ width: "100%" }}
                    >
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any, rowIndex: number) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={rowIndex}
                      >
                        {Object.keys(row).map((column, colIndex: number) => {
                          return (
                            <TableCell key={colIndex}>{row[column]}</TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={() => console.log("")}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="css-pilb01-JoyTable-root"
          />
        </Paper>
      </div>
    </div>
  );
}
