
import Form from "@/components/Form";
import AuthProvider from "@/providers/AuthProvider";
import Login from './../components/Login'
import ResumeTemplate from './../components/ResumeTemplate'

export default function Home() {
  return (
    <main>
      <ResumeTemplate/>
    <Login/>

    <div className="flex min-h-screen flex-col sm:flex-row items-center justify-between sm:p-12 p-4">
      <Form />
      <Form />
    
    </div>

    </main>

  )
}
