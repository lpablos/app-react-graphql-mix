import React, {useState} from 'react'
import { gql, useMutation} from "@apollo/client";
const CREATE_MESSAGE = gql`
    mutation CreateMessage($title: String!,$content: String!,$author: String!){
            createMessage(title: $title, content:$content, author :$author){
                _id
            }
        }
`

const MessageForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [createMessage] = useMutation(CREATE_MESSAGE)

    const gudadoFormulario = async e =>{
        e.preventDefault()
        await createMessage({variables:{title,content,author}})
        window.location.href = '/'
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card-body">
                    <p className="text-center">Nuevo Contenido</p>
                    <form onSubmit={gudadoFormulario}>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control mt-2" 
                                placeholder="Author"
                                value={author}
                                onChange={ e => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control mt-2" 
                                placeholder="Titulo"
                                value={title}
                                onChange={ e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <textarea 
                                name="" 
                                cols="20" 
                                rows="5" 
                                className="form-control mt-2" 
                                placeholder="Contenido"
                                value={content}
                                onChange={ e => setContent(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MessageForm
