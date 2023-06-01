import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#007bff', // Màu chính của primary
      },
      secondary: {
        main: '#6c757d', // Màu chính của secondary
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      fontWeightRegular: 400,
    },
    // Các thuộc tính khác của theme
  });

export default theme;
