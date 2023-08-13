import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRequest, fetchAllUsers } from "../redux/action";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IUsers } from "../Interfaces/interface";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import UserModal from "./UserModal";

const User = () => {
  const tableHead = {
    textAlign: "center",
  };
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.userReducer);
  const { data1 } = useSelector((state: any) => state.userReducer);
  console.log(data);
  // console.log(data1);
  const dipArray = [data.length !== 0, data1 !== undefined, data1?.length];
  useEffect(() => {
    dispatch(fetchAllUsers());
    if (data.length !== 0) {
      setUsers(data);
    }
    if (data1 !== undefined) {
      setUsers(data1);
    }
  }, dipArray);

  const handleDelete = (id: number) => {
    dispatch(deleteUserRequest(id));
    setUsers(
      users.filter((item: any) => {
        return item.id !== id;
      })
    );
  };

  // console.log(users);
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableHead}>Id</TableCell>
              <TableCell sx={tableHead}>UserName</TableCell>
              <TableCell sx={tableHead}>Email</TableCell>
              <TableCell sx={tableHead}>Phone</TableCell>
              <TableCell sx={tableHead}>Address</TableCell>
              <TableCell sx={tableHead} colSpan={2}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item: IUsers) => (
              <TableRow key={item.id}>
                <TableCell sx={tableHead}>{item.id}</TableCell>
                <TableCell sx={tableHead}>
                  {item.firstName + item.lastName}
                </TableCell>
                <TableCell sx={tableHead}>{item.email}</TableCell>
                <TableCell sx={tableHead}>{item.phone}</TableCell>
                <TableCell sx={tableHead}>{item.address}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  {
                    <IconButton>
                      <BorderColorTwoToneIcon sx={{ color: "blue" }} />
                    </IconButton>
                  }
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  {
                    <IconButton
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      <DeleteTwoToneIcon sx={{ color: "red" }} />
                    </IconButton>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UserModal isOpen={isModalOpen} onClose={closeModal} />

      <Button
        onClick={openModal}
        variant="contained"
        sx={{
          borderRadius: "30px",
          fontSize: "30px",
          padding: "5px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        +
      </Button>
    </>
  );
};

export default User;
