import React, { Component } from 'react'
import CounterComponent from '../components/counter'
import { Card } from 'semantic-ui-react'


export default class HomePage extends Component {
  render() {
    return (
      <div>
        HomePage
        <Card.Group centered>
          <Card>
            <Card.Content>
              <CounterComponent/>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}
