import React from "react";
import { Card,CardBody,CardText,CardTitle,CardImg} from "reactstrap";
import {Button} from "reactstrap";
import { Link } from "react-router-dom";
import './Cards.css';
import weather from "./weather";
import { useNavigate } from 'react-router-dom';

const Cards =()=>
{
    const navigate = useNavigate();
    const handlePriceClick = () => 
            {
            navigate('/price'); // This replaces your weather function
            };
    return(
        
    
    <div style={{ display: "flex", flexWrap: "wrap"}} className="cards">
        <div className="card1">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle>Wheat</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="B2"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>

        </div>
        <div className="card2">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c2" varient='top' src="https://cdn.jwplayer.com/v2/media/HfJdJZ0V/poster.jpg?width=1280"/>
                <CardBody>
                    <CardTitle>White Rice</CardTitle>
                    <CardText>Here you can find out your White rice price and which types of rice is more valuable</CardText>
                <Button color="primary">Show Details</Button>
                <Button className="B2"color="warning">Price</Button>
                </CardBody>
            </Card>
        </div></div>  
        
    
    
    )
}
export default Cards;