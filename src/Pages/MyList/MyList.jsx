import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const MyList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=> res.json())
        .then(data => {
          setItems(data);
        })
    } ,[user]);

    return (
        <div>
<div className="overflow-x-auto my-12">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl">
        <th>Country Name</th>
        <th>Tourist Spot Name</th>
        <th>Average Cost</th>
      </tr>
    </thead>
     
     {
          items?.map(item  => ( 
            
            <tbody key={item._id}>
      <tr className="font-medium my-2">
        <td>{item.country}</td>
        <td>{item.touristsSpot}</td>
        <td>{item.averageCost}</td>
        <td><button className="bg-purple-400 text-white p-2 rounded-lg">Update</button></td>
        <td><button className="bg-purple-400 text-white p-2 rounded-lg">Delete</button></td>
      </tr>
    </tbody>
          ))
     }

  </table>
</div>
        </div>
    );
};

export default MyList;