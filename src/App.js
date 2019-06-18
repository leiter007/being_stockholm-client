import React, { Component } from 'react';
import { Container, Sidebar } from 'semantic-ui-react';
import Footer from './Components/Footer';
import Map from './Components/Map'
import MenuSidebar from './Components/MenuSidebar';
import Legend from './Components/Legend';
import { Switch, Route } from 'react-router-dom'
import LogInSignUp from './Components/LogInSignUp';
import AboutProject from './Components/AboutProject';
import Partners from './Components/Partners';
import GetInTouch from './Components/GetInTouch';
import LegalInfo from './Components/LegalInfo';


class App extends Component {
  
  state = {
    sidebarVisible: false,
    legendVisible: false,
  }

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, sidebarVisible: !prevState.sidebarVisible }))

  handleLegendChange = animation => () =>
    this.setState(prevState => ({ animation, legendVisible: !prevState.legendVisible }))


  sidebarVisibility = () => {
    this.setState({ sidebarVisible: false })
  }

  render() {

    const MyLogInSignUp = (props) => {
      return (
        <LogInSignUp
          sidebarVisibility={this.sidebarVisibility}
          {...props}
        />
      );
    }

    const MyAbout = (props) => {
      return (
        <AboutProject
          sidebarVisibility={this.sidebarVisibility}
          {...props}
        />
      );
    }

    const MyGetInTouch = (props) => {
      return (
        <GetInTouch
          sidebarVisibility={this.sidebarVisibility}
          {...props}
        />
      );
    }

    const MyPartners = (props) => {
      return (
        <Partners
          sidebarVisibility={this.sidebarVisibility}
          {...props}
        />
      );
    }

    const MyLegalInfo = (props) => {
      return (
        <LegalInfo
          sidebarVisibility={this.sidebarVisibility}
          {...props}
        />
      );
    }

    return (
      <>
        <Sidebar.Pushable
          as={Container}
          id='main-content'>
        <Sidebar.Pusher>
          <Switch>
            <Route exact path='/' render={(props) => <Map {...props} handleLegendChange={this.handleLegendChange} />}/>
            <Route exact path='/log-in' render={MyLogInSignUp}></Route>
            <Route exact path='/about' render={MyAbout}></Route>
            <Route exact path='/contact' render={MyGetInTouch}></Route>
            <Route exact path='/partnerds' render={MyPartners}></Route>
            <Route exact path='/legal-info' render={MyLegalInfo}></Route>
          </Switch>
        </Sidebar.Pusher>

          <MenuSidebar visible={this.state.sidebarVisible} />
          <Legend visible={this.state.legendVisible} />

        </Sidebar.Pushable>

        <Footer 
          handleAnimationChange={this.handleAnimationChange} 
          handleLegendChange={this.handleLegendChange}  
          />
      </>
    )
  }
}

export default App;
