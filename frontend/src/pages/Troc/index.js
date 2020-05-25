import React from "react";
import Presentation from '../../components/Presentation'
import APIService from "../../services/APIService"
import AddPage from './add';
//var tools = require('./add');

export default class Troc extends React.Component {
    constructor(props) {
        super(props)
        this.APIService = new APIService();

    }

    componentDidMount() {

    }

    render() {
        return (
            
            <React.Fragment>
                <AddPage/>
            </React.Fragment>
        )
    }
}