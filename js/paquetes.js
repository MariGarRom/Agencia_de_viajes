// tarjetas de los paquetes 
    const paquetes = [
      {
        titulo: "Cancún Deluxe",
        destino: "Cancún",
        duracion: "5 días / 4 noches",
        incluye: "Hotel 4*, vuelos, desayunos y tour a Isla Mujeres",
        precio: "$12,999 MXN",
        imagen: "img/cancun.jpg",
        detalles: "Incluye hospedaje en resort, vuelos redondos y excursión a Isla Mujeres.",
        politicas: "Cancelación gratuita hasta 7 días antes del viaje."
      },
      {
        titulo: "Puerto Vallarta Aventura",
        destino: "Puerto Vallarta",
        duracion: "4 días / 3 noches",
        incluye: "Hotel, cenas románticas, paseo en velero",
        precio: "$10,499 MXN",
        imagen: "img/vallarta.jpg",
        detalles: "Hospedaje con vista al mar, tour en velero, acceso a club de playa.",
        politicas: "50% de reembolso hasta 5 días antes del viaje."
      },
      {
        titulo: "Ciudad de México Cultural",
        destino: "CDMX",
        duracion: "3 días / 2 noches",
        incluye: "Hotel, transporte, entradas a museos",
        precio: "$7,999 MXN",
        imagen: "img/ciudadMexico.jpg",
        detalles: "Visita guiada por museos, Zócalo, Xochimilco y más.",
        politicas: "Cancelación sin cargo hasta 72 horas antes."
      },
      {
        titulo: "Oaxaca Tradicional",
        destino: "Oaxaca",
        duracion: "4 días / 3 noches",
        incluye: "Hotel, comidas típicas, tour mezcalero",
        precio: "$8,499 MXN",
        imagen: "img/oaxaca.jpg",
        detalles: "Incluye visita a Mitla, Hierve el Agua, y cata de mezcales.",
        politicas: "Reembolso del 75% hasta 5 días antes del viaje."
      },
      {
        titulo: "Chiapas Natural",
        destino: "San Cristóbal",
        duracion: "5 días / 4 noches",
        incluye: "Hospedaje, tour al Cañón, desayunos",
        precio: "$9,999 MXN",
        imagen: "img/chiapas.jpg",
        detalles: "Incluye traslado, guía certificado y visita a Palenque.",
        politicas: "Cancelación con reembolso total hasta 6 días antes."
      },
      {
        titulo: "Los Cabos VIP",
        destino: "Los Cabos",
        duracion: "5 días / 4 noches",
        incluye: "Hotel 5*, todo incluido, paseos en yate",
        precio: "$16,999 MXN",
        imagen: "img/loscabos.jpg",
        detalles: "Paquete todo incluido con acceso a club de golf.",
        politicas: "No reembolsable en temporada alta."
      },
      {
        titulo: "Puebla Colonial",
        destino: "Puebla",
        duracion: "3 días / 2 noches",
        incluye: "Hotel, desayuno y visitas guiadas",
        precio: "$6,499 MXN",
        imagen: "img/puebla.jpg",
        detalles: "Incluye recorrido a Cholula, catedral y calle de los dulces.",
        politicas: "Cancelación sin penalización hasta 3 días antes."
      },
      {
        titulo: "Querétaro Mágico",
        destino: "Querétaro",
        duracion: "2 días / 1 noche",
        incluye: "Hospedaje, city tour, degustación de vinos",
        precio: "$5,999 MXN",
        imagen: "img/queretaro.jpg",
        detalles: "Visita a Peña de Bernal, viñedos y centro histórico.",
        politicas: "50% reembolso si se cancela con 2 días de antelación."
      },
      {
        titulo: "Huatulco Sol y Playa",
        destino: "Huatulco",
        duracion: "4 días / 3 noches",
        incluye: "Resort frente al mar, desayunos y snorkel",
        precio: "$11,499 MXN",
        imagen: "img/huatulco.jpg",
        detalles: "Playas privadas, actividades acuáticas, relajación total.",
        politicas: "Cancelación gratuita hasta 5 días antes."
      },
      {
        titulo: "Guadalajara Tequila Tour",
        destino: "Guadalajara",
        duracion: "3 días / 2 noches",
        incluye: "Hotel, recorrido a Tequila, mariachi show",
        precio: "$8,299 MXN",
        imagen: "img/guadalajara.jpg",
        detalles: "Tour a destilerías, espectáculo de mariachi y cena típica.",
        politicas: "Reembolso total si se cancela 1 semana antes."
      }
    ];

    const tarjetasContainer = document.getElementById("tarjetasContainer");

    paquetes.forEach((paquete, index) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "card shadow rounded-4 m-3";
      tarjeta.style.maxWidth = "22rem";
      tarjeta.innerHTML = `
        <div class="card-body">
          <h5 class="card-title fw-bold">${paquete.titulo}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Destino: ${paquete.destino}</h6>
          <p class="card-text"><strong>Duración:</strong> ${paquete.duracion}</p>
          <p class="card-text"><strong>Incluye:</strong> ${paquete.incluye}</p>
          <p class="card-text text-primary fs-5 fw-semibold">Precio: ${paquete.precio}</p>
          <button class="btn btn-primary btn-tarjeta w-100 mt-2" data-bs-toggle="modal" data-index="${index}" data-bs-target="#modalPaquete">
            Más información
          </button>
        </div>
      `;
      tarjetasContainer.appendChild(tarjeta);
    });

    const modal = document.getElementById("modalPaquete");
    modal.addEventListener("show.bs.modal", function (event) {
      const button = event.relatedTarget;
      const index = button.getAttribute("data-index");
      const paquete = paquetes[index];

      document.getElementById("modalPaqueteLabel").textContent = `Detalles del paquete ${paquete.titulo}`;
      document.getElementById("modalImagen").src = paquete.imagen;
      document.getElementById("modalImagen").alt = `Imagen de ${paquete.destino}`;
      document.getElementById("modalDetalles").textContent = paquete.detalles;
      document.getElementById("modalPoliticas").textContent = `Políticas de cancelación: ${paquete.politicas}`;
    });
