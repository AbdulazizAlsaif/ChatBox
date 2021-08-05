import React from 'react'

export default function SendMessage(props) {



  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  

  function handleSubmit(e){
    e.preventDefault();
    props.sendMessage({user:props.name,msg:e.target.msg.value,date:formatAMPM(new Date()),room:props.room,self:true})
  }

  return (
    <div className="row">

    <div className="col-sm-3 text-end"></div>
        <div className="col-sm-9 text-end">
            <form onSubmit={handleSubmit}  className="mt-2 ">
            <div className="form-group row"> 
            <div className="col-10">
            <input  name="msg" type="text" className="form-control" id="inputUser" />
            </div>
            <div className="col-2"><button  className="btn btn-primary text-end">send</button></div>
          </div>
            </form>
            </div>
    </div>
  )
}
