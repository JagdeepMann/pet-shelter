import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllPets = () => {

    const [allPets, setAllPets] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(`***********`);
                console.log(res.data);
                console.log(`***********`);
                setAllPets(res.data.results);
            })
            .catch(err => console.log(err));
    }, [deleteClicked]);

    const deleteHandler = (e, petId) => {
        axios.delete(`http://localhost:8000/api/pets/delete/${petId}`)
            .then(res => {
                console.log(`***********`);
                console.log(res)
                console.log(`***********`);
                setDeleteClicked(deleteClicked + 1)
                // navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (

        <div className="table-container mt-5">
            <h1 className="info">Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            <Link to="/pets/create"><p>add a pet to the shelter</p></Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map(pet =>
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td><Link to={`/pets/${pet._id}`} className="btn btn-info">Details</Link> |
                            | <Link to={`/pets/update/${pet._id}`} className="btn btn-warning">Edit</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};


export default AllPets;