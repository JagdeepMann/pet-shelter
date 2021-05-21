import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const UpdatePet = (props) => {

    const[formInfo, setFormInfo] = useState({
        name: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
    })

    const[errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => {
                console.log(`***********`);
                console.log(res.data);
                console.log(`***********`);
                setFormInfo(res.data.results);
            })
        .catch(err => console.log(err));
    }, []);

    const changeHandler =(e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, formInfo )
        .then(res=>{
            //if errs then res.data.errors
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                navigate("/")
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }


    return (
        <div className="container mt-5">
            <Link to="/" className="btn btn-primary mb-5" >Home Page</Link>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input onChange={changeHandler} type="text" className="form-control" id="" name="name" value={formInfo.name}/>
                    <p className="text-danger">{errors.name ? errors.name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type</label>
                    <input onChange={changeHandler} type="text" className="form-control" id="" name="petType" value={formInfo.petType} />
                    <p className="text-danger">{errors.petType ? errors.petType.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="description" value={formInfo.description}/>
                    <p className="text-danger">{errors.description ? errors.description.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 1</label>
                    <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="skill1" value={formInfo.skill1}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2</label>
                    <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="skill2" value={formInfo.skill2}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3</label>
                    <input onChange={changeHandler} type="Textarea" className="form-control" id="" name="skill3" value={formInfo.skill3}/>
                </div>
                <button type="submit">Edit and Update Pet</button>
                <p></p>
            </form>
        </div>
    );
};


export default UpdatePet;