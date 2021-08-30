import { Link }        from "react-router-dom"
import illustrationIMG from "../assets/illustration.svg"
import logoIMG         from "../assets/logo.svg"
import { Button }      from "../components/Button"
import "../styles/auth.scss"
// import { useAuth }     from "../hooks/useAuth"

export function NewRoom() {

    // const { user } = useAuth()

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
                    <h2>Criar uma nova sala</h2>
                    <form action="">
                        <input type="text"
                               placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?
                        <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
