import React from 'react'
import { useStore } from '../store'

const HomePage = () => {
  const {authState} = useStore();
  const { isUserLogin, user} = authState;

  return (
    <div>
      Welcome {isUserLogin ? <em>{user.firstName} {user.lastName}</em> : ""}
    </div>
  )
}

export default HomePage