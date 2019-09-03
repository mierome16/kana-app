import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'
import { isAbsolute } from 'path';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text id="header" 
    style={{
      height: mobile ? '140px' : '300px',
      textAlign: 'center'
    }}
     >
    <Header
      as='h1'
      content='Discover (add emphasis/special text) Kana'
      inverted
      style={{

        color: 'white',
        fontSize: mobile ? '3em' : '4em',
        fontWeight: '600',
        marginBottom: 0,
        marginTop: mobile ? '.2em' : '1em',

      }}
    />
    <Header
      as='h2'

      content='Decide on dinner faster!'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='medium'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  // fixed={fixed ? 'top' : null}
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive id='desktopview' getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility id='desktopvisi'
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment id='desktopseg'
            inverted
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 0em' }}
            vertical
          >
            <Menu id='desktopmenu'
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container id='desktopnav' style={{height: 50, paddingTop: 10}}>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading id='desktopHeading'/>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {

  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
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
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            vertical
          >
            <Container id="mobileHeader" 
            style={{height: '50px'}}>
              <Menu id='mobileTop'
              style={{border:0}}
              inverted
              pointing
              secondary
              size='large'>
             
                <Container style={{height: '50px'}} >
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' id="sidebar-butt"/>
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Link to="/login">
                      <Button inverted>Log in</Button>
                    </Link>
                    <Link to="/register">
                      <Button inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                    </Link>
                  </Menu.Item>
                </Container>
              </Menu>
            </Container>
            <HomepageHeading mobile style={{maxHeight: '10px'}} />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em', height:'auto' }} vertical id='tableview'>
      <Grid container stackable verticalAlign='middle'style={{height: 'auto'}}>
        <Grid.Row id='row'>
          <Grid.Column id='columns' style={{height:'auto'}}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Choose your location
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Set how far you want to drive, and we'll find menu items from open restaurants in the area
            </p>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='https://www.google.com/maps/d/thumbnail?mid=1CoxrxicMw4uSYPjPb20L6eQisoI&hl=en_US' />
            </Grid.Column>
            <Grid.Row id='row'>
            <Divider />
            <Header as='h3' style={{ fontSize: '2em' }}>
              Choose your cuisines
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              In the mood for Italian? Maybe Asian? We'll only show you items from the cuisines you want, or don't choose any if you're not sure
            </p>
            <Grid.Column floated='right' width={2}>
            <Image bordered rounded size='large' src='https://nationalpostcom.files.wordpress.com/2019/02/gettyimages-545286388.jpg?quality=80&strip=all&w=780' />
            </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row id='row'>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Find what you've been craving for
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We'll show you all the food nearby. Not feeling it? Swipe left. Looks good? Swipe right and see restaurant details, make a reservation or confirm your order for pickup
            </p>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='https://i.kym-cdn.com/photos/images/original/001/293/971/eef.png' />
            </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {/* <Grid.Column textAlign='center'>
            <Button size='medium'>Check Them Out</Button>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row id='companyrow' textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em'}}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '5em 0em', textTransform: 'uppercase' }}
        >
          <a href='https://google.com'>Case Studies</a>
        </Divider>
      </Container>
    </Segment>
    <Segment id='footer' inverted vertical 
      style={{ 
        padding: '5em 0em'}}>
      <Container 
        style={{ 
          padding: '3em 0em', 
          height: 'auto' }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
