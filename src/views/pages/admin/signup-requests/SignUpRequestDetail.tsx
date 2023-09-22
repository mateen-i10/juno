import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {
  DndProvider,
  DropOptions,
  getBackendOptions,
  getDescendants,
  MultiBackend,
  NodeModel,
  Tree
} from "@minoru/react-dnd-treeview";

// @ts-ignore
import styles from "./tree-components/TreeViewCss.module.css";
import Button from "@mui/material/Button";
import {Icon} from "@iconify/react";
import AddTreeNode from "./tree-components/AddTreeNode";
import Placeholder from "./tree-components/PlaceHolder";
import Node from "./tree-components/CustomNode";
import useTreeOpenHandler from "./tree-components/CustomDragPreview";
import CustomChip from "../../../../@core/components/mui/chip";


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


const SignUpRequestDetail = () => {

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

  const handleSubmit = (newNode: Omit<NodeModel<CustomData>, "id: void">) => {
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

  // @ts-ignore
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={''}>Sign Up Request / Detail</h2>
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

                  <Grid item xl={4} xs={12} sm={4}>
                    <h4 style={{textTransform: 'uppercase'}}>Customer</h4>
                    <Typography style={{paddingLeft: '7px'}}>Customer 1</Typography>
                  </Grid>

                  <Grid item xl={4} xs={12} sm={4}>
                    <h4 style={{textTransform: 'uppercase'}}>Waiting Time</h4>
                    <Typography style={{paddingLeft: '7px'}}>3 Hours</Typography>
                  </Grid>

                  <Grid item xl={4} xs={12} sm={4}>
                    <h4 style={{textTransform: 'uppercase'}}>Organization</h4>
                    <Typography style={{paddingLeft: '7px'}}>Organization1</Typography>
                  </Grid>

                  <Grid item xl={12} xs={12} sm={12}>
                    <h4 style={{textTransform: 'uppercase'}}>Industries</h4>
                    <CustomChip label='Health Care' skin='light' color='primary' style={{marginRight: '5px'}}/>
                    <CustomChip label='Finance' skin='light' color='info' style={{marginRight: '5px'}}/>
                    <CustomChip label='Industry 3' skin='light' color='error'/>
                  </Grid>

                  <Grid item xl={12} xs={12} sm={12}>

                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <h5 style={{textTransform: 'uppercase'}}>Select Role</h5>
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
                       Approve
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

export default SignUpRequestDetail;
