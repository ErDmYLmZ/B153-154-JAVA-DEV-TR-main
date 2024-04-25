import React from 'react'
import AdminMenu from './AdminMenu';
import UserMenu from './UserMenu';

const ControlMenu = () => {

    const isLogin=true;
  return (
    <div>

        {

          isLogin ? <AdminMenu/> : <UserMenu/>

        }



    </div>
  )
}

export default ControlMenu