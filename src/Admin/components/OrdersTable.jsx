import React, { useEffect } from 'react';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';

const OrdersTable = () => {

    const dispatch = useDispatch();
    const { adminOrder } = useSelector(store => store)


    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

    //console.log("admin Orders ", adminOrder);

    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);


    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget
        setAnchorEl(newAnchorElArray);
    };
    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = null
        setAnchorEl(newAnchorElArray);
    };

    const handleShippedOrder = (orderId) => {
        dispatch(shipOrder(orderId));
        handleClose();
        console.log("shipped id----------", orderId)
    }
    const handleConfirmedOrder = (orderId) => {
        dispatch(confirmOrder(orderId));
        handleClose();
        console.log("confirm id----------", orderId)
    }
    const handleDeliveredOrder = (orderId) => {
        dispatch(deliveredOrder(orderId));
        handleClose();
        console.log("delivered id---------", orderId)
    }
    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId));

    }



    return (
        <div>
            <Card className="">
                <CardHeader align="left" title="All Orders" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Discount</TableCell>
                                <TableCell align="left">DiscountedPrice</TableCell>
                                <TableCell align="left">Items</TableCell>
                                <TableCell align="left">OrderStatus</TableCell>
                                <TableCell align="left">UpdateStatus</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item, index) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align='right'>
                                        <AvatarGroup sx={{ justifyContent: "start" }}>
                                            {item.orderItem.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {item.orderItem.map((orderItem) => <p>{orderItem.product.title}</p>)}

                                    </TableCell>
                                    <TableCell align="left">₹ {item.totalPrice}</TableCell>
                                    <TableCell align="left">₹ {item.discount}</TableCell>
                                    <TableCell align="left">₹ {item.totalDiscountedPrice}</TableCell>
                                    <TableCell align="left"> {item.totalItem}</TableCell>
                                    <TableCell align="left">
                                        <span
                                            className={`px-2 py-1 text-white rounded 
                                               ${item.orderStatus === "CONFIRMED" ? "bg-green-500"
                                                    : item.orderStatus === "SHIPPED" ? "bg-blue-500"
                                                        : item.orderStatus === "DELIVERED" ? "bg-purple-500"
                                                            : item.orderStatus === "PENDING" ? "bg-yellow-500"
                                                                : item.orderStatus === "PLACED" ? "bg-orange-500"
                                                                    : "bg-gray-500"}
    `}
                                        >
                                            {item.orderStatus}
                                        </span>
                                    </TableCell>


                                    <TableCell align="left">
                                        <Button
                                            id="basic-button"
                                            aria-haspopup="true"
                                            onClick={(event) => handleClick(event, index)}
                                            aria-controls={`basic-menu-${item.id}`}
                                            aria-expanded={Boolean(anchorEl[index])}
                                        >
                                            Status
                                        </Button>
                                        <Menu
                                            id={`basic-menu-${item.id}`}
                                            anchorEl={anchorEl[index]}
                                            open={Boolean(anchorEl[index])}
                                            onClose={() => handleClose(index)}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed</MenuItem>
                                            <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped</MenuItem>
                                            <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Delivered</MenuItem>
                                        </Menu>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => handleDeleteOrder(item.id)}
                                            variant='outlined'
                                        >Delete

                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    );
}

export default OrdersTable;
