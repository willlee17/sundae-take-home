import React, { PureComponent } from 'react';
import './App.css';
import RequestOfferHome from './RequestOfferHome';

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      offerProcedures: [
        {
          id: 1,
          title: 'FREE HOME ASSESSMENT',
          info: `Fill out the form below and we'll contact you within 24 hours to schedule your free, no obligation home assessment.`
        },
        {
          id: 2,
          title: 'GET A CASH OFFER',
          info: `Sundae provides the highest off-market price for your house as-is.
          We also offer a $10,000 cash advance if you need more immediate financial support prior to closing.`
        },
        {
          id: 3,
          title: 'CLOSE AT YOUR PACE',
          info: `Close as quickly as 10 days. Or take your time and close up to 60 days after you accept your offer. It’s up to you.`
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <RequestOfferHome offerProcedures={this.state.offerProcedures}/>
      </div>
    );
  }
}

export default App;
