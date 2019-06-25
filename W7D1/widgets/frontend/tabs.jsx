import React from 'react';

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        };

        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(i) {
        this.setState({selected: i})
    }

    render() {
        return (
            <div className="tabs">
                <h1>Tabs</h1>
                <div className="tabs-container">
                    <div className="tab-titles">
                        {this.props.panes.map((pane,i) => {
                            // must wrap js in {}
                            // ??? must return for map
                            return (
                                <div 
                                    key={i}
                                    className={i === this.state.selected ? "tab-title selected" : "tab-title"}
                                    onClick={() => this.selectTab(i)}>
                                
                                {pane.title}
                                
                                </div>
                            )
                        })}
                    </div>

                    <div className="tab-content">{this.props.panes[this.state.selected].content}</div>
                </div>
            </div>
        )
    }
}