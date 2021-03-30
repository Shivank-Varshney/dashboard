import React from "react";
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'; 

const Home = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-4">
                        <div className="card d-flex justify-content-center align-items-center">
                        <Button variant="contained" color="secondary">
                            <NavLink to="/login" className="text-white text-decoration-none">Login Page</NavLink>
                        </Button><br />
                        <Button variant="contained" color="secondary">
                            <NavLink to="/registration" className="text-white text-decoration-none">Registration Page</NavLink>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;