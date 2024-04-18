import axios from 'axios';
import React from 'react'

function Download() {
    const HandelCkick = async () => {
        const key = localStorage.getItem('Key')

       try {
       const response = await axios.get(`http://localhost:3000/api/v1/${key}`,{
        responseType: 'blob'
       })
       console.log(response);
         const url = window.URL.createObjectURL(new Blob([response.data]));
            window.open(`http://localhost:3000/api/v1/${key}`);

       } catch (error) {
        console.log(error);
        
       }
        };
    
  return (
    <>
    
    <button onClick={HandelCkick} className='bg-blue-500 p-2 rounded-sm'>Download</button>
    </>
  )
}

export default Download