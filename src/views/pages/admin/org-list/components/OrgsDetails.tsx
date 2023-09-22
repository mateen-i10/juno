import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card'
import CustomChip from 'src/@core/components/mui/chip'
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeColor } from 'src/@core/layouts/types'
import Box from "@mui/material/Box";
import CardStatisticsSquare from "../../home/components/CardStatisticsSquare";
import CardStatsWithAreaChart from "../../../../../@core/components/card-statistics/card-stats-with-area-chart";
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
import styles from "../tree-components/TreeViewCss.module.css";
import {Icon} from "@iconify/react";
import AddTreeNode from "../tree-components/AddTreeNode";
import Placeholder from "../tree-components/PlaceHolder";
import Node from "../tree-components/CustomNode";
import useTreeOpenHandler from "../tree-components/CustomDragPreview";
import {appRoutes} from "../../../../../routes/client-app-routes";


interface ColorsType {
  [key: string]: ThemeColor
}
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

const data = {
  id: 1,
  role: 'Role',
  status: 'active',
  orgsName: 'Organization1',
  url: 'https://www.xyz.org',
  country: 'USA',
  admin: 'User 1',
  email: 'gslixby0@abc.net.au',
  city: 'City1',
  zipCode: '12345',
  state: 'california',
  address: 'New Address here'
}

const statusColors: ColorsType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const statsSquare = [
  {
    stats: '105',
    title: 'Errors',
    avatarColor: 'error',
    icon: 'bx:error'
  },
  {
    stats: '400',
    title: 'Running Labs',
    avatarColor: 'success',
    icon: 'tabler:briefcase'
  },
  {
    stats: '520',
    title: 'Total Labs',
    avatarColor: 'info',
    icon: 'tabler:briefcase'
  },
  {
    stats: '400',
    title: 'Running Labs',
    avatarColor: 'success',
    icon: 'tabler:briefcase'
  },
  {
    stats: '520',
    title: 'Total Labs',
    avatarColor: 'info',
    icon: 'tabler:briefcase'
  },
  {
    stats: '105',
    title: 'Errors',
    avatarColor: 'error',
    icon: 'bx:error'
  }
]


const OrgsDetails = () => {

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

  // @ts-ignore
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px',  marginBottom: 10}}>
          <Typography fontSize={23} fontWeight={600} color='secondary'>Organization Detail</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6}>

        <Grid item xs={12} md={5}>
          <Card >

            <CardContent sx={{ pb: 4 }}>
              <Typography variant='h6' sx={{ color: 'text.primary', textTransform: 'uppercase' }}>
               Organization Info
              </Typography>
              <Box sx={{ pt: 4 }}>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Organization Name:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.orgsName}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Organization Url:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.url}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Status:</Typography>
                  <CustomChip
                    rounded
                    skin='light'
                    size='small'
                    label={data.status}
                    color={statusColors[data.status]}
                    sx={{
                      textTransform: 'capitalize'
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Admin:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.admin}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Admin Email:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.email}</Typography>
                </Box>

                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Address:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>+1 {data.address}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>city:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.city}</Typography>
                </Box><Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Zip Code:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.zipCode}</Typography>
              </Box>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>State:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.state}</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ mr: 2, fontWeight: 500 }}>Country:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{data.country}</Typography>
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'start', mt: 32 }}>
              <Button variant='outlined' color='error' sx={{ mr: 2 }}>
                Suspend
              </Button>
              <Button variant='contained' href={`${appRoutes.orgList}/${data.id}`} sx={{ mr: 2 }}>
              Edit
            </Button>
              <Button variant='outlined' color='error' sx={{ mr: 2 }}>
                Delete
              </Button>
            </CardActions>

          </Card>

        </Grid>

        <Grid container item xs={12} md={7} spacing={4}>
          <Grid item xs={12}>
            <CardStatisticsSquare data={statsSquare}/>
          </Grid>
          <Grid item xs={12}>
            <CardStatsWithAreaChart
              stats='97.5k'
              chartColor='success'
              avatarColor='success'
              title='Expanse Statistics'
              avatarIcon='tabler:credit-card'
              chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
            />
          </Grid>
        </Grid>
          <Grid item xs={12} sm={12}>
            <Card >
              <CardContent>
            <DndProvider backend={MultiBackend} options={getBackendOptions()}>

              <div className={styles.wrapper}>
                <div style={{display: "flex", justifyContent: "start"}}>
                  <Button variant="contained" color='primary' size='small' onClick={handleOpenDialog}>
                    <Icon icon='icon-park-solid:add' fontSize={15} style={{marginRight: 5}} /> Add Item
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
              </CardContent>
            </Card>
          </Grid>

      </Grid>
    </div>
  );
};

export default OrgsDetails;
