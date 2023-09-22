// ** React Imports
import React, {useEffect, useState} from 'react'

// ** MUI Imports
import Fade from '@mui/material/Fade'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import CustomTextField from "../../@core/components/mui/text-field";
import {iconList} from "../../utility/IconList";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

function IconList() {
  const [visibility, setVisibility] = useState<boolean>(false)
  const [icons, setIcons] = useState<string[]>(iconList)

  const renderIconGrids = () => {
    return icons.map((icon, index) => {
      return (
        <Grid item key={index}>
          <Tooltip arrow title={icon} placement='top'>
            <Card>
              <CardContent sx={{ display: 'flex', p: theme => `${theme.spacing(2)} !important` }}>
                <Icon icon={icon} fontSize='1rem' />
              </CardContent>
            </Card>
          </Tooltip>
        </Grid>
      )
    })
  }

  const filterIcons = (val: any) => {
    const filteredIconList = iconList.filter(e => e.includes(val.target.value))
    setIcons(filteredIconList)
  }

  useEffect(() => {
    setIcons(iconList)
    console.log(iconList.length);

  }, [visibility])

  return (
    <>
      <Button variant="contained" color="primary"  onClick={() => {setVisibility(!visibility)}}>Select Icon</Button>
      <Fade in={visibility} timeout={300}>
        <Card sx={{
          position: 'absolute',
          zIndex: 100,
          marginTop: 2,
          maxWidth: 700,
          minWidth: 300,
          minHeight: 400,
          maxHeight: 500,
        }}>
          <CardHeader
            title='Icon List'
            action={
              <CustomTextField
                placeholder="Search Icons"
                sx={{marginLeft: 2}}
                variant="filled"
                onChange={val => filterIcons(val)}
                id='input-with-icon-textfield'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='ic:baseline-search' />
                    </InputAdornment>
                  )
                }}
              />
            }
          />
          <CardContent sx={{
            overflowY: 'auto',
            minHeight: 200,
            maxHeight: 300
          }}>
            <Grid item xs={12}>
              <Grid container spacing={6}>
                {renderIconGrids()}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>
    </>
  );
}

export default IconList;
