import React, { } from 'react'
import { Icon, Header } from 'semantic-ui-react'
import Swipe from './Swipe'

export default props => {

    return (
        <div id="foodmainpage">
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
