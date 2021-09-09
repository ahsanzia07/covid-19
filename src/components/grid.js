import React, {useContext, useEffect,useState } from 'react';
import "./grid.css"
import {dataSenderAndReciver} from "../store/transcontext"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
   maxWidth:1000,
   margin:"0 auto",
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
let[data,setdata]=useState()


let AddNewDATA=useContext(dataSenderAndReciver)
console.log(AddNewDATA.ahsan);


// let covidGaya=useContext(transectionContext);

  // useEffect(()=>{
  //     async function getData(){
  //         const response=await fetch ("https://covid19.mathdro.id/api ")
  //         let data= await response.json()
          
  //         setdata(data);

  //        AddNewDATA.dataReceiver({
  //          recovered: data.recovered.value,
  //          deaths: data.deaths.value,
  //          confirmed: data.confirmed.value
  //        })

  //     }getData()

  // },[])

  

  if(!AddNewDATA)
  return <h1>loading</h1>
 
  return (

    <div className={classes.root}>
       {/* {AddNewDATA.ahsan.map((obj)=>{  */}
          {/* return( */}
      <Grid container spacing={3}>
         
        <Grid item xs={12} sm={4}>
          <Paper id="card1" elevation={7} className={classes.paper}> <h2><b> Total Deaths </b></h2><br/><br/>{AddNewDATA.ahsan.death}
          <br/> <br/> <br/>
          <p><b>Here, is total Death cases in the region</b></p>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper id="card2" elevation={7} className={classes.paper}><h2><b> Total Active Cases </b></h2><br/><br/>{AddNewDATA.ahsan.confirmed}
          <br/> <br/> <br/>
          <p><b>Here, is total Active cases in the region</b></p>
         </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper id="card3" elevation={7} className={classes.paper}><h2><b> Total Recovered </b></h2><br/><br/>{AddNewDATA.ahsan.recover}
          <br/> <br/> <br/>
          <p><b>Here, is total Recover cases in the region</b></p>
         </Paper>
        </Grid>

        </Grid>
          {/* )})} */}
      
    </div>
  );
}
