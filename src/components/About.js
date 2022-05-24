import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="Image of Trent Tkachuk" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <div className="row">
                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						<h5 style={{color: "teal"}}>{resumeData.name}</h5>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href={resumeData.website}>{resumeData.website}</a>
                    <br></br>
                    <a href={resumeData.linkedinId}>{resumeData.linkedinId}</a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}