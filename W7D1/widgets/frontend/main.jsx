import React from 'react';
import Clock from './clock';
import Tabs from './tabs';


const panes = [
    { title: '1', content: 'I am the first' },
    { title: '2', content: 'Second pane here' },
    { title: '3', content: 'Third pane here' }
];

const Main = () => (
    <div id="root">
        <Clock/>
        <Tabs panes={panes} />
    </div>
)

export default Main;