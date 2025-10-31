import React from "react";
import banner from './banner.jpg'
import { Card,CardBody,CardText,CardTitle,CardImg} from "reactstrap";
import {Button} from "reactstrap";
import { useNavigate } from 'react-router-dom';
// import banner from './banner.jpg'
const Home =()=>
{
    const navigate = useNavigate();
    const handlePriceClick = () => 
            {
            navigate('/about'); // This replaces your weather function
            };
    return(
        <div>
        <div className="justify-center">
            
            <img src={banner} alt="Dash board"/>;
        </div>
        <div className=" flex space-between ml-3">
        <div className=" ml-5 py-3 px-3">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Wheat</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>
            <Card style={{ width: '16rem' }} className="mt-5 ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Bajra</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>

           
            

        </div>
        
        
        <div className="py-3 px-3">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Cotton</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>
            <Card style={{ width: '16rem' }} className="mt-5 ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Sunflower</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>

        </div>
        <div className="py-3 px-3">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Rice</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>
            <Card style={{ width: '16rem' }} className="mt-5 ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Sugar Can</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>

        </div>
        <div className="py-3 px-3 ">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Corn</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>
            <Card style={{ width: '16rem' }} className="mt-5 ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Mustard</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>

        </div>
        <div className="py-3 px-3 ">
            <Card style={{ width: '16rem' }} className="bg-grey ">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Ragi</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>
            <Card style={{ width: '16rem' }} className="mt-5">
                <CardImg className="c1" varient='top' src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <CardBody>
                    <CardTitle className="font-bold text-1xl text-center">Joar</CardTitle>
                    <CardText>Here you can find out your Wheat price and which types of wheat is more valuable</CardText>
                
                <Button color="primary">Show Details</Button>
                 <Button className="ml-7 shadow-md"color="warning" onClick={handlePriceClick}>Price</Button>
                 
                 
                </CardBody>
            </Card>

        </div>
        </div>  
        </div>
    )
}
export default Home;