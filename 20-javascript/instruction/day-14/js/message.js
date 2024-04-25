const showAlert = (msg) => {
  alert(msg);
};

const showConfirm = (msg) => {
    return confirm(msg);
}

// Bir module yapısı içinde sadece 1 tane default olur
export default showAlert;
export {showConfirm}

