import React, { } from 'react'
import { Icon, Header,  Button } from 'semantic-ui-react'
import Swipe from './Swipe'
import { Link } from 'react-router-dom'
import { Swipeable } from 'react-touch'

export default props => {
    return (
        <div className="foodmainpage">
            <Header className="foodmainheader"as='h2'>
                <button className="ui basic button">
                    <i className="icon user"></i>
                </button>
                {/* <Icon name='leaf' /> */}
                <Header.Content className="kananame">
                Kana
                {/* <Header.Subheader>Swipe for food</Header.Subheader> */}
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