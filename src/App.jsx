import InputBox from "./Components/InputData/InputBox"
import Navbar from "./Components/Navbar"

const comments = []
function App() {

  return (
    <>
      <Navbar />
      <InputBox comments={comments}/>
    </>
  )
}

export default App
