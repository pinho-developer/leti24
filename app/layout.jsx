import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <title>Leti Fitwear</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet" />
                <link rel='stylesheet' type='text/css' media='screen' href='main.css' />
            </head>
            <body>
                <div className="main">
                    <img src="img/logo.png" alt="Leti Fitwear" className="logo" />

                    <div className="banner">
                        <p>
                            Entender que a <strong>roupa fitness faz<br/>
                            parte do dia-a-dia da vida das <br/>
                            mulheres</strong>, não só da academia,<br/>
                            transformando ela no look do dia.
                        </p>
                    </div>

                    <p className="destaque">
                        Hoje <strong>ser fitness</strong> já é mais do que um estilo de vida,<br/>
                        <strong>é um comportamento!</strong>
                    </p>
                    <p className="destaque">
                        E nada melhor que isso quando você alia<br/>
                        praticidade, beleza e estilo de vida.
                    </p>

                    <div className="case">
                        <div className="fotos">
                            <img src="img/fotos-1.png" alt="Foto 1" />
                            <img src="img/fotos-2.png" alt="Foto 2" />
                            <img src="img/fotos-3.png" alt="Foto 3" />
                        </div>

                        <p>
                            <strong>A Leti é sinônimo de<br/ >bom gosto e qualidade.</strong>
                        </p>
                        <p>
                            Porque roupa de academia<br/>também está na moda!
                        </p>
                    </div>

                    <div className="details">
                        <div className="detail">
                            <h3>Onde encontrar a Leti</h3>
                            <p>
                                Brasil - Rio de Janeiro<br/>
                                Av. Américas 500 loja 111i<br/>
                                Barra da tijuca
                            </p>
                        </div>
                        <div className="detail">
                            <h3>Comprar online</h3>
                            <p>
                                Entre em contato com<br/>
                                as nossas vendedoras
                            </p>
                            <button>
                                Whatsapp
                            </button>
                        </div>
                        <div className="detail">
                            <h3>Quero importar:</h3>
                            <p>
                                A Leti está no varejo internacional<br/>
                                entre em contato para ver<br/>
                                nossas condições comerciais.
                            </p>
                            <p className="small">
                                leti_internacional@letifitwear.com.br
                            </p>
                        </div>
                    </div>

                    <img src="img/insta.png" alt="@letifitwear - Instagram Leti Fitwear" className="insta" />

                    <div className="direitos">
                        <p>
                            @letifitwear | 2024 - todos os direitos reservados
                        </p>
                    </div>
                </div>
            </body>
        </html>
    );
}
