import React, {ChangeEvent, useState} from 'react';
import useGeneralTable from "../../../../hooks/general-table-hooks/useGeneralTable";
import {rolesListApiRoutes} from "../../../../routes/api-routes/roles-list";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid, TextField,
  Typography
} from "@mui/material";
import CustomChip from "../../../../@core/components/mui/chip";

// import useGeneralTableActions from "../../../../hooks/general-table-hooks/useGeneralTableActions";
import GeneralTable from "../../../components/general-table/GeneralTable";
import GeneralTableToolbar from "../../../components/general-table/GeneralTableToolbar";
import {useForm, Controller, SubmitHandler} from "react-hook-form";


const RolesModule: any[] = [
  {
    id: 1,
    module: "Module 1",
    read: true,
    write: false,
    update: false,
    delete: false,
    status: 'InActive'
  },
  {
    id : 2,
    module : "Module 2",
    read: false,
    write: true,
    update: false,
    delete: false,
    status: 'InActive'
  },
  {
    id : 3,
    module : "Module 3",
    read: false,
    write: false,
    update: false,
    delete: true,
    status: 'InActive'
  },
  {
    id : 4,
    module : "Module 4",
    read: true,
    write: false,
    update: false,
    delete: false,
    status: 'InActive'
  },
  {
    id : 5,
    module : "Module 5",
    read: false,
    write: true,
    update: false,
    delete: false,
    status: 'InActive'
  },
  {
    id : 6,
    module : "Module 6",
    read: false,
    write: false,
    update: true,
    delete: false,
    status: 'InActive'
  }]

type FormValues = {
  roleName: string;
  description: string;
  isActive: boolean;
  isDefault: boolean;
};
const defaultValues = {
  roleName: '',
  description: '',
  isDefault: false,
  isActive: false
}

const RolesDetail = () => {

  const [moduleList, setModuleList] = useState([...RolesModule]);

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

  const handleCheck = (value: boolean, item: any, field: any) => {
    const updatedCell = {...item, [field]: value }
    const index = moduleList.findIndex((f: any) => f.id === item.id)
    const newModuleList = [...moduleList]
    if(newModuleList.length){
      newModuleList.splice(index, 1, updatedCell)
    }
    setModuleList(newModuleList)
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
      headerName: 'Module',
      field: 'module',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.module}
          </Typography>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'read',
      headerName: 'Read',
      renderCell: ({ row, field }) => {
        return (
          <Checkbox
            checked={row.read}
            onChange={() => {
              handleCheck(!row.read, row, field)
            }}
          />

        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'write',
      headerName: 'Write',
      renderCell: ({ row, field }) => {
        return (
          <Checkbox
            checked={row.write}
            onChange={() => {
              handleCheck(!row.write, row, field)
            }}
          />

        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'update',
      headerName: 'Update',
      renderCell: ({ row, field }) => {
        return (
          <Checkbox
            checked={row.update}
            onChange={() => {
              handleCheck(!row.update, row, field)
            }}
          />

        )
      }
    },
    {
      flex: 0.15,
      minWidth: 90,
      field: 'delete',
      headerName: 'Delete',
      renderCell: ({ row, field }) => {
        return (
          <Checkbox
            checked={row.delete}
            onChange={() => {
              handleCheck(!row.delete, row, field)
            }}
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

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues : {...defaultValues}
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("submitted", data)
  }

  // const {finalColumns} = useGeneralTableActions(rolesColumns)

  // @ts-ignore
  return (
    <>
      <Typography fontSize={23} fontWeight={600} color='secondary'>Roles Detail</Typography>
      <Card sx={{marginTop: '20px'}}>
        <CardHeader title={'Role Info'}/>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='roleName'
                    control={control}

                    // rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        size='small'
                        value={value}
                        label='Role Name'
                        onChange={onChange}
                        placeholder='Role Name'

                        // error={Boolean(errors.roleName)}
                        aria-describedby='validation-basic-first-name'
                      />
                    )}
                  />
                  {/*{errors.roleName && (*/}
                  {/*  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>*/}
                  {/*    This field is required*/}
                  {/*  </FormHelperText>*/}
                  {/*)}*/}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='description'
                    control={control}

                    // rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        size='small'
                        value={value}
                        label='Description'
                        onChange={onChange}
                        placeholder='Description'

                        // error={Boolean(errors.description)}
                        aria-describedby='validation-basic-last-name'
                      />
                    )}
                  />
                  {/*{errors.description && (*/}
                  {/*  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>*/}
                  {/*    This field is required*/}
                  {/*  </FormHelperText>*/}
                  {/*)}*/}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <Controller
                    name='isDefault'
                    control={control}

                    // rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        label='Is Default'
                        sx={errors.isDefault ? { color: 'error.main' } : null}
                        control={
                          <Checkbox

                              // @ts-ignore
                            size='large'
                            {...field}
                            name='validation-basic-checkbox'

                            // sx={errors.checkbox ? { color: 'error.main' } : null}
                          />
                        }
                      />
                    )}
                  />
                  {/*{errors.isDefault && (*/}
                  {/*  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-checkbox'>*/}
                  {/*    This field is required*/}
                  {/*  </FormHelperText>*/}
                  {/*)}*/}
                </FormControl>
                <FormControl>
                  <Controller
                    name='isActive'
                    control={control}

                    // rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        label='IsActive'

                        // sx={errors.isActive ? { color: 'error.main' } : null}
                        control={
                          <Checkbox

                              // @ts-ignore
                            size='large'
                            {...field}
                            name='validation-basic-checkbox'

                            // sx={errors.checkbox ? { color: 'error.main' } : null}
                          />
                        }
                      />
                    )}
                  />
                  {errors.isActive && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-checkbox'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button size='large' type='submit' variant='contained'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>


      </Card>
      <Card sx={{marginTop: '20px'}}>
        <CardHeader title={'Accessible Module'}/>
        <CardContent>
          <GeneralTable
            columns={rolesColumns}
            rows={moduleList}
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
}

export default RolesDetail;
