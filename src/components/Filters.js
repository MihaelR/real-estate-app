import React, { Component } from 'react'

class Filters extends Component {
    render() {
        return (
            <section id="filter">
                <div className="inside">  
                    <h4>Filter</h4>
                    <select name="neighbourhood" className="filters neighbourhood">
                        <option>Graba</option>
                        <option>Vrt</option>
                    </select>
                    <select name="housetype" className="filters housetype">
                        <option>Visoka kutja</option>
                    </select>
                    <select name="bedrooms" className="filters bedrooms">
                        <option>2</option>
                    </select>
                    <div className="filters price">
                        <span className="title">Price</span>
                        <input type="text" name="min-price" className="min-price"/>
                        <input type="text" name="max-price" className="max-price"/>
                    </div>
                    <div className="filters floor-space">
                        <span className="title">Floor Space</span>
                        <input type="text" name="min-floor-space" className="min-floor-space"/>
                        <input type="text" name="max-floor-space" className="max-floor-space"/>
                    </div>
                    <div className="filters price">
                        <span className="title">Price</span>
                        <input type="text" name="min-price" className="min-price"/>
                        <input type="text" name="max-price" className="max-price"/>
                    </div>
                    <div className="filters extras">
                        <span className="title">
                            Extras
                        </span>
                        <label for="extras">
                            <span>Elevators</span>
                        <input name="extras" value="elevator" type="checkbox"></input>
                        </label>
                    </div>
                    <div className="filters extras">
                        <label for="extras">
                            <span>Swimming Pool</span>
                        <input name="extras" value="swimming-pool" type="checkbox"></input>
                        </label>
                    </div>
                    <div className="filters extras">
                        <label for="extras">
                            <span>Basement</span>
                        <input name="extras" value="basement" type="checkbox"></input>
                        </label>
                    </div>
                    <div className="filters extras">
                        <label for="extras">
                            <span>Gym</span>
                        <input name="extras" value="gym" type="checkbox"></input>
                        </label>
                    </div>
                    <div className="filters extras">
                        <label for="extras">
                            <span>Pool</span>
                        <input name="extras" value="pool" type="checkbox"></input>
                        </label>
                    </div>
                </div>
            </section>
        )
    }
}

export default Filters
