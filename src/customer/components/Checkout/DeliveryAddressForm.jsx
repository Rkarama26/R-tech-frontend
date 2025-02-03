import { Box, Button, Grid, TextField } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../State/Order/Action';
import { useNavigate } from 'react-router-dom';

const DeliveryAddressForm = ({ setActiveStep }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("address")

        const data = new FormData(e.currentTarget);

        console.log("address", data);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            streetAddress: data.get("street"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zipCode"),
            mobile: data.get("phoneNumber"),
            alternativeMobile: data.get("alternateNumber"),

        }
        console.log("form data", data);
        const orderData = { address, navigate, setActiveStep };

        dispatch(createOrder(orderData)).then(() => {
            setActiveStep(2); // Move to the next step
        });

        // console.log("orderData", orderData)


    }
    return (
        <div className='text-left'>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll '>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />

                        <Button sx={{ mt: 2, bgcolor: "RGB(145, 85, 253)" }} size='large' variant='contained'> Deliver Here</Button>

                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='Last-name'
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete='street-address'
                                        multiline
                                        rows={3}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete='address-level2'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete='address-level1'
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zipCode"
                                        name="zipCode"
                                        label="zipCode / Postal Code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="street"
                                        name="street"
                                        label="street"
                                        fullWidth
                                        autoComplete='street-address'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='tel'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="alternateNumber"
                                        name="alternateNumber"
                                        label="Alternate Number"
                                        fullWidth
                                        autoComplete='tel'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Button
                                        sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                                        size="large"
                                        variant='contained'
                                        type='submit'>
                                        Deliver Here
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>

                </Grid>

            </Grid>
        </div>
    );
}
export default DeliveryAddressForm;
