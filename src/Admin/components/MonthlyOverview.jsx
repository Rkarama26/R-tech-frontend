import { TrendingUp, AccountCircle, SettingsCell, CurrencyRupee } from '@mui/icons-material';
import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats: '245k',
        title: "Sales",
        color: "primary",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '12.5k',
        title: "Customers",
        color: "success",
        icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '1.3k',
        title: "Products",
        color: "warning",
        icon: <SettingsCell sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '88k',
        title: "Revenue",
        color: "info",
        icon: <CurrencyRupee sx={{ fontSize: "1.75rem" }} />
    },
];

const renderStats = () => {
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display: "flex",
                alignItems: 'center'
            }}>
                <Avatar variant='rounded' sx={(theme) => ({
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    backgroundColor: theme.palette[item.color].main
                })}>
                    {item.icon}
                </Avatar>
                <Box sx={{ display: "flex", flexDirection: 'column' }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>
            </Box>
        </Grid>
    ));
};

const MonthlyOverview = () => {
    return (
        <Card sx={{ bgcolor: "grey", color: "white" }}>
            <CardHeader
                title="Monthly Overview"
                action={
                    <IconButton size='small'>
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            Total 48.3% growth
                        </Box>{' '}
                        this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important',
                    }
                }}
            />
            <CardContent sx={{ pt: (theme) => `${theme.spacing(2)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderStats()}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MonthlyOverview;
