import {Button, Menu} from "@mui/material";
import Icon from "../../../@core/components/icon";
import {useState} from "react";
import GeneralTableFilterOptions from "./GeneralTableFilterOptions";
import {useTheme} from "@mui/material/styles";

export type selectOption = { label: any, value: any }
export type TableFilters = {label: string, fieldName: string, values: selectOption[], selectedValue?: any , col?: number}
export interface Props {
  options: TableFilters[]
  handleChange : (e: any, index: number) => void,
  showFiltersInDropdown: boolean
  menuWidth?: string
}
const GeneralTableFilterDropdown = ({options, handleChange, showFiltersInDropdown, menuWidth}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return <>
    {!showFiltersInDropdown ? <GeneralTableFilterOptions options={options} handleChange={handleChange}/> : <div style={{padding: theme.spacing(3)}}>
      <Button variant='outlined' sx={{marginRight: '5px'}} aria-label='more' aria-controls='filters-menu' aria-haspopup='true' onClick={handleClick}>
        <Icon icon='tabler:adjustments-alt' fontSize={20} style={{paddingRight: '4px'}} />
        Filters
      </Button>
      <Menu
        keepMounted
        sx={{width: menuWidth ? menuWidth : '800px'}}
        id='filters-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 3,
            px: 5,
            py: 6,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 28,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <GeneralTableFilterOptions options={options} handleChange={handleChange}/>
      </Menu>
    </div>
    }
  </>
}

export default GeneralTableFilterDropdown
