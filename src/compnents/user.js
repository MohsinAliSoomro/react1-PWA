import React, { useState, useEffect } from 'react';

export default function Home() {
    const [jsondata, setJsondata] = useState([]);
    const [mode, setMode] = useState("Online");
    useEffect(() => {
        async function fetchApi() {
            const apiUrl = 'https://jsonplaceholder.typicode.com/users'
            await fetch(apiUrl)
                .then(res => res.json())
                .then(result => {
                    setJsondata(result);
                    localStorage.setItem("users", JSON.stringify(result))
                }).catch(err => {
                    let collection = localStorage.getItem("users")
                    setJsondata(JSON.parse(collection))
                    setMode('Offline')
                })
        }
        fetchApi()
    }, [])
    return (
        <div>
            <div>
                {
                    mode === 'Offline' ?
                        <div class="alert alert-warning" role="alert">
                            You are in offline mode or issue with connection
                        </div>
                        : null
                }
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {jsondata.map((data) => {
                        return (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}
