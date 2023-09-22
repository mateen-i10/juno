// ** React Imports
import {Dispatch, SetStateAction} from 'react'

// ** MUI Imports
import {DataGrid, GridColDef, GridSortModel} from '@mui/x-data-grid'

// ** Utils Import
import {GeneralTablePaginationModel} from "../../../hooks/general-table-hooks/useGeneralTable";

type GeneralTableProps = {
  columns: GridColDef[]
  rows: any[]
  total: number
  paginationModel: GeneralTablePaginationModel
  handleSortModel: (val: GridSortModel) => void
  setPaginationModel:  Dispatch<SetStateAction<GeneralTablePaginationModel>>
  slots?: any
  isCheckboxSelection?: boolean
  slotProps?: any
}
const GeneralTable = ({ columns,
                        rows,
                        total,
                        paginationModel,
                        handleSortModel,
                        setPaginationModel,
                        isCheckboxSelection,
                        slots,
                        slotProps }: GeneralTableProps) => {

  return (
      <DataGrid
        autoHeight
        pagination
        rows={rows}
        rowCount={total}
        columns={columns}
        disableColumnFilter
        checkboxSelection = {isCheckboxSelection}
        sortingMode='server'
        paginationMode='server'
        pageSizeOptions={[7, 10, 25, 50]}
        paginationModel={paginationModel}
        onSortModelChange={handleSortModel}
        onPaginationModelChange={setPaginationModel}
        slots={slots}
        slotProps={slotProps}
      />
  )
}

export default GeneralTable
