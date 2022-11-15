import React, { useState, useEffect } from "react";
import LightGallery from 'lightgallery/react';

import '../../assets/css/main.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';

import { useDropzone } from 'react-dropzone'

import { useTranslation } from "react-i18next";

const storageConfigured = isStorageConfigured();



function Upload() {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [previews, setPreviews] = useState([])
    const [files, setFiles] = useState([])
    // const [inputKey, setInputKey] = useState(Math.random().toString(36));

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {

            if (acceptedFiles.length === 0) {
                setSelectedFile(undefined)
                return
            }

            setSelectedFiles(() => [...acceptedFiles])
        }
    });
    const onFileUpload = async () => {
        // prepare UI
        // setUploading(true);
        console.log(selectedFiles)
        // *** UPLOAD TO AZURE STORAGE ***
        selectedFiles.forEach(async element => {
            await uploadFileToBlob(element);
        });
        

    
        // reset state/form
        setSelectedFiles([]);
        setPreviews([]);
        // setUploading(false);
        // setInputKey(Math.random().toString(36));
      };

    useEffect(() => {

        if (!selectedFiles.length === 0) {
            setPreview(undefined)
            return
        }
        var fileArray = []
        var fileDataArray = []
        for (let i = 0; i < selectedFiles.length; i++) {
            fileArray.push(URL.createObjectURL(selectedFiles[i]))
            fileDataArray.push(selectedFiles[i])
        }
        setPreviews(previews => [...previews, ...fileArray])
        setFiles(files => [...files, ...fileDataArray])


        // free memory when ever this component is unmounted
        return () => {
            for (let i = 0; i < previews.length; i++) {
                URL.revokeObjectURL(previews[i])
            }
        }
    }, [selectedFiles])


    const deleteFiles = () => {
        setPreviews([])
        setSelectedFiles([])
        setFiles([])
    }


    return (
        <section className="post">
            <h2>Share your photos of the night with us</h2>
            <p>Do you have immages you would like to share with us? No problem! Just send them to us bellow </p>
            <div class="box">
                <div>
                    <LightGallery
                        speed={500} >
                        {(previews || []).map((url, i) => (
                            <img style={{ width: "100px", hight: "100px" }} key={i} src={url} alt="..." />
                        ))}
                    </LightGallery>
                </div>
                <div {...getRootProps({ className: 'dropzone' })} style={{ background: "rgb(48, 47, 35)", height: "200px" }}>
                    <input {...getInputProps()} />
                    <p style={{ textAlign: "center" }}> Click to open file browser or Drag 'n' drop some files here.</p>
                </div>
                <button style={{marginTop:"20px"}} onClick={() => deleteFiles()}>Delete</button>
                <button style={{marginTop:"20px",marginLeft:"20px"}} onClick={() => onFileUpload()}>Submit</button>
            </div></section >
    )
}


// https://www.positronx.io/react-single-and-multiple-images-upload-preview/
export default Upload;
