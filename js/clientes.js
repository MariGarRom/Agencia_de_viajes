document.addEventListener("DOMContentLoaded", function () {
	const inputArchivo = document.getElementById("archivoClientes");
	const cuerpoTabla = document.getElementById("cuerpoTabla");

	inputArchivo.addEventListener("change", function () {
		const archivo = inputArchivo.files[0];
		if (!archivo) return;

		const lector = new FileReader();

		lector.onload = function (e) {
			const contenido = e.target.result;
			const lineas = contenido.split("\n");

			cuerpoTabla.innerHTML = ""; // Limpiar tabla

			lineas.forEach(linea => {
				if (linea.trim() === "") return;

				// Separar campos por " | "
				const partes = linea.split(" | ");
				const datos = {};

				partes.forEach(parte => {
					const [clave, valor] = parte.split(":").map(s => s.trim());
					if (clave && valor !== undefined) datos[clave.toLowerCase()] = valor;
				});

				// Crear la fila
				const fila = document.createElement("tr");
				fila.innerHTML = `
					<td>${datos["nombre"] || ""}</td>
					<td>${datos["correo"] || ""}</td>
					<td>${datos["destino"] || ""}</td>
					<td class="text-center">${datos["personas"] || ""}</td>
					<td>${datos["fecha"] || ""}</td>
					<td class="text-center">
						<button class="btn btn-warning btn-sm me-2 btn-editar">Editar</button>
						<button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button>
					</td>
				`;

				cuerpoTabla.appendChild(fila);
			});

			// Eventos para botones
			document.querySelectorAll(".btn-editar").forEach(btn => {
				btn.addEventListener("click", () => {
					alert("Acción para editar no programada.");
				});
			});

			document.querySelectorAll(".btn-eliminar").forEach(btn => {
				btn.addEventListener("click", () => {
					alert("Acción para eliminar no programada.");
				});
			});
		};

		lector.readAsText(archivo);
	});
});

