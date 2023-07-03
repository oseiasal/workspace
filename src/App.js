import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Conditional />
    </div>
  );
}

function Conditional() {
  const [showCancel, setShowCancel] = useState(false)
  const [showEdit, setShowEdit] = useState(true)

  const [selected, setSelected] = useState("")

  return <>
    <div>
      {/* Em cima é  o input padrão que existe */}
      <div className="adicionar">{showCancel == false && <input type="text" name="" id="" />}{showCancel && <button onClick={() => { setShowEdit(true); setShowCancel(false) }}>cancelar</button>}{showEdit && <button onClick={() => { setShowCancel(true); setShowEdit(false) }}>editar</button>}<button>excluir</button></div>
      {/* ao editar abre essa div e oculta  o input anterior e o botão editar, ficando apenas cancelar e excluir */}
      {showCancel &&

        <>
          <div className="selecionar">
            <select onChange={(evt) => setSelected(evt.target.value)}>
              <option value="">-- content --</option>
              <option value="variaveis">variavel</option>
              <option value="msg">msg usuário</option>
            </select>

          </div>


          {selected == "variaveis" && <div className="variaveis">
            {/* após selecionar, um dos dois abaixos irão aparecer */}
            {/* variaveis são mais complexas e devem exibir o e/ou, além de ir adicionando ad infinitum */}
            <div>
              <Variables />
            </div>
          </div>}


          {selected == "msg" && <div className="msg-usuario">
            {/* msg de usuario até o momento é só o input text */}
            <select name="" id="">
              <option value="">msg</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>}
        </>
      }

    </div>


  </>
}


function Variables() {
  const [variables, setVariables] = useState([{}])
  return <>
    {variables.length}
    <div>
      <select name="" id="">
        <option value="var">$input.text</option>
      </select>
      <select name="" id="">
        <option value="">igual a</option>
      </select>
      <input type="text" />
      <button>x</button>
      <button onClick={() => setVariables(state => [...state, {}])}>e/ou</button>
    </div>
  </>
}