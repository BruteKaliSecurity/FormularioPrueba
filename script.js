document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = form.querySelector('.submit-btn');
    const headerImage = document.getElementById('headerImage');

    // Asegurar que la imagen siempre se muestre
    if (headerImage) {
        headerImage.style.display = 'block';
        headerImage.style.visibility = 'visible';
        headerImage.style.opacity = '1';
        
        headerImage.onerror = function() {
            console.warn('No se pudo cargar la imagen del logo. Verifica que el archivo logo-alcaldia.png exista en la carpeta del proyecto.');
            // Mantener la imagen visible incluso si hay error
            this.style.display = 'block';
            this.style.visibility = 'visible';
        };
        
        // Forzar carga de la imagen
        headerImage.onload = function() {
            this.style.display = 'block';
            this.style.visibility = 'visible';
            this.style.opacity = '1';
        };
    }

    form.addEventListener('submit', function(e) {
        // Validar que el checkbox esté marcado antes de enviar
        const aceptaQR = document.getElementById('aceptaQR');
        if (!aceptaQR.checked) {
            e.preventDefault();
            alert('Debe aceptar generar el QR para continuar.');
            return;
        }

        // Deshabilitar botón mientras se envía
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const edad = document.getElementById('edad').value;
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const numeroDocumento = document.getElementById('numeroDocumento').value.trim();
        const numeroCelular = document.getElementById('numeroCelular').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const aceptaQRText = aceptaQR.checked ? 'Sí' : 'No';

        // Crear mensaje formateado para el correo
        const mensajeFormateado = `Nuevo formulario de contacto recibido:

Nombre: ${nombre}
Edad: ${edad}
Tipo de Documento: ${tipoDocumento}
Número de Documento: ${numeroDocumento}
Número de Celular: ${numeroCelular}
Dirección: ${direccion}
Acepta generar QR: ${aceptaQRText}

---
Este correo fue enviado desde el formulario de contacto.`;

        // Agregar campo oculto con el mensaje completo si no existe
        let mensajeField = form.querySelector('input[name="message"]');
        if (!mensajeField) {
            mensajeField = document.createElement('input');
            mensajeField.type = 'hidden';
            mensajeField.name = 'message';
            form.appendChild(mensajeField);
        }
        mensajeField.value = mensajeFormateado;

        // Agregar campos individuales para mejor formato en el correo
        let nombreField = form.querySelector('input[name="nombre"]');
        if (!nombreField) {
            nombreField = document.createElement('input');
            nombreField.type = 'hidden';
            nombreField.name = 'nombre';
            form.appendChild(nombreField);
        }
        nombreField.value = nombre;

        // El formulario se enviará automáticamente a FormSubmit
        // NO usar preventDefault() aquí para permitir el envío normal
        // FormSubmit redirigirá a una página de confirmación
        
        // Mostrar mensaje de éxito localmente después de un breve delay
        // (el formulario se enviará en segundo plano)
        setTimeout(function() {
            mostrarExito();
        }, 500);
    });

    function mostrarExito() {
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Resetear el formulario después de 5 segundos
        setTimeout(function() {
            form.reset();
            form.classList.remove('hidden');
            successMessage.classList.add('hidden');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Formulario';
        }, 5000);
    }

    // Validación en tiempo real para el número de documento
    const numeroDocumento = document.getElementById('numeroDocumento');
    numeroDocumento.addEventListener('input', function(e) {
        // Permitir solo números
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Validación en tiempo real para el número de celular
    const numeroCelular = document.getElementById('numeroCelular');
    numeroCelular.addEventListener('input', function(e) {
        // Permitir solo números, espacios, guiones y el signo +
        e.target.value = e.target.value.replace(/[^0-9+\s-]/g, '');
    });

    // Validación para la edad
    const edad = document.getElementById('edad');
    edad.addEventListener('input', function(e) {
        let value = parseInt(e.target.value);
        if (value < 1) e.target.value = '';
        if (value > 120) e.target.value = 120;
    });
});

