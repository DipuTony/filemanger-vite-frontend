import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate();

  localStorage.removeItem("userData")

  useEffect(() => {
    navigate('/login')
  }, [])

  return
}

export default Logout