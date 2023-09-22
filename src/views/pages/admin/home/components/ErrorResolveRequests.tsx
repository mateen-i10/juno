// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiCardHeader, { CardHeaderProps } from '@mui/material/CardHeader'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import React from "react";
import CustomChip from "../../../../../@core/components/mui/chip";


const CardHeader = styled(MuiCardHeader)<CardHeaderProps>(({ theme }) => ({
  '& .MuiTypography-root': {
    lineHeight: 1.6,
    fontWeight: 500,
    fontSize: '1.125rem',
    letterSpacing: '0.15px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem'
    }
  }
}))

const ErrorResolveRequests = () => {
  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3 } }}>
            <Typography>Error Resolve Requests</Typography>
          </Box>
        }
        action={
          <OptionsMenu
            options={['Share timeline', 'Suggest edits', 'Report bug']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>

        <Card sx={{marginTop: '20px'}}>
          <CardContent>
            <Typography variant='body2' sx={{ color: 'text.disabled', float: 'right' }}>
              <CustomChip rounded label='UnResolved' skin='light' color='error' />
            </Typography>
            <Typography variant={"h6"} sx={{fontSize: '20px'}}>Error 1</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Typography variant='h6' sx={{fontSize: '15px'}}>Use-Case:</Typography>
              <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                Anomaly Detection
              </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Typography variant='h6' sx={{fontSize: '15px'}}>User:</Typography>
              <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                User@organization.com
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{marginTop: '22px'}}>
          <CardContent>
            <Typography variant='body2' sx={{ color: 'text.disabled', float: 'right' }}>
              <CustomChip rounded label='UnResolved' skin='light' color='error' />
            </Typography>
            <Typography variant={"h6"} sx={{fontSize: '20px'}}>Error 1</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Typography variant='h6' sx={{fontSize: '15px'}}>Use-Case:</Typography>
              <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                Anomaly Detection
              </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Typography variant='h6' sx={{fontSize: '15px'}}>User:</Typography>
              <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                User@organization.com
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{marginTop: '22px'}}>
          <CardContent>
            <Typography variant='body2' sx={{ color: 'text.disabled', float: 'right' }}>
              <CustomChip rounded label='UnResolved' skin='light' color='error' />
            </Typography>
            <Typography variant={"h6"} sx={{fontSize: '20px'}}>Error 1</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Typography variant='h6' sx={{fontSize: '15px'}}>Use-Case:</Typography>
              <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                Anomaly Detection
              </Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Typography variant='h6' sx={{fontSize: '15px'}}>User:</Typography>
              <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                User@organization.com
              </Typography>
            </Box>
          </CardContent>
        </Card>

      </CardContent>
    </Card>
  )
}

export default ErrorResolveRequests
