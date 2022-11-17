import React from 'react';
import Sidescrollbar from './sidescrollbar';
import Element from './element';
// import buttonsData from '../json/buttons.json';

//Main assemnler component of documentation of all Button types.

export default function Buttonsdoc(){
    
    const buttonsData = [
        {
            "id": 1,
            "name": "Filled button",
            "design": {
                "usage" : "Filled buttons are the most prominent ones of all the button types. These buttons are usually used to draw attention to the actions which are primary to the user flow."
            },
            "implement": {
                "html": 
`<button class="btn button-square">
    Button
</button>

<button class="btn button-round">
    Button
</button>

<button class="btn button-square-disabled">
    Button
</button>

<button class="btn btn-ripple button-square">
    Ripple
</button>
`
                
                ,
                "css": `
/*common to all buttons types*/
.btn{
    border-style: inset;
    width: fit-content;
    min-width: 100px;
    padding: 12px 40px;
    margin: 10px;
    cursor: pointer;
    display: block;
    border: none;
    transition: 0.4s;
    font-size: 16px;
    border-radius: 4px;
    box-shadow: 1px 2px 6px 2px rgba(0, 0, 0, 0.030);
}

.button-square{
    background-color: var(--accent);
    color: white;
}

.button-round{
    border-radius: 100px;
    background-color: var(--accent);
    color: white;
}

.button-square-disabled{
    background-color: transparent;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), var(--accent);
    color: rgba(255, 255, 255, 0.674);
    cursor: default;
    box-shadow:  not-allowed;
}

.btn-ripple{
    position: relative;
    text-align: center;
    transition-duration: 0.4s;
    overflow: hidden;
    cursor: pointer;
}

/*The on-click ripple effect CSS*/
.btn-ripple:after {
    content: "";
    background: #f1f1f1;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -200px;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.btn-ripple:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}

/*Pseudo-elements for hover state transisiton*/
.button-round:hover, .button-square:hover{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), var(--accent);
}
            `,
                "js": "No JS code",
                "guideline": "lorem epsum dolor"
            }
        },
        {
            "id": 2,
            "name": "Outlined button",
            "design": {
                "usage" : "Filled buttons are the most prominent ones of all the button types. These buttons are usually used to draw attention to the actions which are primary to the user flow."
            },
            "implement": {
                "html": "code",
                "css": "code",
                "js": "No JS code",
                "guideline": "lorem epsum dolor"
            }
    
        },
        {
            "id": 3,
            "name": "Text button",
            "design": {
                "usage" : "Filled buttons are the most prominent ones of all the button types. These buttons are usually used to draw attention to the actions which are primary to the user flow."
            },
            "implement": {
                "html": "code",
                "css": "code",
                "js": "No JS code",
                "guideline": "lorem epsum dolor"
            }
    
        }
    ]

    return(
        <div className='page-grid'>
            <Sidescrollbar />

            <div className='doc-section'>
                <h1 className='doc-heading'>Buttons</h1>
                <p className='brief'>Buttons are the elements which let's users decide the course of action that a website must take with just a single click.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 className='types'>Types</h2>

                {
                    buttonsData.map( data => {return(
                        <div className='marginB'>
                            <h3>{data.name}</h3>
                            <br></br>
                            <Element
                                id = {data.id}
                                usage = {data.design.usage}
                                html = {data.implement.html}
                                css = {data.implement.css}
                                js = {data.implement.js}
                                guideline = {data.implement.guideline}
                            />
                        </div>
                    )}
                )
                }
            
            </div>
        </div>
    )
}