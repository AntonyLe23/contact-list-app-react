import React, {useMemo, useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {DetailDialog} from "./DetailDialog.tsx";
import {NewContactDialog} from "./NewContactDialog.tsx";
import {Button} from "@mui/material";

export const ContactGridComponent = () => {
  const [openDetailDialog, setOpenDetailDialog] = useState(false)
  const [selectedContact, setSelectedContact] = useState()
  const [openNewContactForm, setOpenNewContactForm] = useState(false)

  const [rowData, setRowData] = useState(
      [
        {name: "User 01", phone: "03424234", email: "user01@mail.com", active: true, age: 20, country: "VN"},
        {name: "User 02", phone: "32132131", email: "user02.mail@mail.com", active: true, age: 25, country: "CA"},
        {name: "User 03", phone: "31231221", email: "user03.mail@mail.com", active: false, age: 23, country: "FR"},
        {name: "Phat Le", phone: "01123123", email: "phat.mail@mail.com", active: true, age: 30, country: "US"},
      ]
  )

  const [colDefs, setColDefs] = useState([
    {
      field: "name",
      headerName: "Full Name"
    },
    {field: "phone"},
    {field: "email"},
    {field: "active"}
  ])

  const defaultColDefs = useMemo(() => ({
    sortable: true,
    filter: true
  }), [])

  const onRowDoubleClick = (even) => {
    setOpenDetailDialog(true)
    setSelectedContact(even.data)
  }

  const insertNewContact = () => {
    setOpenNewContactForm(true)
  }

  const handleNewContact = (newContact) => {
    setRowData([newContact, ...rowData])
  }

  return (
      <div className={'ag-theme-material ag-grid-container'} style={{height: 1000}}>
        <Button onClick={insertNewContact}>Insert New Contact</Button>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDefs}
            onRowDoubleClicked={onRowDoubleClick}
        />
        <DetailDialog
            open={openDetailDialog}
            handleClose={() => setOpenDetailDialog(false)}
            contactDetail={selectedContact}
        />
        <NewContactDialog
            open={openNewContactForm}
            handleClose={() => setOpenNewContactForm(false)}
            handleSubmitContact={handleNewContact}
        />
      </div>
  );
}
