import React, {ChangeEvent} from 'react';
import {
   Card, CardContent,
  Typography
} from "@mui/material";
import useGeneralTable from "src/hooks/general-table-hooks/useGeneralTable";
import GeneralTable from "../../components/general-table/GeneralTable";
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "src/utility/commons/CommonConfigurations";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import useGeneralTableActions from "src/hooks/general-table-hooks/useGeneralTableActions";
import RoleListTableActions from "./RoleListTableActions";
import GeneralTableToolbar from "../../components/general-table/GeneralTableToolbar";
import Box from "@mui/material/Box";
import {format} from "date-fns";
import CustomChip from "../../../@core/components/mui/chip";
import {rolesListApiRoutes} from "../../../routes/api-routes/roles-list";
import {appRoutes} from "../../../routes/client-app-routes";

const RoleListTableData: any[] = [
  {
    id: 1,
    roles: "Role1",
    lastModified: '2023-09-11',
    status: 'active',
    moduleAccess: '5',
  },
  {
    id : 2,
    roles : "Role2",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "2",
  },
  {
    id : 3,
    roles : "Role3",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "3",
  },
  {
    id : 4,
    roles : "Role4",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "4",
  },
  {
    id : 5,
    roles : "Role5",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "5",
  },
  {
    id : 6,
    roles : "Role6",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "1",
  },
  {
    id : 7,
    roles : "Role7",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "2",
  },
  {
    id : 8,
    roles : "Role8",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "3",
  },
  {
    id : 9,
    roles : "Role1",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "4",
  },
  {
    id : 10,
    roles : "Role1",
    lastModified : '2023-09-11',
    status: 'active',
    moduleAccess : "5",
  }]


const RoleListTable = () => {
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
    url: `${rolesListApiRoutes.getRolesList}`,
    queryKey: [`${rolesListApiRoutes.getRolesList}`],
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
    return (
      <>
        <RoleListTableActions DeleteFunc={deleteClick} row={currentRow.row}/>
      </>
    )
  }

  const rolesColumns: GridColDef[] = [
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
      headerName: 'Roles',
      field: 'roles',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.roles}
          </Typography>
        )
      }
    },
    {
      flex: 0.15,
      field: 'lastModified',
      minWidth: 90,
      headerName: 'Last Modified',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {format(new Date(row.lastModified), 'EEE, dd, MMM, yy')}
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
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'moduleAccess',
      headerName: 'Module Access',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ color: 'text.secondary' }}>
            {row.moduleAccess}
          </Typography>
        )
      }
    }
  ]
  const {finalColumns} = useGeneralTableActions(rolesColumns, tableActions)

  return (
    <>
      <Typography fontSize={23} fontWeight={600} color='secondary'>Roles List</Typography>

      <Card sx={{marginTop: '20px'}}>
        <CardContent>
          <GeneralTable
            columns={finalColumns}
            rows={RoleListTableData}
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
                buttonText: 'Create New Role',
                buttonUrl: `${appRoutes.rolesList}/new?roles-details`,
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

export default RoleListTable;
