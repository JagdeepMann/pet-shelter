import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';


const CreatePet = () => {

    const [formInfo, setFormInfo] = useState({
        name: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/create", formInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (

        <div className="container mt-5">
            <Link to="/" className="btn btn-primary mb-3" >Home Page</Link>
            <p></p>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <p></p>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="">Pet Name</label>
                        <input onChange={changeHandler} type="text" className="form-control" id="" name="name" />
                        <p className="text-danger">{errors.name ? errors.name.message : ""}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Type</label>
                        <input onChange={changeHandler} type="text" className="form-control" id="" name="petType" />
                        <p className="text-danger">{errors.petType ? errors.petType.message : ""}</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Description</label>
                        <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="description" />
                        <p className="text-danger">{errors.description ? errors.description.message : ""}</p>
                    </div>
                    <p>Skills (Optional): </p>
                    <div className="form-group">
                        <label htmlFor="">Skill 1:</label>
                        <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="skill1" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 2:</label>
                        <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="skill2" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Skill 3:</label>
                        <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="skill3" />

                    </div>

                    <button type="submit">Add Pet</button>
                    <p></p>
                </form>
            </div>
        </div>

    );
};


export default CreatePet;