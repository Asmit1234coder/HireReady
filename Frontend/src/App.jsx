import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
/*import { InterviewProvider } from "./features/interview/interview.context.jsx"*/

function App() {

  return (
    <AuthProvider>
     
    </AuthProvider>
  )
}

export default App
