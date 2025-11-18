console.log("✅ Script cargado correctamente");

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const usuario = document.getElementById("username").value.trim();
    const contraseña = document.getElementById("password").value.trim();
  
    if (usuario === "Grupo6" && contraseña === "123456") {
      alert("Bienvenidos 🍰");
      window.location.href = "../Paginas/Inicio.html";

    } else {
      alert("Usuario o Contraseña Incorrecta ❌");
    }
  });
  
