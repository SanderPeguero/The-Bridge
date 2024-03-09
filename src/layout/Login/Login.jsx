import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState, useContext } from "react"

import { ContextVariable } from '../../Context';

const Login = () => {

    const { alert, setalert, setauth } = useContext(ContextVariable)

    const FirebaseAuth = getAuth()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleLogIn = () => {
        signInWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;
                setauth(user)

            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    return (
        <div className="mb-[20rem] mt-[10rem]">
            <div className="w-full lg:w-[30rem] md:w-[50%] px-4 mx-auto pt-6">
                {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#323232] border-0"> */}
                    <div className="rounded-t mb-0 px-6 py-6">
                        <h1 className="hidden md:block font-bold text-sm md:text-[2rem] my-4 text-center">
                            The Bridge<span className="text-[#646cff]">.</span>
                        </h1>
                        {/* <div className="text-center mb-3">
                            <h1 className="text-gray-500 text-2xl font-bold">
                                Log In
                            </h1>
                        </div>                     */}
                        {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">            
                        <div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                <input value={email} type="email" onChange={(e) => setemail(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                <input value={password} type="password" onChange={(e) => setpassword(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-60 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
                            </div>
                            <div className="text-center mt-6">
                                <button onClick={handleLogIn} className="group relative w-full px-6 py-3 overflow-hidden rounded shadow hover:shadow-2xl hover:bg-[#4f57ea] bg-[#646cff] text-sm font-bold uppercase text-white my-4">
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
};

export default Login;