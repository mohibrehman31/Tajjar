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

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useNavigate } from "react-router-dom";

export default function Postings() {
  const rowsPerPage = 5;
  const [page, setPage] = useState(0);

  const [statusFilter, setStatusFilter] = useState<string>("");t
  const [dateFilter, setDateFilter] = useState<string[]>(["", ""]);

  const navigate = useNavigate();
  const columns = [
    "Posting Type",
    "Commodity",
    "Posting Status",
    "Added Date",
    "Details",
  ];

  function createData(
    postingType: string,
    commodity: string,
    postingStatus: string,
    addedDate: string,
    details: string
  ) {
    return { postingType, commodity, postingStatus, addedDate, details };
  }

  const rows = [
    createData("101", "600", "accepted", "10/12/23", "none"),
    createData("101", "600", "accepted", "10/12/23", "none"),
    createData("101", "600", "accepted", "10/12/23", "none"),
    createData("101", "600", "accepted", "10/12/23", "none"),
    createData("101", "600", "accepted", "10/12/23", "none"),
  ];

  const handleChangeRowsPerPage = (event: any) => {
    const selectedValue = Number(event.target.value);
    console.log("Selected value:", selectedValue);
    setPage(0);
  };

  return (
    <div className="postings-page">
      <div className="postings-body">
        <div className="postings-options-container">
          <div className="postings-filter-container">
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
                navigate("/User/SubmitPosting");
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
