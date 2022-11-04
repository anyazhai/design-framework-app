import React from 'react';
import '../assets/element.css';

export default function Element(){
    return(
        <div>
            <div className='element-change-tab'>
                <button class="tablink tab-active" >Design and Usage</button>
                <button class="tablink">Implementation</button>
            </div>

            <div id="design" class="tabcontent">
                <div className='ui'>
                    <div className='grid-example-elements'>
                        <div>
                            <button class="btn button-square">
                                Button
                            </button>
                            <p>Enabled</p>
                        </div>
                        <div>
                            <button class="btn button-round">
                                Button
                            </button>
                            Rounded
                        </div>
                        <div>
                            <button class="btn button-square-disabled">
                                Button
                            </button>
                            Disabled
                        </div>
                    </div>
                    <p className='ui-info'>Filled buttons are the most prominent ones of all the button types. These buttons are usually used to draw attention to the actions which are primary to the user flow.</p>
                </div>
                <div className='usage-example'>
                    <img src=''></img>
                </div>
            </div>

        </div>
    )
}