import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import './App.css'

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import { ref, onValue } from 'firebase/database'

import Form from './layout/Form'
import UserScreen from './layout/Bridge/UserScreen'
import Login from './layout/Login/Login'
import SignIn from './layout/SignIn/Signin'

import { ContextVariable } from "./Context"

export default function App() {

  const [auth, setauth] = useState(null)
  const [user, setuser] = useState(null)

  const db = getFirestore()
  const FirebaseAuth = getAuth();

  const getUser = async (data) => {

    const docRef = doc(db, "Users", data.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setuser({ ...docSnap.data(), 'id': docSnap.id })
    } else {
      console.log("No such user document!");
    }
  }

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setauth(user)
        getUser(user)
      } else {
        // User is signed out
        setauth(null)
      }
    })
  }, [FirebaseAuth]);

  const [response, setresponse] = useState({})

  console.log('Render')

  return (
    <ContextVariable.Provider value={{ user, auth, setauth }}>
      <div className="App" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      }}>
        <Router>
          <Routes>
            <Route exact path='/signin' element={<SignIn />}></Route>
            {
              user ? user.role == 'user' ?
                (
                  <>
                    <Route exact path='/' element={<Home response={response} />}></Route>
                    <Route exact path='*' element={<Navigate to='/' />} />
                  </>
                )
                : <Route path='*' element={<Navigate to='/' />} />
                : <Route path='*' element={<Navigate to='/login' />} />
            }
            {
              user ? user.role == 'admin' ?
                (
                  <>
                    <Route exact path='/' element={<Home response={response} />}></Route>
                    <Route path='/signin' element={<SignIn />} />
                    {/* <Route exact path='*' element={<Navigate to='/' />} /> */}
                  </>
                )
                : <Route path='*' element={<Navigate to='/' />} />
                : < Route path='*' element={< Navigate to='/login' />} />
            }
            {!auth ? <Route path='/login' element={<Login />} /> : null}
          </Routes>
          {/* {auth ? null : <Navigate to='/login' />} */}
        </Router>
      </div>
    </ContextVariable.Provider>
  )
}

function Home({ response }) {

  return (
    <>
      <UserScreen />
      {/* <Form></Form> */}
      {/* <h1>The Bridge</h1>
      <div className="read-the-docs">
        {Object.keys(response).map((item, index) => {
          return(
            <div key={index}>
              <Card id={item} response={response}/>
              <br/>
            </div>
          )
        })}
      </div> */}
    </>
  )
}
