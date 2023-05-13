'use client'
import Form, { FormProps } from "@/components/Form";
import { useContext, useState } from "react";
import ResumeTemplate from './../components/ResumeTemplate';
import ResumeTemplate2 from './../components/ResumeTemplate2';
import { AuthContext } from "@/providers/AuthProvider";

export default function Home() {
  const [data, setData] = useState<FormProps>()

  const formSubmit = (data: FormProps) => {
    setData(data)
  }
  const { logOut} = useContext<any>(AuthContext)
  const handleLogout=()=>{
  logOut()
  .then((res:any)=>{console.log(res)})
  }

  return (
    <main>
      {/* <ResumeTemplate2/> */}
      <button onClick={handleLogout} className="btn btn-outline">Logout</button>
      <div className="flex min-h-screen flex-col  items-center justify-between sm:p-12 p-4">
        <Form submit={formSubmit} />
        <h3 className="text-5xl text-orange-500 my-8">Your Template</h3>
        <ResumeTemplate data={data} />
        <h3 className="text-5xl text-orange-500 my-8">Your Template 2</h3>

      <ResumeTemplate2 data={data}/>

      </div>
    </main>

  )
}
