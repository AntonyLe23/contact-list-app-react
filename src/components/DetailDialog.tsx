import React from "react";
import {Checkbox, Dialog, DialogContent, DialogTitle, InputLabel, List, ListItem} from "@mui/material";
import {ContactItem} from "../ts/contactItem";

interface DetailDialogProps {
  open: boolean,
  handleClose: () => void
  contactDetail?: ContactItem
}

export const DetailDialog = ({open, handleClose, contactDetail}: DetailDialogProps) => {
  return (
      <Dialog
          open={open}
          onClose={handleClose}
      >
        <DialogTitle>{'Contact Details'}</DialogTitle>
        {contactDetail &&
            <DialogContent>
              <List>
                <ListItem>
                  <InputLabel>{'Full name: '}</InputLabel>
                  {contactDetail.name}
                </ListItem>
                <ListItem>
                  <InputLabel>{'Phone: '}</InputLabel>
                  {contactDetail.phone}
                </ListItem>
                <ListItem>
                  <InputLabel>{'Email: '}</InputLabel>
                  {contactDetail.email}
                </ListItem>
                <ListItem>
                  <InputLabel>{'Active: '}</InputLabel>
                  <Checkbox checked={contactDetail.active}/>
                </ListItem>
              </List>
            </DialogContent>
        }
      </Dialog>
  );
}
