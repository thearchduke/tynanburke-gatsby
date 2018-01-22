import React from 'react';
import Helmet from 'react-helmet';


const svgHeight = 50;
const svgWidth = `100%`;
const lineWidth = 5;
const numLines = Math.ceil(svgHeight/lineWidth);

var SvgStyle = () => (
    <Helmet>
        <style>{`
            svg text.h1 {
                font-family: 'Rosario', serif;
                color: hsla(0, 0%, 0%, 0.9);
                font-size: 2rem;
            }
        `}</style>
    </Helmet>
);

/*
var TextHidingLines = ({ n }) => {
    return new Array(n).fill(0).map((_, idx) => <TextHidingLine i={idx} key={idx} />);
}

var TextHidingLine = ({ i }) => (
    <line 
        x1="0" 
        y1={i*lineWidth} 
        x2={svgWidth} 
        y2={i*lineWidth} 
        style={{ stroke: `black`, strokeWidth: lineWidth }}
        className="text-hiding-line"
    />
);
*/

export default ({ data }) => (
    <div>
        <SvgStyle />
        <svg width={svgWidth} height={svgHeight}>
            <text className="h1" x="0" y="35">Hi dev world</text>
            <circle r="5" cx="600" cy="-50" fill="red" className="period" />
        </svg>
        <p>Hello anime demo dev.js world!</p>
    </div>
);
