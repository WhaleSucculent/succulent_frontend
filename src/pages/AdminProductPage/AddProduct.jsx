import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';
import { createContext, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../mutations/productMutations";
import { GET_PRODUCTS } from "../../queries/productQueries";
import Box from "@mui/material/Box";
import { CircularProgress, Paper } from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FileUploader from "components/FileUploader";

export const FileUploaderContext = createContext();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "90vh",
  overflowY: "scroll"
};
let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [priceList, setPriceList] = useState([]);
  const [postDate, setPostDate] = useState(today);
  const [size, setSize] = useState({});
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [radius, setRadius] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [imageLink, setImageLink] = useState("");

  const [category, setCategory] = useState("");
  const [rare, setRare] = useState(false);
  const [productStatus, setProductStatus] = useState("");
  const [colors, setColors] = useState([]);
  const [imageIds, setImageIds] = useState([]);
  const [open, setOpen] = useState(false);

  const [addProduct, {loading, error}] = useMutation(ADD_PRODUCT, {
    variables: {
      name,
      description,
      priceList: [{ price: parseFloat(price), postDate: postDate }],
      postDate,
      size: { width: width, height: height, length: length, radius: radius },
      category,
      rare,
      productStatus,
      colors,
      imageIds,
      quantity: parseInt(quantity),
      imageLinks: [imageLink],
      images: [{ name: name, category: category, imageLink: imageLink  }]
    },
    update(cache, { data: { addProduct } }) {
      const { products } = cache.readQuery({
        query: GET_PRODUCTS,
      });
      cache.writeQuery({
        query: GET_PRODUCTS,
        data: {
          products: [...products, addProduct],
        },
      });
    },
    onCompleted: () => {
      setName("");
      setDescription("");
      setPrice("");
      setPriceList([]);
      setPostDate(today);
      setSize({});
      setLength("");
      setWidth("");
      setHeight("");
      setRadius("");
      setQuantity(0);
      setImageLink("");
      setCategory("");
      setRare(false);
      setProductStatus("");
      setColors([]);
      setImageIds([]);
      setOpen(false)
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(name, description, priceList, postDate, size, category, rare, productStatus, colors, imageIds, imageLink);
    console.log(postDate);
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
      <div style={{ padding: '1.5em' }}>
        <Button onClick={handleOpen} color="primary">
          <Stack direction="row" justifyContent="center" alignItems="center">
            <AddIcon />
            <div>Add Product</div>
          </Stack>
        </Button>

        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Add a new Product
                </Typography>
                <div style={{ overflow: 'scroll' }} id="transition-modal-description">
                  <form onSubmit={onSubmit}>
                    <Stack direction="column" sx={{ marginTop: "1.5em" }} spacing={2}>
                      <TextField
                        id="name"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                      />
                      <TextField
                        id="description"
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        variant="outlined"
                      />

                      <TextField
                        id="price"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        variant="outlined"
                      />
                      <TextField
                        id="quantity"
                        label="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        variant="outlined"
                      />
                      <Typography variant="body2" component="p">Enter the dimension Information</Typography>
                      <Stack direction="row">
                        <TextField
                          id="length"
                          label="Length"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          variant="outlined"
                        />
                        <TextField
                          id="width"
                          label="Width"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          variant="outlined"
                        />
                      </Stack>

                      <Stack direction="row">
                        <TextField
                          id="height"
                          label="Height"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          variant="outlined"
                        />
                        <TextField
                          id="radius"
                          label="Radius"
                          value={radius}
                          onChange={(e) => setRadius(e.target.value)}
                          variant="outlined"
                        />
                      </Stack>
                      <TextField
                        id="category"
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="outlined"
                      />
                      <TextField
                        id="rare"
                        label="Rare"
                        value={rare}
                        onChange={(e) => setRare(e.target.value)}
                        variant="outlined"
                      />
                      <TextField
                        id="productStatus"
                        label="Product Status"
                        value={productStatus}
                        onChange={(e) => setProductStatus(e.target.value)}
                        variantn="outlined"
                      />

                      <TextField
                        id="colors"
                        label="Colors"
                        value={colors}
                        onChange={(e) => setColors(e.target.value)}
                        variant="outlined"
                      />
                      <FileUploaderContext.Provider value={[imageLink, setImageLink]}>
                        <FileUploader />
                      </FileUploaderContext.Provider>
                      <Button variant="contained" type="submit" endIcon>Add Product</Button>
                      {loading && <CircularProgress/>}
                    </Stack>
                  </form>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
  )
}

export default AddProduct