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
}

function mostrarMenuPrincipal() {
    actualizarContenido(`
        <h1 class="invitacion-titulo" style="animation: fadeInDown 0.6s ease-out forwards;">Teresa & Alberto</h1>
        <p class="invitacion-texto" style="animation: fadeInUp 0.6s ease-out 0.2s forwards;">
            Tenemos el honor de invitarles a celebrar el inicio de nuestra nueva historia de vida juntos
        </p>
        <p class="invitacion-fecha" style="animation: fadeInUp 0.6s ease-out 0.4s forwards;">
            Viernes · Septiembre 11 · 2026
        </p>
        <nav class="menu-navegacion">
            <button class="btn-menu" onclick="mostrarPadrinos()">Padrinos</button>
            <button class="btn-menu" onclick="mostrarUbicacion()">Ubicación</button>
            <button class="btn-menu" onclick="mostrarVestimenta()">Confirmar asistencia</button>
            <button class="btn-menu" onclick="mostrarDetalles()">Más detalles</button>
        </nav>
    `, 'foto2');
}

function mostrarPadrinos() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Padrinos</h2>

            <h3 class="seccion-subtitulo">Padrinos de anillos</h3>
            <ul class="lista-familia">
                <li>Agustín Ovando Rivera</li>
                <li>Ruth Alvarado Rodríguez</li>
            </ul>

            <h3 class="seccion-subtitulo">Padrino de ramo</h3>
            <ul class="lista-familia">
                <li>Nicolás Flores Ramírez</li>
            </ul>

            <h3 class="seccion-subtitulo">Otros padrinos</h3>
            <ul class="lista-familia">
                <li>Roque Eliel Flores Alvarado</li>
                <li>Miguel Ángel Flores Alvarado</li>
                <li>Victoria Beatriz Puc</li>
                <li>Paola Sánchez Mex</li>
                <li>Sostenes Alvarado Rodríguez</li>
            </ul>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">← Volver</button>
        </div>
    `, 'foto3');
}

function mostrarUbicacion() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Ubicación</h2>

            <h3 class="seccion-subtitulo">Ceremonia religiosa</h3>
            <div class="detalles-lugar">
                <p>7:00 PM</p>
                <p>Parroquia Virgen de San Juan</p>
                <p>Av. Cancún L-12, Fracc. Paraíso Villas</p>
                <p>Cancún, Q. Roo</p>
                <a class="link-mapa" href="https://maps.google.com/?q=Parroquia+Virgen+de+San+Juan+Cancun" target="_blank" rel="noopener noreferrer">Ver en Google Maps →</a>
            </div>

            <h3 class="seccion-subtitulo">Recepción</h3>
            <div class="detalles-lugar">
                <p>9:00 PM</p>
                <p>Salón de Eventos Wayak</p>
                <p>Calle Alerces #8 y Calle Fresno</p>
                <p>CP 77533 · Cancún, Q. Roo</p>
                <a class="link-mapa" href="https://maps.google.com/?q=Wayak+Salon+Eventos+Cancun" target="_blank" rel="noopener noreferrer">Ver en Google Maps →</a>
            </div>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">← Volver</button>
        </div>
    `, 'foto3');
}

function mostrarVestimenta() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Confirmar asistencia</h2>

            <div class="bloque-seccion">
                <h3 class="seccion-subtitulo">Confirma tu asistencia</h3>
                <div class="detalles-lugar">
                    <p>Por favor confirma vía WhatsApp</p>
                    <p>para brindarte una mejor atención.</p>
                </div>
            </div>

            <div class="bloque-seccion">
                <h3 class="seccion-subtitulo">Código de vestimenta</h3>
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

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">← Volver</button>
        </div>
    `, 'foto3');
}

function mostrarDetalles() {
    actualizarContenido(`
        <div class="seccion-contenido">
            <h2 class="seccion-titulo">Detalles</h2>

            <h3 class="seccion-subtitulo">Lluvia de sobres</h3>
            <div class="detalles-lugar">
                <p>Su presencia es nuestro mayor regalo.</p>
                <p>Todos los obsequios serán en efectivo.</p>
                <p>Favor de colocarlos en el baúl disponible durante el evento.</p>
            </div>

            <h3 class="seccion-subtitulo">Niños</h3>
            <div class="detalles-lugar">
                <p>Agradecemos la asistencia de los pequeños.</p>
                <p>Les invitamos a cuidarlos para que este día sea inolvidable para todos.</p>
            </div>

            <button class="btn-menu volver" onclick="mostrarMenuPrincipal()">← Volver</button>
        </div>
    `, 'foto3');
}
