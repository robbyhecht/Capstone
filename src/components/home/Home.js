import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";
import "./Home.css"


export default class HomePage extends Component {

  render() {

    // home page is divided into 2x2 colums and rows
    // buttons are wrapped in React <Link> tags to better utilize available tools

    return(
    <div className="mainHome">
    <Container id="homeDiv">
      <Row>
      <Col>
      <h1 className="slogan">Where do you <br /> want to play?</h1>
      </Col>
      <Col>
      <Link to={`/venues/`}><Button className="card-link" color="primary" size="sm" id="button1">ENTER VENUES</Button></Link>
      </Col>
      </Row>
      <Row>
      <Col>
      <p className="sub-slogan">Book gigs.<br />
      Stay organized.<br />
      Take your touring to the next level.</p>
      </Col>
      <Col>
      <Link to={`/tour/`}><Button className="card-link" color="primary" size="sm" id="button2">ENTER TOUR</Button></Link>
      </Col>
      </Row>
    </Container>
    </div>
    )
  }
  
}