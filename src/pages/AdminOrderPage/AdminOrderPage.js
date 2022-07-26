import { GET_CUSTOMER, GET_CUSTOMERS } from "../../queries/customerQueries";
import {useQuery} from "@apollo/client";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {styled} from '@mui/system'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import img1 from '../../assets/images/1.jpg'


const steps=[
  'Order Completed',
  'Ready for Shipping',
  'Shipped',
  'Delivered'
];
const products=[{
  id:1,
  name:'Product 1',
  price:100,
  quantity:1,
  description:"description 1",
  
},
{
  id:2,
  name:'Product 2',
  price:10,
  quantity:2,
  description:"description 2",
  
}
]
const Container = styled("div")(({theme})=>({
  display:'grid',
  gridTemplateRows: '0.2fr 0.3fr 1fr 0.2fr',
  gridTemplateAreas: "'orderDetails orderDetails orderTotal''deliveryDetails deliveryDetails orderTotal''deliveryDetails deliveryDetails info''deliveryDetails deliveryDetails info'",
  gridGap:'1em',
  height:'90vh',
  [theme.breakpoints.down('md')]:{
    gridTemplateAreas: "'orderDetails orderDetails''deliveryDetails deliveryDetails''deliveryDetails deliveryDetails''orderTotal orderTotal'",
    height:'100%',
 

 },
  
}));
const TableCont = styled(TableContainer)(({theme})=>({
  width:'100%',
}));
const OrderDetails = styled("div")(({theme})=>({
  gridArea: 'orderDetails',
  padding:'1em',
}));

const OrderTotal = styled("div")(()=>({
  gridArea: 'orderTotal',
  padding:'1em',
}));

const DeliveryDetails = styled("div")(()=>({
  gridArea: 'deliveryDetails',
  padding:'1em',
}));

const Info = styled("div")(()=>({
  gridArea: 'info',
  padding:'1em',
}));

const StyledTableCell = styled(TableCell)(()=>({
  backgroundColor:'#ddd',
}));
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ShoppingCartIcon />,
    2: <LocalShippingIcon />,
    3: <DeliveryDiningIcon />,
    4: <CheckCircleIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(112,52,249) 0%, rgb(215,63,242) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(112,52,249) 0%, rgb(215,63,242)50%, rgb(138,35,135) 100%)',
  }),
}));
const AdminOrderPage = () => {
  const {loading, error, data} = useQuery(GET_CUSTOMER, {variables: {id: "62a90f3e88672f1dbd12c32f"}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  console.log("Customers data");
  console.log(data);
  return (
    <div>
      <Container>
        <OrderDetails>
          <TableCont>
            <Table>
              <TableHead>
                <TableRow>
                <StyledTableCell>Order Details</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <p>Order Date: {data.customer.orders[0].orderDate}</p>
                      <Button variant="outlined">Print Receipt</Button>
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                  
                    <TableCell>Order Number: {data.customer.orders[0].id}</TableCell>
                    
                  
                    
                  </TableRow>
                </TableBody>
            </Table>
          </TableCont>
        </OrderDetails>
        <OrderTotal>
        <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                <StyledTableCell>Order Total</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>Quantity: {data.customer.orders[0].productsInCart[0].qty}</TableCell>
                    </TableRow>
                  <TableRow>
                    <TableCell>Price: ${data.customer.orders[0].productsInCart[0].price}</TableCell>
                    </TableRow>
                    <TableRow>
                    <StyledTableCell>Total: ${data.customer.orders[0].productsInCart[0].price}</StyledTableCell>
                    </TableRow>
                    
                  </TableBody>
              </Table>
              </TableContainer>
        </OrderTotal>
        <DeliveryDetails>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Delivery Details</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                  <TableCell>Order Status: {data.customer.orders[0].orderStatus}</TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                  <Stepper connector={<ColorlibConnector />}>
                    {steps.map((label)=>(
                      <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  </TableCell>
                    </TableRow>
                    <TableRow>
                    <StyledTableCell>
                      Orders
                      </StyledTableCell>
                    </TableRow>
                    {products.map((product)=>(
                      <TableRow>
                      <TableCell>
                      <Stack direction={{sm:'column', md:'row'}} spacing={2}>
                        <img width="20%" height="auto" src={img1} alt=""/>
                        <Stack direction={{sm:'column'}} spacing={2}>
                          <p>{product.name}</p>
                          <p>{product.description}</p>
                          <p>Price: {product.price}</p>
                          <p>Quantity: {product.quantity}</p>
                          </Stack>
                        </Stack>
                      </TableCell>
                    </TableRow>
                    ))}
                    
                  </TableBody>
              </Table>
            </TableContainer>
        </DeliveryDetails>
        <Info>Info</Info>
      </Container>
    </div>
  )
}

export default AdminOrderPage