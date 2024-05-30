import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ContrastIcon from '@mui/icons-material/Contrast';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// Props
interface SettingsMenuProps {
    toggle_theme: () => void
}

// Component
export default function AccountMenu({ toggle_theme }: SettingsMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box>
                <Tooltip title="Settings">
                    <IconButton
                        onClick={handleClick}
                        size="medium"
                    >
                        <SettingsIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={toggle_theme}>
                    <ListItemIcon>
                        <ContrastIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Toggle theme style</ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
}