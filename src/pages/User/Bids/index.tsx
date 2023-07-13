import './index.css'
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormLabel from '@mui/joy/FormLabel';
import Select from '@mui/joy/Select';
import Typography from '@mui/joy/Typography';
import Option from '@mui/joy/Option';
import {useState} from 'react';

export default function Bids() {

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  function createData(
    postingId: string,
    userName: string,
    cost: string,
    status: string,
    type: string,
    date: string,
    details: string
  ) {
    return { postingId, userName, cost, status, type, date,details };
  }

  const rows = [
    createData('101', "Sammam", "600", "accepted", "xyz",'10/12/23',"none"),
    createData('101', "Sammam", "600", "accepted", "xyz",'10/12/23',"none"),
    createData('101', "Sammam", "600", "accepted", "xyz",'10/12/23',"none"),
    createData('101', "Sammam", "600", "accepted", "xyz",'10/12/23',"none"),
    createData('101', "Sammam", "600", "accepted", "xyz",'10/12/23',"none"),
  ];

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    const selectedValue = Number(event.target.value);
    console.log("Selected value:", selectedValue);
    setPage(0);
  };

  function labelDisplayedRows({
      from,
      to,
      count,
    }: {
      from: number;
      to: number;
      count: number;
    }) {
      return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  }

  const getLabelDisplayedRowsTo = () => {
    if (rows.length === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1
      ? rows.length
      : Math.min(rows.length, (page + 1) * rowsPerPage);
  };

  return (
    <div className='bids-page'>
        <div className='bidsTitle'>
          BIDS
        </div>
        
        <div className='bids-body'>
        {/* <FilterListIcon/> */}

          <Sheet variant="outlined" style={{ boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.9)', width: '70%'}}>
            <Table >
              <thead>
                <tr>
                  <th>Posting Id</th>
                  <th>User Name</th>
                  <th>Cost</th>
                  <th>Bidding Status</th>
                  <th>Bid Type</th>
                  <th>Added Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <tr key={row.postingId}>
                    <td>{row.postingId}</td>
                    <td>{row.userName}</td>
                    <td>{row.cost}</td>
                    <td>{row.status}</td>
                    <td>{row.type}</td>
                    <td>{row.date}</td>
                    <td>{row.details}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={7}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        justifyContent: 'flex-end',
                      }}
                    >
                
                      <FormLabel>Rows per page:</FormLabel>
                      <Select onChange={(e) => handleChangeRowsPerPage(e?.target.value)} value={rowsPerPage}>
                        <Option value={5}>5</Option>
                        <Option value={10}>10</Option>
                        <Option value={25}>25</Option>
                      </Select>

                      <Typography textAlign="center" sx={{ minWidth: 80 }}>
                        {labelDisplayedRows({
                          from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
                          to: getLabelDisplayedRowsTo(),
                          count: rows.length === -1 ? -1 : rows.length,
                        })}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                          size="sm"
                          color="neutral"
                          variant="outlined"
                          disabled={page === 0}
                          onClick={() => handleChangePage(page - 1)}
                          sx={{ bgcolor: 'background.surface' }}
                        >
                          <KeyboardArrowLeftIcon />
                        </IconButton>
                        <IconButton
                          size="sm"
                          color="neutral"
                          variant="outlined"
                          disabled={
                            rows.length !== -1
                              ? page >= Math.ceil(rows.length / rowsPerPage) - 1
                              : false
                          }
                          onClick={() => handleChangePage(page + 1)}
                          sx={{ bgcolor: 'background.surface' }}
                        >
                          <KeyboardArrowRightIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </Sheet>
        </div>
      
    </div>
  )
}

