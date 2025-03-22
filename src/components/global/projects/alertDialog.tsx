"use client";
import {
  AlertDialog,

  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Prop = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  btnTitle: string;
  alertTitle: string;
  description: string;
  handleConfirm: () => void;
  loading: boolean;
};

export default function AlertDialogComponent({
  open,
  setOpen,
  btnTitle,
  alertTitle,
  description,
  handleConfirm,
  loading,
}: Prop) {
  return (
    <AlertDialog  open={open} onOpenChange={setOpen} >
      <AlertDialogTrigger asChild  >
        <Button variant="outline" className=" text-xs">{btnTitle || "Open"}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" border-black">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {alertTitle || "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>{description || ""}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
          className=" text-xs"
            variant={"destructive"}
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? (
              <span className=" flex gap-1 items-center justify-center">
              
                <span>Deleting..</span>
                <Loader2 className=" animate-spin" />{" "}
              </span>
            ) : (
              "Continue"
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
