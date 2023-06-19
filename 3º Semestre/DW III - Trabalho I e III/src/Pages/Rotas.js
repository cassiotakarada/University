import { useNavigate, Link } from 'react-router-dom';

function Rotas () {
  const navigate = useNavigate();

  const handleContatoClick = () => {
    navigate('/informacoes/contato');
  };

  const handleLojaClick = () => {
    navigate('/loja');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button onClick={handleContatoClick}>Contato</button>
          </li>
          <li>
            <button onClick={handleLojaClick}>Loja</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Rotas;