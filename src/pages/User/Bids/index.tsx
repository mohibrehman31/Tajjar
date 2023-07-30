import "./index.css";
import Table from "@mui/joy/Table";
import { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useNavigate } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";

defineElement(lottie.loadAnimation);

interface apiDataType {
  postingId: string;
  userName: string;
  cost: string;
  status: string;
  type: string;
  date: string;
  details: string;
}
export default function Bids() {
  const navigate = useNavigate();

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const [statusFilter, setStatusFilter] = useState<string>("None");
  const [bidTypeFilter, setBidtypeFilter] = useState<string>("None");
  const [dateFilter, setDateFilter] = useState<string[]>(["", ""]);

  const [apiData, setApiData] = useState<apiDataType[]>([
    {
      postingId: "101",
      userName: "Sammam",
      cost: "600",
      status: "Bidden",
      type: "Posted",
      date: "10/12/23",
      details: "none",
    },
    {
      postingId: "101",
      userName: "Sammam",
      cost: "600",
      status: "Approved",
      type: "Posted",
      date: "10/12/23",
      details: "none",
    },
    {
      postingId: "101",
      userName: "Sammam",
      cost: "600",
      status: "Approved",
      type: "Posted",
      date: "10/12/23",
      details: "none",
    },
    {
      postingId: "101",
      userName: "Sammam",
      cost: "600",
      status: "Pending",
      type: "Received",
      date: "10/12/23",
      details: "none",
    },
    {
      postingId: "101",
      userName: "Sammam",
      cost: "600",
      status: "Completed",
      type: "Received",
      date: "10/12/23",
      details: "none",
    },
  ]);

  const [rows, setRows] = useState<apiDataType[]>(apiData);

  useEffect(() => {
    let f1 = apiData.filter((row: apiDataType) =>
      statusFilter !== "None" ? row.status === statusFilter : row
    );
    let f2 = f1.filter((row: apiDataType) =>
      bidTypeFilter !== "None" ? row.type === bidTypeFilter : row
    );

    setRows(f2);
  }, [statusFilter, bidTypeFilter]);

  useEffect(() => {
    console.log(dateFilter);
  }, [dateFilter]);

  const columns = [
    "Posting Id",
    "User Name",
    "Cost",
    "Bidding Status",
    "Bid Type",
    "Added Dete",
    "Details",
  ];

  const handleChangeRowsPerPage = (event: any) => {
    const selectedValue = Number(event.target.value);
    console.log("Selected value:", selectedValue);
    setRowsPerPage(selectedValue);
    setPage(0);
  };

  return (
    <div className="bids-page">
      <div className="bids-body">
        <div className="bids-options-container">
          <div className="filter-container">
            <FormControl sx={{ width: "140px", marginRight: 2 }} size="small">
              <InputLabel id="demo-select-small-label">
                Status Filter
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={statusFilter}
                label="Status Filter"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="None">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Bidden">Bidden</MenuItem>
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="Payment Added">Payment Added</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: 150, marginRight: 2 }} size="small">
              <InputLabel id="demo-select-small-label">
                Bid Type Filter
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={bidTypeFilter}
                label="Bid Type Filter"
                onChange={(e) => setBidtypeFilter(e.target.value)}
              >
                <MenuItem value="None">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Posted">Posted</MenuItem>
                <MenuItem value="Received">Received</MenuItem>
              </Select>
            </FormControl>

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

          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              setTimeout(() => {
                navigate("/User/AddBids");
              }, 1500)
            }
          >
            <lord-icon
              src="https://cdn.lordicon.com/mecwbjnp.json"
              trigger="click"
              colors="primary:#121331,secondary:#08a88a"
            />
          </div>
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
