"use client";

import { useState } from "react";
import { Layout, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Header } = Layout;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header className="flex justify-between items-center bg-white px-6 lg:px-12 py-6 lg:py-12">

        <h1 className="text-2xl font-bold py-6">cuberto</h1>
      </Header>

      {/* Fixed Menu Button */}
      <motion.div 
        className="fixed top-4 right-6 lg:right-12 z-50 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <motion.div
          className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full border border-black"
          whileHover={{
            scale: 1.2,
            backgroundColor: "black",
            color: "white",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <MenuOutlined className="text-lg" />
        </motion.div>
      </motion.div>

      {/* Drawer */}
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        className="h-screen p-4"
      >
        {/* Close Button */}
        <motion.div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full border border-black"
            whileHover={{
              scale: 1.2,
              backgroundColor: "black",
              color: "white",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <CloseOutlined className="text-lg" />
          </motion.div>
        </motion.div>

        {/* Drawer Content */}
        <div className="mt-12 space-y-4 text-lg font-medium">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </Drawer>
    </>
  );
}
