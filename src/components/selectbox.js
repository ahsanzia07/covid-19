import React, { useEffect,useState,useContext }  from 'react'
import {dataSenderAndReciver} from "../store/transcontext"
import"./grid.css"
export default function Selectbox() {
    
let[countrydata,setCountrydata]=useState('Global');
let [country , setCountry]= useState();
let[covidData,setCovidData]=useState()
    let dataCall= useContext(dataSenderAndReciver)

  useEffect(()=>{
    async function countryData(){
        const response=await fetch ("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
        let cData= await response.json()
        
        setCovidData(cData);
        console.log(cData);

    }countryData()

},[])
function HandleSubmit(e){
    e.preventDefault();

    if(e.target.value!== "Global"){
        setCountry(e.target.value)
        covidData.find((obj)=>{
            if (e.target.value==obj.country) {
                dataCall.dataReceiver({                        /////
                    death: obj.deceased,
                    recover: obj.recovered,
                    confirmed: obj.infected
})
}

})
}

}



  return covidData ? <div className="select">
      <select class="form-select" aria-label="Default select example"
      onChange={HandleSubmit} value={country}  >
          
  <option selected>Global</option>
  {
      covidData.map((obj)=>{
          return <option value={obj.country}>{obj.country}</option>
      })
  }
  
 
</select>
    </div> :<h1>load</h1>

}


