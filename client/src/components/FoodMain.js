import React from 'react'
import { Card, Icon, Image, Divider, Button, Header } from 'semantic-ui-react'

export default props => {
    return (
        <div id="foodmainpage">
            <Header className="foodmainheader"as='h2'>
                <button class="ui basic button">
                    <i class="icon user"></i>
                </button>
                <Icon name='leaf' />
                <Header.Content>
                Kana
                <Header.Subheader>Food Finder Service</Header.Subheader>
                </Header.Content>
                <button class="ui basic button">
                    <Icon name="heart"/>
                </button>
            </Header>
            {/* <Divider /> */}
            <Card id="fooditem">
                <Image src='http://placehold.it/400x500' wrapped ui={false} height="" width="" />
                <Card.Content>
                <Card.Header id="foodnameheader">(food item name)
                    <Card.Meta><span>(food price)</span></Card.Meta>
                </Card.Header>
                <Card.Meta>
                    <span className='date'>(restaurant name)</span>
                </Card.Meta>
                <Card.Description>
                    food allergy description
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='star' />
                    rating??
                </a>
                </Card.Content>
            </Card>
            <Button.Group>
                <Button>No</Button>
                <Button.Or />
                <Button positive>Yes</Button>
            </Button.Group>
        </div>
    )
}
