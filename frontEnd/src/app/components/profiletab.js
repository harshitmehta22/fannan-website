import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Profieimage from "./../../assests/images/member-avatar.png";
import Tab from "@material-ui/core/Tab";

const Profiletb = () => {
    const [selects, setSelects] = useState();
    return (
        <>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3 col-md-4 text-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-avatar-tab" data-bs-toggle="pill" data-bs-target="#v-pills-avatar" type="button" role="tab" aria-controls="v-pills-avatar" aria-selected="true">Avatar <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <button className="nav-link" id="v-pills-basic-tab" data-bs-toggle="pill" data-bs-target="#v-pills-basic" type="button" role="tab" aria-controls="v-pills-basic" aria-selected="false">Basic Info <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <button className="nav-link" id="v-pills-address-tab" data-bs-toggle="pill" data-bs-target="#v-pills-address" type="button" role="tab" aria-controls="v-pills-address" aria-selected="false">Address <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    <button className="nav-link" id="v-pills-Links-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Links" type="button" role="tab" aria-controls="v-pills-Links" aria-selected="false">Links <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className="tab-content col-md-8" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-avatar" role="tabpanel" aria-labelledby="v-pills-avatar-tab">
                        <div className="col-xl-4">
                            <form action="#" className="member-profile form-underline text-left">
                                <div className="card mb-6 mb-xl-0">
                                    <div className="card-header">Profile Picture</div>
                                    <div className="card-body text-center">
                                        <img className="img-account-profile rounded-circle mb-2" src={Profieimage} alt="" />
                                        <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                        <label for="upload_new">
                                            <input id="upload_new" type="file" name="member_avatar" placeholder="Upload new" value="" />
                                            Upload new
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="#" className="next-btn" id="v-pills-basic-tab" data-bs-target="#v-pills-basic">Next</a>
                    </div>
                    <div className="tab-pane fade" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
                        <h3 >Basic Info</h3>
                        <div className="member-wrap">
                            <form className="member-profile form-underline text-left">
                                <div className="field-input">
                                    <label htmlFor="first_name">First name</label>
                                    <input type="text" name="first_name" placeholder="Invan" id="first_name" />
                                </div>
                                <div className="field-input">
                                    <label htmlFor="last_name">Last name</label>
                                    <input type="text" name="last_name" placeholder="Robent" id="last_name" />
                                </div>
                                <div className="field-input">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" placeholder="invan@gmail.com" id="email" />
                                </div>
                                <div className="field-input">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" name="phone" placeholder="00 2323 323" id="phone" />
                                </div>
                            </form>
                            <a href="#" className="next-btn" id="v-pills-basic-tab" data-bs-target="#v-pills-basic">Next</a>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
                        <h3 >Address Info</h3>
                        <div className="member-wrap">
                            <form className="member-profile form-underline text-left">
                                <div className="field-input">
                                    <label htmlFor="first_name">Address</label>
                                    <input type="text" name="first_name" placeholder="Invan" id="address" />
                                </div>
                                <div className="field-input">
                                    <label htmlFor="last_name">Location</label>
                                    <input type="text" name="last_name" placeholder="Location" id="last_name" />
                                </div>
                                <div className="field-input">
                                    <label htmlFor="phone">Country</label>
                                    <select type="select" name="select" placeholder="country" id="select">
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>Australia</option>
                                    </select>
                                    {/* <input  type="text" name="phone" placeholder="State" id="phone"/> */}
                                </div>
                                <div className="field-input">
                                    <label htmlFor="phone">State</label>
                                    <select type="select" name="select" placeholder="city" id="select">
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Goa</option>
                                    </select>
                                    {/* <input  type="text" name="phone" placeholder="State" id="phone"/> */}
                                </div>
                                <div className="field-input">
                                    <label htmlFor="email">City</label>
                                    <select type="select" name="select" placeholder="city" id="select">
                                        <option>Indore</option>
                                        <option>Dewas</option>
                                        <option>Bhopal</option>
                                    </select>
                                    {/* <input  type="email" name="email" placeholder="City" id="email"/> */}
                                </div>
                            </form>
                            <a href="#" className="next-btn" id="v-pills-basic-tab" data-bs-target="#v-pills-basic">Next</a>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-Links" role="tabpanel" aria-labelledby="v-pills-Links-tab">
                        <div className="row social-links">
                            <div className="col-md-6 text-left">
                                <h3>Social Links</h3>
                                <p>Add Social links that visible on the homepage of your blog.</p>
                                {/* <select value={selects} onChange={e=>setSelects(e.target.value)}>
                    <option value='instagram'>Instagram</option>
                    <option value='facebook'>Facebook</option>
                    <option value='dribble'>Dribble</option>
                    <option>Add Social Link</option>
                </select>
                <h1>{selects}</h1> */}
                                <form className="social-block">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-lg"><i className="fab fa-dribbble"></i></button>
                                        <button type="button" className="btn btn-default btn-lg input-btn"><input type="url" /></button>
                                        {/* <button type="button" className="btn btn-default btn-lg"><i className="fa fa-trash" aria-hidden="true"></i></button>  */}
                                    </div>
                                </form>
                                <form className="social-block">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-lg"><i className="fa fa-link" aria-hidden="true"></i></button>
                                        <button type="button" className="btn btn-default btn-lg input-btn"><input type="url" /></button>
                                        {/* <button type="button" className="btn btn-default btn-lg"><i className="fa fa-trash" aria-hidden="true"></i></button>  */}
                                    </div>
                                </form>
                                <form className="social-block">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-default btn-lg"><i className="fa-brands fa-instagram"></i></button>
                                        <button type="button" className="btn btn-default btn-lg input-btn"><input type="url" /></button>
                                        {/* <button type="button" className="btn btn-default btn-lg"><i className="fa fa-trash" aria-hidden="true"></i></button>  */}
                                    </div>
                                </form>
                                <a href="#" className="next-btn" id="v-pills-basic-tab" data-bs-target="#v-pills-basic">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profiletb;