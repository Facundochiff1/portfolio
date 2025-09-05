import { useState } from "react"

export function Contact () {
    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSucces(true)

        setTimeout(() => {
            setSucces(false)
        }, 3000);

        setName("")
        setEmail("")
        setMessage("")
        setSubject("")
    }

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ subject, setSubject ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ succes, setSucces ] = useState(false)

    return (
        <section className="relative flex flex-col items-center justify-center mb-22">
            {succes && 
            <p className="fixed top-[71px] right-[5px] bg-green-200 text-green-800 px-4 py-5 animate-slide-in-right">
                ✅ Form submitted successfully
            </p>
            }
            <h1 className="pb-8 text-4xl text-black font-bold w-[550px] text-left">Contact Me</h1>
            <form onSubmit={onSubmitForm} className="w-[550px] h-[600px] shadow-lg border border-amber-500 rounded-lg p-8 flex flex-col items-center gap-9">
                <div className="relative flex flex-col items-start justify-center w-full">
                    <label className="absolue top-1">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="border w-full h-[40px] rounded-md p-2"/>
                </div>
                
                <div className="flex flex-col items-start justify-center w-full">
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email"  className="border w-full h-[40px] rounded-md p-2"/>
                </div>
                <div className="flex flex-col items-start justify-center w-full">
                    <label>Subject</label>
                    <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text"  className="border w-full h-[40px] rounded-md p-2"/>
                </div>
                <div className="flex flex-col items-start justify-center w-full">
                    <label>Message</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="flex flex-col items-start justify-center w-full border rounded-md h-[100px] p-2"></textarea>
                </div>
                <button className="mt-2 bg-amber-500 px-6 py-2 rounded-full text-white cursor-pointer hover:bg-[#f5a61f]">Submit</button>
            </form>
        </section>
    )
}