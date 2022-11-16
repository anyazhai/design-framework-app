import React from 'react';
import { useState } from 'react';
import '../assets/element.css';
import ButtonsUI from './buttonsUI';
import buttonsData from '../json/buttons.json';

export default function Element(){


    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    
    {/* <div class="btn buttonIcon-group button-square">
                            <i class="fa fa-download btn-group-icon" aria-hidden="true"></i>
                            <span class="btn-group-text">Download</span>
                        </div> */}
    return(
        <div>
            {
                buttonsData.map( data => {
                    return(
                        <div className='marginB'>
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
                            <ButtonsUI value = {data.id}/>

                            <div>
                                <p className='ui-info'>{data.design.usage}</p>
                            </div>
                        </div>


                        <div id="implementation" className={toggleState === 2? "implement-grid active-tab-window" : "implement-grid"}>
                                <div className='code-tab'>
                                    <div className='code-button-panel'>
                                        <div>
                                            <button className='code-tablink code-active'>HTML</button>
                                            <button className='code-tablink'>CSS</button>
                                        </div>
                                        <button id='copy'>Copy to Clipboard</button>
                                    </div>
                                    <div className='html'>
                                    {data.implement.html}
                                    </div>
                                    <div className='css'>
                                    {data.implement.css}
                                    </div>
                                </div>

                                <div className='guide-tab'>
                                    <div className='guidelines'>
                                    {data.implement.guideline}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            


        </div>
    )
}

