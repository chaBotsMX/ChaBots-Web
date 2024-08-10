import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
    const items = ["MEMBERS", "EXPERIENCE", "CONTACT", "DOCUMENTATION"]
    return(
        <div className="header">
            <div className="wrapper">
                <div className="leftContainer">
                    <a href="/home">
                        <motion.img
                            src="/chaBotslogoredesign.png"
                            alt=""
                            whileHover={{
                                scale: 1.025,
                            }}
                        />
                    </a>
                </div>
                <div className="rightContainer">
                    <div className="tabs">
                        {items.map((item) => (
                            <motion.a
                                href={`/${item}`}
                                key={item}
                                whileHover={{
                                    scale: 1.01,
                                    color: "#029DEB",
                                }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;