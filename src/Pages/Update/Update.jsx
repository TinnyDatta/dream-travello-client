import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

 const updateSpot = useLoaderData();

 const  {_id, country, touristsSpot, location, seasonality, averageCost, travelTime, image, totalVisitorPerYear, description} = updateSpot;

 const handleUpdateTouristsSpot = event => {
    event.preventDefault();
      
    const form = event.target;
    const country = form.country.value;
    const touristsSpot = form.touristsSpot.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const image = form.image.value;
    const totalVisitorPerYear = form.totalVisitorPerYear.value;
    const description = form.description.value;

    const updatedSpot = {country, touristsSpot, location, seasonality, averageCost, travelTime, image, totalVisitorPerYear, description}

    console.log(updatedSpot);

    // send data to the server
    fetch(`http://localhost:5000/addTouristsSpots/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
       body: JSON.stringify(updatedSpot)  
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount> 0){
            Swal.fire({
                title: 'Success!',
                text: 'Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              }) 
        }
    })
 }


    return (
        <div className="my-12">
            <h2 className="text-3xl text-center font-bold mb-4"><span className="text-purple-500 font-bold text-3xl">Update</span> Tourists Spots</h2>
            <form onSubmit={handleUpdateTouristsSpot}>
               {/* row 2 country name & tourists spot name  */}
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Country Name</span>
          </label>
          <input type="text" name="country" defaultValue={country} placeholder="countryName" className="input input-bordered w-full" />
        </div>
                <div className="form-control md:w-1/2 ml-2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Tourists Spot Name</span>
          </label>
          <input type="text" name="touristsSpot" defaultValue={touristsSpot} placeholder="touristSpotName" className="input input-bordered w-full" />
        </div>
                </div>
                {/* row 3 location & seasonality */}
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Location</span>
          </label>
          <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
        </div>
                <div className="form-control md:w-1/2 ml-2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Seasonality</span>
          </label>
          <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
        </div>
                </div>
                {/* row 4 average cost & travel time */}
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Average Cost</span>
          </label>
          <input type="text" name="averageCost" defaultValue={averageCost} placeholder="Average Cost" className="input input-bordered w-full" />
        </div>
                <div className="form-control md:w-1/2 ml-2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Travel Time</span>
          </label>
          <input type="text" name="travelTime" defaultValue={travelTime} placeholder="Travel Time" className="input input-bordered w-full" />
        </div>
                </div>
                {/* row 5 image url & totalVisitorPerYear */}
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Image URL</span>
          </label>
          <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
        </div>
                <div className="form-control md:w-1/2 ml-2">
          <label className="label">
            <span className="label-text font-semibold text-lg">Total Visitor Per Year</span>
          </label>
          <input type="text" name="totalVisitorPerYear" defaultValue={totalVisitorPerYear}  placeholder="Total Visitor Per Year" className="input input-bordered w-full" />
        </div>
                </div>
                {/* row 6 short description */}
                
                <div className="form-control mb-2 ">
          <label className="label">
            <span className="label-text font-semibold text-lg">Short Description</span>
          </label>
          <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
        </div>
        {/* add button */}
                <input type="submit" value="Update" className="btn btn-block mt-2 bg-purple-400 text-white font-bold text-lg"/>
            </form>
        </div>
    );
};

export default Update;