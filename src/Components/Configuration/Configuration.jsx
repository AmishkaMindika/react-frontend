import React, { useState } from 'react'
import './Configuration.css'
import axios from 'axios';



function Configuration() {


    //to get the current ticket configuration
    const[totalTickets , setTotalTickets] = useState('');
    const[releaseRate , setReleaseRate] = useState('');
    const[retrievalRate , setRetrievalRate] = useState('');
    const[maximumCapacity , setMaximumCapacity] = useState('');


    //to display the current configuration after user input data
    const[currentConfig , setCurrentConfig] = useState('');

    //submit new configuration
    const setNewConfiguration = async () =>{
        const newConfiguration = {
            maxTicketCapacity : parseInt(maximumCapacity , 10),
            totalTickets : parseInt(totalTickets , 10),
            ticketReleaseRate : parseInt(releaseRate , 10),
            customerRetrievalRate : parseInt(retrievalRate , 10)
        };

        try{
            const response = await axios.post('http://localhost:8080/api/v1/newConfig' , newConfiguration);
            console.log("Full Response: " , response);
                    
            if (response.data === 'Configuration set'){
                console.log('New Configuration set');
            }else{
                console.log('Error setting up new configuration' , response.data);
            }
            
        }catch (e) {
            console.log("Error setting up new configuration" , e)
        }

    };



  return (
    
    <div className="configuration">
      
        <h2>New Configuration</h2>
        <p>Enter the Total Number of Tickets: </p>
        <input type="number" placeholder='0' id='totalTickets' onChange={(e) => setTotalTickets(e.target.value)} />
        <p>Enter the Ticket Release Rate: </p>
        <input type="number" placeholder='0' id='releaseRate' onChange={(e) => setReleaseRate(e.target.value)} />
        <p>Enter the Customer Retrieval Rate: </p>
        <input type="number" placeholder='0' id='retrievalRate' onChange={(e) => setRetrievalRate(e.target.value)} />
        <p>Enter the Maximum Numberof  Tickets: </p>
        <input type="number" placeholder='0' id='maximumCapacity' onChange={(e) => setMaximumCapacity(e.target.value)}/>
        <br />
        <button  onClick={setNewConfiguration}>Set Configuration</button>
        <br />

        <h2> Current Configuration </h2>
        
        <p className="current-config ">Total Number of Tickets:{totalTickets} </p>
        <p className="current-config ">Ticket Release Rate:{releaseRate} </p>
        <p className="current-config ">Customer Retrieval Rate: {retrievalRate} </p>
        <p className="current-config ">Maximum Number of Tickets: {maximumCapacity} </p>
        <br />
    </div>
    
  
  )
  
  
}

export default Configuration;