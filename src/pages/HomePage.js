import React from 'react';

// CSS import statements
import '../css/App.css';
import '../css/HomePage.css';

// Component import statements
import Experience from '../components/Experience.js';

// Content import Statements
import HomePageContent from '../content/HomePageContent.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomePageContent;
  }

  render() {
    return(
      <div>
        <div className='intro'>
          <div className='page-header'>Hey there, I'm Dan!</div>
          <p>I’m a Flight Test Engineer at Lockheed Martin and a Georgia Tech alumnus.</p>
          <p>“If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.” -Martin Luther King, Jr.</p>
        </div>
        <hr />
        <div className='exp-header'>Here's what I've done</div>
        <Experience exp={this.state.experience} />
      </div>
    )
  }
}

export default Home;