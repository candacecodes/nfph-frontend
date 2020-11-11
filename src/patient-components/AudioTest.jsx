import React, { Component } from 'react'
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

export default class AudioTest extends Component {
    render() {
        return (
            <div> 
                <center>
                    <h1>Audio Test </h1>
                    <br/>
                    <h3>Please press button to hear sound</h3>
                    <br/><br/><Button className="btn" color="primary">Sound Volume 1</Button> 
                    <br/><br/><Button className="btn" color="primary">Sound Volume 2</Button> 
                    <br/><br/><Button className="btn" color="primary">Sound Volume 3</Button> 
                    <br/><br/><Button className="btn" color="primary">Sound Volume 4</Button> 
</center>
            </div>
        )
    }
}
