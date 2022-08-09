import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_CUSTOMER, EDIT_PROFILE } from "../../mutations/userMutations";
import { GET_CUSTOMER } from "../../queries/customerQueries";

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
};

function EditProfile({ customer }) {
//   const [status, setStatus] = useState(customer.status);
   const [firstName, setFirstName] = useState(customer.firstName);
  const [open, setOpen] = useState(false);
  
  const [editCustomer] = useMutation(EDIT_PROFILE, {
    variables: { id:customer.id, firstName},
    refetchQueries: [{ query: GET_CUSTOMER, variables: {id:customer.id} }],
  });

   const onSubmit = (e) => {
     e.preventDefault();
     editCustomer(firstName);
     console.log("firstname: " + firstName);
    // console.log("lastname: " + lastName);
   }


  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} color="secondary">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <EditIcon />
          <div>Edit</div>
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
                Update Profile Info
              </Typography>
              <div id="transition-modal-description">
                <form onSubmit={onSubmit}>
                  <Stack direction="column" sx={{ marginTop: "1.5em" }}>
                    <TextField
                      id="status"
                      label="Status"
                     value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      variant="outlined"
                    />

                    <Button color="success" type="submit">
                      Update
                    </Button>
                  </Stack>
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default EditProfile;
