import React, { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";
import Zoom from "react-reveal/Zoom";

const AddReview = () => {
  const [date, setDate] = React.useState(new Date());
  const nameRef = useRef();
  const imgRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const productNameRef = useRef();
  const newDate = date.toLocaleDateString();

  const handleAddReview = (e) => {
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const description = descriptionRef.current.value;
    const rating = ratingRef.current.value;
    const productName = productNameRef.current.value;
    const newReview = { name, img, description, rating, newDate, productName };

    fetch("https://mahima-motors-server.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added Your Review.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div
      style={{
        background:
          'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")',
        paddingBottom: "40px",
        height: "700px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "60px",
      }}
    >
      <Zoom>
        <h2 className="Products-heading">
          Add Your Review About Our Motor Bike
        </h2>
        <form className="add-form" onSubmit={handleAddReview}>
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            inputRef={productNameRef}
            label="Product Name"
            variant="standard"
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
            required
          />
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            inputRef={nameRef}
            label="Your Name"
            variant="standard"
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
            required
          />
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            inputRef={descriptionRef}
            label="description"
            variant="standard"
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
            required
          />

          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            size="small"
            inputRef={imgRef}
            label="Image URL"
            variant="standard"
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
            required
          />
          <TextField
            sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
            id="outlined-size-small"
            inputRef={ratingRef}
            label="description"
            variant="standard"
            className="input-field"
            InputLabelProps={{
              style: { color: "#fff", paddingLeft: "10px" },
            }}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                // openTo="day"
                views={["day"]}
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    className="input-field"
                    InputLabelProps={{
                      style: { color: "#fff", paddingLeft: "10px" },
                    }}
                    sx={{ width: "90%", m: 1, input: { color: "#fff" } }}
                    {...params}
                  />
                )}
              />
            </Stack>
          </LocalizationProvider>
          <Button sx={{ width: "90%", m: 1 }} type="submit" variant="contained">
            Add Review
          </Button>
        </form>
      </Zoom>
    </div>
  );
};

export default AddReview;
