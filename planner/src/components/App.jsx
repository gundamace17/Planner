import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from './Sidebar';
import Partition from './Partition';
import Visual from './Visual';

function App() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then (
            data => {
                setBackendData(data);
            }
        )
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="row">
                    <Visual />
                    </div>
                    <div>
                        {(typeof backendData.users === "undefined") ? (
                            <p>Loading...</p>
                        ) : (
                            backendData.users.map((user, index) => (
                                <p key={index}>{user}</p>
                            ))
                        )}
                    </div>
                    <div className="row">
                    <Footer />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;