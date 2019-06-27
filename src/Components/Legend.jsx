import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Sidebar, Grid, Menu, Sticky } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Legend extends Component {


  render() {
    return (

      <>
        <Sidebar
        className='legend-content'
        id='legend'
        as={Segment}
        animation='overlay'
        direction='bottom'
        visible={this.props.visible}
        onClick={() => this.props.dispatch({ type: 'CHANGE_LEGEND_VISIBILITY' })}
        >
          <Grid>
            <Grid.Column>
              <p>Carla</p>
            </Grid.Column>
          </Grid>
        </Sidebar>
      </>
     
    )
  }
}
const mapStateToProps = (state) => {
  return {
    visible: state.animation.legendVisible
  }
}
export default connect(mapStateToProps)(Legend);
