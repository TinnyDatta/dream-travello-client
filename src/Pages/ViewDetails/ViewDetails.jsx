import {  useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
// import { Helmet } from "react-helmet-async";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const ViewDetails = () => {

  const {id} = useParams();
  console.log(id);
  const [touristsSpot, setTouristsSpot] = useState({});

  useEffect(() => {
    fetch(`https://dream-travello-server.vercel.app/singleTouristsSpot/${id}`)
    .then(res => res.json())
    .then(data => {
      setTouristsSpot(data)
      console.log(data)
    })
  },[id])

  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);


  return (
  <div>
     {/* <Helmet>
            <title>Safe Living | Property Details {id}</title>
           </Helmet> */}
           <div  data-aos = "zoom-in" className="hero h-[500px] rounded-3xl my-8" style={{backgroundImage: 'url(../images/detailsBanner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Explore to show Details</h1>
      <p className="mb-5">If you are feel interested in any of our estates, you can learn all important information here. </p>
    </div>
  </div>
</div>
    <div className="hero sm[900px] md:[600px] lg:h-[600px] rounded-xl mt-6">
      <div className="hero-content flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 lg:gap-20 rounded-lg bg-purple-100 ">
       <div> <img className="rounded-lg shadow-2xl w-[400px] h-[520px] mr- ml-1" src={touristsSpot.image}  /></div>
        <div className="space-y-4 text-red-50 rounded-2xl w-[400px] lg:w-[600px] h-[600px] lg:h-[520px] bg-purple-300 ml-4 p-4">
          <h1 className="text-3xl font-semibold">{touristsSpot.touristsSpot}</h1>
          <h1 className="text-2xl">{touristsSpot.country}</h1>
          <h1 className="text-xl font-semibold  flex flex-row items-center gap-2"><MdLocationPin className="text-white " />{touristsSpot.location}</h1>
          <p className="py-3 text-lg"><span className="font-semibold">Description</span> : {touristsSpot.description} </p>
          <div className="flex flex-row gap-32">
          <p  className="text-lg font-semibold">Average Cost: {touristsSpot.averageCost}  </p>
         <p  className="text-lg font-semibold">Travel Time: {touristsSpot.travelTime} </p>
          </div>
          <div className="flex flex-row gap-32">
          <p  className="text-lg font-semibold">Seasonality:{touristsSpot.seasonality}  </p>
         <p  className="text-lg font-semibold">Tourists Per Year: {touristsSpot.totalVisitorPerYea} </p>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default ViewDetails;