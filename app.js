$("document").ready(function () {
  const form = document.forms["users"];

  $("#log form").submit(function (e) {
    e.preventDefault();

    console.log(formDatatoJSON());
  });

  function formDatatoJSON() {
    const user = {};
    Array.from(form.elements).forEach((element) => {
      if (element.name) user[element.name] = element.value;
    });
    let post = $("#post");
    let about = $("#about2");
    about.html(`
    <div id="about"  >
        <h4>
            ¡Usuario
            ${user.uname}
            Registrado!
        </h4>
        <img class="mb-5" src="./public/dummy-user-img.png" alt="user"><br>
        <a href='#' id='logout'>Cerrar sesión</a>
    `);

    //  Cerrar sesion
    $("#logout").click(function () {
      console.log("Cerraste sesion");
      location.reload();
    });
    post.html(`  
            <article class="post"  >
                <h2> <strong>${user.fname} ${user.lname}</strong></h2>
                <p>Te damos la bienvenida a este espacio... Sigue interactuando</p>
                <span> C.C: ${user.cc} </span>
                <p>
                    Fecha de nacimiento: ${user.date} <br>
                    Email: ${user.email}  <br>
                    UserName: ${user.uname}
                </p>
                <br>
            </article>
            <hr>
        `);

    $("#log").hide();
    return user;
  }
});
rgb(34, 34, 34)