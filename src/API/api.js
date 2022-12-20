import axios from 'axios';
import HOST_NAME  from '../API_hostName'


export const AuthenticateAPI =async (Method,data)=>{
    if(Method==='login'){
        const res = await axios.post(`${HOST_NAME}/user/login`,{email:data.email,password:data.password})
        return res.data
    } 
    if(Method==='register'){
        const phoneNumber = data.phone
        const res = await axios.post(`${HOST_NAME}/user/register`,{email:data.email,password:data.password,name:data.name,phone:phoneNumber.toString()})
        return res.data
    } 


}

export const GetAllCoursesAPI = async(catagory)=>{
    const res = await axios.get(`${HOST_NAME}/course/catagory/${catagory}`)
    return res
}

export const AddToCartAPI = async(data,userId)=>{
    const res = await axios.post(`${HOST_NAME}/cart/add-to-cart`,
    {courseId:data.id,courseName:data.courseName,auther:data.auther,img:data.img,price:data.price,rating:data.rating,userId})
    return res
}

export const RemoveCourseFromCartAPI = async(courseId)=>{
    const res = await axios.delete(`${HOST_NAME}/cart/remove-from-cart/${courseId}`)
    return res
}
export const GetAllCourseCartAPI = async()=>{
    const res = await axios.get(`${HOST_NAME}/cart/get-all-cart-courses`)
    return res
}

export const GetAllUsersAPI = async()=>{
    const res = await axios.get(`${HOST_NAME}/user/get-all-user`)
    return res
}
export const GetAllCoursesAPI_Admin = async()=>{
    const res = await axios.get(`${HOST_NAME}/course/get-all-course/${1}`)
    return res
}
export const GetSingleUser = async(userId)=>{
    const res = await axios.get(`${HOST_NAME}/user/get-single-user/${userId}`)
    return res
}
export const AddNewCourseAPI = async(img,title,desc,price,auther,catagory)=>{
    const res = await axios.post(`${HOST_NAME}/course/create-course`,{img,courseName:title,description:desc,price,auther,catagory})
    return res
}
export const BuyNewCourseAPI = async(userId,courseId)=>{
    const res = await axios.put(`${HOST_NAME}/user/update-user`,{course:courseId,userId})
    return res
}
export const GetAllBuyedCourseAPI = async(courseId)=>{
    const res = await axios.get(`${HOST_NAME}/course/get-single-course/${courseId}`)
    return res
}
export const GetPopularCourseAPI = async()=>{
    const res = await axios.get(`${HOST_NAME}/course/popular-courses`)
    return res
}
export const DeleteCourseAPI = async(courseId)=>{
    const res = await axios.delete(`${HOST_NAME}/course/delete-course/${courseId}`)
    return res
}
export const UpdateCourseAPI = async(imgFile,title,desc,price,auther,catagory,courseId,rating)=>{
    const res = await axios.put(`${HOST_NAME}/course/update-course`,{courseId,courseName:title,price,description:desc,img:imgFile,rating,auther,catagory})
    return res
}
export const UploadVideoAPI = async(courseId,videoURL,videoTitle,videoDesc)=>{
    const res = await axios.post(`${HOST_NAME}/video/add-video`,{courseId,videoLink:videoURL,title:videoTitle,description:videoDesc})
    return res
}
export const GetAllVideoAPI = async()=>{
    const res = await axios.get(`${HOST_NAME}/video/get-all-video`)
    return res
}