import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { findProduct, deleteProduct } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';


const ProductsTable = () => {
    const dispatch = useDispatch();
    const { customerProduct } = useSelector(store => store);
    console.log("products---", customerProduct);

    const handleProductDelete=(productId)=>{
           dispatch(deleteProduct(productId));
    }


    useEffect(() => {
        const data = {
            category: "",
            minPrice: 0,
            maxPrice: 100000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: "in_stock"
        }
        dispatch(findProduct(data))
    }, [customerProduct.deletedProduct])


    if (!customerProduct?.products?.content) {
        return <p>Loading products...</p>;
    }

    return (
        <div className='p-5'>
            <Card className="">
                <CardHeader align="left" title="All Products" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Discount</TableCell>
                                <TableCell align="left">DiscountedPrice</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customerProduct.products.content.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{item.id}</TableCell>

                                    <TableCell align='right'>
                                        <Avatar src={item.imageUrl}></Avatar>
                                    </TableCell>
                                    <TableCell component="th" scope="row">{item.title}</TableCell>
                                    {/* <TableCell align="left">{item.id}</TableCell> */}
                                    <TableCell align="left">₹ {item.price}</TableCell>
                                    <TableCell align="left">{item.discountPercent}%</TableCell>
                                    <TableCell align="left">₹ {item.discountedPrice}</TableCell>
                                    <TableCell align="left">{item.quantity}</TableCell>
                                    <TableCell align="left">
                                        <Button onClick={()=>handleProductDelete(item.id)} 
                                        variant='outlined'>Delete</Button>
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

export default ProductsTable;
