import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f7f9fc'
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                },
            },
        },
    },
});