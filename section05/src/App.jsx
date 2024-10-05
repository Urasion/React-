import './App.css'
import Bulb from "./components/Bulb";
import Counter from './components/Counter';
import Register from './components/Register';

//html을 반환하는 함수를 컴포넌트라 칭함


//이때 App안의 Header는 자식 컴포넌트 App는 부모컴포넌트
function App() {
  

  return (
    <>
    <Register/>
    </>
  )
}

export default App
