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
import AddSaleForm from "../sales/AddSales";


export default function SalesDialog() {
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
        Add Sales
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sales Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Details Here
          </DialogContentText>
        <AddSaleForm/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
