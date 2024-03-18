export interface NoteEditDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAdd?: boolean;
}
