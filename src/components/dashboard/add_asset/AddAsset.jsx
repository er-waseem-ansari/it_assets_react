import React, { useContext, useRef, useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import './AddAsset.css'
import SmallButton from '../small_button/SmallButton';
import AssetService from '../../../services/asset_service/AssetService';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';


function AddAsset() {

    const [model, setModel] = useState("")
    const [description, setDescription] = useState("")

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef0 = useRef(null)

    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image0, setImage0] = useState("")

    const{categoryId} = useParams()
    const{auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleImageUpload1 = () =>{
        inputRef1.current.click();
    }

    const handleImageUpload2 = () =>{
        inputRef2.current.click();
    }

    const handleImageUpload3 = () =>{
        inputRef3.current.click();
    }

    const handleImageUpload0 = () =>{
        inputRef0.current.click();
    }

    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        setImage1(event.target.files[0]);
    }

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        setImage2(event.target.files[0]);
    }

    const handleImageChange3 = (event) => {
        const file = event.target.files[0];
        setImage3(event.target.files[0]);
    }

    const handleImageChange0 = (event) => {
        const file = event.target.files[0];
        setImage0(event.target.files[0]);
    }

    const handleAddButton = () => {
        console.log("Handle add button clicked")
        const category = {
            "categoryId": parseInt(categoryId)
        }
        const assetObj = {
            model,
            description,
            category
        }

        console.log("Before calling the service: ", assetObj)
        AssetService.addAsset(assetObj, auth.jwtToken).then((response)=>{
            console.log("Asset added response: ", response.data)
            navigate(-1)
        }).catch((error)=>{
            console.log("this is the error" ,  error)
        })
    }
    return (
        <div style={{ width: "100%" }}>
            <h3>Add Asset</h3>
            <div className="add-asset-container">
                <div className="left-add-asset-container">
                    <div className='small-image-outer-container'>
                        <div className="small-image" onClick={handleImageUpload1}>
                            {image1? <img src={URL.createObjectURL(image1)} alt="" style={{height: "100%", width: "100%"}}/> : <AddPhotoAlternateIcon /> }
                            <input type="file" ref={inputRef1} style={{display: 'none'}} onChange={handleImageChange1}/>
                        </div>
                        <div className="small-image" onClick={handleImageUpload2} style={{ backgroundColor: '#f0f0f0' }}>
                            {image2? <img src={URL.createObjectURL(image2)} alt="" style={{height: "100%", width: "100%"}}/> : <AddPhotoAlternateIcon /> }
                            <input type="file" ref={inputRef2} style={{display: 'none'}} onChange={handleImageChange2}/>
                        </div>
                        <div className="small-image" onClick={handleImageUpload3}>
                        {image3? <img src={URL.createObjectURL(image3)} alt="" style={{height: "100%", width: "100%"}}/> : <AddPhotoAlternateIcon /> }
                            <input type="file" ref={inputRef3} style={{display: 'none'}} onChange={handleImageChange3}/>
                        </div>

                    </div>
                    <div className='big-image-container' onClick={handleImageUpload0}>
                    {image0? <img src={URL.createObjectURL(image0)} alt="" style={{height: "100%", width: "100%"}}/> : <AddPhotoAlternateIcon sx={{ fontSize: 80 }} /> }
                        
                        <input type="file" ref={inputRef0} style={{display: 'none'}} onChange={handleImageChange0}/>
                    </div>
                </div>

                <div className='right-add-asset-container'>
                    <div className="raac-top">
                        Asset name:
                        <input type="text" value={model} onChange={(e)=>setModel(e.target.value)}/>
                        <br />
                        Description:
                        <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <br />
                        Quantity: 1
                        <br />
                    </div>
                    <div className="raac-bottom">
                        <SmallButton buttonText="ADD" onClick={handleAddButton}/>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddAsset