document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.contenedor-sobre');
    const sello = document.querySelector('.sello');
    const audioInvitacion = document.querySelector('#audio-invitacion');

    if (contenedor && sello) {
        sello.addEventListener('click', (e) => {
            e.stopPropagation();
            contenedor.classList.add('abierto');
            reproducirAudio(audioInvitacion);
        }, { once: true });
    }
});

function reproducirAudio(audio) {
    if (!audio) {
        return;
    }

    audio.volume = 1;
    audio.play().catch(() => {
        // Ignora errores si el archivo no existe o el navegador bloquea la reproduccion.
    });
}

function cambiarFoto(foto) {
    const invitacion = document.querySelector('#invitacion');
    if (!invitacion) {
        return;
    }

    invitacion.classList.remove('foto1', 'foto2', 'foto3');
    invitacion.classList.add(foto);
}

function actualizarContenido(html, foto) {
    const contenido = document.querySelector('#contenido');
    if (!contenido) {
        return;
    }

    contenido.innerHTML = html;
    cambiarFoto(foto);
    animarContenidoDinamico(contenido);
}

function animarContenidoDinamico(contenido) {
    const titulo = contenido.querySelector('.seccion-titulo');
    const volver = contenido.querySelector('.btn-menu.volver');
    const items = [
        ...contenido.querySelectorAll(
            '.bloque-seccion, .bloque-acordeon, .menu-navegacion .btn-menu:not(.volver), .detalles-lugar, .tipo-vestimenta, .colores-evitar'
        )
    ].filter((elemento) => !elemento.closest('.bloque-acordeon .contenido-acordeon') || elemento.classList.contains('bloque-acordeon'));

    if (titulo) {
        titulo.style.opacity = '0';
        titulo.style.animation = 'fadeInDown 0.55s ease-out forwards';
    }

    items.forEach((elemento, indice) => {
        elemento.style.opacity = '0';
        elemento.style.animation = `fadeInUp 0.55s ease-out ${0.12 + indice * 0.12}s forwards`;
    });

    if (volver) {
        volver.style.opacity = '0';
        volver.style.animation = `fadeInUp 0.55s ease-out ${0.24 + items.length * 0.12}s forwards`;
    }
}

function mostrarMenuPrincipal() {
    actualizarContenido(`
        <h1 class="invitacion-titulo" style="animation: fadeInDown 0.6s ease-out forwards;">Teresa & Alberto</h1>
        <p class="invitacion-texto" style="animation: fadeInUp 0.6s ease-out 0.2s forwards;">
            Tenemos el honor de invitarles a celebrar el inicio de nuestra nueva historia de vida juntos
        </p>
        <p class="invitacion-fecha" style="animation: fadeInUp 0.6s ease-out 0.4s forwards;">
            Viernes &middot; Septiembre 11 &middot; 2026
        </p>
        <nav class="menu-navegacion">
            <button class="btn-menu" onclick="mostrarPersonasEspeciales()">Personas especiales</button>
            <button class="btn-menu" onclick="mostrarItinerario()">Itinerario</button>
            <button class="btn-menu" onclick="mostrarVestimenta()">Confirmar asistencia</button>
            <button class="btn-menu" onclick="mostrarDetalles()">M&aacute;s detalles</button>
        </nav>
    `, 'foto2');
}

