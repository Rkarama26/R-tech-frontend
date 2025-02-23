import { Box, Button, Card, CardContent, styled, Typography } from '@mui/material';
import React from 'react';

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute',
})

const Achievements = () => {
    return (
        <Card className='' sx={{ position: "relative", padding: 2, bgcolor:"grey", color:"white" }}>
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Left-aligned text */}
                    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
                            Shop With Zosh
                        </Typography>
                        <Typography>Congratulations</Typography>
                        <Typography variant='h5' sx={{my:3.1}}>420.8k</Typography>
                        <Button size="small" variant="contained">
                            View sales
                        </Button>
                    </Box>

                    {/* Right-aligned image */}
                    <TrophyImg src="/Admin_images/Trophy.png" />
                </Box>
            </CardContent>
        </Card>
    );
}

export default Achievements;
