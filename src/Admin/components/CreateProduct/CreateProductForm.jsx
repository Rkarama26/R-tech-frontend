import { useState } from "react";
import { Chip, Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../State/Product/Action";



const CreateProductForm = () => {

  const [productData, setProductData] = useState({
    imageUrl: "",
    title: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
    datasheet: "",
    features: [],
    specification: [],

  });

  const dispatch = useDispatch();
  const [featureInput, setFeatureInput] = useState("");
  const [specificationInput, setSpecificationInput] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleKeyDown = (e, type) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault(); // Prevent form submission

      setProductData((prevData) => ({
        ...prevData,
        [type]: [...prevData[type], e.target.value.trim()],
      }));

      // Clear input field
      if (type === "features") setFeatureInput("");
      if (type === "specification") setSpecificationInput("");
    }
  };

  const handleDelete = (item, type) => {
    setProductData((prevData) => ({
      ...prevData,
      [type]: prevData[type].filter((i) => i !== item),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData))
    console.log(productData);
  };




  return (
    <div className="">
      {/* heading */}
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          {/* imageURL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          {/* datasheet URL */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Datasheet URL"
              name="datasheet"
              value={productData.datasheet}
              onChange={handleChange}
            />
          </Grid>
          {/* Title */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          {/* Quantity */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          {/* Price */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          {/* Discounted price */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          {/* Discount Percentage */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPercent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          {/* Category */}
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="wStationaryomen">Stationary</MenuItem>
                <MenuItem value="DIY">DIY</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="Sensors">Sensors</MenuItem>
                <MenuItem value="Developement Boards">Developement Boards</MenuItem>
                <MenuItem value="Robotics">Robotics</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="Arduino">Arduino</MenuItem>
                <MenuItem value="Raspberry-pi">Raspberry-pi</MenuItem>
                <MenuItem value="ESP boards">ESP boards</MenuItem>
                <MenuItem value="Motion Sensors">Motion Sensors</MenuItem>
                <MenuItem value="Temperature Sensors">Temperature Sensors</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>

          {/* Features Input */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Add Feature (Press Enter)"
              variant="outlined"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "features")}
            />
            <div style={{ marginTop: "10px" }}>
              {productData.features.map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  onDelete={() => handleDelete(feature, "features")}
                  style={{ margin: "5px" }}
                />
              ))}
            </div>
          </Grid>

          {/* Specifications Input */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Add Specification (Press Enter)"
              variant="outlined"
              value={specificationInput}
              onChange={(e) => setSpecificationInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "specification")}
            />
            <div style={{ marginTop: "10px" }}>
              {productData.specification.map((spec, index) => (
                <Chip
                  key={index}
                  label={spec}
                  onDelete={() => handleDelete(spec, "specification")}
                  style={{ margin: "5px" }}
                />
              ))}
            </div>
          </Grid>


          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 0.7 }}
              color="primary"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>

          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
