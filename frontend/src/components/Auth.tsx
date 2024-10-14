import { SignupInput } from "@pushkardps8/blognest-common"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"


export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an Account
                    </div>

                    <div className="text-slate-600">
                        Already have an account? 
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                    </div>
                </div>

                <div className="pt-4">
                    <LabelledInput label="Name" placeholder="Pushkar Gupta..." onChange={e => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />

                    <LabelledInput label="Email" placeholder="pushkar@gmail.com..." onChange={e => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />   

                    <LabelledInput label="Password" type="password" placeholder="123456..." onChange={e => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                </div>
            </div>
            
        </div>
    </div>
}

interface LabelledInputType {
    label: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}