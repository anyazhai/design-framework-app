import React from 'react';

export default function Sidescrollbar(){
    return (
        <div className='sidescrollbar'>
            <ul className='scroll-list'>
                <li className='list-heading'> <h4  className='bold'>Components</h4></li>
                <li><a href="#" className="list-item">Button</a></li>
                <li><a href="#" className="list-item">Button Group</a></li>
                <li><a href="#" className="list-item">Cards</a></li>
            </ul>
        </div>
    )
}