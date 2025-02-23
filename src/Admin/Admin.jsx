import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import { Box, height, useTheme } from '@mui/system';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { addItemToCart } from '../State/Cart/Action';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ViewListIcon from '@mui/icons-material/ViewList';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Dashboard from './components/Dashboard';

import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import CreateProductForm from './components/CreateProduct/CreateProductForm';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <ViewListIcon /> },
    { name: "AddPrdoducts", path: "/admin/product/create", icon: <PlaylistAddIcon /> },
    { name: "", path: "" },
    { name: "", path: "" },
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // border: "1px solid blue",
                height: "100%"
            }}>

            <>

                {isLargeScreen && <Toolbar />}
                <List>
                    {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>)}
                </List>
            </>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AdminPanelSettingsIcon />
                        </ListItemIcon>
                        <ListItemText>Accounts</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>


        </Box>
    )


    return (
    
            <div className='relative flex h-[100vh] '>
                <CssBaseline />

                <div className='w-[15%] border border-r-gray-500 h-full fixed top-0 ' >
                    {drawer}
                </div>

                <div className='w-[85%] ml-[15%]'>
                    <Routes>

                        <Route path='/' element={<Dashboard />}> </Route>
                        <Route path='/product/create' element={<CreateProductForm />}> </Route>
                        <Route path='/products' element={<ProductsTable />}> </Route>
                        <Route path='/orders' element={<OrdersTable />}> </Route>
                        <Route path='/customers' element={<CustomersTable />}> </Route>
                    </Routes>
                </div>



            </div>

      
    );
}

export default Admin;
