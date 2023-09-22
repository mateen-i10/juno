import React, {ChangeEvent} from 'react';
import {
   Card, CardContent,
  Typography
} from "@mui/material";
import useGeneralTable from "../../../hooks/general-table-hooks/useGeneralTable";
import {innovateLabsApiRoutes} from "../../../routes/api-routes/innovate-labs";
import GeneralTable from "../../components/general-table/GeneralTable";
import {innovateColumns} from "./InnovateLabsColumns"
import alert from "sweetalert2";
import {deleteSwalCommonOptions} from "../../../utility/commons/CommonConfigurations";
import {GridRenderCellParams} from "@mui/x-data-grid";
import useGeneralTableActions from "../../../hooks/general-table-hooks/useGeneralTableActions";
import InnovateTableActions from "./InnovateTableActions";
import GeneralTableToolbar from "../../components/general-table/GeneralTableToolbar";

const innovateTableData: any[] = [
  {
    id : 1,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 1",
  },
  {
    id : 2,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 2",
  },
  {
    id : 3,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 3",
  },
  {
    id : 4,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 4",
  },
  {
    id : 5,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 5",
  },
  {
    id : 6,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 1",
  },
  {
    id : 7,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 2",
  },
  {
    id : 8,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 3",
  },
  {
    id : 9,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 4",
  },
  {
    id : 10,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 5",
  },
  {
    id : 11,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 1",
  },
  {
    id : 12,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 2",
  },
  {
    id : 13,
    name : "Lab1",
    createdOn : '2023-09-11',
    type : 'forcast',
    createdBy : "Customer 3",
  }]


const InnovateLabs = () => {
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
    url: `${innovateLabsApiRoutes.getInnovateLabsList}`,
    queryKey: [`${innovateLabsApiRoutes.getInnovateLabsList}`],
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
        <InnovateTableActions DeleteFunc={deleteClick} row={currentRow.row}/>
      </>
    )
  }

  const {finalColumns} = useGeneralTableActions(innovateColumns, tableActions)


  return (
    <>
      <Typography fontSize={23} fontWeight={600} color='secondary'>Innovate Lab / Labs</Typography>

      <Card sx={{marginTop: '20px'}}>
        <CardContent>
          <GeneralTable
            columns={finalColumns}
            rows={innovateTableData}
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
                buttonText: 'Create Lab',
                showFiltersInDropdown: false,
                placeholder: 'Search By Source',
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

export default InnovateLabs;
