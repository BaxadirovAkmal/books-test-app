import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200EE'
    },

    secondary: {
      main: '#2e74c9'
    },
  },

  typography: {
    h1: {
      fontSize: '1rem',
      fontWeight: 600,
    },

    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },

    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
