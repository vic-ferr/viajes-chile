const enviarCorreo = document.getElementById("contacto");
enviarCorreo.addEventListener("click", function () {
  Swal.fire("Deseas contactarnos?...");
});

// const { value: email } = await Swal.fire({
//   title: "Input email address",
//   input: "email",
//   inputLabel: "Your email address",
//   inputPlaceholder: "Enter your email address",
// });

// if (email) {
//   Swal.fire(`Entered email: ${email}`);
//}

// Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 1500
//   })
