import React, {ChangeEvent} from 'react';
import {
  Card, CardContent, CardHeader, IconButton,
  Typography
} from "@mui/material";
import useGeneralTable from "src/hooks/general-table-hooks/useGeneralTable";
import GeneralTable from "../../../../components/general-table/GeneralTable";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import useGeneralTableActions from "src/hooks/general-table-hooks/useGeneralTableActions";
import GeneralTableToolbar from "../../../../components/general-table/GeneralTableToolbar";
import Box from "@mui/material/Box";
import CustomChip from 'src/@core/components/mui/chip'
import Icon from "src/@core/components/icon";
import {industryApiRoutes} from "src/routes/api-routes/industry-list";
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "src/utility/commons/CommonConfigurations";
import IndustryCatalogTableActions from "./IndustryCatalogTableActions";


const industriesListData: any[] = [
  {
    id: 1,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  },
  {
    id : 2,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  },
  {
    id : 3,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  },
  {
    id : 4,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  },
  {
    id : 5,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  },
  {
    id : 6,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  },
  {
    id : 7,
    catalogName: 'Catalog 1',
    releaseDate: '20-09-2023',
    model: '5',
    industries: '20',
    status: 'active'
  }]


const IndustryCatalogTable = () => {


  const {
    total,

    // rows,
    searchValue,
    paginationModel,
    filterOptions,
    handleFilterOptionChange,
    setPaginationModel,
    handleSortModel,
    handleSearch
  } = useGeneralTable({
    url: `${industryApiRoutes.getIndustryList}`,
    queryKey: [`${industryApiRoutes.getIndustryList}`],
    initialSortColumn: "id",
    initialSortType: "asc",
  })

  const deleteClick = async (id: any) => {
    console.log(id.id, "lets see")

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
    console.log("current Row", currentRow)

    return (
      <>
        <IconButton aria-label='Industry Details'  size='large'>
          <Icon style={{ fontWeight: 200}} icon='carbon:view' fontSize={20} />
        </IconButton>
        <IndustryCatalogTableActions row={currentRow.row}/>
        <IconButton aria-label='capture screenshot' size='large'
                onClick={() => deleteClick(currentRow.row)}
        >
          <Icon icon='tabler:trash' fontSize={20} />
        </IconButton>
      </>
    )
  }

  const rolesColumns: GridColDef[] = [
    {
      flex: 0.09,
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
      flex: 0.20,
      minWidth: 80,
      headerName: 'Catalog Name',
      field: 'catalogName',
      renderCell: (params: GridRenderCellParams) => {
        const {row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography noWrap variant='h6' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.catalogName}
              </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.20,
      minWidth: 80,
      headerName: 'Release Date',
      field: 'releaseDate',
      renderCell: (params: GridRenderCellParams) => {
        const {row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap variant='h6' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.releaseDate}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.11,
      field: 'model',
      minWidth: 50,
      headerName: 'Model',
      renderCell: ({ row }) => {
        return (
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='primary'
            label= {row.model}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.11,
      field: 'industries',
      minWidth: 50,
      headerName: 'Industries',
      renderCell: ({ row }) => {
        return (
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='primary'
            label= {row.industries}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => {
        return (
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='success'
            label= {row.status}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    }
  ]
  const {finalColumns} = useGeneralTableActions(rolesColumns, tableActions)

  return (
    <>

      <Card sx={{marginTop: '20px'}}>

            <CardHeader title='Industry Catalog' sx={{fontSize: '1.2em', fontWeight: 600}}/>


        <CardContent>
          <GeneralTable
            columns={finalColumns}
            rows={industriesListData}
            total={total}
            isCheckboxSelection={false}
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            handleSortModel={handleSortModel}
            slots={{toolbar: GeneralTableToolbar}}
            slotProps={{
              toolbar: {
                hideSearchbar: true,
                value: searchValue,
                filterOptions: filterOptions,
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
};

export default IndustryCatalogTable;
