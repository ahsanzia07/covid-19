import React, { useContext, useState ,useEffect} from 'react';
import "../App.css"
import { PolarArea } from 'react-chartjs-2';
import {dataSenderAndReciver} from "../store/transcontext"

 function Polar () {

    let agya= useContext(dataSenderAndReciver);

if(!agya)
return <h1>loading</h1>

    const data = {
      labels: ['Deaths', 'Recovered',  'Active'],
      datasets: [
        {
          label: '# of Votes',
          data: [agya.ahsan.death, agya.ahsan.recover,agya.ahsan.confirmed],
          backgroundColor: [
            'rgb(228, 24, 24)',
            ' rgb(9, 98, 231)',
            'rgb(7, 238, 57)',
            
          ],
          borderWidth: 1,
        },
      ],
    };



  return(<>
    <div className='header'>
      <h1 className='title'>Polar Area Chart</h1>
      <div className='links' >
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Polar.js'
        >
          Covid-19 Graph
        </a>
      </div>
    </div>
   <div id="papa"> <PolarArea data={data} /> </div>
  </>)
};

export default Polar;