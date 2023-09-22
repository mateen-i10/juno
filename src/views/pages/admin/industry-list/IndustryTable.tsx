import React, {ChangeEvent} from 'react';
import {
  Card, CardContent, IconButton,
  Typography
} from "@mui/material";
import useGeneralTable from "src/hooks/general-table-hooks/useGeneralTable";
import GeneralTable from "../../../components/general-table/GeneralTable";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import useGeneralTableActions from "src/hooks/general-table-hooks/useGeneralTableActions";
import GeneralTableToolbar from "../../../components/general-table/GeneralTableToolbar";
import Box from "@mui/material/Box";
import CustomChip from 'src/@core/components/mui/chip'
import Icon from "src/@core/components/icon";
import {industryApiRoutes} from "../../../../routes/api-routes/industry-list";
import Link from "next/link";
import {appRoutes} from "../../../../routes/client-app-routes";
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "../../../../utility/commons/CommonConfigurations";
import IndustryTableActions from "./IndustryTableActions";

// industries industry Name, Catalog, description, status

const industriesListData: any[] = [
  {
    id: 1,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 2,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 3,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 4,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 5,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 6,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 7,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 8,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 9,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three',
    status: 'active'
  },
  {
    id : 10,
    industryName: 'Industry 1',
    catalog: '20',
    description: 'des description one two three Four Five six',
    status: 'active'
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
        <Link href={`${appRoutes.industryDetail}/${currentRow.row.id}`} style={{textDecoration: "none"}} >
        <IconButton aria-label='Industry Details'  size='large'>
          <Icon style={{ fontWeight: 200}} icon='carbon:view' fontSize={20} />
        </IconButton>
      </Link>
    <IndustryTableActions row={currentRow.row}/>
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
      headerName: 'Industry Name',
      field: 'industryName',
      renderCell: (params: GridRenderCellParams) => {
        const {row } = params

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography noWrap variant='h6' sx={{ color: 'text.primary', fontWeight: 600 }}>
                {row.industryName}
              </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.11,
      field: 'catalog',
      minWidth: 50,
      headerName: 'Catalog',
      renderCell: ({ row }) => {
        return (
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='primary'
            label= {row.catalog}
            sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
          />
        )
      }
    },
    {
      flex: 0.28,
      field: 'description',
      minWidth: 200,
      headerName: 'Description',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', my: 5}}>
            <Typography sx={{ color: 'text.secondary',  whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: 2}} >
              {row.description}
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
    }
  ]
  const {finalColumns} = useGeneralTableActions(rolesColumns, tableActions)

  return (
    <>
      <Typography fontSize={23} fontWeight={600} color='secondary'>Industries</Typography>

      <Card sx={{marginTop: '20px'}}>
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
              baseButton: {
              variant: 'outlined'
            },
              toolbar: {
                buttonText: 'Create New Industry',
                buttonUrl: `${appRoutes.industryList}/new`,
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
