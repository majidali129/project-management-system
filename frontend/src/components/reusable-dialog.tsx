import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface DialogProps {
  title?: string;
  description?: string;
  open: boolean;
  children: ReactNode;
  setOpen: (open: boolean) => void;
}
const ReusableDialog = ({ title, description, open, children, setOpen }: DialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md  max-h-[90vh] overflow-y-auto p-0 scroll-bar">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="dark">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
