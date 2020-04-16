import React, {Component} from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Big Kahuna",
                    author: "Michael Branum",
                    isbn: "978-6294249268"
                },
                {
                    id: 4,
                    title: "How to Win at Black Jack",
                    author: "Drew Z",
                    isbn: "978-5295025932"
                },
                {
                    id: 5,
                    title: "The Senator Next Door",
                    author: "Amy Klobuchar",
                    isbn: "978-4920539534"
                },
                {
                    id: 6,
                    title: "Out Pizzaing the Hut for Dummies",
                    author: "Papa John",
                    isbn: "978-4963108496"
                },
                {
                    id: 7,
                    title: "Art of the Deal",
                    author: "Donald J. Trump",
                    isbn: "978-5903259838"
                },
                {
                    id: 8,
                    title: "Metamorphosis",
                    author: "Frankz Kafka",
                    isbn: "978-4120493189"
                    
                }
            ]
        }
    }
    
    render() {
        return(
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}