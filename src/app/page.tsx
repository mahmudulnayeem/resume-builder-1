'use client'
import Form, { FormProps } from "@/components/Form";
import { useState } from "react";
import ResumeTemplate from './../components/ResumeTemplate';
import ResumeTemplate2 from './../components/ResumeTemplate2';

export default function Home() {
  const [data, setData] = useState<FormProps>()
  const formSubmit = (data: FormProps) => {
    setData(data)
  }
  return (
    <main>
      <ResumeTemplate2/>
      {/* <div className="flex min-h-screen flex-col sm:flex-row items-center justify-between sm:p-12 p-4">
        <Form submit={formSubmit} />
        <ResumeTemplate data={data} />
      </div> */}
    </main>

  )
}
