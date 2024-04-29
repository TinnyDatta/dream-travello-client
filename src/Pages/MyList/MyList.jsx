import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const MyList = () => {
    const {user} = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);

    const handleDelete = (_id) => {
       console.log(_id);
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          
           fetch(`http://localhost:5000/addTouristsSpots/${_id}`, {
            method : 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
            console.log(data)
            if(data.deletedCount> 0){
               setControl(!control) &&
               Swal.fire({
                title: "Deleted!",
                text: "Deleted successfully.",
                icon: "success"
                   });
            }
           })

        }
      });
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=> res.json())
        .then(data => {
          setItems(data);
        })
    } ,[user, control]);

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
        <td><Link to={`/update/${item._id}`}>
        <button className="bg-purple-400 text-white p-2 rounded-lg">Update</button>
        </Link></td>
        <td><button 
        onClick={() => handleDelete(item._id)}
        className="bg-purple-400 text-white p-2 rounded-lg">Delete</button></td>
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