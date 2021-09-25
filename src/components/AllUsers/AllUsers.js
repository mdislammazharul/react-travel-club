import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './AllUsers.css'

const AllUsers = (props) => {
    const { name, gender, phone, location, email, picture } = props.user;

    return (
        <div className="col-md-4">
            <div className="user-cart">
                <div className="user-image">
                    <img src={picture.medium} alt="" />
                </div>
                <h6>Name: {name.title} {name.first} {name.last}</h6>
                <h6>Gender: {gender}</h6>
                <h6>Phone: {phone}</h6>
                <h6>Email: {email}</h6>
                <h6>Country: {location.country}</h6>
                {
                    props.user.isAdded ? (
                        <button className="btn btn-danger mt-3 mb-3">Already Added</button>
                    ) : (
                        <button onClick={() => props.handelAddtoCart(props.user)} className="btn btn-info mt-3 mb-3">Add to group</button>
                    )
                }
                <ReactModal user={props.user}></ReactModal>
            </div>
        </div>
    );
};

export default AllUsers;