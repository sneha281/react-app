import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import PropTypes from 'prop-types';
export default function Navv(props){
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>

                </Container>
            </Navbar>

        </>

    )
}

Navv.propTypes = {
    title: PropTypes.string
};

Navv.defaultProps = {
    title: 'Title to likho bhaiya'
};