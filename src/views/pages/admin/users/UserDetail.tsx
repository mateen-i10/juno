import React from 'react';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import {CardActions} from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeColor } from 'src/@core/layouts/types'
import { getInitials } from 'src/@core/utils/get-initials'
import Box from "@mui/material/Box";
import Icon from 'src/@core/components/icon'
import CardStatisticsSquare from "../home/components/CardStatisticsSquare";


interface ColorsType {
  [key: string]: ThemeColor
}

const data = {
  id: 1,
  role: 'Role',
  status: 'active',
  industry: [
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Health Care' skin='light' color='info' style={{marginRight: '5px', borderRadius: '5px'}}/>,
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Finance' skin='light' color='info' style={{marginRight: '5px', borderRadius: '5px'}}/>,
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Industry 3' skin='light' color='info' style={{borderRadius: '5px'}}/>
  ],
  firstName: 'John',
  lastName: 'Deo',
  avatarColor: 'primary',
  country: 'USA',
  contact: '(479) 232-9151',
  fullName: 'User 1',
  email: 'gslixby0@abc.net.au',
  avatar: '/images/avatars/14.png'
}

const roleColors: ColorsType = {
  admin: 'error',
  editor: 'info',
  author: 'warning',
  maintainer: 'success',
  subscriber: 'primary'
}

const statusColors: ColorsType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const statsSquare = [
  {
    stats: '105',
    title: 'Errors',
    avatarColor: 'error',
    icon: 'bx:error'
  },
  {
    stats: '400',
    title: 'Running Labs',
    avatarColor: 'success',
    icon: 'tabler:briefcase'
  },
  {
    stats: '520',
    title: 'Total Labs',
    avatarColor: 'info',
    icon: 'tabler:briefcase'
  }
]


const UserDetail = () => {
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Users List'}>Manage User / Users Detail</h2>
        </Grid>
      </Grid>
      <Grid container spacing={6}>

        <Grid item xs={12} md={5}>
          <Card>
            <CardContent sx={{ pt: 13.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {data.avatar ? (
              <CustomAvatar
                src={data.avatar}
                variant='rounded'
                alt={data.fullName}
                sx={{ width: 100, height: 100, mb: 4, borderRadius: '65px' }}
              />
            ) : (
              <CustomAvatar
                skin='light'
                variant='rounded'
                color={data.avatarColor as ThemeColor}
                sx={{ width: 100, height: 100, mb: 4, fontSize: '3rem' }}
              >
                {getInitials(data.fullName)}
              </CustomAvatar>
            )}
            <Typography variant='h5' sx={{ mb: 3 }}>
              {data.fullName}
            </Typography>
            <CustomChip
              rounded
              skin='light'
              size='small'
              label={data.role}
              color={roleColors[data.role]}
              sx={{ textTransform: 'capitalize' }}
            />
          </CardContent>

          <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2.5, width: 38, height: 38 }}>
                  <Icon fontSize='1.75rem' icon='tabler:checkbox' />
                </CustomAvatar>
                <div>
                  <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>Paid</Typography>
                </div>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2.5, width: 38, height: 38 }}>
                  <Icon fontSize='1.75rem' icon='tabler:briefcase' />
                </CustomAvatar>
                <div>
                  <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>Organization Name</Typography>
                </div>
              </Box>
            </Box>
          </CardContent>

          <Divider sx={{ my: '0 !important', mx: 6 }} />

          <CardContent sx={{ pb: 4 }}>
            <Typography variant='body2' sx={{ color: 'text.disabled', textTransform: 'uppercase' }}>
              Details
            </Typography>
            <Box sx={{ pt: 4 }}>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>First Name:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.firstName}</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Last Name:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.lastName}</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Email:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Status:</Typography>
                <CustomChip
                  rounded
                  skin='light'
                  size='small'
                  label={data.status}
                  color={statusColors[data.status]}
                  sx={{
                    textTransform: 'capitalize'
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Contact:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>+1 {data.contact}</Typography>
              </Box>
              <Box sx={{ display: 'flex', mb: 3 }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Industries:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.industry}</Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ mr: 2, fontWeight: 500 }}>Country:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{data.country}</Typography>
              </Box>
            </Box>
          </CardContent>

          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ mr: 2 }}>
              Edit
            </Button>
          </CardActions>

          </Card>

        </Grid>

        <Grid item xs={12} md={7}>
          <CardStatisticsSquare data={statsSquare}/>
        </Grid>

      </Grid>
    </div>
  );
};

export default UserDetail;
