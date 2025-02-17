import SpWrapper from "../components/spWrapper";
import PComponent from "../components/particles";
import PcWrapper from "../components/pcWrapper";
import Navbar from "../components/navbar";


const Home = () => {

    return (
        <div className="home">
            <Navbar />
            <PComponent />
            {/* SpWrapper will display when it is less than 960px */}
            <SpWrapper />
            <PcWrapper />
        </div>
    )

}

export default Home;