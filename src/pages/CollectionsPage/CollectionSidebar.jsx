import Stack from '@mui/material/Stack';
import OnlyInStock from './OnlyInStock';
import PriceMinMax from './PriceMinMax';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import JustTesting from './JustTesting';

function CollectionSidebar({ stockCheck, handleChange, priceMin, priceMax, priceSubmit, priceMinSet, priceMaxSet }) {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center" sx={{ marginTop: '30px', marginLeft: '15px' }}>
      <TableContainer component={Paper} >
        <Table>
          <TableHead >
            <TableRow>
              <TableCell>
                <OnlyInStock stockCheck={stockCheck} handleChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <PriceMinMax priceMin={priceMin} priceMax={priceMax} priceMinSet={priceMinSet} priceMaxSet={priceMaxSet} price priceSubmit={priceSubmit} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {/* <JustTesting /> */}
              </TableCell>
            </TableRow>
          </TableHead>

        </Table>
      </TableContainer>
    </Stack>
  )
}
export default CollectionSidebar