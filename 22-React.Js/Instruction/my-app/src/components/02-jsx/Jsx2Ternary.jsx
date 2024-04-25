import React from "react";

const Jsx2Ternary = () => {
  const isLogin = true;

/*   if (isLogin) {
    console.log("giris yapabilirsin");
  } else {
    console.log("giris yapamazsin");
  } */

  return (
    <div>
      {isLogin ? (
        <div>
          <h2>Admin Menu</h2>
          <ul>
            <li>Kullanici Olustur</li>
            <li>Kullanici Guncelle</li>
            <li>Kullanici Sil</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>User Menu</h2>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Exit</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Jsx2Ternary;
