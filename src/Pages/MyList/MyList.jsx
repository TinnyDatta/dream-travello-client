import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyList = () => {
    const {user} = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
    } ,[user])

    return (
        <div>
            <div className="overflow-x-auto my-12">
  <table className="table">
    <tbody>
       <tr>
        <td>Brice Swyre <br />
        Brice Swyre <br />
        Brice Swyre 
        </td>
        {/* <button className="mt-10 mr-40">Update</button>
        <button className="mt-10">Delete</button> */}
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyList;