import { FaHotel } from "react-icons/fa6";
import { MdFlightTakeoff } from "react-icons/md";
import { MdDirectionsRailwayFilled } from "react-icons/md";
const Services = () => {
    return (
        <div className="my-12">
            <h2 className="text-3xl text-center font-bold mb-4">Special Services</h2>
   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
   <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <p className="rounded-3xl p-4 bg-purple-700"><  FaHotel className="w-12 h-12 text-white" /></p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Hotel Booking</h2>
    <hr className="text-purple-300 w-36  font-bold"/>
    <p>You can choose hotel of your choice and budget from our website. It can be any five star or any other types of livings according to your comfort. So be the first to book hotel and prepare for the amazing journey with us </p>
  
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <p className="rounded-3xl p-4 bg-purple-700"><MdFlightTakeoff  className="w-12 h-12 text-white" /></p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Flight Booking</h2>
    <hr className="text-purple-300 w-36  font-bold"/>
    <p>If you have some extra budget ane want to have relax while traveling, then you can choose our flight service. We can ensure you that you will be totally safe with us and the sky view will add some extra pleasure </p>
  
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <p className="rounded-3xl p-4 bg-purple-700"><MdDirectionsRailwayFilled className="w-12 h-12 text-white" /></p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">rail Booking</h2>
    <hr className="text-purple-300 w-36  font-bold"/>
    <p>If you have the desire to enjoy the scenery more closely while travelling, then rail journey is the best option for you. You can see the greenery and the nature more closely and it will add thrill to your tour</p>
  
  </div>
</div>
   </div>
        </div>
    );
};

export default Services;