import React, { useEffect } from 'react'
import NavigationBar from './Navbar'
import ContentArea from './ContentArea'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useContext } from 'react'
import { ContextVariable } from '../../Context'
import { useNavigate } from 'react-router-dom'

const UserScreen = () => {

  const { auth } = useContext(ContextVariable)
  
  const FirebaseAuth = getAuth()
  
  const navigate = useNavigate()
  
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {  
      if (!user) {
        navigate('/login') 
      }
    })

  }, [FirebaseAuth])

  return (
    <div className="min-h-screen font-sans flex flex-col w-full">
      <NavigationBar />
      <ContentArea />
    </div>
  );
};

export default UserScreen;