import React from "react";
import Presentation from '../../components/Presentation'
import APIService from "../../services/APIService"

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.APIService = new APIService();

    }

    componentDidMount() {

        this.APIService.testRequest({ name: 'HELLO' }).then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Presentation />
            </React.Fragment>
        )
    }
}