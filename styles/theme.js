import { createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', //primary color
        },
        secondary: {
            main: '#dc004e', //secondary color
        },
    },
    typography:{
        h1:{
            fontSize: '2rem' ,
        },
        body1:{
            fontSize: '1rem' ,
        },
    },
});

export default theme;