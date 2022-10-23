import React, { useState, useEffect } from "react";
import LightGallery from 'lightgallery/react';

import '../../assets/css/main.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { useDropzone } from 'react-dropzone'

import { useTranslation } from "react-i18next";


function Upload() {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [previews, setPreviews] = useState([])
    const [files, setFiles] = useState([])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {

            if (acceptedFiles.length === 0) {
                setSelectedFile(undefined)
                return
            }

            setSelectedFiles(() => [...acceptedFiles])
        }
    });

    // create a preview as a side effect, whenever selected file is changed
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
            <h2>Upload own images</h2><div class="box">
                <p>Do you have immages you would like to share with us? No problem! Just send to us bellow </p>
                <div>
                    <LightGallery
                        speed={500} >
                        {(previews || []).map((url, i) => (
                            <img style={{ width: "100px", hight: "100px" }} key={i} src={url} alt="..." />
                        ))}
                    </LightGallery>
                </div>
                <div {...getRootProps({ className: 'dropzone' })} style={{ background: "grey", height: "200px" }}>
                    <input {...getInputProps()} />
                    <p style={{ textAlign: "center" }}> Drag 'n' drop some files here, or click to select files</p>
                </div>
                <button onClick={() => deleteFiles()}>Delete</button>
            </div></section >
    )
}


// https://www.positronx.io/react-single-and-multiple-images-upload-preview/
export default Upload;
