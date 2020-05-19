import React, { Component } from 'react'


export class Flexbox extends Component {
    render() {
        return (
            <div>
                <div className="flex-container">
                    <div class="item-1"> div </div>
                    <div class="item-2"> w-250 </div>
                    <div class="item-3"> h-250 </div>
                    <div class="item-4"> w+h 300 </div>
                    <div class="item-5"> w-350 </div>
                    <div class="item-6"> w-350 </div>
                </div>
                <div className="grid-container">
                    <div className="el1">Element 1</div>
                    <div className="el2">Element 2</div>
                    <div className="el3">Element 3</div>
                    <div className="el4">Element 4</div>
                 </div>
            </div>
        )
    }
}

export default Flexbox
