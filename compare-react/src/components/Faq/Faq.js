import React, { Component } from 'react';
import './Faq.css';
import axios from 'axios';

class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const faqs = res.data.slice(0,10);
                this.setState({faqs});
            })
    }

    render() {
        return (
            <div>
                <div class="container">
                    <section class="section">
                        <h1 class="title">FAQ</h1>
                        <h2 class="subtitle is-4">It is not really that complicated (it's just magic).</h2>
                        <div class="columns">
                        {this.state.faqs.map(faq =>
                        <div class="column is-one-third" >
                            <div class="card">
                                <div class="card-content">
                                    <p class="title">{ faq.title }</p>
                                    <p class="answer">{ faq.body }</p>
                                </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </section>
                    </div>
            </div>
        );
    }
}

export default Faq;