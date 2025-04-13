
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileImage } from "lucide-react";

interface PosterDialogProps {
  imageUrl: string;
}

const PosterDialog: React.FC<PosterDialogProps> = ({ imageUrl }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="inline-flex items-center gap-2">
          <FileImage className="w-4 h-4" />
          <span className="text-sm font-medium">Poster</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>DarkBench Poster</DialogTitle>
          <DialogDescription>
            Research poster for the DarkBench paper presented at ICLR 2025
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 overflow-auto max-h-[calc(100vh-200px)]">
          <img 
            src={imageUrl} 
            alt="DarkBench Research Poster" 
            className="w-full h-auto object-contain rounded-md" 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PosterDialog;
