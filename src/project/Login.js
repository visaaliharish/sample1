import './Login.css'
  function index(){
      var name=document.getElementById("name").value;
      var password=document.getElementById("pw").value;

      if (name=="hi" && password==123){
        alert("login successfully");
        document.getElementById("name")
        document.getElementById("pw")
      }
      else{
        alert("failed")
        document.getElementById("name")
        document.getElementById("pw")
      }
  }


function login(){
  return(

    <div className="login">
    <input type="text" placeholder="Name" id="name"/><br/>
   <input type="text" placeholder="password" id="pw"/><br/>
   <button onClick={index}>sumbit</button>
  </div>
  )
  

}
export default login