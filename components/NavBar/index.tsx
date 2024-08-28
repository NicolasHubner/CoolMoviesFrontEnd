import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useRouter} from "next/navigation";
import {useCallback} from "react";
import {colorBackGroundNavBar, colorTypographyDark} from "@/styles/colors";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

type NavItems = 'Home' | 'Reviews' | 'About' | 'Contact';

const navItems: NavItems[] = ['Home', 'Reviews', 'About', 'Contact'];

export function NavBar(props: Props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Coolmovies Frontend
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const router = useRouter()

    const path: Record<NavItems, string> = {
        'Home': '/',
        'Reviews': '/reviews',
        'About': '/about',
        'Contact': '/contact'
    }

    const handleNavItemClick = useCallback((item: keyof typeof path) => {
        const selectedPath = path[item];
        if (selectedPath) {
            router.push(selectedPath);
        } else {
            console.error(`Invalid navigation item: ${item}`);
        }
        //eslint-disable-next-line
    }, [])

    return (
        <Box sx={{display: 'flex', height: 50}}>
            <CssBaseline/>
            <AppBar component="nav" sx={{backgroundColor: colorBackGroundNavBar}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 0.45, display: {xs: 'none', sm: 'block'}, color: colorTypographyDark}}
                    >
                        Coolmovies Frontend
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{color: '#fff'}}
                                    onClick={() => handleNavItemClick(item)}>
                                <Typography sx={{fontWeight: 'bold', color: colorTypographyDark}}>

                                    {item}
                                </Typography>

                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

