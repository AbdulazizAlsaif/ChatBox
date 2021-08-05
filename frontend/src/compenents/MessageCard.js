import React from 'react'

export default function MessageCard(props) {


  return (
    
    props.message.self === true  ? <div className="card text-start  chat-item-self  bg-success mt-1 "  >
                          <div className="card-body ">
                            <div className="card-title ">{props.message.user} {props.message.date} </div>
                            <div className="card-text ">{props.message.msg}</div>
                          </div>
                        </div> 
                      : <div className="card text-start  chat-item  bg-chat mt-1 "  >
                            <div className="card-body ">
                              <div className="card-title ">{props.message.user} {props.message.date} </div>
                              <div className="card-text ">{props.message.msg}</div>
                            </div>
                        </div>
  )
}
