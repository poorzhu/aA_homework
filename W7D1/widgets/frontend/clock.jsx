import React from 'react';

// ??? export default
export default class Clock extends React.Component {
    // ??? no props
    constructor() {
        super();

        // ??? this.state
        this.state = {
            time: new Date()
        }
        
        // ??? BIND FUNCTION TO ITSELF, OTHERWISE THIS IS LOST (this.setState -> window)
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        // ??? setInterval doesn't invoke function
        setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        // ??? SETSTATE INSTEAD OF THIS.STATE LOL
        // ??? setstate uses a POJO
        this.setState({ time: new Date() });
    }

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;        

        return (
            <div>
                <h1>Clock Widget</h1>
                <div className="clock">
                    <div>
                        Time: {hours}:{minutes}:{seconds} PDT
                    </div>
                    <div>
                        Date: {this.state.time.toDateString()}
                    </div>
                </div>
            </div>
        );
    }
};