import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateBlogPost from './CreateBlogPost'
import axios from "axios"
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Home=()=>{
    const navigate = useNavigate()
    const[blogPosts,setBlogPosts]= useState([])
    const [formStatus, setFormStatus]= useState('create')
    const [formData,setFormData]=useState({
        title:' ',body:' ',image:' '
    })     

    const getAllBlogPosts= async()=>{
        let response=await  axios.get(`http://localhost:5000/blogPost`)
        console.log(response)
        setBlogPosts(response.data.data)
    }
    
    const deleteBlogPost= async(id)=>{
        const response= await axios.delete(`http://localhost:5000/blog/${id}`)
        console.log(response)
        let newBlogPost=blogPosts.filter((blogPost)=>{
            return blogPost._id !== id
        })
        setBlogPosts(newBlogPost)
    }

    useEffect(()=>{
        getAllBlogPosts()
    },[])

    const handleInitializeEdit=(blogPost)=>{
        setFormStatus('Edit')
        setFormData(blogPost)
    }

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.blogContainer}>
                {
                    blogPosts.map((blogPost)=>{
                        return (
                            <div>
                                <div>
                                    <img 
                                        style={styles.spaceContainer} 
                                        src={`http://localhost:5000/${blogPost.image}`} 
                                        onClick={()=>navigate(`/blog/${blogPost._id}`)}
                                    />
                                    <div style={styles.edt}>
                                        <h3>{blogPost.title}</h3>
                                        <div>
                                            <EditIcon onClick={ ()=> handleInitializeEdit(blogPost)}/>
                                            <DeleteIcon onClick={()=>deleteBlogPost(blogPost._id)}/>
                                        </div>
                                    </div>
                                    <p>{blogPost.body}</p>
                                </div>   
                            </div>
                        ) 
                    })
                } 
                </div>
                <div style={styles.formContainer}>
                    <CreateBlogPost 
                        blogPosts={blogPosts}
                        setBlogPosts={setBlogPosts} 
                        formStatus={formStatus}
                        formData={formData}
                        setFormData={setFormData}
                        setFormStatus={setFormStatus}
                    /> 
                </div> 
            </div>     
        </div>
    )
}
const styles={
    edt:{
        display:'flex',
        alignItems:'space-between',
        justifyContent:'space-between',
        
    },
    container:{
        display:'flex'
    },
    blogContainer:{
        flex:6,
        padding:'20px'
    },
    formContainer:{
        flex:4,
        padding:'20px'
    },
    spaceContainer:{
        display:'flex',
        width:'100%',
        height:'400px',
        objectFit:'cover',
        borderRadius:'20px'
    }    
}

export default Home