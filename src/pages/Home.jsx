import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { data } from "../helpers/data";
import pizzaContext from "../context/PizzaContext";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const { newPizza, setNewPizza } = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    id: Date.now(),
  });
  const { addPizza } = useContext(pizzaContext);

  function handleClose() {
    setIsModal(false);
  }

  function handleAdd(newPizza) {
    addPizza(newPizza);
    setIsModal(false);
    setNewPizza({
      name: "",
      price: 0,
      description: "",
      image: "",
      id: Date.now(),
    });
  }

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => setIsModal(true)}
        >
          Add Pizza
        </Button>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((pizza) => (
          <Card key={pizza.id} sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia
              sx={{ height: 300 }}
              image={pizza.image}
              title={pizza.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pizza.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {pizza.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <Dialog open={isModal} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewPizza({ ...newPizza, name: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setNewPizza({ ...newPizza, price: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setNewPizza({ ...newPizza, description: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image address"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setNewPizza({ ...newPizza, image: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
