import { ChangeEvent, useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export const Chat = () => {
  const [input, setInput] = useState("")

  const [promptResponses, setpromptResponses] = useState([])

  const getResponseForGivenPrompt = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })
      const result = await model.generateContent(input)
      const response = await result.response
      const text = await response.text()
      setpromptResponses([...promptResponses, text])
      setInput("")
    } catch (error) {
      console.log("Something Went Wrong")
    }
  }

  return (
    <section className="min-h-screen w-full p-2">
      <h2 className="py-2 text-xl quicksand-bold ">Chat</h2>
      <form
        onSubmit={getResponseForGivenPrompt}
        className="w-full h-[525px] flex flex-col"
      >
        <span className="grow">
          {promptResponses.map((promptResponse, index) => (
            <div key={index}>
              <div>{promptResponse}</div>
            </div>
          ))}
        </span>
        <input
          className="py-2 shadow-sm shadow-slate-400 rounded-lg px-5 outline-none"
          placeholder="Ask something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </section>
  )
}
