import{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register=()=>{
    const navigate =useNavigate()
    const [formData, setFormData]= useState ({
           firstName: ' ', lastName:' ',email:' ', phoneNumber:' ', password:' '
    })

    const registerUser= async(e)=> {
        e.preventDefault()
        let response=await axios.post('http://localhost:5000/register',formData)
        console.log(response)
        if(response.data.message === 'User created successfully!'){
            navigate('/login')
        }
    }
    
    return (
     <div style={styles.cnter}>
        <div style={styles.rst}>
           <h1 style={styles.tle}>Register here</h1>
          <form onSubmit={registerUser}>
        <div style={styles.align}>
            <div style={styles.jsr}>
                <label>First name</label>
                <input style={styles.jsx}
                type="text"
                value={formData.firstName}
                onChange={(e)=> setFormData({...formData,firstName: e.target.value})}
                />
            </div>
            <div style={styles.jss}>
                <label>Last name</label>
                <input style={styles.jsx}
                type="text"
                value={formData.lastName}
                onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
                />
            </div>
        </div>
        <br/>
            <div>
                <label>Email</label>
                <input style={styles.jst}
                type="email"
                value={formData.phoneNumber}
                onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
                />
            </div>
            <br/>
        <div style={styles.align}>
            <div style={styles.jsr}>
                <label>Phone Number</label>
                <input  style={styles.jsx}
                 type="text"
                 value={formData.email}
                 onChange={(e)=>setFormData({...formData,email:e.target.value})}
                 />
            </div>
            <div style={styles.jsr}>
               <label>Password</label>
               <input  style={styles.jsx}
                type="password" 
                value={formData.password}
                onChange={(e)=>setFormData({...formData,password:e.target.value})}
                />
            </div>
        </div>
        <br/>
            <button style={styles.btn}>Submit</button>
         </form>
       </div>
    </div>
    
    )
}
const styles={
jsx:{
    display:'block',
    width:'100%',
    padding:'8px',
    borderRadius:'5px',
    marginBottom:'10px',
    border:'1px solid black',
    boxSizing:'border-box',
},
btn:{
    backgroundColor:'#222831',
    color:'#F0F3FF',
    width:'100%',
    padding:'8px',
    borderRadius:'10px',
    border:'none'
 },
 cnter:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'80vh',
 },
 rst:{
    width:'40%',
    border:'1px solid black',
    display:'block',
    padding:'8px',
    borderRadius:'10px',
    boxSizing:'border-box'
 },
 tle:{
    textAlign:'center'
 },
 align:{
    display:'flex',
 },
 jst:{
    width:'100%',
    display:'block',
    border:'1px solid black',
    borderRadius:'5px',
    marginBottom:'10px',
    padding:'8px',
    boxSizing:'border-box'
 },
 jsr:{
    marginRight:'10px',
    width:'100%'
 },
 jss:{
    width:'100%'
 }
}
export default Register