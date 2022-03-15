import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { goToHome, goToCart, goToProfile } from '../../routes/Coordinator'

export default function Footer(props) {
    const [value, setValue] = React.useState(props.initialValue);
    const navigate = useNavigate()

    return (
        <Box sx={{ width: "100vw", position: 'fixed', bottom: '0', borderTop: '#B9B9B9 1px solid', mt: '150px' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => goToHome(navigate)} icon={<HomeIcon />} />
                <BottomNavigationAction onClick={() => goToCart(navigate)} icon={<ShoppingCartIcon />} />
                <BottomNavigationAction onClick={() => goToProfile(navigate)} icon={<PersonIcon />} />
            </BottomNavigation>
        </Box>
    )
}