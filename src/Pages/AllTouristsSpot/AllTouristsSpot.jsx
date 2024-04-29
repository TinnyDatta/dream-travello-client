import { useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {

  const allSpots = useLoaderData();

    return (

        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                allSpots.map((allSpot) => (
                    
                    <div key={allSpot._id}  >
                    <div className="card card-side bg-base-100 shadow-xl">
       <figure><img className="sm:w-[200px] lg:w-[300px] h-[230px] p-2 rounded-full" src={allSpot.image} alt=" "/></figure>
       <div className="card-body">
         <h2 className="card-title">{allSpot.touristsSpot}</h2>
         <div className="flex flex-col text-lg">
           <p>Travel Time : {allSpot.travelTime}</p>
           <p>Seasonality : {allSpot.seasonality}</p>
         </div>
         <div className="flex flex-col text-lg">
         <p>Average Cost : {allSpot.averageCost}</p>
         <p>Visitor Per Year : {allSpot.totalVisitorPerYear}</p>
         </div>
       </div>
     </div>
                    </div>
                    
                ))
            }
               
        </div>
        
    );
};

export default AllTouristsSpot;