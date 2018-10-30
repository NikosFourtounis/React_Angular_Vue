import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        let heading = "This website was created with React.js";
        let subheading = "Lorem ipsum dolor sit amet..."
        return (
            <div>
                <section class="hero is-light is-medium ">
                    <div class="hero-body">
                        <div class="container">
                        <h1 class="title">{heading}</h1>
                        
                        <div class="is-two-thirds column is-paddingless">
                            <h2 class="subtitle is-4">{subheading}</h2>
                        </div>
                        <br></br>
                        <a class="button is-large is-primary" id="learn">Learn more</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;