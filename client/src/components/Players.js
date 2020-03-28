import React, {Component} from 'react'
import axios from 'axios'
import '../App.css'
import "@testing-library/jest-dom/extend-expect";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from 'rechart';

class Players extends Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            // console.log(res.data)
            this.setState({players: res.data})
        })
        .catch(err => {
            console.error(err); 
        })
    }

    render() {
        console.log(this.state.players) 
        if(!this.state.players) {
            return <h2>Please wait loading...</h2>
        } else {
            return(
                <div>
                    {this.state.players.map(player => 
                        <h2 key={player.id}>{player.name} from {player.country}</h2>
                        )}
                  
                </div>
            )
        }

}
}

export default Players