import React from "react";
import { useState } from "react";
import Listimage from './../../assests/images/avatars/male-1.jpg';
import Categories from "./Categories";
import Location from "./Location";
import { Link } from "react-router-dom";
const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const [cisActive, csetIsActive] = useState(false);
    const [pisActive, psetIsActive] = useState(false);
    const [sisActive, ssetIsActive] = useState(false);
    const [data, setData] = useState(Categories);
    const [locationData, setLocationData] = useState(Location);

    const filterResult = (catItem) =>{
        const result = Categories.filter((curDate) => {
            return curDate.category === catItem;
        });
        setData(result);
    }
    const lfilterResult = (lcatItem) =>{
        const lresult = Location.filter((lcurDate) => {
            return lcurDate.location === lcatItem;
        });
        setData(lresult);
    }
    
    return (
        <>
            <div className="archive-filter">
                <form action="#" id="filterForm" className="filterForm">
                    <div className="filter-head">
                        <h2 >Filter</h2>
                        <Link to='/list'>Clear all</Link>
                        <a href="#" className="close-filter"><i className="las la-times"></i></a>
                    </div>
                    <div className="filter-box">
                        <div className="dropdown filter-list">
                            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}><h3>Cities</h3></div>
                            {isActive && (
                                <div className="dropdonw-content filter-group">
                                    <div className="dropdown-lsit field-check">
                                        <label for="Indore">
                                            <input type="checkbox" id="Indore" value="" onClick={() => lfilterResult('Indore')}/>
                                            Indore
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="dewas">
                                            <input type="checkbox" id="dewas" value="" onClick={() => lfilterResult('Dewas')}/>
                                            Dewas
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="bhopal">
                                            <input type="checkbox" id="bhopal" value="" onClick={() => lfilterResult('Bhopal')}/>
                                            Bhopal
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <a href="#" data-close="Close" data-more="More" className="more open-more" >
                                        More</a>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="filter-box">
                        <div className="dropdown filter-list">
                            <div className="dropdown-btn" onClick={(e) => csetIsActive(!cisActive)}><h3>Categories</h3></div>
                            {cisActive && (
                                <div className="dropdonw-content filter-group">
                                    <div className="dropdown-lsit field-check">
                                        <label for="carpenters">
                                            <input type="checkbox" id="carpenters" value="" onClick={() => filterResult('Carpenters')}/>
                                            Carpenters
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="contractors">
                                            <input type="checkbox" id="contractors" value="" onClick={() => filterResult('Contractor')}/>
                                            Contractors
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="architects">
                                            <input type="checkbox" id="architects" value="" onClick={() => filterResult('Painters')}/>
                                            Painter
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <a href="#" data-close="Close" data-more="More" className="more open-more" >
                                        More</a>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* <div className="filter-box">
                        <div className="dropdown filter-list">
                            <div className="dropdown-btn" onClick={(e) => psetIsActive(!pisActive)}><h3>Products</h3></div>
                            {pisActive && (
                                <div className="dropdonw-content filter-group">
                                    <div className="dropdown-lsit field-check">
                                        <label for="new_york">
                                            <input type="checkbox" id="new_york" value="" />
                                            Indore
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="dewas">
                                            <input type="checkbox" id="dewas" value="" />
                                            Dewas
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="bhopal">
                                            <input type="checkbox" id="bhopal" value="" />
                                            Bhopal
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <a href="#" data-close="Close" data-more="More" className="more open-more" >
                                        More</a>
                                </div>
                            )}
                        </div>
                    </div> */}



                    <div className="filter-box">
                        <div className="dropdown filter-list">
                            <div className="dropdown-btn" onClick={(e) => ssetIsActive(!sisActive)}><h3>Services</h3></div>
                            {sisActive && (
                                <div className="dropdonw-content filter-group">
                                    <div className="dropdown-lsit field-check">
                                        <label for="new_york">
                                            <input type="checkbox" id="new_york" value="" />
                                            Services 1
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="dewas">
                                            <input type="checkbox" id="dewas" value="" />
                                            Services 2
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="dropdown-lsit field-check">
                                        <label for="bhopal">
                                            <input type="checkbox" id="bhopal" value="" />
                                            Services 3
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                    <a href="#" data-close="Close" data-more="More" className="more open-more" >
                                        More</a>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>

            <div className="main-primary">
                <div className="filter-mobile">
                    <ul >
                        <li ><a href="#filterForm" className="mb-filter mb-open">Filter</a></li>
                        <li ><a href="#sortForm" className="mb-sort mb-open">Sort</a></li>
                    </ul>
                    <div className="mb-maps"><a href="#" className="mb-maps"><i className="las la-map-marked-alt"></i></a></div>
                </div>
                <div className="top-area top-area-filter">
                    <div className="filter-left"><span className="result-count"><span className="count">24</span> results</span><a href="#" className="clear">Clear filter</a></div>
                    <div className="filter-center">
                        <div className="place-layout"><a href="#" data-layout="layout-grid" className="active"><i className="las la-border-all icon-large"></i></a><a href="#" data-layout="layout-list"><i className="las la-list icon-large"></i></a></div>
                    </div>
                    <div className="filter-right">
                        <div className="select-box">
                            <select name="sort_by" className="sort-by">
                                <option value="">Sort by</option>
                                <option value="newest">Newest</option>
                                <option value="rating">Average rating</option>
                                <option value="featured">Featured</option>
                            </select>
                            <div tabindex="0" className="filter-control">
                                <span className="current">Sort by</span>
                                <ul className="list">
                                    <li data-value="" className="option selected focus">Sort by</li>
                                    <li data-value="newest" className="option">Newest</li>
                                    <li data-value="rating" className="option">Average rating</li>
                                    <li data-value="featured" className="option">Featured</li>
                                </ul>
                            </div>
                        </div>
                        <div className="show-map"><span >Maps</span><a className="icon-toggle"></a></div>
                    </div>
                </div>
                <div className="area-places">
                        {data.map((values) => {
                            const {id, title, price, location} = values;
                            return (
                                <>
                                <div data-maps_name="mattone_restaurant"  key={id} className="place-item layout-02 place-hover">
                                    <div className="place-inner">
                                        <div className="place-thumb"><Link to='/Artist'><img src={Listimage} alt="" /></Link>
                                            <a href="#" data-place-id="185" className="fannan-add-to-wishlist btn-add-to-wishlist">
                                                <span className="icon-heart"><i className="la la-bookmark large"></i></span>
                                            </a>
                                            <a href="#" className="entry-category rosy-pink">
                                                <i className="las la-utensils"></i>
                                                <span>{title}</span>
                                            </a>
                                            <a href="#" title="Author" className="author">
                                                <img src={Listimage} alt="Author" />
                                            </a>
                                        </div>
                                        <div className="entry-detail">
                                            <div className="entry-head">
                                                <div className="place-type list-item"><span >Restaurant</span></div>
                                                <div className="place-city"><a href="#">{location}</a></div>
                                            </div>
                                            <h3 className="place-title"><a href="single-1.html">{title}</a></h3>
                                            <div className="open-now"><i className="las la-door-open"></i>Open now</div>
                                            <div className="entry-bottom">
                                                <div className="place-preview">
                                                    <div className="place-rating"><span >5.0</span><i className="la la-star"></i></div>
                                                    <span className="count-reviews">(2 Reviews)</span>
                                                </div>
                                                <div className="place-price"><span >{price}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                <div className="pagination">
                    <div className="pagination__numbers"><span >1</span><a title="2" href="#">2</a><a title="3" href="#">3</a><a title="Next" href="#"><i className="la la-angle-right"></i></a></div>
                </div>
            </div>
        </>
    )
}
export default Dropdown;