import React from 'react'
import { gql, useQuery } from "@apollo/client";
const GET_MESSAGES = gql`
    {
        message{
            _id
            title
            content
            author
        }
    }
`



const MessageList = () => {
    const {loading, error, data}=useQuery(GET_MESSAGES)
    if(loading) return <p className="text-center h3">Cargando...</p>
    if(error) return <p>Error</p>
    
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {
                    data.message.map(({_id, title, content, author}) => (
                        <div key={_id} className="card m-2">
                            <h4>{title}</h4>
                            <p>Contenido: {content}</p>
                            <p>Autor : {author}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MessageList
