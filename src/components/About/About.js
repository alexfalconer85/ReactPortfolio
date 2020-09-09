import React, { Component } from "react";
import "./About.css";

class AboutContainer extends Component {
  state = {
    info: this.props.personalInfo || [],
  };
  render() {
    return (
      <div className='card border-primary mb-3 profile-card' id='profile-link'>
        <div className='card-header'>
          <h3>
            Profile
            <i className='fa fa-user' aria-hidden='true' />
          </h3>
        </div>
        <div className='card-body'>
          <div className='card-block'>
            <div className='row'>
              <div className='col-lg-4'>
                <img
                  className='img-responsive img-circle'
                  src='https://media-exp1.licdn.com/dms/image/C5603AQH5BJNEmRmvVg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=G7t0reLGWXd2PIBcRJk5b925_uCjfZy5hQqP53od07Y'
                  alt='Alex Falconer'
                />
                <p className='card-text'>{this.props.personalInfo.about}</p>
              </div>

              <div className='col-lg-8'>
                <ul>
                  <li className='about-self'>
                    Full-Stack Developer - Falconer Consulting, Denver, Co
                  </li>
                  <li className='about-self'>
                    Highly motivated and goal oriented Web Developer
                  </li>
                  <li className='about-self'>
                    Excellent communication and inter personal skills
                  </li>
                  <li className='about-self' id='hobbies'>
                    <a href='https://www.linkedin.com/in/alexanderefalconer/'>
                      Alex's LinkedIn Page
                    </a>
                  </li>
                  <li className='about-self' id='hobbies'>
                    Hobbies
                    <span>
                      <i className='fa fa-code fa-2x' aria-hidden='true' />
                    </span>
                    <span>
                      <i className='fa fa-music fa-2x' aria-hidden='true' />
                    </span>
                    <span>
                      <i className='fa fa-camera fa-2x' aria-hidden='true' />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutContainer;
