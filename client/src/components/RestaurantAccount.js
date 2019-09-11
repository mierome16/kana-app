import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' style={{height: '50px'}} inverted>
      <Container>
        <Link to="/restaurant-home">
            <Menu.Item as='a' header>
            Kana
            </Menu.Item>
        </Link>
        <Link to="/restaurant-profile"><Menu.Item as='a'>My Account</Menu.Item></Link>

        <Dropdown item simple text='Settings'>
          <Dropdown.Menu>
            <Link to="/restaurant-additem"><Dropdown.Item style={{color: 'black'}}>Add Item</Dropdown.Item></Link>
            <Link to="/restaurant-inventory"><Dropdown.Item style={{color: 'black'}}>View Inventory</Dropdown.Item></Link>
            <Link to="/restaurant-stats"><Dropdown.Item style={{color: 'black'}}>Stats</Dropdown.Item></Link>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1' style={{textAlign: 'center'}}>Welcome to Kana!</Header>
            <div className="profileoptions">
              <div className="inventory">
                <Link to="/restaurant-inventory"><h1>Inventory</h1></Link>
              </div>
                <div className="statbox">
                   <Link to="/restaurant-stats"><h1>Statistics</h1></Link>
                </div>
                <div className="additem">
                    <Link to="/restaurant-additem"><h1>Add a Menu Item</h1></Link>
                </div>
           </div>
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Kana Company' />
            <List link inverted>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>Careers</List.Item>
              <List.Item as='a'>Our Story</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3} >
            <Header inverted as='h4' content='Kana Mobile App' />
            <List link inverted style={{display: 'flex', flexDirection: 'column'}}>
                <Link to="/"><List.Item as='a'>Mobile Home</List.Item></Link>
                <Link to="/register"><List.Item as='a'>Sign Up</List.Item></Link>
                <Link to="/login"><List.Item as='a'>Login</List.Item></Link>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Grow your restaurant business' />
            <p>
              Kana lets users discover your yummy dishes easily and can grow your restaurant business as easy as 1-2-3!
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout
