import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: 'rgb(224,54,88)',
  }
})

const OfferProcedure = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="flex-start" justify="flex-start">

      <Grid item xs={1} className="procedureAvatarHolder">
        <Avatar className={classes.avatar}>{props.procedure.id}</Avatar>
      </Grid>

      <Grid item xs={11} style={{textAlign: "left"}} className="procedureInfoHolder">
        <h5 className="procedureTitleHolder">
          {props.procedure.title}
        </h5>
        <p className="procedureInfoHolder">
          {props.procedure.info}
        </p>
      </Grid>
      
    </Grid>
  )
}

export default OfferProcedure;
