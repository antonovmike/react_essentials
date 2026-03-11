import TextField from "@mui/material/TextField";

export const StyledTextField = ({ onSubmit, ...props }) => {
  return (
    <TextField
      onSubmit={onSubmit}
      autoFocus
      autoComplete="off"
      margin="dense"
      fullWidth
      variant="standard"
      {...props}
    />
  );
};
