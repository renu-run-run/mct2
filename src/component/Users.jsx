import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
   const [userList , setUserList] = useState([]);

   useEffect(()=>{
      axios.get('https://randomuser.me/api/?results=20').then(
        (response)=>{
          setUserList(response.data.results);
          console.log(response.data.results);
        }
      )
   },[]);
    return(
      <>
        <div className="main">
          <h1>Users List</h1>
          <table className="list-group">
            <thead>
             <tr className="list-group-item">
              <th>#</th>
              <th>Name</th>
             </tr>
            </thead>
            <tbody>
             {userList.map((elem, idx)=>{
              return(
                <tr className="list-group-item">
                  <td className="p-3">{idx + 1}</td>
                  <td  className="p-3">
                    <img src={elem.picture.large} alt="p"/>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.gender}</h4>
                  </td>
                  <td  className="p-3">
                    <h4>{elem.email}</h4>
                  </td>
                </tr>
              )
             })}
            </tbody>
          </table>
        </div>
      
      </>
    )
}

export default Users