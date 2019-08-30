import React, { } from 'react'
import { Icon, Header,  Button } from 'semantic-ui-react'
import Swipe from './Swipe'
import { Link } from 'react-router-dom'

export default props => {

    return (
        <div id="foodmainpage">
            <Header className="foodmainheader"as='h2'>
                <button className="ui basic button">
                    <i className="icon user"></i>
                </button>
                <Icon name='leaf' />
                <Header.Content>
                Kana
                <Header.Subheader>Food Finder Service</Header.Subheader>
                </Header.Content>
                <button className="ui basic button">
                    <Icon name="heart"/>
                </button>
            </Header>
            {/* <Divider /> */}
            <Swipe />
        </div>
    )
}
