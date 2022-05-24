import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
              <a href={`${item.link}`}>  
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h3 style={{color: "#fff"}} >{item.name}</h3>
                          <h6 style={{color: "#fff"}}>{item.description}</h6>
                        </div>
                      </div>
                  </div>
                </div>
              </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}