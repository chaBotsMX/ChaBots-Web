import "./header.scss"
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {

    const items = ["Members", "Experience", "Documentation", "Support Us"]
    return(
        <div className="header">
            <div className="wrapper">
                <div className="leftContainer">
                <Sidebar/>
                    <a href="/home">
                        <img src="/chaBotslogoredesign.png" alt="" />
                    </a>
                </div>
                <div className="tabs">
                    {items.map((item) => (
                        <a
                            href={`/${item}`}
                            key={item}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;