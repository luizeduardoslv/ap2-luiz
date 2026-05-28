const formContato = document.getElementById('formContato');
const toastContato = document.getElementById('toastContato');

if (formContato && toastContato) {
  formContato.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (formContato.checkValidity()) {
      const toast = new bootstrap.Toast(toastContato);
      toast.show();
      formContato.reset();
    }
  });
}
