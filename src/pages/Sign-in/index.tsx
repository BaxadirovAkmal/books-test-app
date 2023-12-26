import React from 'react'
import LoginForm from './Form';
import { Box, Typography } from '@mui/material';

const style = { width: '21.5rem', padding: '2.4rem 1.4rem', borderRadius: '12px', background: '#FEFEFE'}
const typographyStyle = { color: '#151515', fontSize: '1.8rem', fontStyle: 'normal', fontWeight: '700', lineHeight: 'normal', textAlign: 'center', fontFamily: 'Mulish', mb: '1.8rem'}
const SignIn = () => {
  return (
	  <section className='login'>
      <Box sx={style}>
        <Typography variant='h4' sx={typographyStyle}>Sign in</Typography>
        <LoginForm />
      </Box>
    </section>
  )
}

export default SignIn;