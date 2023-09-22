import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  DndProvider,
  DropOptions,
  getBackendOptions,
  getDescendants,
  MultiBackend,
  Tree,
  NodeModel
} from "@minoru/react-dnd-treeview";
import {Icon} from "@iconify/react";

// @ts-ignore
import styles from "src/views/pages/admin/signup-requests/tree-components/TreeViewCss.module.css";
import useTreeOpenHandler from "./tree-components/CustomDragPreview";
import AddTreeNode from "./tree-components/AddTreeNode";
import Node from "./tree-components/CustomNode";
import Placeholder from "./tree-components/PlaceHolder";

type CustomData = {
  fileType: string;
};

const getLastId = (treeData: NodeModel[]) => {
  const reversedArray = [...treeData].sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else if (a.id > b.id) {
      return -1;
    }

    return 0;
  });

  if (reversedArray.length > 0) {
    return reversedArray[0].id;
  }

  return 0;
};

const reorderArray = (
  array: NodeModel[],
  sourceIndex: number,
  targetIndex: number
) => {
  const newArray = [...array];
  const element = newArray.splice(sourceIndex, 1)[0];
  newArray.splice(targetIndex, 0, element);

  return newArray;
};

const InviteSignUpRequest = () => {

  const { ref, getPipeHeight, toggle } = useTreeOpenHandler();

  const sampleData = [
    {
      id: 1,
      parent: 0,
      droppable: true,
      text: 'main',
      child: true
    }
  ]

  const [treeData, setTreeData] = React.useState<NodeModel[]>(sampleData);

  // console.log(treeData, "lets see the tree data")

  const [open, setOpen] = useState<boolean>(false);

  const handleDrop = (newTree: NodeModel[], e: DropOptions) => {
    const { dragSourceId, dropTargetId, destinationIndex } = e;
    if (
      typeof dragSourceId === "undefined" ||
      typeof dropTargetId === "undefined"
    )
      return;
    const start = treeData.find((v) => v.id === dragSourceId);
    const end = treeData.find((v) => v.id === dropTargetId);

    if (
      start?.parent === dropTargetId &&
      start &&
      typeof destinationIndex === "number"
    ) {
      setTreeData((treeData) => {
        const output = reorderArray(
          treeData,
          treeData.indexOf(start),
          destinationIndex
        );

        return output;
      });
    }

    if (
      start?.parent !== dropTargetId &&
      start &&
      typeof destinationIndex === "number"
    ) {
      if (
        getDescendants(treeData, dragSourceId).find(
          (el) => el.id === dropTargetId
        ) ||
        dropTargetId === dragSourceId ||
        (end && !end?.droppable)
      )
        return;
      setTreeData((treeData) => {
        const output = reorderArray(
          treeData,
          treeData.indexOf(start),
          destinationIndex
        );
        const movedElement = output.find((el) => el.id === dragSourceId);
        if (movedElement) movedElement.parent = dropTargetId;

        // console.log(output, "movedElement");

        return output;
      });
    }
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDelete = (id: NodeModel["id"]) => {
    const deleteIds = [
      id,
      ...getDescendants(treeData, id).map((node) => node.id)
    ];
    const newTree = treeData.filter((node) => !deleteIds.includes(node.id));

    setTreeData(newTree);
  };

  const handleSubmit = (newNode: Omit<NodeModel<CustomData>, "id">) => {
    // @ts-ignore
    const lastId = getLastId(treeData) + 1;

    setTreeData([
      ...treeData,
      {
        ...newNode,
        id: lastId
      }
    ]);

    setOpen(false);
  };

  const handleTextChange = (id: NodeModel["id"], value: string) => {
    const newTree = treeData.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          text: value
        };
      }

      return node;
    });

    setTreeData(newTree);
  };


  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={''}>Sign Up Request / Send Invite</h2>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>
            <CardContent>
              <Box>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={12}>
                    <Typography style={{fontSize: '20px', fontWeight: '600'}}>User Info</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size='small'>
                      <InputLabel id='form-layouts-tabs-select-label'>Select Organization</InputLabel>
                      <Select
                        label='Select Organization'
                        defaultValue=''
                        id='form-layouts-tabs-select'
                        labelId='form-layouts-tabs-select-label'
                      >
                        <MenuItem value='organization1'>Organization 1</MenuItem>
                        <MenuItem value='organization2'>Organization 2</MenuItem>
                        <MenuItem value='organization3'>Organization 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size='small'>
                      <InputLabel id='form-layouts-tabs-select-label'>Select Role</InputLabel>
                      <Select
                        label='Select Role'
                        defaultValue=''
                        id='form-layouts-tabs-select'
                        labelId='form-layouts-tabs-select-label'
                      >
                        <MenuItem value='role1'>Role 1</MenuItem>
                        <MenuItem value='role2'>Role 2</MenuItem>
                        <MenuItem value='role3'>Role 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        size='small'
                        type='text'
                        label='First name'
                        placeholder='John'
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        size='small'
                        type='text'
                        label='Last Name'
                        placeholder='Wick'
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        size='small'
                        fullWidth
                        type='email'
                        label='Email'
                        placeholder='admin@gmail.com'
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        size='small'
                        fullWidth
                        type='number'
                        label='Contact No'
                        placeholder='+0154 552 4556 '
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size='small'>
                      <InputLabel id='form-layouts-tabs-select-label'>Select Industries</InputLabel>
                      <Select
                        label='Select Industries'
                        defaultValue=''
                        id='form-layouts-tabs-select'
                        labelId='form-layouts-tabs-select-label'
                      >
                        <MenuItem value='industry1'>Industry 1</MenuItem>
                        <MenuItem value='industry2'>Industry 2</MenuItem>
                        <MenuItem value='industry3'>Industry 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography style={{fontSize: '15px', fontWeight: '600'}}>Add Subscription Level</Typography>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <DndProvider backend={MultiBackend} options={getBackendOptions()}>

                      <div className={styles.wrapper}>
                        <div style={{display: "flex", justifyContent: "start"}}>
                          <Button variant="contained" color='primary' size='small' onClick={handleOpenDialog}>
                            <Icon icon='icon-park-solid:add' fontSize={15} style={{marginRight: 5}} /> Add Node
                          </Button>
                        </div>

                        <AddTreeNode open={open} tree={treeData} onClose={handleCloseDialog} onSubmit={handleSubmit} />

                        <Tree
                          ref={ref}
                          classes={{
                            root: styles.treeRoot,
                            placeholder: styles.placeholder,
                            dropTarget: styles.dropTarget,
                            listItem: styles.listItem
                          }}
                          tree={treeData}
                          sort={false}
                          rootId={0}
                          insertDroppableFirst={false}
                          enableAnimateExpand={true}
                          onDrop={handleDrop}
                          canDrop={() => true}
                          dropTargetOffset={5}
                          placeholderRender={(node, { depth }) => (
                            <Placeholder node={node} depth={depth} />
                          )}
                          render={(node, { depth, isOpen, isDropTarget }) => (
                            <Node
                              style={{padding: 20}}
                              getPipeHeight={getPipeHeight}
                              node={node}
                              onDelete={handleDelete}

                                // @ts-ignore
                              handleSubmit={handleSubmit}
                              handleTextChange={handleTextChange}
                              depth={depth}
                              isOpen={isOpen}
                              onClick={() => {
                                if (node.droppable) {
                                  toggle(node?.id);
                                }
                              }}
                              isDropTarget={isDropTarget}
                              treeData={treeData}
                            />
                          )}
                        />
                      </div>
                    </DndProvider>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <div  style={{display: "flex", justifyContent: "end"}}>
                      <Button variant="contained" color='primary' size='medium'>
                        Send Invite
                      </Button>
                    </div>
                  </Grid>

                </Grid>

              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InviteSignUpRequest;
