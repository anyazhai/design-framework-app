import React from 'react';
import Sidescrollbar from './sidescrollbar';
import Element from './element';


//Main assemnler component of documentation of all Button types.

export default function Buttonsdoc(){
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
                <h3>Filled Buttons</h3>
                <br></br>
                <Element/>
            </div>
            
        </div>
    )
}