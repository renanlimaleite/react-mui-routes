import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Contexts/auth'
import Router from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  )
}
