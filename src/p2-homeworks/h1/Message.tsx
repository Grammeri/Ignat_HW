import React from 'react'

type PropsTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsTypes) {
    return (
        <div>
<div>
    <img src={props.avatar}/><span>
    {props.name}</span>
    {props.message}<span>{props.time}</span>
</div>

        </div>
    )
}

export default Message
