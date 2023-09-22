import React, {ChangeEvent} from 'react';
import {
  Card, CardContent,
  Typography
} from "@mui/material";
import useGeneralTable from "src/hooks/general-table-hooks/useGeneralTable";
import GeneralTable from "../../../components/general-table/GeneralTable";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import useGeneralTableActions from "src/hooks/general-table-hooks/useGeneralTableActions";
import GeneralTableToolbar from "../../../components/general-table/GeneralTableToolbar";
import Box from "@mui/material/Box";
import CustomChip from 'src/@core/components/mui/chip'
import {orgApiRoutes} from "../../../../routes/api-routes/org-list";
import OrgsTableActions from "./OrgsTableActions";
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "../../../../utility/commons/CommonConfigurations";




const orgsListData: any[] = [
  {
    id: 1,
    orgsName: 'Organization 1',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Active',
  },
  {
    id : 2,
    orgsName: 'Organization 5',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Active',
  },
  {
    id : 3,
    orgsName: 'Organization 1',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Suspend',
  },
  {
    id : 4,
    orgsName: 'Organization 9',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Active',
  },
  {
    id : 5,
    orgsName: 'Organization 1',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Active',
  },
  {
    id : 6,
    orgsName: 'Organization 7',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Suspend',
  },
  {
    id : 7,
    orgsName: 'Organization 1',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'in-Active',
  },
  {
    id : 8,
    orgsName: 'Organization 1',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Active',
  },
  {
    id : 9,
    orgsName: 'Organization 2',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'Active',
  },
  {
    id : 10,
    orgsName: 'Organization 1',
    users: 12,
    runningLabs: 5,
    errors: 7,
    status: 'in-Active',
  }]


const CatalogTable = () => {


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
    url: `${orgApiRoutes.getOrgList}`,
    queryKey: [`${orgApiRoutes.getOrgList}`],
    initialSortColumn: "id",
    initialSortType: "asc",
  })

  const statusColors = {
    'Active': 'success',
    'in-Active': 'error',
    'Suspend' : 'warning'
  }

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


        <OrgsTableActions DeleteFunc={deleteClick} row={currentRow.row}/>
      </>
    )
  }

  /// Organiation name, users, running labs, status, errors
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
      flex: 0.25,
      minWidth: 120,
      headerName: 'Organization name',
      field: 'orgsName',
      renderCell: (params: GridRenderCellParams) => {
        const {row} = params

        return (<Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography noWrap variant='h6' sx={{color: 'text.primary', fontWeight: 600}}>
            {row.orgsName}
          </Typography>
        </Box>)
      }
    },
    {
      flex: 0.15,
      field: 'users',
      minWidth: 90,
      headerName: 'Users',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.users}
              {/*{format(new Date(row.usageTime), 'EEE, dd, MMM, yy')}*/}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'runningLabs',
      minWidth: 90,
      headerName: 'Running Labs',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.runningLabs}
              {/*{format(new Date(row.usageTime), 'EEE, dd, MMM, yy')}*/}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => {
        // @ts-ignore
        return (
          <CustomChip
            rounded
            size='small'
            skin='light'

              // @ts-ignore
            color={statusColors[row.status]}
            label= {row.status}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'errors',
      headerName: 'Errors',
      renderCell: ({ row }) => {
        return (
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='error'
            label= {row.errors}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />

        )
      }
    }
  ]
  const {finalColumns} = useGeneralTableActions(rolesColumns, tableActions)

  return (
    <>
      <Typography fontSize={23} fontWeight={600} color='secondary'>Organizations</Typography>

      <Card sx={{marginTop: '20px'}}>
        <CardContent>
          <GeneralTable
            columns={finalColumns}
            rows={orgsListData}
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
                buttonText: 'Create New Organization',

                // buttonUrl: `${appRoutes.rolesList}/new?roles-details`,
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

export default CatalogTable;
