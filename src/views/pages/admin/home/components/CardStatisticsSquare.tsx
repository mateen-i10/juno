// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CardStatsSquare from '../components/CardStatsSquare'
import { Key } from 'react'

// @ts-ignore
const CardStatisticsSquare = ({data}) => {
    const renderData = data
        ? data.map((item: any, index: Key | null | undefined) => (
      <Grid item xs={12} md={4} key={index}>
        <CardStatsSquare {...item} />
      </Grid>
    ))
    : null

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatisticsSquare
