import {Dialog, DialogTitle, IconButton} from "@mui/material"
import Typography from "@mui/material/Typography";
import {Icon} from "@iconify/react";
import React from "react";
import {styled, useTheme} from "@mui/material/styles";
import {IconButtonProps} from "@mui/material/IconButton";

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({theme}) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[6],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[3],
    transform: 'translate(7px, -5px)'
  }
}))

type IProps = {
  isOpen: boolean,
  title: string,
  children: any,
  icon?: string,
  handleClose: () => void,
  maxWidth?: string
}
const GeneralDialog = ({
                         isOpen,
                         title,
                         children,
                         icon,
                         handleClose,
                         maxWidth
                       }: IProps) => {

  const theme = useTheme()

  return <Dialog
    open={isOpen}
    onClose={(event, reason) => {
      if (reason !== 'backdropClick') {
        handleClose()
      }
    }}
    disableEscapeKeyDown
    fullWidth={true}

    // @ts-ignore
    maxWidth={maxWidth ? maxWidth : "md"}
    aria-labelledby='customized-dialog-title'
    sx={{'& .MuiDialog-paper': {overflow: 'visible'}}}
  >
    <DialogTitle id='customized-dialog-title' sx={{p: 4}}>
      <Typography variant='h6' component='span' color='primary'>
        <IconButton aria-label='capture screenshot' color='secondary' size='large'>
          <Icon style={{color: theme.palette.primary.dark, marginTop: -6}} icon={icon ? icon : 'maki:college'} fontSize={20}/>
        </IconButton>
        {title}
      </Typography>
      <CustomCloseButton aria-label='close' onClick={handleClose}>
        <Icon icon='tabler:x' fontSize='1.25rem'/>
      </CustomCloseButton>
    </DialogTitle>
    {children}
  </Dialog>
}

export default GeneralDialog
