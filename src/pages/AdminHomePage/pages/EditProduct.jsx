import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import { createContext, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useMutation, useQuery } from "@apollo/client";
import {UPDATE_PRODUCT} from "../../../mutations/productMutations";
import {GET_PRODUCT} from "../../../queries/productQueries";
import FileUploader from "components/FileUploader";
import { FileUploaderContext } from "pages/AdminProductPage/AddProduct";

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
    height:"90vh",
    overflowY:"scroll"
  };

let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

function EditProduct({product}) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.priceList[0].price);
  const [priceList, setPriceList] = useState(product.priceList);
  const [size, setSize] = useState(product.size);
  const [postDate, setPostDate] = useState(today);
  const [length, setLength] = useState(product.size.length);
  const [width, setWidth] = useState(product.size.width);
  const [height, setHeight] = useState(product.size.height);
  const [radius, setRadius] = useState(product.size.radius);
  const [quantity, setQuantity] = useState(product.quantity);
  const [category, setCategory] = useState(product.category);
  const [rare, setRare] = useState(product.rare);
  const [productStatus, setProductStatus] = useState(product.productStatus);
  const [colors, setColors] = useState(product.colors);
  const [imageIds, setImageIds] = useState(product.image);
  const [imageLink, setImageLink] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const[updateProduct] = useMutation(UPDATE_PRODUCT, {
    variables: {
        id:product.id,
        name,
        description,
        priceLists:[{price:parseFloat(price),postDate:postDate}],
        size:{width:width, height:height, length:length, radius:radius},
        category,
        rare,
        productStatus,
        colors,
        imageIds,
        quantity:parseInt(quantity),
      },
      refetchQueries:[{query:GET_PRODUCT, variables: {id:product.id} }],
  });

  const onSubmit = (e) =>{
    e.preventDefault();
    updateProduct(name, description, category, rare, productStatus, colors, imageIds);
  }
  return (
    <div style={{ padding:'1.5em'}}>
      <Button onClick={handleOpen} color="primary">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <EditIcon />
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
                Update the Product
              </Typography>
              <div style={{overflow:'scroll'}} id="transition-modal-description">
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
                        variant="outlined"
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
                    <Button variant="contained" type="submit">Edit Product</Button>
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

export default EditProduct