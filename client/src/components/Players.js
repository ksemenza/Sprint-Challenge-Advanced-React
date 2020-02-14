import React, {Component} from 'react'
import axios from 'axios'

class Players extends Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount() {
        axios.get('http://localhost:500/api/players')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }

}