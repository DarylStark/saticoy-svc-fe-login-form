import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1a2333'
        },
        primary: {
            main: '#3c6aa6',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1a2333'
                },
            },
        },
    },
});