import React, {useState} from 'react';
import {DialogActions, DialogContent, Select} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import GeneralDialog from "../../../../components/general-dialog/GeneralDialog";
import Checkbox from "@mui/material/Checkbox";

const AddTreeNode = ({open, tree, onClose, onSubmit}:any) => {

  const [text, setText] = useState("");
  const [fileType, setFileType] = useState("text");
  const [parent, setParent] = useState(0);
  const [droppable, setDroppable] = useState(false);

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleChangeParent = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setParent(Number(e.target.value));
  };

  const handleChangeDroppable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDroppable(e.target.checked);
  };

  const handleChangeFileType = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFileType(e.target.value);
  };

  // commonly used to close and reset the form modal
  const handleCloseDialog = () => {
    onClose()
  }

  const handleReset = () => {
    setText("");
    setFileType("text");
    setParent(0);
    setDroppable(false)
  }

  const renderDialog = () => {

    return (
      <GeneralDialog
        title={'Add New Node'}
        handleClose={handleCloseDialog}
        isOpen={open}
        icon="streamline:interface-hierarchy-2-node-organization-links-structure-link-nodes-network-hierarchy"
        maxWidth="xs"
      >

        <DialogContent>
          <div>
            <TextField
              label="Text"
              fullWidth
              type='string'
              size="small"
              onChange={handleChangeText} value={text} placeholder='Enter New Node text'  />
          </div>

          <div style={{marginTop: 12}}>
            <FormControl fullWidth size="small">
              <InputLabel>Parent</InputLabel>
              <Select
                label="Parent"

                  // @ts-ignore
                onChange={handleChangeParent}
                value={parent}
              >
                <MenuItem value={0}>ItSelf a Parent</MenuItem>
                {tree
                  .filter((node:any) => node.droppable === true)
                  .map((node:any) => (
                    <MenuItem key={node.id} value={node.id}>
                      {node.text}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={droppable}
                  onChange={handleChangeDroppable}
                  color="primary"
                />
              }
              label="Droppable"
            />
          </div>

          {!droppable && (
            <div>
              <FormControl fullWidth size="small">
                <InputLabel>File type</InputLabel>
                <Select
                  label="FileType"

                    // @ts-ignore
                  onChange={handleChangeFileType}
                  value={fileType}
                >
                  <MenuItem value="text">TEXT</MenuItem>
                  <MenuItem value="csv">CSV</MenuItem>
                  <MenuItem value="image">IMAGE</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}

        </DialogContent>

        <DialogActions>
          <Button
            variant='contained'
            color='error'
            onClick={
            () => {
              handleCloseDialog()
              handleReset()
            }
          }
          >
            Cancel
          </Button>
          <Button
            disabled={text === ""}
            onClick={
            () => {
              console.log(text, "text", parent, "parent", droppable, "dropable")

              onSubmit({text, parent, droppable, data: {fileType}})
              handleReset()
            }
          }
            variant='contained'
            color='primary'
            type='submit'
          >
            Add Node
          </Button>
        </DialogActions>

      </GeneralDialog>)
  }

  return (
    <div>
      {renderDialog()}
    </div>
  );
};

export default AddTreeNode;
