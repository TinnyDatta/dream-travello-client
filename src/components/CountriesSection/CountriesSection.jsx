import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const CountriesSection = () => {

  // const {id} = useParams();
  // console.log(id);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://dream-travello-server.vercel.app/countries')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data)
    })
  },[])


    return (
        <div className="my-12">
             <h1 className="text-3xl font-semibold text-center pb-2 my-12">Countries</h1>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 bg-purple-200 rounded-lg p-3">
            {
              countries.map((country) => (
                <Link 
                to='/specificCountry'
                key={country._id} className="card card-side bg-base-100 shadow-xl transition border-2 hover:scale-105 hover:border-purple-400">
  <figure><img className=" rounded-e-badge p-2" src={country.image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{country.country}</h2>
    <h2 className="text-lg">{country.description}</h2>
  </div>
</Link>
              ))
            }
            
   
        </div>
        </div>
    );
};

export default CountriesSection;