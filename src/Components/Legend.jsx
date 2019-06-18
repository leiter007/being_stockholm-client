import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid, Header, Segment, Sidebar, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const VerticalSidebar = ({ visible }) => (
  <Sidebar
    id='menu-sidebar'
    as={Segment}
    animation='overlay'
    direction='bottom'
    visible={visible}>

    <Grid
      textAlign='center'
      verticalAlign='middle'
      id='menu-sidebar-grid'>

      <Grid.Column>

        <Header
          id='log-in'>
          Category 1
        </Header>

      </Grid.Column>
    </Grid>

  </Sidebar>
)

VerticalSidebar.propTypes = {
  visible: PropTypes.bool,
}

export default class Legend extends Component {

  render() {

    return (
        <VerticalSidebar visible={this.props.visible} />
    )
  }
}
