import { useHistory, useParams } from "react-router-dom"

import logoIMG   from "../assets/logo.svg"
import deleteIMG from "../assets/delete.svg"

import { Button }    from "../components/Button"
import { RoomCode }  from "../components/RoomCode"
import { Questions } from "../components/Question"

import { UseRoom }  from "../hooks/UseRoom"
import "../styles/room.scss"
import { database } from "../services/firebase"


type RoomParams = {
  id: string;
}


export function AdminRoom() {
  // const { user } = useAuth()
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { title, questions } = UseRoom( roomId )

  async function handleEndRoom() {
    await database.ref( `rooms/${ roomId }` ).update( {
      endedAt: new Date()
    } )

    history.push( "/" )
  }

  async function handleDeleteQuestion( questionId: string ) {
    if ( window.confirm( "Quer Excluir a pergunta ?" ) ) {
      await database.ref( `rooms/${ roomId }/questions/${ questionId }` ).remove()
    }

  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={ logoIMG } alt="LetmeAsk" />
          <div>

            <RoomCode code={ roomId } />
            <Button
              isOutlined
              onClick={ handleEndRoom }
            >Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala { title }</h1>
          { questions.length > 0 && <span>{ questions.length } pergunta(s)</span> }
        </div>


        <div className="question-list">
          { questions.map( question => {
            return (
              <Questions
                key={ question.id }
                content={ question.content }
                author={ question.author }
              >
                <button
                  type="button"
                  onClick={ () => handleDeleteQuestion( question.id ) }
                >
                  <img src={ deleteIMG } alt="Remover like" />
                </button>
              </Questions>
            )
          } ) }
        </div>
      </main>
    </div>
  )
}

