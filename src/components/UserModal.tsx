import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { createUserReuest } from "../redux/action";
const UserModal = ({ isOpen, onClose }: any) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "350px",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: Number(""),
    companyWebsite: "",
    companyName: "",
    address: "",
    city: "",
    postalCode: Number(""),
    country: "",
    state: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    console.log(user);
    e.preventDefault();
    dispatch(createUserReuest(user));
    onClose();
  };
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Stack direction={"column"} gap={5}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <TextField
                label="First Name"
                name="firstName"
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              <TextField label="Email" name="email" onChange={handleChange} />
              <TextField label="Phone" name="phone" onChange={handleChange} />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <TextField
                label="Company Website"
                name="companyWebsite"
                onChange={handleChange}
              />
              <TextField
                label="Company Name"
                name="companyName"
                onChange={handleChange}
              />
              <TextField
                label="Address"
                name="address"
                onChange={handleChange}
              />
              <TextField label="City" name="city" onChange={handleChange} />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={15}
            >
              <TextField
                label="Postal Code"
                name="postalCode"
                onChange={handleChange}
              />
              <TextField
                label="Country"
                name="country"
                onChange={handleChange}
              />
              <TextField label="State" name="state" onChange={handleChange} />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={10}
            >
              <Button variant="contained" color="error" onClick={onClose}>
                Close
              </Button>
              <Button type={"submit"} variant="contained" color="success">
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default UserModal;
