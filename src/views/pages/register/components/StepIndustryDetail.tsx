// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import React, {useState} from "react";
import CustomTextField from "../../../../@core/components/mui/text-field";
import {SelectChangeEvent} from "@mui/material";

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Industry 1',
  'Industry 2',
  'Industry 3'
]

const StepIndustryDetails = ({ handlePrev }: { [key: string]: () => void }) => {

  const [personName, setPersonName] = useState<string[]>([])
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPersonName(event.target.value as string[])
  }

  return (
    <>
      <Box sx={{ mb: 6 }}>
        <Typography variant='h3' sx={{ mb: 1.5 }}>
          Industry
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Select Industry and category related to what you want to achieve</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>You can select 3 Industries Max.</Typography>
      </Box>

      <Grid container spacing={5}>

        <Grid item xs={12} sm={12}>
          <CustomTextField
            size='medium'
            select
            fullWidth
            label='Select Industry'
            id='select-multiple-placeholder'
            SelectProps={{
              MenuProps,
              multiple: true,
              displayEmpty: true,
              value: personName,
              onChange: e => handleChange(e),
              inputProps: { 'aria-label': 'Without label' },
              renderValue: selected => {
                if ((selected as unknown as string[]).length === 0) {
                  return <em>Select Industry</em>
                }

                return (selected as unknown as string[]).join(', ')
              }
            }}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>

        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button color='secondary' variant='contained' onClick={handlePrev} sx={{ '& svg': { mr: 2 } }}>
              <Icon fontSize='1.125rem' icon='tabler:arrow-left' />
              Previous
            </Button>
            <Button color='success' variant='contained' onClick={() => alert('Submitted..!!')}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default StepIndustryDetails
