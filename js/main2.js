var form = document.getElementById('form-cliente');
var validacionNombre = document.getElementById('validacion-nombre');
var validacionCif = document.getElementById('validacion-cif');


function checkCif(textoCif) {
    return new RegExp(/([ABCDEFGHPQS])([0-9]{8})/i).test(textoCif);
}


form.addEventListener('submit', function (e) {
    e.preventDefault(); // Desactiva el envío de los valores del formulario
    if(e.target.nombre.value.length === 0) {
        validacionNombre.innerHTML = 'El nombre es obligatorio';
    } else {
        validacionNombre.innerHTML = '';
    }
    if(e.target.cif.value.length === 0) {
        validacionCif.innerHTML = 'El CIF es obligatorio';
    } else if (!checkCif(e.target.cif.value)) {
        validacionCif.innerHTML = 'Formato de CIF no valído';
    } else {
        validacionCif.innerHTML = '';
    }
    if (e.target.nombre.value.length > 0 &&
        checkCif(e.target.cif.value)) {
        // Simulamos que enviamos datos a servidor
        console.log({
            nombre: e.target.nombre.value,
            cif: e.target.cif.value,
            localidad: e.target.localidad.value
        })
    }

})