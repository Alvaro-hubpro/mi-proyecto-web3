/**
 * Dirección visual: archivo editorial de proyectos, sobre base carbón y detalles dorados.
 * La retícula prioriza fotografías reales, filtros directos y navegación ampliada sin distraer del material.
 */
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowLeft, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3, Mail, MapPin, Maximize2, Phone, Send, X } from "lucide-react";
import "../gallery.css";

type GalleryCategory = "Todos" | "Aluminio" | "Estructura" | "Iluminación" | "Interiores";

const categories: GalleryCategory[] = ["Todos", "Aluminio", "Estructura", "Iluminación", "Interiores"];
const WHATSAPP_NUMBER = "51935853774";

const galleryImages = [
  { src: "/manus-storage/pasted_file_NfXGaa_image_cd1a0b27.png", title: "Sombra en fachada", category: "Aluminio" as const, text: "Pérgola de aluminio a medida para una terraza exterior." },
  { src: "/manus-storage/pasted_file_QCviZz_image_49b1303a.png", title: "Fachada a medida", category: "Estructura" as const, text: "Una cubierta lineal que acompaña la arquitectura." },
  { src: "/manus-storage/pasted_file_2ay7ft_image_cf1a6cd5.png", title: "Terraza elevada", category: "Estructura" as const, text: "Sombra y horizonte en un solo gesto." },
  { src: "/manus-storage/pasted_file_rZTrYL_image_c04e9398.png", title: "Trama de madera", category: "Estructura" as const, text: "Detalle de una retícula de vigas y lamas." },
  { src: "/manus-storage/pasted_file_aRK1yW_image_f242332d.png", title: "Luz bajo cubierta", category: "Iluminación" as const, text: "Una atmósfera interior definida por la luz." },
  { src: "/manus-storage/pasted_file_A9xbXs_image_e334b8d2.png", title: "Techo de carácter", category: "Interiores" as const, text: "Acabado cálido para espacios de trabajo." },
  { src: "/manus-storage/pasted_file_EUEANX_image_a66118e9.png", title: "Lamas en perspectiva", category: "Estructura" as const, text: "Geometría precisa vista desde el exterior." },
  { src: "/manus-storage/pasted_file_ZFn1UN_image_c9f3f611.png", title: "Vigas expuestas", category: "Interiores" as const, text: "El detalle constructivo se vuelve protagonista." },
  { src: "/manus-storage/pasted_file_WPtdzn_image_bd437c2e.png", title: "Pérgola curva", category: "Estructura" as const, text: "Una solución de lamas para una geometría singular." },
  { src: "/manus-storage/pasted_file_75F83b_image_3cad41eb.png", title: "Encuentro estructural", category: "Estructura" as const, text: "Anclajes y acabados cuidados en cada unión." },
  { src: "/manus-storage/pasted_file_Xz5uq7_image_40dada19.png", title: "Luz integrada", category: "Iluminación" as const, text: "Iluminación puntual incorporada en la madera." },
  { src: "/manus-storage/pasted_file_nB0LK1_image_226f17ec.png", title: "Viga y plafón", category: "Estructura" as const, text: "Capas de madera que construyen profundidad." },
  { src: "/manus-storage/pasted_file_l8mWLB_image_15687d49.png", title: "Noche exterior", category: "Iluminación" as const, text: "Una terraza lista para extender el día." },
  { src: "/manus-storage/pasted_file_mKRX6t_image_eea0b86d.png", title: "Pérgola en altura", category: "Estructura" as const, text: "Una cubierta que abre la vista desde el segundo nivel." },
  { src: "/manus-storage/pasted_file_c2K45O_image_a929c25e.png", title: "Lamas cálidas", category: "Estructura" as const, text: "Sombra regulada y textura natural." },
  { src: "/manus-storage/pasted_file_kcNdNW_image_7bc4a308.png", title: "Ritmo de lamas", category: "Estructura" as const, text: "Una secuencia continua de protección y ventilación." },
  { src: "/manus-storage/pasted_file_4d0Vao_image_8d5a984f.png", title: "Terraza iluminada", category: "Iluminación" as const, text: "La iluminación prolonga el uso del espacio exterior." },
  { src: "/manus-storage/pasted_file_tqozsH_image_35b10122.png", title: "Cielo interior", category: "Interiores" as const, text: "Madera, iluminación y escala para espacios habitables." },
  { src: "/manus-storage/pasted_file_KsWq7M_image_ce6f471c.png", title: "Aluminio bajo el cielo", category: "Estructura" as const, text: "Una cubierta que acompaña la terraza al aire libre." },
  { src: "/manus-storage/pasted_file_N1dKqR_image_b53b2530.png", title: "Lamas de aluminio", category: "Aluminio" as const, text: "Líneas precisas para regular luz y sombra." },
  { src: "/manus-storage/pasted_file_6SNK8z_image_bc261e1a.png", title: "Terraza protegida", category: "Aluminio" as const, text: "Aluminio pensado para disfrutar cada hora." },
  { src: "/manus-storage/pasted_file_sM9A5t_image_a1437836.png", title: "Sombra a medida", category: "Estructura" as const, text: "Una estructura limpia que completa el exterior." },
  { src: "/manus-storage/pasted_file_gOK45K_image_9be6555a.png", title: "Perfil contemporáneo", category: "Aluminio" as const, text: "Acabado y proporción para una terraza habitable." },
  { src: "/manus-storage/pasted_file_CJYUUV_image_b5664f44.png", title: "Exterior en calma", category: "Estructura" as const, text: "Una solución que ordena la vista." },
  { src: "/manus-storage/pasted_file_zRgMgd_image_2183babb.png", title: "Luz sobre lamas", category: "Estructura" as const, text: "Sombra, ventilación y luz natural en equilibrio." },
  { src: "/manus-storage/pasted_file_oYABg6_image_3185960a.png", title: "Cubierta lineal", category: "Aluminio" as const, text: "Una presencia ligera para espacios abiertos." },
  { src: "/manus-storage/pasted_file_siimZ2_image_b713f377.png", title: "Terraza de aluminio", category: "Aluminio" as const, text: "Protección solar con lectura arquitectónica." },
  { src: "/manus-storage/pasted_file_yG9TBB_image_3c0e0f7e.png", title: "Ritmo exterior", category: "Estructura" as const, text: "Un recorrido de lamas y perfiles a medida." },
  { src: "/manus-storage/pasted_file_sONrti_image_d8757940.png", title: "Sombra continua", category: "Estructura" as const, text: "Una solución para ampliar la vida al aire libre." },
  { src: "/manus-storage/galeria-cubierta-madera_78a15d10.png", title: "Cubierta cálida a medida", category: "Estructura" as const, text: "Una pérgola de lamas con acabado cálido, iluminación y estructura de gran escala." },
  { src: "/manus-storage/galeria-terraza-panoramica_dcabe089.png", title: "Terraza abierta con lamas", category: "Aluminio" as const, text: "Una cubierta elevada que regula la luz y mantiene la vista del entorno." },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const filteredImages = useMemo(() => activeCategory === "Todos" ? galleryImages : galleryImages.filter((image) => image.category === activeCategory), [activeCategory]);
  const selectedImage = selectedIndex === null ? null : filteredImages[selectedIndex];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") setSelectedIndex((current) => current === null ? null : (current - 1 + filteredImages.length) % filteredImages.length);
      if (event.key === "ArrowRight") setSelectedIndex((current) => current === null ? null : (current + 1) % filteredImages.length);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [filteredImages.length, selectedIndex]);

  const changeImage = (direction: number) => {
    setSelectedIndex((current) => current === null ? null : (current + direction + filteredImages.length) % filteredImages.length);
  };
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

  return (
    <div className="gallery-page">
      <header className={`gallery-header ${scrolled ? "is-scrolled" : ""} ${headerCollapsed ? "is-collapsed" : ""}`}>
        <a href="/" className="gallery-brand" aria-label="Volver a Pérgolas Techos Imperial">
          <img src="/manus-storage/pergolas-brand-mark_27609de6.png" alt="" />
          <span>Pérgolas<br /><strong>Techos Imperial</strong></span>
        </a>
        <nav aria-label="Navegación de experiencias">
          <a href="/terraza-360">Pérgola 360</a>
          <a href="/galeria" className="is-active">Galería</a>
          <a href="/#proyectos">Proyectos</a>
          <a href="#contacto">Cotizar</a>
        </nav>
        <a className="gallery-mobile-quote" href="#contacto">Cotizar</a>
        <a href="/" className="gallery-back"><ArrowLeft size={16} /> Volver</a>
        <button className="header-collapse-toggle" onClick={() => setHeaderCollapsed((collapsed) => !collapsed)} aria-label={headerCollapsed ? "Mostrar cabecera y navegación" : "Ocultar cabecera"} title={headerCollapsed ? "Mostrar cabecera" : "Ocultar cabecera"}>
          <ChevronDown size={16} className={headerCollapsed ? "" : "is-open"} />
        </button>
      </header>

      <main>
        <section className="gallery-hero">
          <div className="gallery-hero-copy">
            <span>Pérgolas de aluminio en Lima</span>
            <h1>La sombra de aluminio que <em>abre</em> el exterior.</h1>
            <p>Fotos de pérgolas a medida, lamas y perfiles para terrazas, jardines y espacios exteriores.</p>
          </div>
        </section>

        <section className="gallery-content" aria-label="Galería de proyectos">
          <div className="gallery-toolbar">
            <p><strong>{String(filteredImages.length).padStart(2, "0")} proyectos visuales</strong> de pérgolas de aluminio, estructura e iluminación. Selecciona una imagen para verla en detalle.</p>
            <div className="gallery-filters" role="group" aria-label="Filtrar fotografías">
              {categories.map((category) => (
                <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? "is-active" : ""} aria-pressed={activeCategory === category}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <button className={`gallery-card gallery-card-${index + 1}`} key={image.src} onClick={() => setSelectedIndex(index)} aria-label={`Ampliar ${image.title}`}>
                <img src={image.src} alt={`${image.title}: ${image.text}`} loading={index < 4 ? "eager" : "lazy"} />
                <span className="gallery-card-overlay" />
                <span className="gallery-card-meta"><small><b>{String(index + 1).padStart(2, "0")}</b>{image.category}</small><strong>{image.title}</strong></span>
                <span className="gallery-card-expand" aria-hidden="true"><Maximize2 size={18} /></span>
              </button>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section gallery-contact-section">
          <div className="contact-photo" />
          <div className="contact-overlay" />
          <div className="container contact-wrap">
            <div className="contact-card">
              <div className="contact-top">
                <div><span className="eyebrow">Contáctanos</span><h2>Hablemos de <em>tu espacio exterior.</em></h2></div>
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

      {selectedImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada: ${selectedImage.title}`}>
          <button className="gallery-lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Cerrar galería"><X size={22} /></button>
          <button className="gallery-lightbox-step is-previous" onClick={() => changeImage(-1)} aria-label="Imagen anterior"><ChevronLeft size={26} /></button>
          <figure className="gallery-lightbox-frame">
            <img src={selectedImage.src} alt={selectedImage.title} />
            <figcaption><span>{String((selectedIndex ?? 0) + 1).padStart(2, "0")} / {String(filteredImages.length).padStart(2, "0")} · {selectedImage.category}</span><h2>{selectedImage.title}</h2><p>{selectedImage.text}</p></figcaption>
          </figure>
          <button className="gallery-lightbox-step is-next" onClick={() => changeImage(1)} aria-label="Imagen siguiente"><ChevronRight size={26} /></button>
        </div>
      )}
    </div>
  );
}
