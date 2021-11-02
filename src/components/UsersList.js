import React, {useEffect, useState} from 'react'
import UserBox from "./UserBox";
import axios from "axios";

const usersURL = "https://randomuser.me/api/?results=20"

export default function UsersList () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(usersURL)
            .then((response) => {
            setUsers(response.data.results);
        });
    }, []);

    return (
        <>
         <UserBox users={users}/>
        </>
    )
}