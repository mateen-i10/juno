// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
  {
    stats: '53',
    title: 'Total Users',
    color: 'primary',
    icon: 'tabler:users'
  },
  {
    color: 'info',
    stats: '21',
    title: 'Active',
    icon: 'tabler:users'
  },
  {
    color: 'error',
    stats: '32',
    title: 'In Active',
    icon: 'tabler:users'
  }
]

const renderStats = () => {
  return data.map((sale:any, index) => (
    <Grid item xs={6} md={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
          <Icon icon={sale.icon} fontSize='1.5rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const EcommerceStatistics = () => {
  return (
    <Card>
      <CardHeader
        title='Users Detail'
        sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}
        action={
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            Updated 1 month ago
          </Typography>
        }
      />
      <CardContent
        sx={{ pt: theme => `${theme.spacing(7)} !important`, pb: theme => `${theme.spacing(7.5)} !important` }}
      >
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EcommerceStatistics
