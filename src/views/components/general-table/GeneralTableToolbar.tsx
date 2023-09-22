// ** React Imports
import {ChangeEvent} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import GeneralTableFilterDropdown, {TableFilters} from "./GeneralTableFilterDropdown";
import {Grid} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

interface Props {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
  filterOptions?: TableFilters[]
  handleFilterOptionChange?: (e: any, index: number) => void
  showFiltersInDropdown: boolean
  menuWidth?: string
  placeholder?: string
  hideSearchbar?: boolean
  buttonText?: string
  buttonUrl?:string
}

const GeneralTableToolbar = (props: Props) => {
  const theme = useTheme()

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
      {props.filterOptions && props.handleFilterOptionChange &&
        <GeneralTableFilterDropdown
          options={props.filterOptions}
          handleChange={props.handleFilterOptionChange}
          showFiltersInDropdown={props.showFiltersInDropdown}
          menuWidth={props?.menuWidth || ''}
        />}
      </Grid>
      <Grid item xs={6}>
      <Grid container direction={"row-reverse"}>

        {props.buttonText && <Grid item sx={{padding: theme.spacing(3)}}>
          <Link href={props.buttonUrl ? props.buttonUrl : ""}>
            <Button variant={"contained"} startIcon={<Icon icon='tabler:plus' />} >{props.buttonText}</Button>
          </Link>
        </Grid>}
      {!props.hideSearchbar && <Grid item>
        <TextField
          size='small'
          value={props.value}
          onChange={props.onChange}
          placeholder={props?.placeholder || 'Search…'}
          InputProps={{
            startAdornment: (
              <Box sx={{mr: 2, display: 'flex'}}>
                <Icon icon='tabler:search' fontSize={20}/>
              </Box>
            ),
            endAdornment: (
              <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
                <Icon icon='tabler:x' fontSize={20}/>
              </IconButton>
            )
          }}
          sx={{
            padding: theme.spacing(3),
            width: {
              xs: 1,
              sm: 'auto'
            },
            '& .MuiInputBase-root > svg': {
              mr: 2
            }
          }}
        />
      </Grid>}

      </Grid>
      </Grid>
    </Grid>
  )
}

export default GeneralTableToolbar
