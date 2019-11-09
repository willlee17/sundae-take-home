import React, { PureComponent } from 'react';
import OfferProceduresList from './OfferProceduresList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class RequestOfferHome extends PureComponent {
  render() {
    return (
      <div className="requestOfferHome">
        <Grid container direction="row" alignItems="center" style={{ minHeight: '100vh' }}>
        
          <Grid item xs={6}>
            <img src="/sundae-icon.png" alt="sundae-logo" className="sundaeLogo"/>
          </Grid>

          <Grid item xs={6}>
            <OfferProceduresList offerProcedures={this.props.offerProcedures}/>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="secondary" className="offerButton">Get Offer</Button>
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default RequestOfferHome;
