import React from "react";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomChip from 'src/@core/components/mui/chip'
import {format} from "date-fns";

export  const innovateColumns: GridColDef[] = [
  {
    flex: 0.100,
    minWidth: 40,
    field: 'id',
    headerName: 'ID',
    renderCell: (params: GridRenderCellParams) => {

      return (<Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.id}
      </Typography>)
    }
  },
  {
    flex: 0.15,
    minWidth: 80,
    headerName: 'Name',
    field: 'name',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
          {row.name}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    field: 'createdOn',
    minWidth: 90,
    headerName: 'Created On',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {format(new Date(row.createdOn), 'EEE, dd, MMM, yy')}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 90,
    field: 'type',
    headerName: 'Type',
    renderCell: ({ row }) => {
      return (
        <CustomChip
          rounded
          size='small'
          skin='light'
          color='success'
          label= {row.type}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 90,
    field: 'createdBy',
    headerName: 'Created By',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap sx={{ color: 'text.secondary' }}>
          {row.createdBy}
        </Typography>
      )
    }
  }
]
