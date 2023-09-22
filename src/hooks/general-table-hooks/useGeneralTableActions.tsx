import {useEffect, useState} from "react";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import * as React from "react";

const useGeneralTableActions = (initialColumns: GridColDef[], renderCell: (params: GridRenderCellParams) => React.ReactNode) => {
  console.log('table action',)
  const  [finalColumns, setColumns]= useState<GridColDef[]>([...initialColumns])
  useEffect(() => {
    const final = [...initialColumns,  {
      flex: 0.125,
      minWidth: 140,
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params: GridRenderCellParams) => renderCell(params)
    }]
    setColumns([...final])
  }, [])

  return {finalColumns}
}

export default useGeneralTableActions
