import { Dialog, Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { StyledTextField } from "./StyledTextField.jsx";

const PizzaDialog = ({ open, onClose, pizza, onChange, onSave }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <StyledTextField
          label="Name"
          type="text"
          value={pizza.name}
          onChange={(e) => onChange({ ...pizza, name: e.target.value })}
        />
        <StyledTextField
          label="Price"
          type="number"
          value={pizza.price}
          onChange={(e) => onChange({ ...pizza, price: e.target.value })}
        />
        <StyledTextField
          label="Description"
          type="text"
          value={pizza.description}
          onChange={(e) => onChange({ ...pizza, description: e.target.value })}
        />
        <StyledTextField
          label="Image address"
          type="text"
          value={pizza.image}
          onChange={(e) => onChange({ ...pizza, image: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PizzaDialog;
