import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const PetDetails = (props) => {

    const [petDetails, setPetDetails] = useState({});
    const [likes, setLikes] = useState(1)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => {
                console.log(`***********`);
                console.log(res.data);
                console.log(`***********`);
                setPetDetails(res.data.results);
            })
        .catch(err => console.log(err));
    }, []);

    const deleteHandler =()=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${props.id}`)
        .then(res=>{
            console.log(`***********`);
            console.log(res)
            console.log(`***********`);
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const grantLikes=(e, petDetails)=>{
        setLikes(likes+1)
        petDetails.likes +=1
        console.log(petDetails)
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, petDetails)
            .then(res => {
                console.log("reponse after PUT request", res)
            })
            .catch(err=> console.log(err))

    }

    const resetLikes=(e, petDetails)=>{
        setLikes(likes-1)
        petDetails.likes = petDetails.likes*0;
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, petDetails)
            .then(res => {
                console.log("reponse after PUT request", res)
            })
            .catch(err=> console.log(err))
    }
    
    return (
        <div className="container mt-3">
            <Link to="/" className="btn btn-primary mb-5" >Home Page</Link>
            <h1>Pet Shelter</h1>
            <h3>Details about: {petDetails.name}</h3>
            <hr></hr>
            <p className="">Type: {petDetails.petType}</p>
            <p>Description: {petDetails.description}</p>
            <hr></hr>
            <p className="font-weight-bold">Skills: </p>
            <p>{petDetails.skill1}</p>
            <p>{petDetails.skill2}</p>
            <p>{petDetails.skill3}</p>
            <hr></hr>
            <div>
                <Link to="#" onClick={deleteHandler} className="btn btn-danger">Adopt {petDetails.name}</Link>
            </div>
            <hr></hr>
            <div>
                <button onClick={ e => grantLikes(e, petDetails) } className="btn btn-success">Like {petDetails.name}</button>
                <p>{petDetails.likes} like(s)</p>
            </div>
            <div>
                <button onClick={ e => resetLikes(e, petDetails) } className="btn btn-success">Reset Likes</button>
            </div>
        </div>
    );
};

export default PetDetails;