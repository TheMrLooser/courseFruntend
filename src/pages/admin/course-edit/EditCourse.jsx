import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Container,
  Error,
  GlobalStyles,
  InputLabel,
  InputSection,
  SectionHeading,
} from "../../../components/CommonStyles";
import { StyledSectionHeading } from "../../../components/course/Course.styles";
import Header from "../../../components/header/Header";
import {
  StyledInputField,
  TextAreaField,
  TextAreaSection,
} from "../../contact/Contact.styles";
import {
  DescWrap,
  PhotoSection,
  ImageWrap,
  LeftSection,
  RightSection,
  SectionTitle,
  TagsWrap,
  Wrapper,
  VideoSection,
  VideoWrap,
  ButtonSection,
  ButtonWrap,
  Discard,
  AddProduct,
  CourseImage,
  UploadWrap,
  CourseWrap,
  Heading,
} from "./EditCourse.styles";
import { Button, Upload } from "antd";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";
import { Alert,Collapse} from "@mui/material";
import IconButton from '@mui/material/IconButton'; 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courseSchema } from "../../../components/modal/add-course/courseSchema";
import { Link } from "react-router-dom";
import { AddNewCourseAPI, GetAllBuyedCourseAPI, UpdateCourseAPI, UploadVideoAPI } from "../../../API/api";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from '../../../firebaseConfig'

const EditCourse = () => {
// alert section
const [alertOpen, setAlertOpen] = useState(false);
const [alertText, setAlertText] = useState("Somthing");
const [alertType, setAlertType] = useState("success");

const setAlert = (type,text,status)=>{
  setAlertType(type)
  setAlertText(text)
  setAlertOpen(status)
}

useEffect(()=>{
  if(alertOpen){
    setTimeout(() => {
      setAlertOpen(false)
    }, 10000);
  }
},[alertOpen])

  // setting for changing type of input section
  const [update,setUpdate] = useState(false)
  const [openVideoUploadSec,setOpenVideoUploadSec] = useState(false)
  const [courseID,setCourseID] = useState("")
  const [course,setCourse] = useState()

 useEffect(()=>{
  const query = window.location.search.replace("?","").split("&")
  if(query[0]=="update=true"){
    setUpdate(true) 
    const id = query[1].replace("id=","")
    setCourseID(id)
  }
 },[])
 useEffect(()=>{
   const getCourse = async()=>{
    const res = await GetAllBuyedCourseAPI(courseID)
    setCourse(res.data.course)
   }
   getCourse()
 },[courseID])
 

  const [imgFile,setImgFile] = useState("")
  const [title,setTitle] = useState( null)
  const [desc,setDecs] = useState( null)
  const [price,setPrice] = useState( 0)
  const [auther,setAuther] = useState( null)
  const [catagory,setCatagory] = useState(null)
  const [videos,setVideos] = useState(undefined)
  const [videoURL,setVideoURL] = useState(null)
  const [videoproce,setVideProce] = useState(0)
  const [videoTitle,setVideTitle] = useState("")
  const [videoDesc,setVideDesc] = useState("")



  useEffect(()=>{
    setImgFile(course?course.img:"")
     setTitle(course?course.courseName:null)
    setDecs(course?course.description:null)
     setPrice(course?course.price:0)
     setAuther(course?course.auther:null)
     setCatagory(course?course.catagory:null)
  },[course])

  // converting img to base64
 const buffringImg =(file)=>{
   const reader = new FileReader()
   reader.addEventListener('load',()=>{
     setImgFile(reader.result)
   })
   reader.readAsDataURL(file)
 }
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all", resolver: yupResolver(courseSchema) });

  const onSubmit = (d) => {
    alert(JSON.stringify(d)); 
    reset();
  };
 

  const AddCourse = async()=>{
    const res = await AddNewCourseAPI(imgFile,title,desc,price,auther,catagory)
    console.log(res.data)
    if(res.data.error){ 
      return setAlert("error",res.data.message,true);
     }
     setAlert("success",res.data.message,true)
  }
  const updateCourse = async()=>{
     
    const res = await UpdateCourseAPI(imgFile,title,desc,price,auther,catagory,courseID)
    if(res.data.error){
      return setAlert("error",res.data.message,true);
     }
     setAlert("success",res.data.message,true)
    }



  // uploading video on firebase
  const uploadFile = (file)=>{
    const storage = getStorage(app);
    const storageRef = ref(storage,  videoTitle);
    const uploadTask = uploadBytesResumable(storageRef, file);

  
    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setVideProce(Math.round(progress))
          setAlert("success",`Video processing ${Math.round(progress)}`,true)
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
        default:
            break;
        }
    }, 
    (error) => {},
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const res = await UploadVideoAPI(courseID,downloadURL,videoTitle,videoDesc)
            if(res.data.error){
              return setAlert("error",res.data.message,true);
            }
            setAlert("success",res.data.message,true)
        });
      }
    )
} 
 
 
 
 

