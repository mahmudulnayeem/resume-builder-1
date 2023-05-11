
import Form from "@/components/Form";
import AuthProvider from "@/providers/AuthProvider";
import Login from './../components/Login'

export default function Home() {
  return (
    <main>
    <Login/>

    <div className="flex min-h-screen flex-col sm:flex-row items-center justify-between sm:p-12 p-4">
      <Form />
      <Form />
    
    </div>

    </main>

  )
}
