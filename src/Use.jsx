export default function User({user}){
 return(
 <div style={{border:'2px solid purple',marginTop:'5px'}}>
    <h4>Name: {user.name} </h4>
    <p>Email: {user.email} </p>
    <p>UserName: {user.username} </p>
 </div>



 )
}