import React from 'react';
import './wave.css'


  export default function Wave() {
    return (
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle bgImage"></div>
            </div>
        </div>
    )
}
