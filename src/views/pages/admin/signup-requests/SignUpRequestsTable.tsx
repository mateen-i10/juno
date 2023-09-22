import React, {ChangeEvent} from 'react';
import {Card, CardContent, IconButton} from "@mui/material";
import GeneralTable from "../../../components/general-table/GeneralTable";
import useGeneralTableActions from "../../../../hooks/general-table-hooks/useGeneralTableActions";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "../../../../utility/commons/CommonConfigurations";
import useGeneralTable from "../../../../hooks/general-table-hooks/useGeneralTable";
import GeneralTableToolbar from "../../../components/general-table/GeneralTableToolbar";
import CustomAvatar from "../../../../@core/components/mui/avatar";
import {getInitials} from "../../../../@core/utils/get-initials";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import Link from "next/link";
import {appRoutes} from "../../../../routes/client-app-routes";
import Icon from "../../../../@core/components/icon";
import Tooltip from "@mui/material/Tooltip";
import CustomChip from 'src/@core/components/mui/chip'
import Grid from "@mui/material/Grid";

const renderClient = (row: any) => {
  if (row?.avatar?.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 2.5, width: 38, height: 38 }}/>
  } else {
    return (
      <CustomAvatar
        style={{backgroundColor: 'rgb(202 210 235)', color: '#6c6ced'}}
        skin='light-static'
        color='error'
        sx={{ mr: 2.5, width: 38, height: 38, fontSize: '1rem', fontWeight: 500 }}
      >
        {getInitials(row.login ? `${row.login}` : 'C1')}
      </CustomAvatar>
    )
  }
}

const fakeDb = [
  {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    waitingTime: "2 hours",
    industry: [
      // eslint-disable-next-line react/jsx-key
      <CustomChip label='Health Care' skin='light' color='primary' style={{marginRight: '3px'}}/>,
      // eslint-disable-next-line react/jsx-key
      <CustomChip label='Finance' skin='light' color='error' style={{marginRight: '3px'}}/>,
      // eslint-disable-next-line react/jsx-key
      <CustomChip label='Industry 3' skin='light' color='secondary' />
    ],
    organization: "Organization 1",
    userName: "User 1",
    email: "John19@gmail.com",
    id: 1
  },
  {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    waitingTime: "1 hours",
    industry: [
      // eslint-disable-next-line react/jsx-key
      <CustomChip label='Health Care' skin='light' color='primary' style={{marginRight: '3px'}}/>,
      // eslint-disable-next-line react/jsx-key
      <CustomChip label='Finance' skin='light' color='error' style={{marginRight: '3px'}}/>
    ],
    organization: "Organization 2",
    userName: "User 2",
    email: "John19@gmail.com",
    id: 2
  },
  {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    waitingTime: "3 hours",
    industry: <CustomChip label='Finance' skin='light' color='error' />,
    organization: "Organization 3",
    userName: "User 3",
    email: "John19@gmail.com",
    id: 3
  }
]

const SignUpRequestsTable = () => {

  const theme = useTheme()

  const columns: GridColDef[] = [
    {
      flex: 0.100,
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
      flex: 0.160,
      minWidth: 80,
      field: 'userName',
      headerName: 'User',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(row)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap variant='h6' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.userName}
              </Typography>
              <Typography noWrap variant='body2'>
                {row.email}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      field: 'waitingTime',
      minWidth: 90,
      headerName: 'Waiting Time',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.waitingTime}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'organization',
      headerName: 'Organization',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ color: 'text.secondary' }}>
            {row.organization}
          </Typography>
        )
      }
    },
    {
      flex: 0.27,
      minWidth: 150,
      headerName: 'Industry',
      field: 'industry',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.industry}
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
    // @ts-ignore
    return (
      <>
        <Link href={`${appRoutes.signUpRequests}/${currentRow.id}${appRoutes.signUpRequestDetail}`} style={{textDecoration: "none"}}>
          <Tooltip title="Detail">
            <IconButton>
              <Icon style={{color: theme.palette.secondary.dark, fontWeight: 200}} icon='tabler:eye' fontSize={20} />
            </IconButton>
          </Tooltip>
        </Link>
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
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Errors List'}>Sign Up Requests List</h2>
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
                buttonText: 'Invite a User',
                buttonUrl: `${appRoutes.signUpRequests}/invite?invite`,
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

export default SignUpRequestsTable;
