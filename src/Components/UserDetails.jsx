import userEvent from '@testing-library/user-event';
import React from 'react'
import Table from 'react-bootstrap/Table';


const UserDetails = ({userdetails}) => {

  
    console.log("545=",userdetails);

    let user =  
        userdetails.map((user ,index)=>{
        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td><img style={{width:100}} src={user.image} alt="" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.adress}</td>
                <td>{user.latitude} & {user.longitude}</td>

            </tr>
        )  
        })
  
    return (
    <div>
        <h1>USer Details</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th> Image</th>
          <th> Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Latitude & longitude</th>

        </tr>
      </thead>
      <tbody>
        {user}
      </tbody>
    </Table>
    </div>
  )
}

export default UserDetails
