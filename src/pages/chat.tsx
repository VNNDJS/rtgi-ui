import axios from "axios"
import { ChangeEvent, useState } from "react"

export const Chat = () => {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
  }
  const requestBody = {
    messages: [{ role: "user", content: input }],
    model: "gpt-4",
  }

  const API_URL = import.meta.env.VITE_OPEN_API_URL

  const sendMessage = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await axios.post(API_URL, requestBody, { headers })
    setResponse(data.choices[0].message.content)
  }

  return (
    <section className="min-h-screen w-full p-2">
      <h2 className="py-2 text-xl quicksand-bold ">Chat</h2>
      <form onSubmit={sendMessage} className="w-full h-[525px] flex flex-col">
        <ul className="grow">{response}</ul>
        <input
          className="py-2 shadow-sm shadow-slate-400 rounded-lg px-5 outline-none"
          placeholder="Ask something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </section>
  )
}
