import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Display from "./Components/Display/Display";
import "./landing.scss";

const Landing = () => {
    return (
        <div>
            <Navbar/>
            {/* <Header/> */}
            <Display/>
        </div>
    )
}

export default Landing;