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
import { useMutation } from "@apollo/client";
import { UPDATE_CUSTOMER } from "../../../mutations/userMutations";
import { GET_CUSTOMER } from "../../../queries/customerQueries";

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

function UpdateCustomer({ customer }) {
  const [status, setStatus] = useState(customer.status);
  const [role, setRole] = useState(customer.role);

  const [editCustomer] = useMutation(UPDATE_CUSTOMER, {
    variables: { id:customer.id, status, role },
    refetchQueries: [{ query: GET_CUSTOMER, variables: {id:customer.id} }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    editCustomer(status, role);
    console.log("status: " + status);
    console.log("role: " + role);

  };

  const [open, setOpen] = useState(false);
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
                Update the Customer Information
              </Typography>
              <div id="transition-modal-description">
                <form onSubmit={onSubmit}>
                  <Stack direction="column" sx={{ marginTop: "1.5em" }}>
                    <TextField
                      id="status"
                      label="Status"
                     value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      variant="outlined"
                    />

                    <TextField
                      id="role"
                      label="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      variant="outlined"
                      sx={{ marginTop: "1.5em" }}
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

export default UpdateCustomer;
