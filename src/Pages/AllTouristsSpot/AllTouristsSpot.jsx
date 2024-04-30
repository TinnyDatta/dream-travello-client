import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  const [spots, setSpots] = useState(allSpots);
  console.log(spots)

  const handleSort = e => {
    const sortBy = e.target.value;
    console.log('sorting', sortBy)
    const newSort = [...spots].sort((spotA, spotB) => {
      // ascending
      if(sortBy === 'cost-asc'){
        return spotA.averageCost - spotB.averageCost
      }
      // descending
      else{
        return spotB.averageCost - spotA.averageCost
      }
    })

    setSpots([...newSort])
  }

  return (
    <div>
      {/* <div className="text-center my-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>AverageCost Ascending</a></li>
            <li><a>AverageCost descending</a></li>
          </ul>
        </div>
      </div> */}
      {/* sort */}
      <div className="flex items-center justify-center gap-4 mb-5">
           <span>Sort by</span>
           <select name="sort" onChange={handleSort} className="border min-w-0 px-5 py-2 rounded-md bg-gray-200" defaultValue={''}>
           <option value="cost-asc">AverageCost by Ascending</option>
           <option value="cost-desc">AverageCost by Descending</option>

           </select>
      </div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">

        {
          spots.map((allSpot) => (

            <div key={allSpot._id}  >
              <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="sm:w-[200px] lg:w-[300px] h-[230px] p-2 rounded-full" src={allSpot.image} alt=" " /></figure>
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
                  <div className="card-actions justify-end">
                    <Link to={`/viewDetails/${allSpot._id}`}>
                      <button className="btn bg-purple-500 text-white">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          ))
        }

      </div>
    </div>

  );
};

export default AllTouristsSpot;