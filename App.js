//  pure js Hello Word
    // const header = document.createElement('h1');
    // header.innerHTML='Hello World';
    
    // const root = document.getElementById('root');
    // root.appendChild(header);
//  Ended pure js Hello Word



// React Start - Core

// // For single line DOM Of Object creation 
const heading = React.createElement('h1',{class:'text-success'},'Test React');

// // For Below UI DOM Of Object creation 
/* <div id="parent">
    <div id="child">
        <h1>I'm h1</h1>
        <h2>I'm h2</h2>
    </div>
    <div id="child">
        <h1>I'm h1</h1>
        <h2>I'm h2</h2>
    </div>
</div> */
// const heading = React.createElement('div',{id:'parent'},
//     [React.createElement('div',{id:'child1'},[
//         React.createElement('h1',{id:'child1_h1'},"I'm h1 tag"),
//         React.createElement('h2',{id:'child1_h2'},"I'm h2 tag"),
//     ]),
//     React.createElement('div',{id:'child2'},[
//         React.createElement('h1',{id:'child2_h1'},"I'm h1 tag"),
//         React.createElement('h2',{id:'child2_h2'},"I'm h2 tag"),
//     ])
// ]
// );

console.log(heading )

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);