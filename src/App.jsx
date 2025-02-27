import './App.css'
import { Container } from '@chakra-ui/react'
import Home from './components/pages/Home'

function App() {

  return (
    <div>
      <Container fluid mt={8}>
        <Home/>
      </Container>
    </div>
  )
}

export default App
