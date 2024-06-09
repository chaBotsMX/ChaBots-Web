import "./header.scss"

const Header = () => {

    const items = ["Members", "Experience", "Documentation", "Support Us"]
    return(
        <div className="header">
            <div className="wrapper">
                <a href="/home">
                    <img src="/chaBotslogoredesign.png" alt="" />
                </a>
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