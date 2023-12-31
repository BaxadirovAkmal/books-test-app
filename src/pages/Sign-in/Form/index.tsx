import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const Paragraph = styled.p`
  position: relative;
  display: block;
  text-align: center;
  margin-top: 1.8rem;
  margin-bottom: 1rem;

  &::before {
    position: relative;
    display: block;
    content: '';
    height: 1px;
    background-color: #000;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    width: 42%;
  }

  &::after {
    position: relative;
    display: block;
    content: '';
    height: 1px;
    background-color: #000;
    text-align: center;
    position: absolute;
    right: 0;
    top: 50%;
    width: 42%;
  }
`;

const LoginForm = () => {
  const style = {border: '1px solid #24272C', borderRadius: '4px', padding: '.5rem 1.2rem', display: 'flex', alignItems: 'center', gap: '.8rem'}
  const boxStyle = {display: 'flex', flexDirection: 'column'}

  const loginSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    username: Yup.string().required('Required')
  })


  return (
	  <Box sx={boxStyle}>
      <Button variant="text" sx={{...style, mb: '.8rem'}} fullWidth>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.16 12.1932C20.16 11.5905 20.1059 11.0109 20.0055 10.4546H12V13.7425H16.5745C16.3775 14.805 15.7786 15.7053 14.8784 16.308V18.4407H17.6254C19.2327 16.9609 20.16 14.7819 20.16 12.1932Z" fill="#4285F4"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 20.5C14.295 20.5 16.2191 19.7389 17.6255 18.4407L14.8784 16.308C14.1173 16.818 13.1436 17.1193 12 17.1193C9.78612 17.1193 7.91226 15.6241 7.24384 13.615H4.40407V15.8173C5.80271 18.5953 8.67726 20.5 12 20.5Z" fill="#34A853"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.24385 13.6151C7.07385 13.105 6.97726 12.5603 6.97726 12C6.97726 11.4398 7.07385 10.895 7.24385 10.385V8.18277H4.40407C3.82839 9.33027 3.49998 10.6285 3.49998 12C3.49998 13.3716 3.82839 14.6698 4.40407 15.8173L7.24385 13.6151Z" fill="#FBBC05"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 6.88072C13.2479 6.88072 14.3684 7.30958 15.2493 8.15186L17.6873 5.7139C16.2152 4.3423 14.2911 3.50003 12 3.50003C8.67726 3.50003 5.80271 5.40481 4.40407 8.18277L7.24384 10.385C7.91225 8.37595 9.78612 6.88072 12 6.88072Z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </Button>
      <Button variant="text" sx={style} fullWidth>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 20.9C6.25 20.15 3 16.45 3 12C3 7.05 7.05 3 12 3C16.95 3 21 7.05 21 12C21 16.45 17.75 20.15 13.5 20.9L13 20.5H11L10.5 20.9Z" fill="url(#paint0_linear_2141_145)"/>
          <path d="M15.5 14.5L15.9 12H13.5V10.25C13.5 9.55 13.75 9 14.85 9H16V6.7C15.35 6.6 14.65 6.5 14 6.5C11.95 6.5 10.5 7.75 10.5 10V12H8.24999V14.5H10.5V20.85C11 20.95 11.5 21 12 21C12.5 21 13 20.95 13.5 20.85V14.5H15.5Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_2141_145" x1="12" y1="20.377" x2="12" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0062E0"/>
          <stop offset="1" stopColor="#19AFFF"/>
          </linearGradient>
          </defs>
        </svg>
        Continue with Facebook
      </Button>
      <Paragraph>OR</Paragraph>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            username: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values)
          }}
        >
          {({ errors, touched }) => {
            return (
              <Form style={{width: '100%'}}>
				<Box>
                  <Typography sx={{fontSize: '.7rem'}}>Your username</Typography>
                  <Field 
                    type='text'
                    name="username"
                    placeholder='Enter your username' 
                    className='form-field_input'
                  />
                </Box>
				<Box sx={{my: '.8rem'}}>
                  <Typography sx={{fontSize: '.7rem'}}>Your email</Typography>
                  <Field 
                    type='text'
                    name="email"
                    placeholder='Enter your email' 
                    className='form-field_input'
                  />
                </Box>
                <Box sx={{mb: '.8rem'}}>
                  <Typography sx={{fontSize: '.7rem'}}>Your username</Typography>
                  <Field 
                    type='text'
                    name="username"
                    placeholder='Enter your username' 
                    className='form-field_input'
                  />
                </Box>

                <Box>
                  <Typography sx={{fontSize: '.7rem'}}>Your password</Typography>
                  <Field 
                    type='password'
                    name="password"
                    placeholder='Enter your password' 
                    className='form-field_input'
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "primary.main", textTransform: 'unset' }}
                  >
                    Sign In
                  </Button>
                  <Grid container sx={{justifyContent: 'center'}}>
                    <Grid item>
                      Already signed up?{' '}
                      <Link href="#" variant="body2">
                        {"Go to sign in"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )
          }}
        </Formik>
      </Box>
    </Box>
  )
}

export default LoginForm;