const uploadVideo = async ()=>{
  uploadFile(videos)
}

  return (
    <Container>

    <Collapse in={alertOpen}> 
      <Alert    
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlertOpen(true);
            }}
          >
          </IconButton>
        }
        sx={{ mb: 2 }}
        severity={alertType}
      >
      {alertText}
      </Alert>
    </Collapse>


      <GlobalStyles />
      <Wrapper>
        <Heading>
          <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
            <ArrowCircleLeftOutlined
              sx={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
          </Link>
          Course Details
        </Heading>
        <CourseWrap onSubmit={handleSubmit(onSubmit)}>
        {!openVideoUploadSec?<>
          <LeftSection>
            <SectionTitle>Description</SectionTitle>
            <DescWrap>
              <InputSection>
                <InputLabel>Course Name</InputLabel>
                <StyledInputField type="text"  /*{...register("title")}*/ onChange={(e)=>{setTitle(e.target.value)}} placeholder={course?course.courseName:null}/>
                <Error>{errors.title?.message}</Error>
              </InputSection>
              <InputSection>
                <InputLabel>Auther</InputLabel>
                <StyledInputField type="text"   /*{...register("title")}*/ onChange={(e)=>{setAuther(e.target.value)}} placeholder={course?course.auther:null}/>
                <Error>{errors.title?.message}</Error>
              </InputSection>
              <InputSection>
                <InputLabel>Catagory</InputLabel> 
                <StyledInputField type="text"   /*{...register("title")}*/ onChange={(e)=>{setCatagory(e.target.value)}} placeholder={course?course.catagory:null}/>
                <Error>{errors.title?.message}</Error>
              </InputSection>
              <TextAreaSection>
                <InputLabel>Description</InputLabel>
                <TextAreaField type="text" /*{...register("desc")}*/ onChange={(e)=>{setDecs(e.target.value)}} />
                <Error>{errors.desc?.message}</Error>
              </TextAreaSection>
            </DescWrap>
          </LeftSection>
          <PhotoSection>
            <SectionTitle>Course Image</SectionTitle>
            <ImageWrap onChange={(e)=>{buffringImg(e.target.files[0])}} >
              <Upload
                listType="picture-card"
                action={"http://localhost:3000/"}
                accept=".png,.jpg,.jpeg"
                
              >
                <Button>Upload</Button>
              </Upload>
            </ImageWrap>
          </PhotoSection>
           
          <RightSection>
            <SectionTitle>Pricings</SectionTitle>
            <TagsWrap>
              {/* <InputSection>
                <InputLabel>Tags</InputLabel>
                <StyledInputField type="text" {...register("tags")} />
                <Error>{errors.tags?.message}</Error>
              </InputSection> */}
              <InputSection>
                <InputLabel>Price</InputLabel>
                <StyledInputField
                  type="number"
                  min="0"
                  // {...register("price")}
                  placeholder={course?course.price:null}
                  onChange={(e)=>{setPrice(e.target.value)}}
                />
                <Error>{errors.price?.message}</Error>
              </InputSection>
            </TagsWrap>
          </RightSection>

          </>:null}

          

          { 
            (update&&openVideoUploadSec)?
            <>
            <DescWrap>
            <SectionTitle>Videos</SectionTitle>
            <TagsWrap>
                <InputSection>
                <InputLabel>Video title</InputLabel>
                <StyledInputField type="text"  onChange={(e)=>setVideTitle(e.target.value)} />
                <Error>{errors.tags?.message}</Error>
              </InputSection> 
            </TagsWrap> 
            <br/>
            <TagsWrap>
              <TextAreaSection>
                <InputLabel>Description</InputLabel>
                <TextAreaField type="text" /*{...register("desc")}*/ onChange={(e)=>{setVideDesc(e.target.value)}} />
                <Error>{errors.desc?.message}</Error>
              </TextAreaSection>
            </TagsWrap>
            <VideoSection> 
            <br/>
            <VideoWrap onChange={(e)=>{setVideos(e.target.files[0])}}>
              <Upload.Dragger
                multiple
                listType="picture"
                action={"http://localhost:3000/"}
                accept=".mp4"
              >
                <Button>Upload</Button>
              </Upload.Dragger>
            </VideoWrap>
          </VideoSection> 
          </DescWrap>
          </>
          :null
          }
          <ButtonSection> 
            <ButtonWrap>
              {(update&&!openVideoUploadSec)?<Discard onClick={()=>setOpenVideoUploadSec(true)}>Upload Videos</Discard>:null}
              {(update&&openVideoUploadSec)?<Discard onClick={()=>setOpenVideoUploadSec(false)}>Cancel</Discard>:null}
              {(update&&openVideoUploadSec)?<AddProduct onClick={uploadVideo}>Upload</AddProduct>:null}
              {(update&&!openVideoUploadSec)?<AddProduct type="submit" onClick={update?updateCourse:AddCourse}>{update?"Update Course":"Add Course"}</AddProduct>:null}
              {(!update&&!openVideoUploadSec)?<AddProduct type="submit" onClick={update?updateCourse:AddCourse}>{update?"Update Course":"Add Course"}</AddProduct>:null}
            </ButtonWrap>
          </ButtonSection>
        </CourseWrap>
      </Wrapper>
    </Container>
  );
};

export default EditCourse;
