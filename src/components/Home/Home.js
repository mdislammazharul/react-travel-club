import React, { useEffect, useState } from 'react';
import AllUsers from '../AllUsers/AllUsers';
import './Home.css'

// all user portion
const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, []);

    // total, male, female portion

    const [addedMember, setAddedMember] = useState([])
    const handelAddtoCart = (newMember) => {
        newMember.isAdded = true;
        const newAddedMember = [...addedMember, newMember]
        setAddedMember(newAddedMember);
    }

    const totalMale = addedMember.filter(member => member.gender === "male");
    const totalFemale = addedMember.length - totalMale.length;

    // guider portion
    const [guiders, setGuiders] = useState([])

    useEffect(() => {
        fetch('./guider.JSON')
            .then(res => res.json())
            .then(data => setGuiders(data))
    }, []);

    return (
        <div>
            <div className="row">
                <h1 className="text-danger">Total Member: {addedMember.length}</h1>
                <h2 className="text-info">Total Male: {totalMale.length}</h2>
                <h2 className="text-info">Total Female: {totalFemale}</h2>
                <div className="col-md-9 left-side">
                    <div className="row">
                        {
                            users.map(user => <AllUsers
                                key={user.cell}
                                user={user}
                                handelAddtoCart={handelAddtoCart}
                            ></AllUsers>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    {
                        guiders.map(guider => (
                            <div className="user-cart">
                                <div className="user-image">
                                    <img src={guider.picture.medium} alt="" />
                                </div>
                                <h6>Name: {guider.name.title} {guider.name.first} {guider.name.last}</h6>
                                <h6>Gender: {guider.gender}</h6>
                                <h6>Phone: {guider.phone}</h6>
                                <h6>Email: {guider.email}</h6>
                                <h6>Country: {guider.location.country}</h6>
                                <button onClick={() => handelAddtoCart(guider)} className="btn btn-info mt-3 mb-3">Add to group</button>
                                <br />
                                <button className="btn btn-primary mb-3">Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;