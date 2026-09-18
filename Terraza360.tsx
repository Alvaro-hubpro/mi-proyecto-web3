/**
 * Pérgola 360: portada inmersiva a pantalla completa y recorridos reales,
 * con numeración visible, explicación de solución y visor ampliado.
 */
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowLeft, Check, ChevronDown, Clock3, Mail, MapPin, Maximize2, Phone, Send, VolumeX, X } from "lucide-react";
import "../terraza-360.css";

const WHATSAPP_NUMBER = "51935853774";

type TerraceVideo = {
  src: string;
  audioSrc?: string;
  poster?: string;
  title: string;
  category: string;
  text: string;
  benefit: string;
};

const terraceVideos: TerraceVideo[] = [
  { src: "/manus-storage/hero-terraza-proceso_cf1c01b7.mp4", poster: "/manus-storage/hero-patio-habitado_950b2ed4.png", title: "Terraza en proceso y terminada", category: "Proceso completo", text: "Del montaje a la pérgola terminada: estructura, sombra y espacio exterior.", benefit: "Ves cómo una instalación ordenada transforma una terraza y asegura un acabado integrado." },
  { src: "/manus-storage/terraza-huayruro-nocturna_37e12ff3.mp4", poster: "/manus-storage/hero-jardin_5e4e43fd.png", title: "Huayruro al atardecer", category: "Terraza iluminada", text: "Listones, policarbonato e iluminación para prolongar las horas al aire libre.", benefit: "La luz integrada mantiene el espacio útil y acogedor cuando cae el sol." },
  { src: "/manus-storage/comparativa-aluminio-premium_134b02fc.mp4", poster: "/manus-storage/detalle-material_5e4f963c.png", title: "Aluminio básico y premium", category: "Comparativa técnica", text: "Una mirada clara a perfiles, espesores y acabados para elegir tu pérgola a medida.", benefit: "Te ayuda a comparar resistencia, espesor y presencia visual antes de invertir." },
  { src: "/manus-storage/instalacion-terraza-piscina_04765f6a.mp4", poster: "/manus-storage/proyecto-piscina_ccbfb7db.png", title: "Instalación junto a la piscina", category: "Fabricación a medida", text: "Anclajes, montaje y resultado final en una terraza residencial de líneas limpias.", benefit: "Los anclajes y la medida exacta dan estabilidad sin restar amplitud al entorno." },
  { src: "/manus-storage/medidas-y-proyectos_d9e1142b.mp4", poster: "/manus-storage/proyecto-terraza_db298a7f.png", title: "Medidas para tu proyecto", category: "Asesoría de terraza", text: "Un recorrido por proyectos terminados y los detalles que guían una cotización a medida.", benefit: "Con una medición clara, el diseño se ajusta mejor a tu espacio y presupuesto." },
  { src: "/manus-storage/terraza-escalera-corrediza_d3cce77e.mp4", poster: "/manus-storage/hero-terraza-estructura_68fbf5f3.png", title: "Escalera y techo corredizo", category: "Terraza panorámica", text: "Una pérgola de aluminio tipo madera con sistema móvil, escalera y vista urbana.", benefit: "El sistema corredizo permite adaptar la sombra según la hora y el clima." },
  { src: "/manus-storage/pergola-360-3_ab991e74.mp4", audioSrc: "/manus-storage/pergola-audio-2_f55d5959.mp4", poster: "/manus-storage/pergola-360-3_df7e6284.jpg", title: "Barandas y horizonte", category: "Terraza elevada", text: "Una perspectiva amplia entre vidrio, lamas y ciudad.", benefit: "La estructura se integra a las barandas sin cerrar visualmente el exterior." },
  { src: "/manus-storage/pergola-360-4_1fb22b89.mp4", audioSrc: "/manus-storage/pergola-audio-3_041b1c74.mp4", poster: "/manus-storage/pergola-360-4_9ec30493.jpg", title: "Pilares y lamas", category: "Estructura visible", text: "Listones, pilares robustos e iluminación integrada en un mismo gesto.", benefit: "Combina soporte firme, ritmo visual y luz puntual en una sola solución." },
  { src: "/manus-storage/pergola-360-5_bda7a502.mp4", audioSrc: "/manus-storage/pergola-audio-4_3a784d46.mp4", poster: "/manus-storage/pergola-360-5_904221f4.jpg", title: "Geometría de cubierta", category: "Policarbonato", text: "La trama de madera y los soportes negros definen la sombra.", benefit: "El policarbonato permite iluminar el espacio mientras protege de la intemperie." },
  { src: "/manus-storage/pergola-detalle-5_12c500a1.mp4", audioSrc: "/manus-storage/pergola-audio-8_77ac0679.mp4", poster: "/manus-storage/pergola-detalle-5_bf444cd0.jpg", title: "Drenaje y estructura", category: "Detalle técnico", text: "Vigas, columnas y drenaje pluvial en una cubierta de policarbonato.", benefit: "El drenaje integrado ayuda a conducir el agua y mantiene la terraza más protegida." },
  { src: "/manus-storage/recorrido-galeria_9cb3df47.mp4", poster: "/manus-storage/recorrido-galeria-2_5s_028a610f.jpg", title: "Lamas y luz integrada", category: "Recorrido de estructura", text: "Una vista vertical de la cubierta, las lamas tacto madera y las luminarias incorporadas.", benefit: "Permite apreciar la proporción de la estructura y cómo la iluminación se integra al acabado." },
  { src: "/manus-storage/recorrido-360-lamas_5c81e2e7.mp4", poster: "/manus-storage/recorrido-360-lamas_853412eb.jpg", title: "Cubierta de lamas en detalle", category: "Recorrido de cubierta", text: "Una toma ascendente que revela la geometría de las lamas y los perfiles de la pérgola.", benefit: "Ayuda a apreciar la continuidad del acabado y la protección solar desde el interior." },
  { src: "/manus-storage/recorrido-360-terraza_b62a0242.mp4", poster: "/manus-storage/recorrido-360-terraza_cb19799b.jpg", title: "Terraza abierta y luminosa", category: "Vista exterior", text: "Un recorrido vertical por la cubierta instalada y la relación con el entorno exterior.", benefit: "Muestra cómo las lamas proyectan sombra sin cerrar la vista ni reducir la amplitud." },
];

