import { Button } from "../../atoms/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "../../atoms/Dialog";

const InviteUserDialog = () => {
  return (
    <Dialog open>
      <DialogTitle>Invite User</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">Invite</Button>
      </DialogActions>
    </Dialog>
  );
};

export default InviteUserDialog;
