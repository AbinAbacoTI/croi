import React, { useEffect, useState } from 'react'

const defaultEndpoint = 'http://127.0.0.1:8000/user/custom_user/';

export default function Example({ data }) {
    const [Users, setUsers] = useState([])

    /*export async function getServerSideProps() {
        const res = await fetch(defaultEndpoint);
        const data = await res.json();
        return {
            props: { data }
        }
    }*/
    const getUsers = () => {
        fetch('http://127.0.0.1:8000/user/custom_user/')
            .then((res) => res.json())
            .then((res) => {
                //El resultado se asigna al estado que almacena los Cate
                setUsers(res)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <ul>
                {Users.map((item, i) => {
                    return (
                        <li>
                            <h2 key={i}>{item.username}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}