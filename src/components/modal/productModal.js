import React ,{useState}from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import AddProductForm from "../products/addProducts";


export default function FormDialog() {
  const [open, setOpen] = useState(false);
 // handle Form Dialog
 const handleClickOpen = () => {
   setOpen(true);
 }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="contained" onClick={handleClickOpen} className="loginbtn">
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Details Here
          </DialogContentText>
        <AddProductForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
