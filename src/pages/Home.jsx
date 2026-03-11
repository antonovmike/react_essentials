import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { PizzaContext } from "../context/PizzaContext.jsx";
import { StyledTextField } from "../components/StyledTextField.jsx";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const {
    addPizza,
    getPizzas,
    pizzas,
    deletePizza,
    getOnePizza,
    editPizza,
    onePizza,
  } = useContext(PizzaContext);

  const [newPizza, setNewPizza] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    id: Date.now(),
  });

  const [editedPizza, setEditedPizza] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
    id: Date.now(),
  });

  useEffect(() => {
    getPizzas();
  }, []);

  function handleEdit() {
    editPizza(onePizza?.id, editedPizza);
    setEditModal(false);
    setEditedPizza({
      name: "",
      price: 0,
      description: "",
      image: "",
      id: Date.now(),
    });
  }

  useEffect(() => {
    setEditedPizza({
      name: onePizza?.name || "",
      price: onePizza?.price || 0,
      description: onePizza?.description || "",
      image: onePizza?.image || "",
      id: onePizza?.id || Date.now(),
    });
  }, [onePizza]);

  function handleClose() {
    setIsModal(false);
  }

  function editHandleClose() {
    setEditModal(false);
  }

  function handleAdd() {
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
        {pizzas.map((pizza) => (
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
              <Button
                onClick={() => {
                  getOnePizza(pizza.id);
                  setEditModal(true);
                }}
                size="small"
              >
                Edit
              </Button>
              <Button onClick={() => deletePizza(pizza.id)} size="small">
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <Dialog open={isModal} onClose={handleClose}>
        <DialogContent>
          <StyledTextField
            id="name"
            label="Name"
            type="text"
            onChange={(e) => setNewPizza({ ...newPizza, name: e.target.value })}
          />
          <StyledTextField
            id="name"
            label="Price"
            type="number"
            onChange={(e) =>
              setNewPizza({ ...newPizza, price: e.target.value })
            }
          />
          <StyledTextField
            id="name"
            label="Description"
            type="text"
            onChange={(e) =>
              setNewPizza({ ...newPizza, description: e.target.value })
            }
          />
          <StyledTextField
            id="name"
            label="Image address"
            type="text"
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

      <Dialog open={editModal} onClose={editHandleClose}>
        <DialogContent>
          <StyledTextField
            id="name"
            label="Name"
            type="text"
            value={editedPizza.name}
            onChange={(e) =>
              setEditedPizza({ ...editedPizza, name: e.target.value })
            }
          />
          <StyledTextField
            id="name"
            label="Price"
            type="number"
            value={editedPizza.price}
            onChange={(e) =>
              setEditedPizza({ ...editedPizza, price: e.target.value })
            }
          />
          <StyledTextField
            id="name"
            label="Description"
            type="text"
            value={editedPizza.description}
            onChange={(e) =>
              setEditedPizza({ ...editedPizza, description: e.target.value })
            }
          />
          <StyledTextField
            id="name"
            label="Image address"
            type="text"
            value={editedPizza.image}
            onChange={(e) =>
              setEditedPizza({ ...editedPizza, image: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={editHandleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
