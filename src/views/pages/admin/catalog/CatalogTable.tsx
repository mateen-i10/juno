import React, {ChangeEvent} from 'react';
import {Card, CardContent, IconButton} from "@mui/material";
import GeneralTable from "../../../components/general-table/GeneralTable";
import useGeneralTableActions from "../../../../hooks/general-table-hooks/useGeneralTableActions";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "../../../../utility/commons/CommonConfigurations";
import useGeneralTable from "../../../../hooks/general-table-hooks/useGeneralTable";
import GeneralTableToolbar from "../../../components/general-table/GeneralTableToolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import Link from "next/link";
import {appRoutes} from "../../../../routes/client-app-routes";
import Icon from "../../../../@core/components/icon";
import Tooltip from "@mui/material/Tooltip";
import CustomChip from 'src/@core/components/mui/chip'
import Grid from "@mui/material/Grid";
import ManageProjectActions from "./components/ManageProjectActions";

const fakeDb = [
  {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    models: <CustomChip label='3' skin='light' color='info' />,
    industries: <CustomChip label='20' skin='light' color='info' />,
    status: <CustomChip label='Active' skin='light' color='success' />,
    releaseDate: "29-Sep-2023",
    modelName: "Catalog 1",
    id: 1
  },
  {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    models: <CustomChip label='15' skin='light' color='info' />,
    industries: <CustomChip label='10' skin='light' color='info' />,
    status: <CustomChip label='In Active' skin='light' color='error' />,
    releaseDate: "29-July-3045",
    modelName: "Catalog 2",
    id: 2
  },
  {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    models: <CustomChip label='12' skin='light' color='info' />,
    industries: <CustomChip label='30' skin='light' color='info' />,
    status: <CustomChip label='Active' skin='light' color='error' />,
    releaseDate: "29-Jan-2023",
    modelName: "Catalog 3",
    id: 3
  }
]

const CatalogTable = () => {

  const theme = useTheme()

  const columns: GridColDef[] = [
    {
      flex: 0.05,
      minWidth: 40,
      field: 'index',
      headerName: 'Id',
      renderCell: (params: GridRenderCellParams) => (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.id}
        </Typography>
      )
    },
    {
      flex: 0.150,
      minWidth: 80,
      field: 'modelName',
      headerName: 'Model Name',
      renderCell: ({ row }) => {
        return (
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
              {row.modelName}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.12,
      minWidth: 80,
      headerName: 'Release Date',
      field: 'releaseDate',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.releaseDate}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      field: 'models',
      minWidth: 90,
      headerName: 'Models',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.models}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      field: 'industries',
      minWidth: 90,
      headerName: 'Industries',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.industries}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 90,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ color: 'text.secondary' }}>
            {row.status}
          </Typography>
        )
      }
    },
  ]

  //hooks
  const {
    total,
    searchValue,
    paginationModel,
    filterOptions,
    handleFilterOptionChange,
    setPaginationModel,
    handleSortModel,
    handleSearch
  } = useGeneralTable({
    url: ``,
    queryKey: [``],
    initialSortColumn: "id",
    initialSortType: "asc",
  })

  // functions
  const deleteClick = async (id: any) => {
    console.log(id, "lets see")

    alert.fire({
      title: 'Do you want to save the changes?',
      ...deleteSwalCommonOptions
    }).then((result) => {
      if (result.isConfirmed) {
        alert.fire('Saved!', '', 'success')
      }
    })

  }
  const tableActions = (currentRow: GridRenderCellParams) => {
    return (
      <>
        <Link href={`${appRoutes.catalogList}/${currentRow.id}${appRoutes.catalogDetail}`} style={{textDecoration: "none"}}>
          <Tooltip title="Detail">
            <IconButton>
              <Icon style={{color: theme.palette.secondary.dark, fontWeight: 200}} icon='tabler:eye' fontSize={20} />
            </IconButton>
          </Tooltip>
        </Link>

        <ManageProjectActions row={currentRow} />

        <div style={{textDecoration: "none"}} onClick={() => deleteClick(currentRow.id)} >
          <Tooltip title="Delete">
            <IconButton>
              <Icon icon='tabler:trash' fontSize={20} />
            </IconButton>
          </Tooltip>
        </div>
      </>
    )
  }

  const {finalColumns} = useGeneralTableActions(columns, tableActions)

  return (
    <>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'List'}>Catalog List</h2>
        </Grid>
      </Grid>
      <Card sx={{marginTop: '0px'}}>
        {/*<CardHeader title={'Errors'}>
        </CardHeader>*/}
        <CardContent>
          <GeneralTable
            columns={finalColumns}
            rows={fakeDb}
            total={total}
            isCheckboxSelection={false}
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            handleSortModel={handleSortModel}
            slots={{toolbar: GeneralTableToolbar}}
            slotProps={{
              baseButton: {
                variant: 'outlined'
              },
              toolbar: {
                value: searchValue,
                filterOptions: filterOptions,
                buttonText: 'Create New Catalog',
                buttonUrl: `${appRoutes.catalogList}/add?addNew`,
                showFiltersInDropdown: false,
                handleFilterOptionChange: handleFilterOptionChange,
                clearSearch: () => handleSearch(''),
                onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)
              }
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default CatalogTable;
