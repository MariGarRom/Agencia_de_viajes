document.addEventListener("DOMContentLoaded", function () {
	const form1 = document.getElementById("formulario-registro");
	const form2 = document.getElementById("form-contacto");
	const alertaExito = document.getElementById("alertaExito");
	const btnExportar = document.getElementById("btnExportar"); // botón para exportar

	if (form1) {
		form1.addEventListener("submit", function (e) {
			e.preventDefault();

			const nombre = document.getElementById("nombreCompleto").value.trim();
			const email = document.getElementById("email").value.trim();
			const destino = document.getElementById("destino").value;
			const personas = document.getElementById("personas").value.trim();
			const fecha = document.getElementById("fecha").value;
			const comentarios = document.getElementById("comentarios")?.value.trim() || "";

			if (fecha === "") {
				alert("Por favor, selecciona una fecha tentativa de viaje.");
				return;
			}

			const fechaIngresada = new Date(fecha);
			const hoy = new Date();
			hoy.setHours(0, 0, 0, 0);

			if (fechaIngresada < hoy) {
				alert("La fecha de viaje no puede ser anterior a hoy.");
				return;
			}

			// Crear registro en formato plano
			const registro = `Nombre: ${nombre} | Correo: ${email} | Destino: ${destino} | Personas: ${personas} | Fecha: ${fecha} | Comentarios: ${comentarios}`;

			// Guardar en localStorage
			let registros = JSON.parse(localStorage.getItem("registrosClientes")) || [];
			registros.push(registro);
			localStorage.setItem("registrosClientes", JSON.stringify(registros));

			alert("Formulario enviado y guardado correctamente.");
			form1.reset();
		});
	}

	if (form2) {
		form2.addEventListener("submit", function (e) {
			e.preventDefault();

			// Mostrar alerta Bootstrap
			alertaExito.classList.remove("d-none");
			alertaExito.classList.add("show");

			form2.reset();

			setTimeout(() => {
				alertaExito.classList.remove("show");
				alertaExito.classList.add("d-none");
			}, 3000);
		});
	}

	if (btnExportar) {
		btnExportar.addEventListener("click", function () {
			const registros = JSON.parse(localStorage.getItem("registrosClientes")) || [];

			if (registros.length === 0) {
				alert("No hay datos para exportar.");
				return;
			}

			const contenido = registros.join("\n");
			const blob = new Blob([contenido], { type: "text/plain" });
			const url = URL.createObjectURL(blob);

			const enlace = document.createElement("a");
			enlace.href = url;
			enlace.download = "clientes.txt";
			document.body.appendChild(enlace);
			enlace.click();
			document.body.removeChild(enlace);
		});
	}
});
