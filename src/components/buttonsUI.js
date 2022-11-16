import React from 'react';
import '../assets/element.css';

export default function ButtonsUI(prop){
    if(prop.value == 1){
        return(
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
                    <div>
                        <button class="btn btn-ripple button-square">
                            Ripple
                        </button>
                        Ripple on Click
                    </div>
                </div>
        )
    }

    else if(prop.value == 2){
        return(
            <div className='grid-example-elements'>
                        <div>
                            <button class="btn line-button-square">
                                Button
                            </button>
                            <p>Enabled</p>
                        </div>
                        <div>
                            <button class="btn line-button-round">
                                Button
                            </button>
                            Rounded
                        </div>
                        <div>
                            <button class="btn line-button-square-disabled">
                                Button
                            </button>
                            Disabled
                        </div>
                        <div>
                        <button class="btn line-btn-ripple line-button-square">
                            Ripple
                        </button>
                        Ripple on Click
                        </div>
                        
            </div>
        )
    }

    else if(prop.value == 3){
        return(
            <div className='grid-example-elements'>
                        <div>
                            <button class="btn text-button">
                                Button
                            </button>
                            <p>Enabled</p>
                        </div>
                        <div>
                            <button class="btn text-button">
                                Button
                            </button>
                            Rounded
                        </div>
                        <div>
                            <button class="btn text-button-disabled">
                                Button
                            </button>
                            Disabled
                        </div>
                        <div>
                        <button class="btn line-btn-ripple text-button">
                            Ripple
                        </button>
                        Ripple on Click
                        </div>
                        
            </div>
        )
    }
    
}

