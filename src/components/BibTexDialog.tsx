import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BibTexDialogProps {
  doi: string;
}

const BibTexDialog: React.FC<BibTexDialogProps> = ({ doi }) => {
  const { toast } = useToast();

  const bibTeX = `@misc{kran2025darkbenchbenchmarkingdarkpatterns,
      title={DarkBench: Benchmarking Dark Patterns in Large Language Models}, 
      author={Esben Kran and Hieu Minh "Jord" Nguyen and Akash Kundu and Sami Jawhar and Jinsuk Park and Mateusz Maria Jurewicz},
      year={2025},
      eprint={2503.10728},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2503.10728}, 
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibTeX);
    toast({
      title: "Copied to clipboard",
      description: "BibTeX citation has been copied to your clipboard.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm hover:text-foreground transition-colors cursor-pointer">
          {doi}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>BibTeX Citation</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm whitespace-pre-wrap font-mono">
              {bibTeX}
            </pre>
          </div>
          <Button onClick={copyToClipboard} className="w-full">
            <Copy className="w-4 h-4 mr-2" />
            Copy to Clipboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BibTexDialog;