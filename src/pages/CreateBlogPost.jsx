import {useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const CreateBlogPost = ({blogPosts, setBlogPosts,formStatus,formData,setFormData,setFormStatus})=>{
  const resetForm =()=>{
    setFormData({title:'',body:'',image:''})
    setFormStatus('create')

  }
  let token=Cookies.get('token')
  
  const createBlog= async(e)=>{
    e.preventDefault()
    const formDataWF= new FormData()
    formDataWF.append('title',formData.title)
    formDataWF.append('body',formData.body)
    formDataWF.append('image',formData.image)
    let response=await axios.post('http://localhost:5000/blog', formDataWF, {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response)
    if (response.data.message === "created blogPost"){
      setBlogPosts([...blogPosts,response.data.data])
    }
  
  }

  const editBlog= async (e)=>{
    e.preventDefault()

    const formDataWF= new FormData()
    formDataWF.append('title' , formData.title)
    formDataWF.append('body' , formData.body)
    if (formData.image){
      formDataWF.append('image', formData.image)
    }
    let response= await axios.post(`http://localhost:5000/blog/update/${formData._id}`,
    formDataWF,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    
    const updatedBlogPosts=blogPosts.map((blogPost)=>{
      if(formData._id === blogPost._id){
        return response.data.data
      } else {
        return blogPost
      }
    })
    setBlogPosts(updatedBlogPosts)
    resetForm()
    console.log(response)
  } 

return (
      <div>
        <h1>{formStatus === 'create' ? 'Create' : 'Edit'} blog post</h1>
          <form onSubmit={formStatus === 'create' ?   createBlog : editBlog}>
            <div>
                <label >Title</label>
                <input style={styles.inputContainer}
                type='text'
                value={formData.title}
                onChange={(e)=>setFormData({...formData,title: e.target.value})}
                />
            </div>
            <div>
              <label>Body</label>
              <textarea style={styles.inputContainer}
              rows='5'
              value={formData.body}
              onChange={(e)=>setFormData({...formData,body: e.target.value})}
              />
            </div>
            <div>
              <label>Image</label>
              <input style={styles.inputContainer}
                type='file'
                onChange={(e)=>setFormData({...formData,image :e.target.files[0]})}
                
                />
            </div>
            <button style={styles.btnContainer}>Submit</button>
          </form>
      </div>
  )
}

    

const styles = {
  inputContainer:{
    display:'block',
    width:'100%',
    padding:'8px',
    borderRadius:'5px',
    marginBottom:'10px',
    border:'1px solid black'
  },
    
  btnContainer:{
    backgroundColor:'#222831',
    color:'#F0F3FF',
    width:'100%',
    padding:'8px',
    borderRadius:'5px',
    marginBottom:'10px',
    border:'1px solid black'
  }
}

export default CreateBlogPost