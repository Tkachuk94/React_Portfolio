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
               <p style={{fontSize: '3rem', color: '#fff'}}>About Me</p>
               <p style={{fontSize: '2rem'}}>
               {
                 resumeData.aboutme
               }
               </p>
               <div className="row">
                  <div className="columns contact-details">
                  <p style={{fontSize: '3rem', color: '#fff'}}>Contact Details</p>
                  <p className="address">
       						<p style={{color: "teal", fontSize: '2rem'}}>{resumeData.name}</p>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href = "mailto: Tkachuk753@gmail.com">Email Me</a>
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