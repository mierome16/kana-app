import React, { Component } from 'react'
import { Responsive, Sidebar, Menu, Segment, Container, Icon, Image, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/auth.actions';

class MSidebar extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        id="sidebarContainer"
        maxWidth={Responsive.onlyMobile.maxWidth}
        style={{height:'100vh'}}
      >
        <Sidebar
          id='mobileSideBar'
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item  as='a' active>
            Home
          </Menu.Item>
            <Link to="/"><Menu.Item>Home</Menu.Item></Link>
            <Link to="/about-kana"><Menu.Item>About Us</Menu.Item></Link>
            <Link to="/profile"><Menu.Item>Start an Order</Menu.Item></Link>
            <Link to="/orders"><Menu.Item>Past Orders</Menu.Item></Link>
            <Link to="/restaurant-home"><Menu.Item>Restaurant Inquiry</Menu.Item></Link>
            <Link to="/contact"><Menu.Item>Contact Us</Menu.Item></Link>
            <Link to="/setting"><Menu.Item>Account Settings</Menu.Item></Link>
            <Link to="/sign-out"><Menu.Item onClick={logout}> Sign Out</Menu.Item></Link>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            vertical
            id="sidebarTop"
          >
            <Container id="mobileHeader" 
            style={{height: '50px'}}>
              <Menu id='mobileTop'
              style={{border:0}}
              inverted
              pointing
              secondary
              size='large'>
             
                <Container>
                  <Menu.Item onClick={this.handleToggle}>
                    <Image style={{width:30, height:30}} src="https://cdn1.iconfinder.com/data/icons/restaurant-kitchen-utensils/100/Kitchenware_8-512.png" size="small" />
                    <h2 className="kanaSidebar">
                        Kana
                    </h2>
                    {/* <Icon name='sidebar' id="sidebar-butt"/> */}
                  </Menu.Item>
                </Container>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default MSidebar