import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  thumbnail: string;
  link?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    src: "/lovable-uploads/2000a04d-73ee-4f4f-bdf8-29dd7bc3bc88.png",
    alt: "ICLR 2025 oral presentation",
    thumbnail: "/lovable-uploads/2000a04d-73ee-4f4f-bdf8-29dd7bc3bc88.png"
  },
  {
    id: "2", 
    src: "/lovable-uploads/dc05170e-f37c-48cc-a5e7-00e7997e8bf2.png",
    alt: "ICLR 2025 poster presentation",
    thumbnail: "/lovable-uploads/dc05170e-f37c-48cc-a5e7-00e7997e8bf2.png"
  },
  {
    id: "3",
    src: "/lovable-uploads/eec0c0ed-1d55-4252-859f-4cf3634ac2c7.png", 
    alt: "ICLR 2025 oral presentation hall",
    thumbnail: "/lovable-uploads/eec0c0ed-1d55-4252-859f-4cf3634ac2c7.png"
  },
  {
    id: "4",
    src: "/lovable-uploads/19412139-f9ba-4016-9177-401042efb4bc.png", 
    alt: "OECD AISEAI presentation (Paris AI Action Summit)",
    thumbnail: "/lovable-uploads/19412139-f9ba-4016-9177-401042efb4bc.png"
  },
  {
    id: "5",
    src: "/lovable-uploads/78d14649-247d-4937-98a1-72fff223df45.png", 
    alt: "VentureBeat feature: Beyond sycophancy: DarkBench exposes six hidden 'dark patterns' lurking in today's top LLMs",
    thumbnail: "/lovable-uploads/78d14649-247d-4937-98a1-72fff223df45.png",
    link: "https://venturebeat.com/ai/darkness-rising-the-hidden-dangers-of-ai-sycophancy-and-dark-patterns/"
  },
  {
    id: "6",
    src: "/lovable-uploads/f0c8ad37-b8cd-46d5-93d7-2c38fd4099a7.png", 
    alt: "Information feature: Vores tankefrihed er under angreb fra chatbotternes subtile manipulation",
    thumbnail: "/lovable-uploads/f0c8ad37-b8cd-46d5-93d7-2c38fd4099a7.png",
    link: "https://www.information.dk/debat/2025/05/vores-tankefrihed-angreb-chatbotternes-subtile-manipulation"
  }
];

const MediaGallery = () => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">MEDIA</h3>
      <div className="flex gap-3 flex-wrap">
        {mediaItems.map((item, index) => (
          item.link ? (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
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
            </motion.a>
          ) : (
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
          )
        ))}
      </div>
    </div>
  );
};

export default MediaGallery;