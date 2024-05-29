import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#233044'
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#233044',
                },
            },
        },
    },
});