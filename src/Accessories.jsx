import React from 'react';
import './styles/Options.css';

function OptionAccesories() {
    return (
        <div>
            <div style={{ marginLeft: '4rem', display: 'flex', flexDirection: 'column' }}>
                    <a style={{ fontWeight: 'bold', color: 'black' }}>Gate Accessories</a>
                    <a style={{ color: 'grey' }}>Cantilever Wheels</a>
                    <a style={{ color: 'grey' }}>VTrack - Guide - Vwheels</a>
                    <a style={{ color: 'grey' }}>Hinges</a>
                    <a style={{ color: 'grey' }}>Locks - Latches</a>
                </div>
        </div>
    );
}

export default OptionAccesories;
