import axios from 'axios';
import '../App.css';
import React, {useEffect, useState } from 'react';

const FileUpload=(callBackMethod:any)=>{

    const [verificatype,setVerificaType]=useState(1);

    // API Endpoints
    const custom_file_upload_url = `http://localhost:9999/validate`;
    const [image,setImage]=useState({
        image_file: null,
        image_preview: '',
    });


    // Image Preview Handler
    const handleImagePreview = (e:any) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        setImage({
            image_preview: image_as_base64,
            image_file: image_as_files,
        })
    }

    // Image/File Submit Handler
    const handleSubmitFile = () => {

        if (image.image_file !== null){

            let formData = new FormData();
            formData.append('qrcode', image.image_file);
            formData.append('verificaType',verificatype.toString());
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile

            axios.post(
                custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Authorization": "",
                        "Content-type": "multipart/form-data",
                    },                    
                }
            )
            .then( (res:any) => {
                callBackMethod(res.data);                
            }).catch( (err:any)  => {
                console.log(err);
            })
        }
    }

   

    const updateDataType=(valore:any)=>{
        console.log("Aggiorno valore....",valore);
        setVerificaType(valore);
    }
     
    return (

        <div className="form-content">           
            <div className='form-upload'>
                <label>Seleziona tipo di verifica</label>
                <select name="typeVerification" onChange={(opt)=>updateDataType(opt.target.value)}>
                    <option value="1">BASE</option>
                    <option value="2">Rafforzata</option>
                    <option value="3">Rafforzata+tapone</option>
                </select>
                <input
                    type="file"
                    onChange={handleImagePreview}
                />
                <label>Upload file</label>
                <input type="submit" onClick={handleSubmitFile} value="Submit"/>
                {image.image_preview && 
                (<div className="form-anteprima" >
                    <img src={image.image_preview} alt="preview" />
                </div>)
                }
            </div>

        </div>
    );
    
}

export default FileUpload;