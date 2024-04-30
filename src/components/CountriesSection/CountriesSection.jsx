import { useEffect, useState } from "react";



const CountriesSection = () => {

  // const {id} = useParams();
  // console.log(id);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/countries')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data)
    })
  },[])


    return (
        <div className="my-12">
             <h1 className="text-3xl font-semibold text-center pb-2 my-12">Countries</h1>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 bg-purple-200 rounded-lg">
            {
              countries.map((country) => (
                <div key={country._id} className="card card-side bg-base-100 shadow-xl ">
  <figure><img className=" rounded-e-badge p-2" src={country.image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{country.country}</h2>
    <h2 className="text-lg">{country.description}</h2>
  </div>
</div>
              ))
            }
            
   
        </div>
        </div>
    );
};

export default CountriesSection;