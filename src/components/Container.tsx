"use client";
import React from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`container mx-auto p-4 sm:p-6 md:p-8 xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </motion.div>
  );
}
