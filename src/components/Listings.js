import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList, faTh, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import house from '../assets/house.jpg'


class Listings extends Component {
    render() {
        return (
            <section id="listings">

                <section className="search-area">
                    <input placeholder="Search.." type="text" name="search"/>
                </section>

                <section className="sortby-area">
                    <div className="results">
                        390 results found
                    </div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby">
                           <option value="price-asc">Highest Price</option>
                           <option value="price-dsc">Lowest Price</option>
                        </select>
                        <div className="view">
                        <FontAwesomeIcon className="fa" icon={faTh} />
                        </div>
                        <div className="view">
                        <FontAwesomeIcon className="fa" icon={faThList} />
                        </div>
                    </div>
                </section>

                <section className="listings-results">
                    <div className="listing">
                     
                        <img className="background" src={house} />
                            <div className="details">
                                <div className="user-img"></div>
                                <div className="user-details">
                                    <span className="user-name">Nina Smith</span>
                                    <span className="post-date">05/05/2020</span>     
                                </div>
                                <div className="listing-details">
                                    <div className="floor-space">
                                    <i className="far fa-square"></i>
                                        <span>1010ft&sup2;</span>
                                    </div>
                                    <div className="bedrooms">
                                        <FontAwesomeIcon className="fa" icon={faBed} />
                                        <span>3 bedrooms</span>
                                    </div>
                               </div>
                               <div className="view-btn">
                                    View
                               </div>
                            </div>
                            
                       
                     
                        <div className="bottom-info">
                            <span className="price">$1000/month</span>
                            <span className="location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                Ridgeworth, Ny
                            </span>
                        </div>
                    </div>


                    <div className="listing">
                     
                     <img className="background" src={house} />
                         <div className="details">
                             <div className="user-img"></div>
                             <div className="user-details">
                                 <span className="user-name">Nina Smith</span>
                                 <span className="post-date">05/05/2020</span>     
                             </div>
                             <div className="listing-details">
                                 <div className="floor-space">
                                 <i className="far fa-square"></i>
                                     <span>1010ft&sup2;</span>
                                 </div>
                                 <div className="bedrooms">
                                     <FontAwesomeIcon className="fa" icon={faBed} />
                                     <span>3 bedrooms</span>
                                 </div>
                            </div>
                            <div className="view-btn">
                                 View
                            </div>
                         </div>
                         
                    
                  
                     <div className="bottom-info">
                         <span className="price">$1000/month</span>
                         <span className="location">
                         <FontAwesomeIcon icon={faMapMarkerAlt} />
                             Ridgeworth, Ny
                         </span>
                     </div>
                 </div>


                 <div className="listing">
                     
                     <img className="background" src={house} />
                         <div className="details">
                             <div className="user-img"></div>
                             <div className="user-details">
                                 <span className="user-name">Nina Smith</span>
                                 <span className="post-date">05/05/2020</span>     
                             </div>
                             <div className="listing-details">
                                 <div className="floor-space">
                                 <i className="far fa-square"></i>
                                     <span>1010ft&sup2;</span>
                                 </div>
                                 <div className="bedrooms">
                                     <FontAwesomeIcon className="fa" icon={faBed} />
                                     <span>3 bedrooms</span>
                                 </div>
                            </div>
                            <div className="view-btn">
                                 View
                            </div>
                         </div>
                         
                    
                  
                     <div className="bottom-info">
                         <span className="price">$1000/month</span>
                         <span className="location">
                         <FontAwesomeIcon icon={faMapMarkerAlt} />
                             Ridgeworth, Ny
                         </span>
                     </div>
                 </div>


                 <div className="listing">
                     
                     <img className="background" src={house} />
                         <div className="details">
                             <div className="user-img"></div>
                             <div className="user-details">
                                 <span className="user-name">Nina Smith</span>
                                 <span className="post-date">05/05/2020</span>     
                             </div>
                             <div className="listing-details">
                                 <div className="floor-space">
                                 <i className="far fa-square"></i>
                                     <span>1010ft&sup2;</span>
                                 </div>
                                 <div className="bedrooms">
                                     <FontAwesomeIcon className="fa" icon={faBed} />
                                     <span>3 bedrooms</span>
                                 </div>
                            </div>
                            <div className="view-btn">
                                 View
                            </div>
                         </div>
                         
                    
                  
                     <div className="bottom-info">
                         <span className="price">$1000/month</span>
                         <span className="location">
                         <FontAwesomeIcon icon={faMapMarkerAlt} />
                             Ridgeworth, Ny
                         </span>
                     </div>
                 </div>


                 <div className="listing">
                     
                     <img className="background" src={house} />
                         <div className="details">
                             <div className="user-img"></div>
                             <div className="user-details">
                                 <span className="user-name">Nina Smith</span>
                                 <span className="post-date">05/05/2020</span>     
                             </div>
                             <div className="listing-details">
                                 <div className="floor-space">
                                 <i className="far fa-square"></i>
                                     <span>1010ft&sup2;</span>
                                 </div>
                                 <div className="bedrooms">
                                     <FontAwesomeIcon className="fa" icon={faBed} />
                                     <span>3 bedrooms</span>
                                 </div>
                            </div>
                            <div className="view-btn">
                                 View
                            </div>
                         </div>
                         
                    
                  
                     <div className="bottom-info">
                         <span className="price">$1000/month</span>
                         <span className="location">
                         <FontAwesomeIcon icon={faMapMarkerAlt} />
                             Ridgeworth, Ny
                         </span>
                     </div>
                 </div>

                </section>

                <section className="pagination">
                    <ul className="pages">
                        <li>Prev</li>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>Next</li>
                    </ul>
                </section>

            </section>
        )
    }
}

export default Listings
