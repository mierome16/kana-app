import React from 'react'
import { Table, Menu, Segment } from 'semantic-ui-react'

export default props => {
 return (
  <div style={{height: '100vh', width: '100vw'}}>
    <h1 style={{textAlign: 'center', color: '#8f0a03', paddingTop: '7%'}}>inventory for items</h1>
    <div style={{height: '700px', width: '1000px', margin: 'auto'}}>
    <Menu attached='top' compact inverted widths={4}>
        <Menu.Item as='a'>Name</Menu.Item>
        <Menu.Item as='a'>Price</Menu.Item>
        <Menu.Item as='a'>Description</Menu.Item>
        <Menu.Item as='a'>Image</Menu.Item>
      </Menu>
      <Table attached inverted>
        <Table.Header>
          <Table.HeaderCell>item 1 name</Table.HeaderCell>
          <Table.HeaderCell>item 1 price</Table.HeaderCell>
          <Table.HeaderCell>item 1 description</Table.HeaderCell>
          <Table.HeaderCell>item 1 image</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>item 2 name</Table.Cell>
            <Table.Cell>item 2 price </Table.Cell>
            <Table.Cell>item 2 description</Table.Cell>
            <Table.HeaderCell>item 2 image</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>item 3 name</Table.Cell>
            <Table.Cell>item 3 price</Table.Cell>
            <Table.Cell>item 3 description</Table.Cell>
            <Table.HeaderCell>item 3 image</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>item 4 name</Table.Cell>
            <Table.Cell>item 4 price</Table.Cell>
            <Table.Cell>item 4 description</Table.Cell>
            <Table.HeaderCell>item 4 name</Table.HeaderCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Segment attached='bottom' inverted>
        My Inventory
      </Segment>
      </div>
  </div>
 )
}
