import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useState, useContext } from "react"

import { ContextVariable } from '../../Context'

const SignIn = () => {

    const { alert, setalert, setauth } = useContext(ContextVariable)

    // const [user, setUser] = useState()

    const FirebaseAuth = getAuth()
    const db = getFirestore()

    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [password2, setpassword2] = useState('')
    const [position, setposition] = useState('')


    const submitUser = async (data) => {
        try {
            const docref = await setDoc(doc(db, "Users", data.uid), {
                userName: null,                      //Nombre de usuario: El nombre que el usuario utiliza para iniciar sesión en la plataforma.
                name: name,                          //Nombre completo: El nombre completo del usuario.
                phone: phone,                        //Número de teléfono: El número de teléfono del usuario, que puede ser útil para enviar SMS o notificaciones.
                email: email,                        //Correo electrónico: La dirección de correo electrónico del usuario, que se utiliza para fines de comunicación y notificaciones.
                password: password,                  //Contraseña: La contraseña del usuario, que debe estar segura y cifrada en la base de datos.
                password2: password2,
                profileImage: null,                  //Imagen de perfil: Una imagen que el usuario puede cargar para personalizar su perfil.
                birthDate: null,                     //Fecha de nacimiento: La fecha de nacimiento del usuario, que puede ser necesaria para verificar la edad en eventos con restricciones de edad.
                address: null,                       //Dirección: La dirección física del usuario, que podría ser necesaria para la entrega de productos físicos o para verificar la ubicación del usuario.
                accountState: 'active',              //Estado de cuenta: Información sobre el estado de la cuenta del usuario, como si la cuenta está activa, suspendida o bloqueada.
                role: 'user',                        //Rol del usuario: Si tienes diferentes tipos de usuarios (por ejemplo, administradores, compradores de boletos, vendedores de productos), puedes asignar un rol a cada usuario.
                position: position,
                authToken: null,                     //Tokens de autenticación: Para manejar la autenticación y la seguridad del usuario.
                scoinTokens: 0,                      //Tokens de moneda virtual: Registra la cantidad de tokens virtuales que el usuario tiene en su cuenta.
                scoinsBalance: 0,                    //Saldo de monedas: La cantidad de monedas virtuales que el usuario tiene en su cuenta.
                transactionHistory: null,            //Historial de transacciones: Un registro de las transacciones que ha realizado el usuario, incluyendo la compra de boletos y el gasto de monedas virtuales en eventos.
                notificationPreferences: null,       //Preferencias de notificación: Las preferencias del usuario para recibir notificaciones por correo electrónico, mensajes de texto u otras formas de comunicación.
                creationDate: new Date(),            //Fecha de Creacion: La fecha en la que el usuario creo su cuenta.
                updateDate: null                     //Fecha de Actualizacion: La fecha del ultimo movimiento que hizo el usuario en su cuenta
            });

            console.log("Document written with ID: ", docref);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleSignIn = () => {
        createUserWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;
                setauth(user)
                submitUser(user)

            })
            .catch((error) => {
                console.log(error.message)

            });
    }

    return (
        <div className="">
            <div className="w-full lg:w-[30rem] md:w-[50%] mx-auto ">
                <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-[#323232] border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                        <h1 className="hidden md:block font-bold text-sm md:text-[2rem] my-4 text-center">
                            The Bridge<span className="text-[#646cff]">.</span>
                        </h1>
                        <div className="text-center mb-3">
                            <h1 className="text-gray-500 text-2xl font-bold">
                                Sign In
                            </h1>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
                        <div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Name</label>
                                <input value={name} onChange={(e) => setname(e.target.value)} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="John Doe" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Phone Number</label>
                                <input value={phone} onChange={(e) => setphone(e.target.value)} type="tel" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="000-000-00000" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                <input value={email} onChange={(e) => setemail(e.target.value)} type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="john@example.com" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="********" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Confirm Password</label>
                                <input value={password2} onChange={(e) => setpassword2(e.target.value)} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="********" />
                            </div>
                            <div className="relative w-full mb-3">
                                <label htmlFor="country" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                    Position</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={position}
                                    autoComplete="country"
                                    onChange={(e) => setposition(e.target.value)}
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-60 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                >
                                    <option>{"Scrum Master"}</option>
                                    <option>{"Product Owner"}</option>
                                    <option>{"Scrum Team Lead"}</option>
                                    <option>{"Scrum Coach"}</option>
                                    <option>{"Product Manager"}</option>
                                    <option>{"Stakeholder"}</option>
                                    <option>{"Software Developer"}</option>
                                    <option>{"Software Engineer"}</option>
                                    <option>{"User Experience (UX) Designer"}</option>
                                    <option>{"User Interface (UI) Designer"}</option>
                                    <option>{"Software Project Manager"}</option>
                                    <option>{"Systems Analyst"}</option>
                                    <option>{"Software Quality Assurance (QA) Engineer"}</option>
                                    <option>{"Software Architect"}</option>
                                    <option>{"Cybersecurity Specialist"}</option>
                                    <option>{"Database Specialist"}</option>
                                    <option>{"Network Specialist"}</option>
                                    <option>{"Technical Support Specialist"}</option>
                                    <option>{"DevOps Specialist"}</option>
                                    <option>{"AI and Machine Learning Specialist"}</option>
                                    <option>{"Data Analyst"}</option>
                                </select>
                            </div>
                            <div className="text-center mt-6">
                                <button onClick={handleSignIn} className="group relative w-full px-6 py-3 overflow-hidden rounded shadow hover:shadow-2xl hover:bg-[#4f57ea] bg-[#646cff] text-sm font-bold uppercase text-white my-4">
                                    Sign In
                                </button>
                                <p className="text-sm">Esta accion va a iniciar sesion automaticamente en el usuario creado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default SignIn;