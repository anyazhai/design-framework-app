import React from 'react';
import { useState } from 'react';
import '../assets/element.css';
import ButtonsUI from './buttonsUI';
import buttonsData from '../json/buttons.json';

export default function Element(props){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    
    const [codeToggleState, setCodeToggleState] = useState(1);
    const codeToggleTab = (index) => {
        setCodeToggleState(index);
    }

    {/* <div class="btn buttonIcon-group button-square">
                            <i class="fa fa-download btn-group-icon" aria-hidden="true"></i>
                            <span class="btn-group-text">Download</span>
                        </div> */}
    return(
        <div>
            <div className='element-change-tab'>
                <button 
                className={toggleState === 1? "tablink tab-active" : "tablink"} 
                onClick={() => toggleTab(1)}
                >Design and Usage</button>
                <button 
                className={toggleState === 2? "tablink tab-active" : "tablink"} 
                onClick={() => toggleTab(2)}
                >Implementation</button>
            </div>

            <div id="design" 
            className={toggleState === 1? "design active-tab-window" : "design"}>
                <ButtonsUI value = {props.id}/>

                <div>
                    <p className='ui-info'>{props.usage}</p>
                </div>
            </div>


            <div id="implementation" className={toggleState === 2? "implement-grid active-tab-window" : "implement-grid"}>
                    <div className='code-tab'>
                        <div className='code-button-panel'>
                            <div>
                            
                                <button 
                                className={codeToggleState === 1? "code-tablink code-active" : "code-tablink"} 
                                onClick={() => codeToggleTab(1)}
                                >HTML</button>
                                <button 
                                className={codeToggleState === 2? "code-tablink code-active" : "code-tablink"} 
                                onClick={() => codeToggleTab(2)}
                                >CSS</button>
                                <button className={codeToggleState === 3? "code-tablink code-active" : "code-tablink"} 
                                onClick={() => codeToggleTab(3)}
                                >JS</button>
                            </div>
                            <button id='copy'>Copy to Clipboard</button>
                        </div>
                        
                        <div className={codeToggleState === 1? "code-window-active code" : "code"}>
                        {props.html}
                        </div>
                        <div className={codeToggleState === 2? "code-window-active code" : "code"}>
                        {props.css}
                        </div>
                        <div className={codeToggleState === 3? "code-window-active code" : "code"}>
                        {props.js}
                        </div>
                    </div>

                    <div className='guide-tab'>
                        <div className='guidelines'>
                        </div>
                    </div>
            </div>
        </div>
    )
}

