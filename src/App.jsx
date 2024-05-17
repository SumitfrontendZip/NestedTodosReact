import ContainerTodo from "./Components/ContainerTodos/ContainerTodo"
import InputBox from "./Components/InputData/InputBox"
import Navbar from "./Components/Navbar"
import TodoList from "./Components/Showtodos/TodoList"


function App() {

  return (
    <>
      <Navbar/>
      <InputBox/>
      <ContainerTodo/>
    </>
  )
}

export default App
