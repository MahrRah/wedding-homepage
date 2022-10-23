import React, { useState, useEffect, useCallback } from "react";
import '../../assets/css/main.css'
import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader'
import { useDropzone } from 'react-dropzone'
// import { getDroppedOrSelectedFiles, } from 'html5-file-selector';

import { useTranslation } from "react-i18next";


function Upload() {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [previews, setPreviews] = useState([])
    const [files, setFiles] = useState([])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            console.log(acceptedFiles)
        if (acceptedFiles.length === 0) {
            console.log(acceptedFiles)
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        // setTheArray(oldArray => [...oldArray, newElement]);setSelectedFilesetSelectedFile
        console.log(acceptedFiles)
        console.log(selectedFiles)
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

    // const onSelectFile = e => {

    //     console.log(e.target.files)
    //     if (e.target.files.length === 0) {
    //         console.log(e.target.files)
    //         setSelectedFile(undefined)
    //         return
    //     }

    //     // I've kept this example simple by using the first image instead of multiple
    //     // setTheArray(oldArray => [...oldArray, newElement]);setSelectedFilesetSelectedFile
    //     console.log(e.target.files)
    //     console.log(selectedFiles)
    //     setSelectedFiles(() => [...e.target.files])

    // }

    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //     console.log(acceptedFiles)
    //     if (acceptedFiles.length === 0) {
    //         console.log(acceptedFiles)
    //         setSelectedFile(undefined)
    //         return
    //     }

    //     // I've kept this example simple by using the first image instead of multiple
    //     // setTheArray(oldArray => [...oldArray, newElement]);setSelectedFilesetSelectedFile
    //     console.log(acceptedFiles)
    //     console.log(selectedFiles)
    //     setSelectedFiles(() => [...acceptedFiles])
    // }, [])

    return (
        <div>
            <div style={{ borderColor: "green" }}>

                {(previews || []).map(url => (
                    <img style={{ width: "100px", hight: "100px" }} key={url} src={url} alt="..." />
                ))}
            </div>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            {/* <Dropzone onDrop={onDrop} accept={"image/*"} /> */}
            {/* <input type='file' multiple onChange={onSelectFile} accept={"image/*"} /> */}
        </div>
    )
}



// function Upload() {
//     const fileParams = ({ meta }) => {
//         return { url: 'https://httpbin.org/post' }
//     }
//     const onFileChange = ({ meta, file }, status) => { 
//         console.log(status, meta, file) 
//     }
//     const onSubmit = (files, allFiles) => {
//         allFiles.forEach(f => f.remove())
//     }
//     const getFilesFromEvent = e => {
//         return new Promise(resolve => {
//             getDroppedOrSelectedFiles(e).then(chosenFiles => {
//                 resolve(chosenFiles.map(f => f.fileObject))
//             })
//         })
//     }
//     const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
//         const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
//         return (
//             <label className="btn btn-danger mt-4" style={{color:"white"}}>
//                 {textMsg}
//                 <input
//                     style={{ display: 'none' }}
//                     type="file"
//                     accept={accept}
//                     multiple
//                     onChange={e => {
//                         getFilesFromEvent(e).then(chosenFiles => {
//                             onFiles(chosenFiles)
//                         })
//                     }}
//                 />
//             </label>
//         )
//     }
//     return (
//         <Dropzone
//             onSubmit={onSubmit}
//             onChangeStatus={onFileChange}
//             InputComponent={selectFileInput}
//             getUploadParams={fileParams}
//             getFilesFromEvent={getFilesFromEvent}
//             accept="image/*,video/*"
//             maxFiles={5}
//             inputContent="Drop A File"
//             styles={{
//                 dropzone: { width: 600, height: 400 },
//                 dropzoneActive: { borderColor: 'green' },
//             }}            
//         />
//     );
// }
// https://www.positronx.io/react-single-and-multiple-images-upload-preview/
export default Upload;
