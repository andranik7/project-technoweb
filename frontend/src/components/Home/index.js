import React from "react";
import Presentation from '../Presentation'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <React.Fragment>
                <Presentation />
            </React.Fragment>
        )
    }
}