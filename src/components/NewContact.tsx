import {Dialog, DialogContent, DialogTitle, FormControl, FormGroup} from "@mui/material";
import {useForm} from "react-hook-form";
import {ContactItem} from "../ts/contactItem";

interface NewContactProps {
  open: boolean,
  handleClose: () => void
  handleSubmitContact: (data: ContactItem) => void
}

export const NewContact = ({open, handleClose, handleSubmitContact}: NewContactProps) => {
  const {register, handleSubmit, reset} = useForm();
  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Contact Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(data => {
            const newContact = {
              name: data.name,
              phone: data.phone,
              email: data.email
            }
            handleSubmitContact(newContact);
            handleClose();
            reset()
          })}>
            <FormControl>
              <FormGroup>
                <input {...register("name", {required: true})} placeholder={"Name"}/>
              </FormGroup>
              <FormGroup>
                <input {...register("phone")} placeholder={"Phone"}/>
              </FormGroup>
              <FormGroup>
                <input {...register("email")} placeholder={"Email"}/>
              </FormGroup>
              <FormGroup>
                <input type="submit"/>
              </FormGroup>
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
  );
}
