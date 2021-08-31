import { FormEvent, useState } from "react"
import { useHistory }          from "react-router-dom"
import illustrationIMG         from "../assets/illustration.svg"
import logoIMG                 from "../assets/logo.svg"
import ggIconIMG               from "../assets/google-icon.svg"
import { Button }              from "../components/Button"
import "../styles/auth.scss"
import { useAuth }             from "../hooks/useAuth"
import { database }            from "../services/firebase"


export function Home() {
    const history = useHistory()
    const { signInWithGoogle, user } = useAuth()
    const [ roomCode, setRoomCode ] = useState( "" )

    async function handleCreateRoom() {
        if ( !user ) {
            await signInWithGoogle()
        }
        history.push( "/rooms/new" )
    }

    async function handleJoinRoom( event: FormEvent ) {
        event.preventDefault()

        if ( roomCode.trim() === "" ) {
            return
        }

        const roomRef = await database.ref( `/rooms/${ roomCode }` ).get()

        if ( !roomRef.exists() ) {
            alert( "Room does not exist" )
            return
        }

        history.push( `/rooms/${ roomCode }` )

    }


    return (
        <div id={ "page-auth" }>
            <aside>
                <img src={ illustrationIMG } alt="Illustration" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={ logoIMG } alt="Letmeask" />
                    <button
                        onClick={ handleCreateRoom }
                        className={ "create-room" }>
                        <img
                            src={ ggIconIMG }
                            alt="Logo Google"
                        />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">
                        ou entre em um sala
                    </div>
                    <form onSubmit={ handleJoinRoom }>
                        <input type="text"
                               placeholder="Digite o código da sala"
                               onChange={ event => setRoomCode( event.target.value ) }
                               value={ roomCode }
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>

                    </form>
                </div>
            </main>
        </div>
    )
}
