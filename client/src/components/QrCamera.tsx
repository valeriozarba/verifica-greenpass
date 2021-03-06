import React, { useState } from 'react'
import QrReader from 'react-qr-reader-es6'

function QrCamera({callBackQrCode}){

    const [result,setResult]=useState('No result');

    const handleScan = data => {
        if (data) {
            console.log(data)
            setResult(data);
            callBackQrCode(data)
        }
      }
      const  handleError = err => {
        console.error(err)
      }

    return (
    <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
      </div>
    )
}

export default QrCamera;