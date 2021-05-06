import ImgDsDark from 'assets/img/ds_dark.svg';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/evertonsaraiva" target="_blank" rel="noreferrer">Everton Saraiva</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/evertonsaraiva" target="_blank" rel="noreferrer">@evertonsaraiva</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;