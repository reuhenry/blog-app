import{useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

const Login=()=>{
        const navigate = useNavigate()
        const [formData, setFormData]= useState ({
               email:' ', password:' '
        })
    
        const loginUser= async(e)=> {
            e.preventDefault()
            let response=await axios.post('http://localhost:5000/login',formData)
            console.log(response)
            if(response.data.message === 'User authenticated'){
                Cookies.set('token',response.data.token)
                navigate('/')
            }
        }
    return (
      <div  style={styles.mveContainer}>
        <div style={styles.brdContainer}>
          <h1 style={styles.txt}>Login</h1>
          <form onSubmit={loginUser}>
            <div>
             <label>Email</label>
             <input style={styles.wtdhContainer}
              type='email'
              value={formData.email}
            onChange={(e)=> setFormData({...formData,email: e.target.value})}
              />
           </div>
           <br/>
           <div>
             <label>Password</label>
             <input style={styles.wtdhContainer}
              type='password'
              value={formData.password}
            onChange={(e)=> setFormData({...formData,password: e.target.value})}
              />
           </div>
           <br/>
           <button style={styles.btnContainer}>Submit</button>
        </form>
        </div>
      </div>
    )
}
  const styles={
     brdContainer:{
      border:'1px solid black',
      display:'block',
      borderRadius:'10px',
      padding:'30px',
      width:'30%'
    },
    btnContainer:{
       backgroundColor:'#222831',
       color:'#F0F3FF',
       width:'100%',
       padding:'8px',
       borderRadius:'10px',
       border:'none'
    },
    mveContainer:{
      display:'flex',
      justifyContent:'center',
    alignItems:'center',
    height:'90vh',
  },
   wtdhContainer:{
    width:'100%',
    border:'1px solid black',
    display:'block',
    padding:'8px',
    borderRadius:'10px',
    boxSizing:'border-box'
   },
   txt:{
    textAlign:'center'
   }
  }

export default Login