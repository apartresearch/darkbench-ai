import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  thumbnail: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    src: "/lovable-uploads/17c24bff-e8f6-46f3-aef9-c61cb0912fb3.png",
    alt: "DarkBench methodology diagram",
    thumbnail: "/lovable-uploads/17c24bff-e8f6-46f3-aef9-c61cb0912fb3.png"
  },
  {
    id: "2", 
    src: "/lovable-uploads/b2416456-3aa1-4be5-8f21-0cdd0c32958c.png",
    alt: "Results visualization",
    thumbnail: "/lovable-uploads/b2416456-3aa1-4be5-8f21-0cdd0c32958c.png"
  },
  {
    id: "3",
    src: "/lovable-uploads/d1720f6d-9ece-4906-a16f-5454970c5769.png", 
    alt: "Research poster",
    thumbnail: "/lovable-uploads/d1720f6d-9ece-4906-a16f-5454970c5769.png"
  }
];

const MediaGallery = () => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">MEDIA</h3>
      <div className="flex gap-3">
        {mediaItems.map((item, index) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg border border-border hover:border-foreground/20 transition-colors group"
              >
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className="w-16 h-16 object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </motion.button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;