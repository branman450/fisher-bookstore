import React, { Component } from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props){
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    name: "Michael Branum"
                },
                {
                    id: 2,
                    name: "Amy Klobuchar"
                },
                {
                    id: 3,
                    name: "Papa John"
                }
            ]
        };
    }

    render() {
        return(
            <div className="Authors">
                <div className="lander">
                    <AuthorsDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}

