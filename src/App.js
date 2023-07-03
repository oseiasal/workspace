import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Conditional />
    </div>
  );
}

function Conditional() {
  return <>

    <div>
      {/* Em cima é  o input padrão que existe */}
      <div className="adicionar"><input type="text" name="" id="" /><button>cancelar</button><button>editar</button><button>excluir</button></div>
      {/* ao editar abre essa div e oculta  o input anterior e o botão editar, ficando apenas cancelar e excluir */}
      <div className="selecionar">
        <select >
          <option value="">-- content --</option>
          <option value="">variavel</option>
          <option value="">msg usuário</option>
        </select>

      </div>

      {/* após selecionar, um dos dois abaixos irão aparecer */}
      <div className="variaveis">
        {/* variaveis são mais complexas e devem exibir o e/ou, além de ir adicionando ad infinitum */}
       <div>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
       </div>
      </div>

      {/* msg de usuario até o momento é só o input text */}
      <div className="msg-usuario">
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>

    </div>


  </>
}
