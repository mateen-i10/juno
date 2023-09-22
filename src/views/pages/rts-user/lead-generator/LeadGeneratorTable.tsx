import React, {ChangeEvent} from 'react';
import {
  Card, CardContent, IconButton, LinearProgress,
  Typography
} from "@mui/material";
import useGeneralTable from "src/hooks/general-table-hooks/useGeneralTable";
import GeneralTable from "../../../components/general-table/GeneralTable";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import useGeneralTableActions from "src/hooks/general-table-hooks/useGeneralTableActions";
import GeneralTableToolbar from "../../../components/general-table/GeneralTableToolbar";
import Box from "@mui/material/Box";
import {rolesListApiRoutes} from "src/routes/api-routes/roles-list";
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import {ThemeColor} from "src/@core/layouts/types";
import {getInitials} from "src/@core/utils/get-initials";
import Icon from "src/@core/components/icon";


const LeadGeneratorData: any[] = [
  {
    id: 1,
    user:  {id: 1, name: "John Doe", email: "John1@gmail.com"},
    usageTime: '35 mins',
    status: 'active',
    positiveFB: 45,
  },
  {
    id : 2,
    user : {id: 2, name: "John Doe", email: "John2@gmail.com"},
    usageTime : '3 hours',
    status: 'active',
    positiveFB : 83,
  },
  {
    id : 3,
    user : {id: 3, name: "John Doe", email: "John13@gmail.com"},
    usageTime : '35 mins',
    status: 'active',
    positiveFB : 79,
  },
  {
    id : 4,
    user : {id: 4, name: "John Doe", email: "John14@gmail.com"},
    usageTime : '4 hours',
    status: 'active',
    positiveFB : 88,
  },
  {
    id : 5,
    user : {id: 5, name: "John Doe", email: "John15@gmail.com"},
    usageTime : '35 mins',
    status: 'active',
    positiveFB : 45,
  },
  {
    id : 6,
    user : {id: 6, name: "John Doe", email: "John16@gmail.com"},
    usageTime : '3 hours',
    status: 'active',
    positiveFB : 90,
  },
  {
    id : 7,
    user : {id: 7, name: "John Doe", email: "John17@gmail.com"},
    usageTime : '35 mins',
    status: 'active',
    positiveFB : 70,
  },
  {
    id : 8,
    user : {id: 8, name: "John Doe", email: "John1@gmail.com"},
    usageTime : '5 Hours',
    status: 'active',
    positiveFB : 70,
  },
  {
    id : 9,
    user : {id : 9, name: "John Doe", email: "John19@gmail.com"},
    usageTime : '35 mins',
    status: 'active',
    positiveFB : 20,
  },
  {
    id : 10,
    user : {id : 10, name: "John Doe", email: "John10@gmail.com"},
    usageTime : '35 mins',
    status: 'active',
    positiveFB : 15,
  }]


const LeadGeneratorTable = () => {


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
    url: `${rolesListApiRoutes.getRolesList}`,
    queryKey: [`${rolesListApiRoutes.getRolesList}`],
    initialSortColumn: "id",
    initialSortType: "asc",
  })

  const tableActions = (currentRow: GridRenderCellParams) => {
    console.log("current Row", currentRow)

    return (
      <>
        <IconButton aria-label='Lead Details'  size='large'>
          <Icon style={{ fontWeight: 200}} icon='tabler:send' fontSize={20} />
        </IconButton>

        {/*<LeadGeneratoActions DeleteFunc={deleteClick} row={currentRow.row}/>*/}
      </>
    )
  }
  const renderClient = (params: GridRenderCellParams) => {
    const { row } = params
    const stateNum = Math.floor(Math.random() * 6)
    const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
    const color = states[stateNum]

    if (row?.avatar?.length) {
      return <CustomAvatar src={`/images/avatars/${row?.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
    } else {
      return (
        <CustomAvatar
          skin='light'
          color={color as ThemeColor}
          sx={{ mr: 3, fontSize: '.9rem', width: '1.875rem', height: '1.875rem' }}
        >
          {getInitials(row.user.name ? row.user.name : 'John Doe')}
        </CustomAvatar>
      )
    }
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
      flex: 0.25,
      minWidth: 120,
      headerName: 'User',
      field: 'user',
      renderCell: (params: GridRenderCellParams) => {
        const {row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(params)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='h6' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.user.name}
              </Typography>
              <Typography noWrap variant='body2'>
                {row.user.email}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'usageTime',
      minWidth: 90,
      headerName: 'Usage Time',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.usageTime}
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
      field: 'positiveFB',
      headerName: 'Positive Feed Back',
      renderCell: ({ row }) => {
        return (
          <>
            <LinearProgress
              color='primary'
              value={row.positiveFB}
              variant='determinate'
              sx={{
                mr: 4,
                height: 6,
                width: '100%',
                borderRadius: 8,
                backgroundColor: 'background.default',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 8
                }
              }}
            />
            <Typography sx={{ color: 'text.secondary' }}>{`${row.positiveFB}%`}</Typography>
          </>

        )
      }
    }
  ]
  const {finalColumns} = useGeneralTableActions(rolesColumns, tableActions)

  return (
    <>
      <Typography fontSize={23} fontWeight={600} color='secondary'>Lead Generator</Typography>

      <Card sx={{marginTop: '20px'}}>
        <CardContent>
          <GeneralTable
            columns={finalColumns}
            rows={LeadGeneratorData}
            total={total}
            isCheckboxSelection={false}
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            handleSortModel={handleSortModel}
            slots={{toolbar: GeneralTableToolbar}}
            slotProps={{
              toolbar: {
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

export default LeadGeneratorTable;
