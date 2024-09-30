import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Display from "./Components/Display/Display";
import Sponsors from "./Components/Sponsors/Sponsors";
import "./landing.scss";

const Landing = () => {
    return (
        <div>
            <Navbar/>
            {/* <Header/> */}
            <Display/>
            <Sponsors/>
        </div>
    )
}

export default Landing;