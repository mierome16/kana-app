import React from 'react' 
import SwipeableViews from 'react-swipeable-views'
import { Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div>
      <SwipeableViews>
        <div className="about-card" style={{background:'#d32f2f'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="about-logo">KANA</div>
              <div>Skip</div>
            </div>
            <div className="about-info">
              <img src="https://placehold.it/250" alt="welcome-picture"/>
              <h1>Discover Kana</h1>
              <p>Decide on your next meal faster and easier</p>
              <p>Swipe to see how it works</p> 
            </div>
            <div className="about-progress">
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
        <div className="about-card" style={{background:'#009396'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="about-logo">KANA</div>
              <div>Skip</div>
            </div>
            <div className="about-info">
              <img src="https://placehold.it/250" alt="welcome-picture"/>
              <h1>Choose your location</h1>
              <p>Decide on your next meal faster and easier</p>
            </div>
            <div className="about-progress">
              <Icon name="circle"/>
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
        <div className="about-card" style={{background:'#960080'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="about-logo">KANA</div>
              <div>Skip</div>
            </div>
            <div className="about-info">
              <img src="https://placehold.it/250" alt="welcome-picture"/>
              <h1>Choose your cuisines or preferences</h1>
              <p>Decide on your next meal faster and easier</p>
              <Link to="/register"><Button>Let's Kana</Button></Link>
            </div>
            <div className="about-progress">
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
      </SwipeableViews>
    </div>
  )
}