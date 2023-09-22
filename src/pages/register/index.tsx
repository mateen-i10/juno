// ** React Imports
import { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('/public/logo-juno.svg').default.src

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

import React from 'react';
import dynamic from "next/dynamic";

import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'


// ** Styled Components
const RegisterMultiStepsIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 550,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12)
}))

const LeftWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12),
  '& .img-mask': {
    left: 0
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 470
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12)
  }
}))


const RegisterForm = dynamic(import("../../views/pages/register/Register"));

const Register = () => {

  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  const imageSource = 'auth-v2-register-multi-steps-illustration-bordered'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'customColors.bodyBg' }}>
      {!hidden ? (
        <LeftWrapper>
          <Box sx={{ top: 26, left: 26, display: 'flex', position: 'absolute', alignItems: 'center' }}>
            <img width={100} height={70} src={logo} alt={'Logo'}/>
            {/*<Typography sx={{ ml: 2.5, fontWeight: 600, lineHeight: '24px', fontSize: '1.375rem' }}>*/}
            {/*  {themeConfig.templateName}*/}
            {/*</Typography>*/}
          </Box>
          <RegisterMultiStepsIllustration
            alt='register-multi-steps-illustration'
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
        </LeftWrapper>
      ) : null}
      <RightWrapper>
        <Box sx={{ maxWidth: 700 }}>
          <RegisterForm />
        </Box>
      </RightWrapper>
    </Box>
  )
};

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