export default function Terraza360() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof terraceVideos)[number] | null>(null);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width: 720px)").matches);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const updateMobile = () => setIsMobile(mediaQuery.matches);
    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  useEffect(() => {
    if (!selectedVideo) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setSelectedVideo(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedVideo]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola, quiero solicitar una cotización para mi proyecto.",
      `Nombre: ${data.get("nombre") || "No indicado"}`,
      `Teléfono: ${data.get("telefono") || "No indicado"}`,
      `Email: ${data.get("email") || "No indicado"}`,
      `Ubicación: ${data.get("ubicacion") || "No indicado"}`,
      `Proyecto: ${data.get("proyecto") || "No indicado"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
    setSent(true);
  };

  const preventVideoMenu = (event: React.MouseEvent<HTMLVideoElement>) => event.preventDefault();

  return (
    <div className="t360-grid-page">
      <header className={`t360-grid-header ${scrolled ? "is-scrolled" : ""} ${headerCollapsed ? "is-collapsed" : ""}`}>
        <a href="/" className="t360-grid-brand" aria-label="Volver a Pérgolas Techos Imperial">
          <img src="/manus-storage/pergolas-brand-mark_27609de6.png" alt="" />
          <span>Pérgolas<br /><strong>Techos Imperial</strong></span>
        </a>
        <nav aria-label="Navegación Pérgola 360">
          <a className="is-active" href="#terraza-galeria">Pérgola 360</a>
          <a href="/galeria">Galería</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="/#contacto">Cotizar</a>
        </nav>
        <a className="t360-mobile-quote" href="#contacto">Cotizar</a>
        <a className="t360-grid-back" href="/"><ArrowLeft size={16} /> Volver</a>
        <button className="header-collapse-toggle" onClick={() => setHeaderCollapsed((collapsed) => !collapsed)} aria-label={headerCollapsed ? "Mostrar cabecera y navegación" : "Ocultar cabecera"} title={headerCollapsed ? "Mostrar cabecera" : "Ocultar cabecera"}>
          <ChevronDown size={16} className={headerCollapsed ? "" : "is-open"} />
        </button>
      </header>

      <main>
        <section className="t360-cover" aria-label="Portada Pérgola 360">
          <video autoPlay={!isMobile} muted loop playsInline preload={isMobile ? "none" : "auto"} poster="/manus-storage/pergola-4k-poster_195f6dea.jpg" aria-label="Video original 4K de portada de Pérgola 360 con cubierta de lamas y luz natural" controlsList="nodownload noplaybackrate" disablePictureInPicture onContextMenu={preventVideoMenu}>
            <source src="/manus-storage/pasted_file_zZw4Gg_WhatsAppVideo2026-08-23at12.20.00AM_be35105f.mp4" type="video/mp4" />
          </video>
          <div className="t360-cover-caption">
            <span>Pérgola 360</span>
            <strong>Una cubierta de lamas, vista en 360.</strong>
          </div>
          <a href="#terraza-galeria" className="t360-cover-scroll">Ver recorridos <ArrowDown size={16} /></a>
        </section>

      <section id="terraza-galeria" className="t360-grid-main">
        <section className="t360-grid-intro">
          <span>Recorridos reales</span>
          <h1>Descubre cada <em>perspectiva.</em></h1>
          <p>Videos de pérgolas a medida para descubrir lamas, iluminación, estructura y acabados para terrazas en Lima.</p>
        </section>

        <section className="t360-video-grid" aria-label="Galería de videos Pérgola 360">
          {terraceVideos.map((video, index) => (
            <article className="t360-video-card" key={video.src}>
              <div className="t360-video-media">
                <video autoPlay={!isMobile && index < 2} muted loop playsInline preload={isMobile ? "none" : index < 2 ? "auto" : "metadata"} poster={video.poster} aria-label={`${video.title}, video de Pérgola 360 sin audio`} controlsList="nodownload noplaybackrate" disablePictureInPicture onContextMenu={preventVideoMenu}>
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="t360-video-copy">
                  <span><b className="t360-video-index">{String(index + 1).padStart(2, "0")}</b><i className="t360-video-category">{video.category}</i></span>
                  <h2>{video.title}</h2>
                  <small><VolumeX size={13} /> Sin audio</small>
                </div>
                <button className="t360-video-expand" onClick={() => setSelectedVideo(video)} aria-label={`Ampliar ${video.title}`} title="Ampliar video"><Maximize2 size={18} /><span>Ampliar</span></button>
              </div>
            </article>
          ))}
        </section>
      </section>

      <section id="contacto" className="contact-section t360-contact-section">
        <div className="contact-photo" />
        <div className="contact-overlay" />
        <div className="container contact-wrap t360-contact-wrap">
          <div className="contact-card">
              <div className="contact-top">
                <div><span className="eyebrow">Nuestro contacto</span><h2>Hablemos de <em>tu próximo espacio.</em></h2></div>
                <div className="direct-contact"><span>WhatsApp directo</span><a href="https://wa.me/51935853774">935 853 774</a><small>Horario: 8:00 — 20:00</small></div>
            </div>
            <div className="contact-grid">
              <form onSubmit={handleSubmit}>
                {sent ? <div className="success-message"><span><Check size={22} /></span><h3>Consulta lista para enviar.</h3><p>Abrimos WhatsApp con la información de tu proyecto.</p><button type="button" onClick={() => setSent(false)}>Enviar otra consulta</button></div> : <>
                  <div className="form-row"><label>Nombre<input name="nombre" required placeholder="Tu nombre" /></label><label>Teléfono<input name="telefono" required type="tel" placeholder="935 853 774" /></label></div>
                  <div className="form-row"><label>Email<input name="email" required type="email" placeholder="tu@email.com" /></label><label>¿Dónde estás?<input name="ubicacion" placeholder="Ciudad o localidad" /></label></div>
                  <label>Cuéntanos tu proyecto<textarea name="proyecto" required rows={3} placeholder="¿Qué espacio quieres transformar?" /></label>
                  <button className="button button-dark" type="submit">Enviar consulta <Send size={16} /></button>
                </>}
              </form>
              <div className="contact-details"><div><MapPin size={19} /><span><strong>Dirección</strong><br />Ampliación Sector 8, Mz. A2, Lote 24<br />Parque Industrial, Villa El Salvador</span></div><div><Clock3 size={19} /><span><strong>Horario</strong><br />8:00 — 20:00</span></div><div><Mail size={19} /><span><strong>Email</strong><br />techodemadera15@gmail.com</span></div><div><Phone size={19} /><span><strong>WhatsApp</strong><br />935 853 774</span></div></div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="subpage-legal"><span>© 2026 Pérgolas Techos Imperial</span><span>Todos los derechos reservados.</span></footer>

      <a className="t360-whatsapp" href="https://wa.me/51935853774" target="_blank" rel="noreferrer" aria-label="Escríbenos por WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.03 3A12.97 12.97 0 0 0 5.08 22l-1.47 6.35 6.5-1.42A12.98 12.98 0 1 0 16.03 3Zm0 23.57c-2.11 0-4.18-.57-5.98-1.64l-.43-.25-3.86.84.87-3.76-.28-.45a10.55 10.55 0 1 1 9.68 5.26Zm5.78-7.9c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.31-.81 1.03-1 1.24-.18.21-.36.24-.68.08-.32-.16-1.34-.49-2.56-1.56-.95-.84-1.6-1.88-1.79-2.2-.19-.31-.02-.48.14-.64.14-.14.32-.37.47-.55.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.37 4.76.75.32 1.34.51 1.8.65.76.24 1.45.2 2 .12.61-.09 1.87-.76 2.14-1.5.26-.73.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" /></svg>
        <span>¿Hablamos?</span>
      </a>

      {selectedVideo && <div className="t360-video-modal" role="dialog" aria-modal="true" aria-label={`Video ampliado: ${selectedVideo.title}`}>
        <div className="t360-video-modal-panel">
          <button className="t360-video-modal-close" onClick={() => setSelectedVideo(null)} aria-label="Cerrar video"><X size={20} /></button>
          <video autoPlay loop playsInline controls controlsList="nodownload noplaybackrate" disablePictureInPicture onContextMenu={preventVideoMenu} poster={selectedVideo.poster}>
            <source src={selectedVideo.audioSrc ?? selectedVideo.src} type="video/mp4" />
          </video>
          <div><span>{selectedVideo.category}</span><h2>{selectedVideo.title}</h2><p>{selectedVideo.text}</p><p className="t360-modal-benefit"><strong>Ventaja:</strong> {selectedVideo.benefit}</p></div>
        </div>
      </div>}
    </div>
  );
}
