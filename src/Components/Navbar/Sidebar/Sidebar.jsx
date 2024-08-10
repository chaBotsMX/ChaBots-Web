import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import "./sidebar.scss";
import ToggleButton from "./ToggleButton/ToggleButton";

const variants = {
  open: {
    /* clipPath: "circle(1200px at calc(100% - 50px) 50px)", */
    width: "50%",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    /* clipPath: "circle(30px at calc(100% - 50px) 50px)", */
    width: "0%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;