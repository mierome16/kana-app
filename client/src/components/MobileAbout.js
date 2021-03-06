import React from 'react' 
import SwipeableViews from 'react-swipeable-views'
import { Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div id='about-mpage'>
      <SwipeableViews id='about-swipeable'>
        <div className="about-card" style={{background:'#b0271d', overflowY: 'hidden'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="kananame">Kana</div>
              <Link to="/register">
                <div className="skip" style={{color: 'white'}}>Skip</div>
              </Link>
            </div>
            <div className="about-info">
              <img src="/mobileAbout-1.png" alt="welcome-picture"/>
              <div>
                <h1>Discover Kana</h1>
                <p>Finding what to eat is now easy as 1, 2, 3.</p> 
                <p>Swipe to see how it works</p> 
              </div>
            </div>
            <div className="about-progress">
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
        <div className="about-card" style={{background:'#009396'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="kananame">Kana</div>
              <Link to="/register">
                <div className="skip" style={{color: 'white'}}>Skip</div>
              </Link>
            </div>
            <div className="about-info">
              <img src="/mobileAbout-2.png" alt="welcome-picture"/>
              <div>
                <h1>1. Choose your location</h1>
                <p>Set where you're looking to eat and we'll gather data from restaurants nearby</p>
              </div>
            </div>
            <div className="about-progress">
              <Icon name="circle"/>
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
        <div className="about-card" style={{background:'#df6618'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="kananame">Kana</div>
              <Link to="/register">
                <div className="skip" style={{color: 'white'}}>Skip</div>
              </Link>
            </div>
            <div className="about-info">
              <img src="/mobileAbout-3.png" alt="welcome-picture"/>
              <div>
                <h1>2. Choose your preferences</h1>
                <p>Let us know what you're craving or what your dietary restrictions are</p>
              </div>
            </div>
            <div className="about-progress">
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
        <div className="about-card" style={{background:'#3f51b5'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="kananame">Kana</div>
              <Link to="/register">
                <div className="skip" style={{color: 'white'}}>Skip</div>
              </Link>
            </div>
            <div className="about-info">
              <img src="/mobileAbout-4.png" alt="welcome-picture"/>
              <div>
                <h1>3. Swipe and order</h1>
                <p>Like what you see? Swipe right to order or make a reservation. Swipe left if you don't.</p>
                <p>Winner winner chicken dinner.</p>
              </div>
            </div>
            <div className="about-progress">
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
              <Icon name="circle"/>
            </div>
          </div>
        </div>
        <div className="about-card" style={{background:'#b0271d'}}>
          <div className="about-content">
            <div className="about-header">
              <div className="kananame">Kana</div>
              <Link to="/register">
                <div className="skip" style={{color: 'white'}}>Skip</div>
              </Link>
            </div>
            <div className="about-info">
              <img src="/mobileAbout-5.png" alt="welcome-picture"/>
              <div>
                <p className="about-action" style={{marginTop: 23}}>It's never been easier to find your next meal</p>
                <Link to="/register">
                <Button size="big" primary>
                  Let's Kana
                  <Icon name='right chevron' />
                </Button>
                </Link>
              </div>
            </div>
            <div className="about-progress">
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon name="circle"/>
              <Icon style={{color: '#c8c0c0bf'}} name="circle"/>
            </div>
          </div>
        </div>
      </SwipeableViews>
    </div>
  )
}