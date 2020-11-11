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
        var audio1 = new Audio("../public/sound.mp3")
        var audio2 = new Audio("../public/sound.mp3")
        var audio3 = new Audio("../public/sound.mp3")
        var audio4 = new Audio("../public/sound.mp3")

        return (
            <div> 
                <center>
                    <h1>Audio Test </h1>
                    <br/>
                    <h3>Please press button to hear sound</h3>
                    <br/><br/><Button className="btn" color="primary" onClick={audio1.play()}>Sound Volume 1</Button> 
                    <br/><br/><Button className="btn" color="primary" onClick={audio2.play()}>Sound Volume 2</Button> 
                    <br/><br/><Button className="btn" color="primary" onClick={audio3.play()}>Sound Volume 3</Button> 
                    <br/><br/><Button className="btn" color="primary" onClick={audio4.play()}>Sound Volume 4</Button> 
                    <br/><br/>
                    <h4 className="col-form-label-lg">Log Entry</h4>
          <h6 className="card-subtitle">Select the lowest Sound Volume audible to you:</h6> <br/>

          {/* <input className="form-control-lg" type="number" min="1" max="5" name="painLevel" value={painLevel} onChange={(event) => setPainLevel(event.target.value)}/> */}

          <input className="form-control-lg" type="number" min="1" max="5"/>

</center>
            </div>
        )
    }
}
