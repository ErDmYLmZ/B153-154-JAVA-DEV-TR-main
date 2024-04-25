import React from "react";

const Practice2 = () => {
  const isLogin = true;
  const user = [
    {
      name: "Yasin",
      surname: "İbin",
    },
  ];

  return (
    <>
      {isLogin ? (
        <div>
          {user.map((item, index) => (
            <div key={index}>
              <span>
                Hoş geldiniz {item.name} {item.surname}
              </span>
            </div>
          ))}
          <ul>
            <li>Profil</li>
            <li>Rezervasyonlar</li>
            <li>Çıkış</li>
          </ul>
        </div>
      ) : (
        <div>Lütfen Giriş Yapınız</div>
      )}
    </>
  );
};

export default Practice2;