function mostrarPersonasEspeciales() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Personas especiales</h2>

            <div class="bloque-acordeon activo">
                <button class="btn-acordeon" type="button" onclick="alternarAcordeon(this)">Familiares</button>
                <div class="contenido-acordeon">
                    <div class="grupo-personas">
                        <h3 class="seccion-subtitulo">Padres de la novia</h3>
                        <ul class="lista-familia">
                            <li>Ruth Alvarado Rodr&iacute;guez</li>
                            <li>Nicol&aacute;s Flores Ram&iacute;rez</li>
                        </ul>
                    </div>

                    <div class="grupo-personas">
                        <h3 class="seccion-subtitulo">Padres del novio</h3>
                        <ul class="lista-familia">
                            <li>Genny Beatriz Mex Poot</li>
                            <li>Liborio S&aacute;nchez P&eacute;rez</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bloque-acordeon">
                <button class="btn-acordeon" type="button" onclick="alternarAcordeon(this)">Padrinos</button>
                <div class="contenido-acordeon">
                    <div class="grupo-personas">
                        <h3 class="seccion-subtitulo">Anillos</h3>
                        <ul class="lista-familia">
                            <li>Agust&iacute;n Ovando Rivera</li>
                            <li>Ruth Alvarado Rodr&iacute;guez</li>
                        </ul>
                    </div>

                    <div class="grupo-personas">
                        <h3 class="seccion-subtitulo">Ramo</h3>
                        <ul class="lista-familia">
                            <li>Nicol&aacute;s Flores Ram&iacute;rez</li>
                        </ul>
                    </div>

                    <div class="grupo-personas">
                        <h3 class="seccion-subtitulo">Otros</h3>
                        <ul class="lista-familia">
                            <li>Roque Eliel Flores Alvarado</li>
                            <li>Miguel &Aacute;ngel Flores Alvarado</li>
                            <li>Victoria Beatriz Puc</li>
                            <li>Paola S&aacute;nchez Mex</li>
                            <li>Sostenes Alvarado Rodr&iacute;guez</li>
                        </ul>
                    </div>
                </div>
            </div>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">&larr; Volver</button>
        </div>
    `, 'foto3');
}

function alternarAcordeon(boton) {
    const bloque = boton.closest('.bloque-acordeon');
    if (!bloque) {
        return;
    }

    const contenedor = bloque.parentElement;
    const yaActivo = bloque.classList.contains('activo');

    contenedor.querySelectorAll('.bloque-acordeon').forEach((item) => {
        item.classList.remove('activo');
    });

    if (!yaActivo) {
        bloque.classList.add('activo');
    }
}

function mostrarItinerario() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Itinerario</h2>

            <div class="bloque-acordeon activo">
                <button class="btn-acordeon" type="button" onclick="alternarAcordeon(this)">Boda religiosa</button>
                <div class="contenido-acordeon">
                    <div class="grupo-personas">
                        <div class="detalles-lugar">
                            <p>7:00 PM</p>
                            <p>Parroquia Virgen de San Juan</p>
                            <p>Av. Canc&uacute;n L-12, Fracc. Para&iacute;so Villas</p>
                            <p>Canc&uacute;n, Q. Roo</p>
                            <div class="acciones-seccion">
                                <a class="btn-accion" href="https://maps.google.com/?q=Parroquia+Virgen+de+San+Juan+Cancun" target="_blank" rel="noopener noreferrer">Ver ubicaci&oacute;n</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bloque-acordeon">
                <button class="btn-acordeon" type="button" onclick="alternarAcordeon(this)">Recepci&oacute;n</button>
                <div class="contenido-acordeon">
                    <div class="grupo-personas">
                        <div class="detalles-lugar">
                            <p>9:00 PM</p>
                            <p>Sal&oacute;n de Eventos Wayak</p>
                            <p>Calle Alerces #8 y Calle Fresno</p>
                            <p>CP 77533 &middot; Canc&uacute;n, Q. Roo</p>
                            <p>Recepci&oacute;n y c&oacute;ctel de bienvenida</p>
                            <div class="acciones-seccion">
                                <a class="btn-accion" href="https://maps.google.com/?q=Wayak+Salon+Eventos+Cancun" target="_blank" rel="noopener noreferrer">Ver ubicaci&oacute;n</a>
                                <button class="btn-accion" type="button" onclick="mostrarProgramaRecepcion()">Ver programa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">&larr; Volver</button>
        </div>
    `, 'foto2');
}

