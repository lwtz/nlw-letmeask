import { useHistory }  from "react-router-dom"
import illustrationIMG from "../assets/illustration.svg"
import logoIMG         from "../assets/logo.svg"
import ggIconIMG       from "../assets/google-icon.svg"
import { Button }      from "../components/Button"
import "../styles/auth.scss"
import { useAuth }     from "../hooks/useAuth"


export function Home() {
    const history = useHistory()
    const { signInWithGoogle, user } = useAuth()

    async function handleCreateRoom() {
        if ( !user ) {
            await signInWithGoogle()
        }
        history.push( "/rooms/new" )
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
                    <form action="">
                        <input type="text"
                               placeholder="Digite o código da sala"
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
