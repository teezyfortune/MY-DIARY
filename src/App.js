import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/pages/About';
import Contact from './components/actions/Contact';
import PortFolio from './components/pages/PortFolio';
import myimage from '../src/components/images/myimage.jpg';
import Home from './components/Home';

export default class App extends Component {
  static defaultProps = {
    portfolio: [
      {
        FullName: "Adekeye Gabriel Temitope",
        Skills: "full stack web devloper",
        stack: "Nodejs(express.Js) Backend and React.js",
        fact: "At fortunetech we bring your dreams to reality, We design applications that can solve your day to day activities in other to achhieve your business goals",
      },
        {
          name: "About",
          content: "Am a full stack nodejs and javascript developer, Am from Nigeria, I have passion for a well structured databse and aethestic user experience,I have two years experience in website deve",
          image: myimage
        },
        {
          name: "Project",
          content: "Am a full stack nodejs and javascript developer, Am from Nigeria< I have passion for a well structured databse and aethestic user experience",
          "github": "https://github.com/teezyfortune",
         "live": "https://www.onekioskafrica.com/"
        },
        {
          name: "Contact Me",
          Phone: "07064654254",
          twiter: "@GabrielFortune5",
          facebook: "Adekeye Temmytope teezfotune",
          github: "https://github.com/teezyfortune"
        }
    ]
  };

  render() {

    let info = this.props.portfolio.map(folio => folio)
    const data = info.map(names => names)
      // console.log('>>>>>>>linkup', resm.find(name => name.name === 'Contact Us'))
    const content = this.props.portfolio.map( cont => cont)

    const getInfo = props => {
      let name = props.match.params.name
      let getCurrentName = data.find(res => res.name === name)

      if (name === 'About') {
        return <About {...props} about={getCurrentName} />
      }

      if (name === 'Project') {
        return <PortFolio {...props} portfolio={getCurrentName} />
      }
      
      if (name === 'Contact Me') {
        return <Contact {...props} contact={getCurrentName} />
      }

    }

        return (
      <div>
        <Navbar profile={info} />
        <LandingPage message={content} />
            <Switch>
              <Route exact path="/portfolio" render={() => <Home info={info}/> }/>
              <Route exact path="/portfolio/:name" render={getInfo} />
        </Switch>
     
      </div>
    )
  }
}
