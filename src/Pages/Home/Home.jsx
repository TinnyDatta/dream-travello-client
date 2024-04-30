import Banner from "../../components/Banner/Banner";
import CountriesSection from "../../components/CountriesSection/CountriesSection";
import Destination from "../../components/Destination/Destination";
import Services from "../../components/Services/Services";
import TouristsSpotSection from "../../components/TouristsSpotSection/TouristsSpotSection";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TouristsSpotSection></TouristsSpotSection>
           <CountriesSection></CountriesSection>
           <Services></Services>
           <Destination></Destination>
        </div>
    );
};

export default Home;