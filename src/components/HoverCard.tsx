import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface HoverCardProps {
  children: ReactNode;
  hoverContent?: ReactNode;
  className?: string;
}

const HoverCard = ({ children, hoverContent, className = "" }: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
      
      {hoverContent && (
        <motion.div
          className="absolute inset-0 bg-primary/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {hoverContent}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HoverCard;