function mostrarProgramaRecepcion() {
    actualizarContenido(`
        <div class="seccion-contenido programa-recepcion">
            <h2 class="seccion-titulo">Programa</h2>

            <div class="bloque-seccion">
                <ul class="lista-itinerario">
                    <li class="item-itinerario">
                        <span class="hora-itinerario">08:40 PM</span>
                        <span class="detalle-itinerario">Recepci&oacute;n de invitados y asignaci&oacute;n de mesas.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">08:50 PM - 09:20 PM</span>
                        <span class="detalle-itinerario">Inicio y c&oacute;ctel de bienvenida.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">09:30 PM</span>
                        <span class="detalle-itinerario">Entrada de novios.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">09:35 PM</span>
                        <span class="detalle-itinerario">Vals de novios.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">09:40 PM</span>
                        <span class="detalle-itinerario">Baile con pap&aacute;s.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">09:45 PM</span>
                        <span class="detalle-itinerario">Brindis.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">09:50 PM</span>
                        <span class="detalle-itinerario">Cena.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">10:50 PM</span>
                        <span class="detalle-itinerario">Corte de pastel.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">11:00 PM</span>
                        <span class="detalle-itinerario">Show de animaci&oacute;n.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">11:45 PM</span>
                        <span class="detalle-itinerario">Se abre pista.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">12:00 AM - 2:00 AM</span>
                        <span class="detalle-itinerario">Cabina de fotos.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">01:00 AM</span>
                        <span class="detalle-itinerario">Ramo y liga.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">01:10 AM</span>
                        <span class="detalle-itinerario">Contin&uacute;a la fiesta.</span>
                    </li>
                    <li class="item-itinerario">
                        <span class="hora-itinerario">03:00 AM</span>
                        <span class="detalle-itinerario">Fin del evento.</span>
                    </li>
                </ul>
            </div>

            <button class="btn-menu volver" onclick="mostrarItinerario()">&larr; Volver</button>
        </div>
    `, 'foto2');
}

function mostrarVestimenta() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Confirmar asistencia</h2>

            <div class="bloque-seccion">
                <h3 class="seccion-subtitulo">Confirma tu asistencia</h3>
                <div class="detalles-lugar">
                    <p>Por favor confirma v&iacute;a WhatsApp</p>
                    <p>para brindarte una mejor atenci&oacute;n.</p>
                </div>
            </div>

            <div class="bloque-seccion">
                <h3 class="seccion-subtitulo">C&oacute;digo de vestimenta</h3>
                <p class="tipo-vestimenta">Casual Elegante</p>

                <div class="colores-evitar">
                    <h4>Colores a evitar</h4>
                    <div class="grid-colores">
                        <div class="item-color">
                            <div class="circulo-color color-oro"></div>
                            <span class="nombre-color">Gold Rose</span>
                        </div>
                        <div class="item-color">
                            <div class="circulo-color color-rojo"></div>
                            <span class="nombre-color">Rojo</span>
                        </div>
                        <div class="item-color">
                            <div class="circulo-color color-beige"></div>
                            <span class="nombre-color">Beige</span>
                        </div>
                        <div class="item-color">
                            <div class="circulo-color color-blanco"></div>
                            <span class="nombre-color">Blanco</span>
                        </div>
                    </div>
                </div>
            </div>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">&larr; Volver</button>
        </div>
    `, 'foto3');
}

function mostrarDetalles() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Detalles</h2>

            <div class="bloque-seccion">
                <h3 class="seccion-subtitulo">Lluvia de sobres</h3>
                <div class="detalles-lugar">
                    <p>Su presencia es nuestro mayor regalo.</p>
                    <p>Hemos preparado una lluvia de sobres; todos los obsequios ser&aacute;n en efectivo.</p>
                    <p>Favor de colocarlo en el ba&uacute;l que estar&aacute; disponible durante el evento.</p>
                </div>
            </div>

            <div class="bloque-seccion">
                <h3 class="seccion-subtitulo">Ni&ntilde;os</h3>
                <div class="detalles-lugar">
                    <p>Agradecemos la asistencia de los peque&ntilde;os.</p>
                    <p>Les invitamos a cuidarlos para que este d&iacute;a sea inolvidable para todos.</p>
                </div>
            </div>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">&larr; Volver</button>
        </div>
    `, 'foto3');
}
