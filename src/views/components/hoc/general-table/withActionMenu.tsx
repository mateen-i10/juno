import {IconButton, Menu} from "@mui/material";
import {useState} from "react";
import Icon from "../../../../@core/components/icon";

const withActionsMenu = (Component : any) => (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  return <>
    <IconButton onClick={handleClick}>
      <Icon icon='zondicons:dots-horizontal-triple' fontSize={20} />
    </IconButton>
    <Menu
      id='table-actions-menu'
      anchorEl={anchorEl}
      onClick={handleClose}
      onClose={handleClose}
      open={Boolean(anchorEl)}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Component {...props}/>
    </Menu>
  </>
}

export default withActionsMenu
