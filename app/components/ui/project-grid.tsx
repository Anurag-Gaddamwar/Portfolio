import { cn } from "@/app/utils/cn";
import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  detailedDescription,
  image,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  detailedDescription?: string | React.ReactNode;
  image?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null); 

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'; 

    if (isOpen) {
      popupRef.current?.focus(); // Focus on the popup when it opens
    } else {
      triggerRef.current?.focus(); // Return focus to the trigger when closing
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);



  return (
    <div>
      <div
      ref={triggerRef}
        onClick={togglePopup}
        className={cn(
          "cursor-pointer row-span-1 ml-10 mr-8 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border-white/[0.1] bg-black border justify-between flex flex-col space-y-4",
          className
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 flex items-center justify-between">
          <div className="flex items-center">
            {icon}
            <div className="font-mono font-bold text-neutral-200 mb-2 ml-2">
              {title}
            </div>
          </div>
          {image && <img src={image} alt={`${title} logo`} className="w-10 h-10 rounded-full" />}
        </div>
        <div className="font-mono ml-2 font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          >
            <motion.div
              ref={popupRef}
              layout
              className="bg-white dark:bg-black rounded-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 relative"
            >
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col items-center">
                {image && <img src={image} alt={`${title} image`} className="mb-4 rounded-lg w-20" />}
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="text-sm dark:text-neutral-300">{detailedDescription}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
