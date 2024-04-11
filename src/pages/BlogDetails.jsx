import SendIcon from '@mui/icons-material/Send';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Cookies from 'js-cookie'

const BlogDetails = ()=>{
    const [comments,setComments]= useState([]);
    const token=Cookies.get('token')
    const {id} =useParams()
    const[blogPost,setBlogPost]=useState({});
    const [comment,setComment]=useState('');
    console.log(id)

    const getBlogDetails = async(e) =>{
        let response=await axios.get(`http://localhost:5000/blogPost/get/${id}`)
        console.log(response)
        setBlogPost(response.data.data)
    }

    const addComment= async(e)=>{
        let data = {blogPostId: id, content:comment};
        let auth = {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        }
        let response =await axios.post(`http://localhost:5000/comments`,data,auth);
        console.log(response)
        if (response.data.message === "created comment"){
        setComments([...comments,response.data.data])
        setComment('')
        }
    }

    const getComments= async(e)=>{
        let response=await axios.get('http://localhost:5000/comments')
        console.log(response)
        setComments(response.data.data)
    }

    useEffect(()=>{
        getComments();
        getBlogDetails()
     } ,[])

    return (
        <div style={styles.contain}>
            <img  style={styles.img}src={`http://localhost:5000/${blogPost.image}`}/>"
            <h1>{blogPost.title}</h1>
            <p>{blogPost.body}</p>  

            <div>        
                <h3>Add comment</h3>
                <div style={styles.plcder}>
                    <textarea 
                    rows='2' 
                    placeholder='comment here'
                     style={styles.txt}
                     value={comment}
                     onChange={(e) =>setComment(e.target.value)}
                     />
                    <SendIcon onClick={addComment} style={styles.sendIcon}/>
                </div>
            </div>
            <div>
                {
                    comments.map((comment)=>{
                        return (
                            <p key={comment.id} style={styles.comment}>{comment.content}</p>
                        )
                    })
                }   
            </div>
        </div>
    )
}

const styles={
    comment:{
     padding:'8px',
     marginBottom:'20px',
     backgroundColor:'rgba(0,0,0,0.1)',
     borderRadius:'10px',
     border:'1px solid #000000'
    },
    sendIcon:{
     cursor:'pointer'
    },
    img:{
        width:'100%'
    },
    contain:{
        width:'900px',
        // border:'1px solid green',
        marginLeft:'auto',
        marginRight:'auto',
        paddingLeft:'50px',
        paddingRight:'50px',
        borderRadius:'10px'
    },
    txt:{
        borderRadius:'10px',
        border:'1px solid black',
        marginRight:'10px',
        width:'100%'
        
    },
    plcder:{
        display:'flex',
        alignItems:'center'

    }
}

export default BlogDetails