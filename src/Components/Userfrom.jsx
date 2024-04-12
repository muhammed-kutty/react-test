import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserDetails from './UserDetails';

const Userfrom = () => {


    const [inpput, setinpput] = useState({
        name:'',
        email:'',
        adress:'',
        image:''
    })
    const [userDetails, setuserDetails] = useState([])
    const [location, setlocation] = useState({latitude:null,longitude:null})




    const myLocation = ()=>{
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
                setlocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            })
        }else{
            alert("somting went wrong")
        }
    }

    useEffect(()=>{
        myLocation()
    },[])
    

    const latitude = location.latitude
    const longitude = location.longitude

    const handleChange = (e)=>{
        setinpput((values)=>({...values,[e.target.name]:e.target.value,latitude,longitude}))
        if(e.target.files){
                const imagePath = URL.createObjectURL(e.target.files[0])
                setinpput((values)=>({...values,[e.target.name]:imagePath}))
        }
    }

    const handlesubmit =(e)=>{
        e.preventDefault() 
        setuserDetails([...userDetails,inpput])
        
        setinpput({
            name:'',
            email:'',
            adress:'',
            image:''
        })
    }
    
    console.log("user=",userDetails);
    console.log(inpput);
  return (
    <div className='container mt-5'>
        <h1 className='mb-5'><span>Register Form</span></h1>
      <Form onSubmit={handlesubmit} >
      <Form.Group className="mb-3 " >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={inpput.name}  className='text-center' placeholder="Enter Name" onChange={handleChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name='email' value={inpput.email}   className='text-center' placeholder="Email" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name='adress' value={inpput.adress}  className='text-center' placeholder="Enter Your Address" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="file"  className='text-center' name='image' value={""}  placeholder="Upload your Image" onChange={handleChange}  />
      <img style={{width:300 , marginTop:15}} src={inpput.image} alt="" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br />
    <div className="mt-5"></div>
    {

       userDetails.length>0&& <UserDetails userdetails={userDetails}/> 
    }
    </div>
  )
}

export default Userfrom
