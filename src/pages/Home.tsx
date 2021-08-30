import illustrationIMG from "../assets/illustration.svg"
import logoIMG         from "../assets/logo.svg"
import ggIconIMG       from "../assets/google-icon.svg"
import "../styles/auth.scss"

export function Home() {
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
                    <button>
                        <img src={ ggIconIMG } alt="Logo Google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">
                        ou entre em um sala
                    </div>
                    <form action="">
                        <input type="text"
                               placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>

                    </form>
                </div>
            </main>
        </div>
    )
}
