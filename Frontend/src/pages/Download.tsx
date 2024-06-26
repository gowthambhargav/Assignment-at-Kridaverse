import axios from 'axios';
import React from 'react'

function Download() {
    const HandelCkick = async () => {
        const key = localStorage.getItem('Key')

       try {
       const response = await axios.get(`https://assignment-at-kridaverse.onrender.com/api/v1/${key}`,{
        responseType: 'blob'
       })
       console.log(response);
         const url = window.URL.createObjectURL(new Blob([response.data]));
            window.open(`https://assignment-at-kridaverse.onrender.com/api/v1/${key}`);

       } catch (error) {
        console.log(error);
        
       }
        };
    
  return (
    <div className='flex justify-center items-center'>
    <p>Please wait some time and then download.</p>
<p>If you are not redirected or the PDF does not open, click on Download again.</p>
    <button onClick={HandelCkick} className='bg-blue-500 p-2 rounded-sm'>Download</button>
    </div>
  )
}

export default Download