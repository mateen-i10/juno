import {useCallback, useEffect, useState} from "react";
import {GridSortModel} from "@mui/x-data-grid";
import {useFetchQuery} from "../react-query-hooks/useQueryDefault";
import {baseURL} from "src/utility/api/http";
import {TableFilters} from "src/views/components/general-table/GeneralTableFilterDropdown";
import {SelectChangeEvent} from "@mui/material";
import {useAuth} from "src/hooks/useAuth";

type SortType = 'asc' | 'desc' | undefined | null
export type GeneralTablePaginationModel = { page: number, pageSize: number}

type Props = {
  initialSortType: SortType
  initialSortColumn: string
  url: string
  queryKey: any[],
  initialFilterOptions?: TableFilters[]
}
const useGeneralTable = ({
                           initialSortColumn,
                           initialSortType,
                           url,
                           queryKey,
                           initialFilterOptions
  }: Props) => {
  // ** States
  const [total, setTotal] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [sort, setSort] = useState<SortType>(initialSortType)
  const [rows, setRows] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortColumn, setSortColumn] = useState<string>(initialSortColumn)
  const [paginationModel, setPaginationModel] = useState<GeneralTablePaginationModel>({ page: 0, pageSize: 7 } )
  const [filterOptions, setFilterOptions] = useState<TableFilters[]>( initialFilterOptions ? [...initialFilterOptions] : [])
  const [requestParams, setRequestParams] = useState<any>({
    searchQuery: searchValue,
    pageIndex: paginationModel.page === 0 ? 1 : paginationModel.page,
    pageSize: paginationModel.pageSize

    /*sort,*/
   /* column: sortColumn,*/

  })
  const {setLoading} = useAuth()

  // api call hook
  const { data , refetch, isRefetching, error, isError, status, isLoading } = useFetchQuery({
    key: queryKey,
    requestObject: {
      url: `${baseURL}${url}`,
      params: requestParams
    }})
  console.log('isRefetching, error, isError, status, isLoading, totalPages', isRefetching, error, isError, status, isLoading, totalPages)

  // other hooks
  useEffect( () => {
    if(requestParams.pageIndex > 0) {
      refetch({ cancelRefetch: true })
    }
  }, [requestParams])

  useEffect(() => {
    const currentPage = paginationModel.page  + 1
    setRequestParams({
      ...requestParams,
      searchQuery: searchValue,
      pageSize: paginationModel.pageSize,
      pageIndex: currentPage
    })
}, [sort, searchValue, sortColumn, paginationModel])

  useEffect( () => {
   setLoading(false)
   setTableData()
  }, [data])

  //functions
  const handleFilterOptionChange = (event: SelectChangeEvent, index: number) => {
    const final = filterOptions.map((op, i) => {
      if(i === index) op.selectedValue = event.target.value
      else op.selectedValue = null

      return op
    })

    /* const found = filterOptions[index]
     const paramObj: any = {}
     paramObj[found.fieldName] = found.selectedValue
     setRequestParams({...paramObj})*/
    setFilterOptions([...final])
  }
  const setTableData = useCallback(
   () => {
     if (data && data.data && data.data.data && data.data.misc) {
       setTotal(data.data.misc.total)
       setTotalPages(data.data.misc.totalPages)
       setRows(data.data.data)
     } else if (data && data.data && data.data.misc) {
       setTotal(data.data.misc.total)
       setTotalPages(data.data.misc.totalPages)
       setRows([])
     } else {
       setTotal(0)
       setTotalPages(0)
       setRows([])
     }
   },
   [paginationModel, data]
  )
  const handleSortModel = (newModel: GridSortModel) => {
   if (newModel.length) {
     setSort(newModel[0].sort)
     setSortColumn(newModel[0].field)

   } else {
     setSort(initialSortType)
     setSortColumn(initialSortColumn)
   }
  }

  const handleSearch = (value: string) => {
   setSearchValue(value)
  }

  return {total,
   searchValue,
   rows,
   paginationModel,
   sortColumn,
   handleSearch,
   handleSortModel,
   setPaginationModel,
   setTotal,
   setRows,
   setFilterOptions,
   filterOptions,
   refetch,
   handleFilterOptionChange,
   setRequestParams,
   requestParams,
  }
}

export default useGeneralTable
