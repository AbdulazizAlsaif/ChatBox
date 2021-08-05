import React from 'react'

export default function Login(props) {  

 function handleSubmit(e){
   e.preventDefault();
   props.toParent(e.target.user.value,e.target.room.value)
 }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="inputUser" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-8">
        <input name="user" type="text" className="form-control" id="inputUser" placeholder="UserName"/>
        </div>
      </div>
      <div className="form-group row mt-2">
        <label htmlFor="inputRoom" className="col-sm-2 col-form-label">Room</label>
        <div className="col-sm-8">
          <input name="room" type="text" className="form-control" id="inputRoom" placeholder="Room"/>
        </div>
      </div>
      <button  className="btn btn-primary mt-1" >Join</button>
    </form>
    
     
    </div>
  )
}
