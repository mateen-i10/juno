// ** React Imports

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'


// ** Icon Imports
import Icon from 'src/@core/components/icon'

const StepOrganizationDetail = ({ handleNext }: { handleNext: () => void }) => {

  return (
    <>
      <Box sx={{ mb: 6 }}>
        <Typography variant='h3' sx={{ mb: 1.5 }}>
          Organizational Information
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Organization Details</Typography>
      </Box>

      <Grid container spacing={8}>

        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <TextField label='Organization Name' placeholder='Organization Name' />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <TextField fullWidth label='Website Link' placeholder='https://www.organization.com' />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <TextField label='Organization Address' placeholder='Enter Organization Address' />
          </FormControl>
        </Grid>

        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button disabled variant='contained' sx={{ '& svg': { mr: 2 } }}>
              <Icon fontSize='1.125rem' icon='tabler:arrow-left' />
              Previous
            </Button>
            <Button variant='contained' onClick={handleNext} sx={{ '& svg': { ml: 2 } }}>
              Next
              <Icon fontSize='1.125rem' icon='tabler:arrow-right' />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default StepOrganizationDetail
