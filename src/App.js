import Adicao from "./components/Adicao";
import Divisao from "./components/Divisao";
import Multiplicacao from "./components/Multiplicacao";
import Subtracao from "./components/Subtracao";
import PrecisoEstudar from "./components/PrecisoEstudar";


function App() {
  return (
    <div>
      <Adicao num1={2} num2={5}/>
      <Divisao num1={6} num2={2}/>
      <Multiplicacao num1={5} num2={5}/>
      <Subtracao num1={10} num2={3}/>
      <PrecisoEstudar nomeDaTec={"React"}/>
    
    </div>
  );
}

export default App;
