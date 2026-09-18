/**
 * Glow UI mineral: tipografía bold, iluminación blanca sobre pizarra,
 * experiencias destacadas de Terraza 360 y Galería, e imágenes arquitectónicas inmersivas.
 */
import { useEffect, useRef, useState, type FormEvent, type ReactNode, type SVGProps } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Maximize2,
  Phone,
  Plus,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const heroSlides = [
  {
    image: "/manus-storage/hero-pergola-aluminio-tacto-madera_fa5ef5f4.jpg",
    alt: "Pérgola bioclimática de aluminio tacto madera con lamas modulares, mobiliario exterior y luz cálida de atardecer",
    note: "Textura que transforma el exterior",
  },
  {
    image: "/manus-storage/hero-pasillo-pergola_669a1edf.png",
    alt: "Pérgola lineal de aluminio para terraza exterior instalada a medida",
    note: "Líneas que guían el exterior",
  },
  {
    image: "/manus-storage/hero-terraza-estructura_68fbf5f3.png",
    alt: "Terraza residencial con pérgola de aluminio tacto madera y techo sol y sombra",
    note: "Estructura a medida",
  },
  {
    image: "/manus-storage/hero-cielo-lamas_56233d2f.png",
    alt: "Detalle de lamas orientables para pérgola moderna de terraza",
    note: "Diseño que mira al cielo",
  },
  {
    image: "/manus-storage/hero-nocturno_f8c16a52.png",
    alt: "Pérgola moderna con iluminación integrada para terraza en Lima",
    note: "Luz para prolongar la noche",
  },
];

const WHATSAPP_NUMBER = "51935853774";

const featureSlides = [
  {
    image: "/manus-storage/detalle-lamas_35fff545.png",
    label: "Acabado tacto madera",
    detail: "La calidez visual de la madera, sin sus cuidados.",
    number: "01",
  },
  {
    image: "/manus-storage/detalle-cubierta_73255c71.png",
    label: "Lamas orientables",
    detail: "Controla la luz y la ventilación con un gesto.",
    number: "02",
  },
  {
    image: "/manus-storage/detalle-material_5e4f963c.png",
    label: "Resistencia total",
    detail: "Aluminio tratado para acompañarte durante años.",
    number: "03",
  },
  {
    image: "/manus-storage/detalle-plafon_44d482a9.png",
    label: "Luz integrada",
    detail: "Una atmósfera especial cuando cae el sol.",
    number: "04",
  },
];

const processSlides = [
  {
    image: "/manus-storage/hero-patio-habitado_950b2ed4.png",
    step: "01",
    title: "Asesoría que inspira",
    text: "Escuchamos tu idea y la convertimos en un espacio que se siente tuyo.",
  },
  {
    image: "/manus-storage/detalle-cubierta_73255c71.png",
    step: "02",
    title: "Medición precisa",
    text: "Visitamos el lugar para estudiar cada ángulo, luz y proporción.",
  },
  {
    image: "/manus-storage/detalle-material_5e4f963c.png",
    step: "03",
    title: "Fabricación a medida",
    text: "Cada perfil nace con nuestro acabado tacto madera de alta fidelidad.",
  },
  {
    image: "/manus-storage/proceso-instalacion_5cdf095f.png",
    step: "04",
    title: "Instalación impecable",
    text: "Un equipo experto deja tu pérgola lista para disfrutarla desde el primer día.",
  },
];

const projects = [
  { image: "/manus-storage/proyecto-piscina_ccbfb7db.png", title: "Terraza junto a la piscina", location: "Proyecto residencial · 32 m²" },
  { image: "/manus-storage/proyecto-nocturno_118a759e.png", title: "Galería nocturna", location: "Proyecto residencial · 28 m²" },
  { image: "/manus-storage/pasted_file_MPy05B_WhatsAppImage2026-09-18at9.36.00AM(2)_bf965520.jpeg", title: "Patio de lamas y luz", location: "Proyecto residencial · 36 m²" },
  { image: "/manus-storage/proyecto-rooftop_2d16932f.png", title: "Rooftop panorámico", location: "Terraza urbana · 25 m²" },
  { image: "/manus-storage/proyecto-terraza_db298a7f.png", title: "Terraza contemporánea", location: "Proyecto residencial · 40 m²" },
  { image: "/manus-storage/hero-patio-habitado_950b2ed4.png", title: "Patio habitado", location: "Proyecto residencial · 30 m²" },
  { image: "/manus-storage/hero-jardin_5e4e43fd.png", title: "Jardín social", location: "Proyecto exterior · 38 m²" },
  { image: "/manus-storage/hero-terraza-estructura_68fbf5f3.png", title: "Pérgola estructural", location: "Proyecto exterior · Instalación a medida" },
];

const processGallery = [
  { image: "/manus-storage/hero-patio-habitado_950b2ed4.png", label: "Lectura del espacio" },
  { image: "/manus-storage/detalle-lamas_35fff545.png", label: "Definición de lamas" },
  { image: "/manus-storage/detalle-cubierta_73255c71.png", label: "Medición de cubierta" },
  { image: "/manus-storage/detalle-material_5e4f963c.png", label: "Selección de acabado" },
  { image: "/manus-storage/detalle-plafon_44d482a9.png", label: "Fabricación de plafón" },
  { image: "/manus-storage/proceso-instalacion_5cdf095f.png", label: "Instalación técnica" },
  { image: "/manus-storage/proyecto-terraza_db298a7f.png", label: "Ajuste de estructura" },
];

const faqItems = [
  { question: "¿Qué diferencia hay entre una pérgola básica y una premium?", answer: "La premium combina perfiles de mayor resistencia, un acabado tacto madera fotorrealista y mecanismos pensados para durar. El resultado se siente más sólido, elegante y estable durante todo el año." },
  { question: "¿El acabado tacto madera necesita mantenimiento?", answer: "No. El aluminio no se pudre, no se agrieta y mantiene su color sin barnices ni tratamientos periódicos. Solo necesita una limpieza suave de vez en cuando." },
  { question: "¿Podéis adaptar la pérgola a cualquier espacio?", answer: "Sí. Cada proyecto se diseña a medida teniendo en cuenta las dimensiones, orientación, arquitectura y forma de vida de cada cliente." },
  { question: "¿Cuánto dura el proceso de instalación?", answer: "Después de validar el diseño, coordinamos la instalación para que sea rápida y limpia. El tiempo exacto depende del tamaño y las características del proyecto." },
];

function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-in ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function BrandMark() {
  return <img className="brand-mark" src="/manus-storage/pergolas-brand-mark_27609de6.png" alt="Símbolo Pérgolas Techos Imperial" />;
}

function WhatsAppMark({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.51 0 .17 5.34.17 11.91c0 2.1.55 4.15 1.59 5.96L.07 24l6.28-1.65a11.9 11.9 0 0 0 5.71 1.45h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.46-8.41ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.89 9.89 0 0 1-1.52-5.27c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89Zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.94 8.94 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>;
}

function HeroImage({ active }: { active: number }) {
  return (
    <div className="hero-carousel" aria-label="Carrusel de cinco imágenes de pérgolas de aluminio premium">
      {heroSlides.map((slide, index) => <img key={slide.image} className={`hero-slide ${index === active ? "is-active" : ""}`} src={slide.image} alt={slide.alt} loading={index === 0 ? "eager" : "lazy"} />)}
      <div className="hero-overlay" />
    </div>
  );
}

type FeatureSlide = (typeof featureSlides)[number];
type ProcessSlide = (typeof processSlides)[number];

function AutoSlider({ slides, kind }: { slides: FeatureSlide[] | ProcessSlide[]; kind: "feature" | "process" }) {
  const [active, setActive] = useState(0);
  const { ref, visible } = useInView<HTMLDivElement>();
  const slide = slides[active];
  const isProcess = "step" in slide;

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 4800);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div ref={ref} className={`auto-slider ${kind}-slider fade-in ${visible ? "is-visible" : ""}`}>
      <div className="slider-image-wrap">
        {slides.map((item, index) => (
          <img key={item.image} className={`slider-image ${index === active ? "is-active" : ""}`} src={item.image} alt={"step" in item ? item.title : item.label} loading="lazy" />
        ))}
        <span className="slider-index">{String(active + 1).padStart(2, "0")} <i /> {String(slides.length).padStart(2, "0")}</span>
      </div>
      <div className="slider-copy">
        <span className="eyebrow">{isProcess ? `Paso ${slide.step}` : "Detalle que importa"}</span>
        <h3>{isProcess ? slide.title : slide.label}</h3>
        <p>{isProcess ? slide.text : slide.detail}</p>
        <div className="slider-dots" aria-label="Seleccionar detalle">
          {slides.map((item, index) => <button key={item.image} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Ver ${index + 1}`} />)}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectPage, setProjectPage] = useState(0);
  const [processPage, setProcessPage] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [contactOverlayOpen, setContactOverlayOpen] = useState(false);
  const [selectedVisual, setSelectedVisual] = useState<{ image: string; title: string; meta: string } | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!contactOverlayOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactOverlayOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [contactOverlayOpen]);

  useEffect(() => {
    if (!selectedVisual) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVisual(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedVisual]);

  const closeMenu = () => setMenuOpen(false);
  const projectPages = Math.ceil(projects.length / 4);
  const visibleProjects = projects.slice(projectPage * 4, projectPage * 4 + 4);
  const changeProjectPage = (direction: number) => setProjectPage((current) => (current + direction + projectPages) % projectPages);
  const processPages = Math.ceil(processGallery.length / 4);
  const visibleProcessImages = processGallery.slice(processPage * 4, processPage * 4 + 4);
  const changeProcessPage = (direction: number) => setProcessPage((current) => (current + direction + processPages) % processPages);
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
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${headerCollapsed ? "is-collapsed" : ""}`}>
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <BrandMark />
          <span className="brand-name">Pérgolas <em>Techos Imperial</em></span>
        </a>
        <button className="contact-menu-trigger section-menu-trigger" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="navegacion-principal" aria-label={menuOpen ? "Cerrar secciones" : "Abrir secciones"}>
          <span /><span /><span />
        </button>
        <nav id="navegacion-principal" className={menuOpen ? "is-open" : ""} aria-label="Navegación principal">
          <a href="#inicio" className="mobile-home-link" onClick={closeMenu}>Inicio</a>
          <a href="/terraza-360" className="t360-nav-priority" onClick={closeMenu}>Pérgola 360</a>
          <a href="/galeria" className="gallery-nav-priority" onClick={closeMenu}>Galería</a>
          <a href="#filosofia" onClick={closeMenu}>Filosofía</a>
          <a href="#caracteristicas" onClick={closeMenu}>Características</a>
          <a href="#proceso" onClick={closeMenu}>Proceso</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#contacto" className="nav-cta" onClick={closeMenu}>Contacto <ArrowDown size={14} /></a>
        </nav>
        <button className="header-collapse-toggle" onClick={() => setHeaderCollapsed((collapsed) => !collapsed)} aria-label={headerCollapsed ? "Mostrar cabecera y navegación" : "Ocultar cabecera"} title={headerCollapsed ? "Mostrar cabecera" : "Ocultar cabecera"}>
          {headerCollapsed ? <ChevronDown size={16} /> : <ChevronDown size={16} className="is-open" />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero glow-section">
          <HeroImage active={heroSlide} />
          <div className="hero-light" />
          <div key={`hero-copy-${heroSlide}`} className="hero-content hero-enter">
            <span className="hero-kicker"><i /> Pérgolas de aluminio · tacto madera</span>
            <h1>La calidez de la madera. <em>La precisión del aluminio.</em></h1>
            <p>Diseñamos, fabricamos e instalamos pérgolas de aluminio a medida y techos sol y sombra en Lima. Una nueva forma de vivir tu terraza o jardín con la calidez de lo natural.</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contacto">Cuéntanos tu idea <ArrowDown size={17} /></a>
              <a className="text-link" href="#proyectos">Ver proyectos <ArrowRight size={17} /></a>
            </div>
            <div className="hero-trust" aria-label="Beneficios principales">
              <span><Phone size={15} /> Atención directa</span>
              <span><ShieldCheck size={15} /> Garantía de 10 años</span>
              <span><Ruler size={15} /> 100% a medida</span>
            </div>
          </div>
          <a className="scroll-cue" href="#filosofia"><span>Explora el exterior</span><ArrowDown size={16} /></a>
        </section>

        <section id="filosofia" className="story-section mineral-surface">
          <div className="section-rail" />
          <div className="container story-layout">
            <FadeIn><div className="section-label"><span>01</span> Una nueva perspectiva</div></FadeIn>
            <div className="story-copy">
              <FadeIn><h2>Diseñamos sombra.<br /><em>Diseñamos momentos.</em></h2></FadeIn>
              <FadeIn delay={110}><div className="story-text"><p className="lead">Tu terraza puede ser mucho más que un espacio exterior. Puede ser esa habitación que respira, se abre al cielo y te invita a quedarte.</p><p>Creemos en una arquitectura que no compite con el paisaje, sino que lo enmarca. Por eso creamos estructuras que combinan la precisión del aluminio con una textura que se siente auténtica.</p></div></FadeIn>
            </div>
            <FadeIn delay={180} className="material-strip"><div className="material-line" /><p><strong>Aluminio de alto desempeño.</strong> Calidez que permanece.</p></FadeIn>
            <FadeIn delay={240} className="story-visual"><div className="story-image-frame"><img src="/manus-storage/hero-jardin_5e4e43fd.png" alt="Pérgola terminada en un jardín exterior" loading="lazy" /><span>Exterior diseñado / 02</span></div><div className="story-statement"><p>Una estructura precisa no tapa el paisaje. <strong>Le da una razón para quedarse.</strong></p><small>Aluminio, luz y sombra pensados como una sola experiencia.</small></div></FadeIn>
          </div>
        </section>

        <section id="caracteristicas" className="feature-section glow-section">
          <div className="section-aura" />
          <div className="container">
            <FadeIn><div className="section-heading split-heading glow-target"><div><span className="eyebrow">Características y mejoras</span><h2>Ingeniería visible en <em>cada detalle.</em></h2></div><p>Aluminio premium, lamas orientables y acabados diseñados para el sol, el clima y las horas vividas al exterior.</p></div></FadeIn>
            <AutoSlider slides={featureSlides} kind="feature" />
            <FadeIn delay={120}><div className="feature-notes glow-card feature-rail"><div><Sparkles size={20} /><strong>Acabado realista</strong><span>Textura y color que no pierden su carácter.</span></div><div><Sun size={20} /><strong>Confort todo el año</strong><span>Regula la luz, el aire y tu temperatura.</span></div><div><ShieldCheck size={20} /><strong>Cero mantenimiento</strong><span>No se pudre, no se agrieta, no se decolora.</span></div><div><Ruler size={20} /><strong>Hecha para ti</strong><span>Cada proyecto se adapta a tu espacio.</span></div></div></FadeIn>
          </div>
        </section>

        <section id="comparacion" className="comparison-section mineral-surface material-catalog">
          <div className="container">
            <FadeIn><div className="section-heading centered-heading"><span className="eyebrow">Catálogo de aluminio</span><h2><em>Aluminio premium</em> vs. estándar.</h2><p>Dos acabados de aluminio visibles para comparar textura, acabado y comportamiento antes de elegir.</p></div></FadeIn>
            <div className="comparison-grid">
              <FadeIn><article className="comparison-card premium"><div className="material-swatch"><img src="/manus-storage/aluminio-premium-cepillado_16795473.jpg" alt="Textura de aluminio premium cepillado de alta gama" loading="eager" /><span>Imagen / aluminio premium cepillado</span></div><div className="comparison-content"><span>Aluminio premium</span><h3>Cepillado</h3><p>Un acabado de alta gama que expresa precisión, luminosidad y resistencia a largo plazo.</p><ul><li><Check size={15} /> Brillo cepillado de alta definición</li><li><Check size={15} /> Mejor respuesta ante sol y humedad</li><li><Check size={15} /> Mantenimiento prácticamente nulo</li><li><Check size={15} /> Materialidad premium y duradera</li></ul></div></article></FadeIn>
              <FadeIn delay={120}><article className="comparison-card basic"><div className="material-swatch"><img src="/manus-storage/aluminio-estandar-textura_1bee65b8.jpg" alt="Perfil y textura de aluminio estándar" loading="eager" /><span>Imagen / aluminio estándar</span></div><div className="comparison-content"><span>Aluminio estándar</span><h3>Funcional</h3><p>Una solución funcional de acabado plano, pensada para cubrir lo esencial.</p><ul><li><X size={15} /> Textura uniforme sin profundidad</li><li><X size={15} /> Protección superficial limitada</li><li><X size={15} /> Requiere cuidado periódico</li><li><X size={15} /> Menor presencia arquitectónica</li></ul></div></article></FadeIn>
            </div>
            <FadeIn delay={180}><figure className="aluminum-demo"><div className="aluminum-demo-copy"><span>Demostración real</span><h3>Aluminio premium y estándar, <em>en detalle.</em></h3></div><div className="aluminum-demo-frame"><video controls playsInline preload="metadata" controlsList="nodownload noplaybackrate" disablePictureInPicture aria-label="Demostración de aluminio premium y estándar"><source src="/manus-storage/demostracion-aluminio-estandar-premium_05323e9c.mp4" type="video/mp4" /></video></div><figcaption>Observa el acabado, la textura y la presencia de cada opción antes de elegir.</figcaption></figure></FadeIn>
          </div>
        </section>

        <section id="proceso" className="process-section glow-section">
          <div className="section-aura section-aura-right" />
          <div className="container">
            <FadeIn><div className="section-heading split-heading glow-target"><div><span className="eyebrow">Nuestro proceso</span><h2>De la idea a la <em>sombra perfecta.</em></h2></div><p>Un proceso claro, cercano y sin sorpresas. Tu proyecto, cuidado de principio a fin.</p></div></FadeIn>
            <FadeIn delay={90}><div className="process-gallery" aria-live="polite">{visibleProcessImages.map((item, index) => <article key={`${processPage}-${item.image}`} className="process-gallery-card" style={{ animationDelay: `${index * 70}ms` }} role="button" tabIndex={0} onClick={() => setSelectedVisual({ image: item.image, title: item.label, meta: "Nuestro proceso" })} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedVisual({ image: item.image, title: item.label, meta: "Nuestro proceso" }); } }} aria-label={`Ampliar ${item.label}`}><img src={item.image} alt={item.label} loading="lazy" /><div className="process-gallery-shade" /><div className="process-gallery-caption"><span>{String(processPage * 4 + index + 1).padStart(2, "0")}</span><strong>{item.label}</strong></div><span className="process-gallery-expand" aria-hidden="true"><Maximize2 size={18} /></span></article>)}</div><div className="process-gallery-footer"><p><strong>Siete escenas reales.</strong> Cuatro momentos visibles en cada recorrido.</p><div className="process-gallery-controls"><button onClick={() => changeProcessPage(-1)} aria-label="Ver cuatro escenas anteriores"><ArrowLeft size={18} /></button><span>{String(processPage + 1).padStart(2, "0")} <i /> {String(processPages).padStart(2, "0")}</span><button onClick={() => changeProcessPage(1)} aria-label="Ver cuatro escenas siguientes"><ArrowRight size={18} /></button></div></div></FadeIn>
          </div>
        </section>

        <section id="proyectos" className="projects-section glow-section">
          <div className="section-aura section-aura-right" />
          <div className="container">
            <FadeIn><div className="section-heading project-heading"><div><span className="eyebrow">Nuestros proyectos</span><h2>Espacios que <em>dejan huella.</em></h2></div><p>Siete instalaciones reales, reunidas en recorridos visuales para mirar cada detalle con calma.</p></div></FadeIn>
            <FadeIn delay={120}><div className={`process-gallery project-gallery ${visibleProjects.length === 3 ? "has-three" : ""}`} aria-live="polite">{visibleProjects.map((project, index) => <article key={`${projectPage}-${project.image}`} className="process-gallery-card project-gallery-card" style={{ animationDelay: `${index * 70}ms` }} role="button" tabIndex={0} onClick={() => setSelectedVisual({ image: project.image, title: project.title, meta: project.location })} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedVisual({ image: project.image, title: project.title, meta: project.location }); } }} aria-label={`Ampliar ${project.title}`}><img src={project.image} alt={project.title} loading="lazy" /><div className="process-gallery-shade" /><div className="process-gallery-caption"><span>Proyecto {String(projectPage * 4 + index + 1).padStart(2, "0")}</span><strong>{project.title}</strong><small>{project.location}</small></div><span className="process-gallery-expand" aria-hidden="true"><Maximize2 size={18} /></span></article>)}</div><div className="process-gallery-footer project-gallery-footer"><p><strong>Siete proyectos reales.</strong> Cuatro instalaciones visibles en cada recorrido.</p><div className="process-gallery-controls"><button onClick={() => changeProjectPage(-1)} aria-label="Ver proyectos anteriores"><ArrowLeft size={18} /></button><span>{String(projectPage + 1).padStart(2, "0")} <i /> {String(projectPages).padStart(2, "0")}</span><button onClick={() => changeProjectPage(1)} aria-label="Ver proyectos siguientes"><ArrowRight size={18} /></button></div></div></FadeIn>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-layout">
            <FadeIn><div className="faq-heading"><h2>Preguntas <em>frecuentes.</em></h2><p>Todo lo necesario para imaginar tu próximo espacio con tranquilidad.</p></div></FadeIn>
            <FadeIn delay={80}><div className="faq-list">{faqItems.map((item, index) => <article key={item.question} className={`faq-item ${openFaq === index ? "is-open" : ""}`}><button onClick={() => setOpenFaq((current) => current === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong>{openFaq === index ? <X size={19} /> : <Plus size={20} />}</button><div className="faq-answer"><p>{item.answer}</p></div></article>)}</div></FadeIn>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-photo" />
          <div className="contact-overlay" />
          <div className="container contact-wrap">
            <FadeIn><div className="contact-card">
              <div className="contact-top"><div><span className="eyebrow">Nuestro contacto</span><h2>Hablemos de <em>tu próximo espacio.</em></h2></div><div className="direct-contact"><span>WhatsApp directo</span><a href="https://wa.me/51935853774">935 853 774</a><small>Horario: 8:00 — 20:00</small></div></div>
              <div className="contact-grid">
                <form onSubmit={handleSubmit}>{sent ? <div className="success-message"><span><Check size={22} /></span><h3>Consulta lista para enviar.</h3><p>Abrimos WhatsApp con la información de tu proyecto.</p><button type="button" onClick={() => setSent(false)}>Enviar otra consulta <ChevronRight size={16} /></button></div> : <><div className="form-row"><label>Nombre<input name="nombre" required placeholder="Tu nombre" /></label><label>Teléfono<input name="telefono" required type="tel" placeholder="935 853 774" /></label></div><div className="form-row"><label>Email<input name="email" required type="email" placeholder="tu@email.com" /></label><label>¿Dónde estás?<input name="ubicacion" placeholder="Ciudad o localidad" /></label></div><label>Cuéntanos tu proyecto<textarea name="proyecto" required rows={3} placeholder="¿Qué espacio quieres transformar?" /></label><button className="button button-dark" type="submit">Enviar por WhatsApp <Send size={16} /></button></>}</form>
                <div className="contact-details"><div><MapPin size={19} /><span><strong>Dirección</strong><br />Ampliación Sector 8, Mz. A2, Lote 24<br />Parque Industrial, Villa El Salvador</span></div><div><Clock3 size={19} /><span><strong>Horario</strong><br />8:00 — 20:00</span></div><div><Mail size={19} /><span><strong>Email</strong><br />techodemadera15@gmail.com</span></div><div><Phone size={19} /><span><strong>WhatsApp</strong><br />935 853 774</span></div></div>
              </div>
            </div></FadeIn>
          </div>
        </section>
      </main>

      {selectedVisual ? <div className="home-visual-lightbox" role="dialog" aria-modal="true" aria-label={`Imagen ampliada: ${selectedVisual.title}`} onClick={() => setSelectedVisual(null)}><figure className="home-visual-lightbox-frame" onClick={(event) => event.stopPropagation()}><button className="home-visual-lightbox-close" onClick={() => setSelectedVisual(null)} aria-label="Cerrar imagen ampliada"><X size={21} /></button><img src={selectedVisual.image} alt={selectedVisual.title} /><figcaption><span>{selectedVisual.meta}</span><h2>{selectedVisual.title}</h2><p>Selecciona otra imagen de la galería para continuar explorando.</p></figcaption></figure></div> : null}

      <section id="contacto-inmersivo" className={`contact-overlay-screen ${contactOverlayOpen ? "is-open" : ""}`} aria-hidden={!contactOverlayOpen}>
        <div className="contact-overlay-shade" />
        <div className="contact-overlay-panel" role="dialog" aria-modal="true" aria-labelledby="contacto-inmersivo-titulo">
          <button className="contact-overlay-close" onClick={() => setContactOverlayOpen(false)} aria-label="Cerrar contacto"><X size={24} /></button>
          <div className="overlay-brandline"><BrandMark /><span>Contacto directo · Pérgolas Techos Imperial</span></div>
          <div className="overlay-copy"><span className="eyebrow">Tu próximo espacio empieza aquí</span><h2 id="contacto-inmersivo-titulo">Hablemos de una <em>sombra superior.</em></h2><p>Cuéntanos las dimensiones, la luz y el momento que quieres habitar. Te ayudamos a convertirlo en una solución de aluminio a medida.</p></div>
          <form className="overlay-form" onSubmit={handleSubmit}>
            {sent ? <div className="overlay-success"><Check size={28} /><h3>Consulta lista para enviar.</h3><p>Abrimos WhatsApp con la información de tu proyecto.</p><button type="button" onClick={() => setSent(false)}>Enviar otra consulta <ChevronRight size={16} /></button></div> : <><div className="overlay-form-row"><label>Nombre<input name="nombre" required placeholder="Tu nombre" /></label><label>Teléfono<input name="telefono" required type="tel" placeholder="935 853 774" /></label></div><div className="overlay-form-row"><label>Email<input name="email" required type="email" placeholder="tu@email.com" /></label><label>Ciudad<input name="ubicacion" placeholder="Ciudad o localidad" /></label></div><label>Tu proyecto<textarea name="proyecto" required rows={4} placeholder="Cuéntanos qué espacio quieres transformar." /></label><button className="button button-gold" type="submit">Enviar por WhatsApp <Send size={17} /></button></>}
          </form>
          <div className="overlay-meta"><a href="https://wa.me/51935853774"><WhatsAppMark size={17} /> WhatsApp 935 853 774</a><span><Clock3 size={17} /> Horario · 8:00 — 20:00</span></div>
        </div>
      </section>

      <footer><div className="container footer-inner"><a href="#inicio" className="brand"><BrandMark /><span className="brand-name">Pérgolas <em>Techos Imperial</em></span></a><span>La arquitectura de vivir fuera.</span><div><a href="#inicio">Volver arriba <ArrowDown size={14} className="arrow-up" /></a><a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={18} /></a></div></div><div className="footer-legal"><div className="container"><span>© 2026 Pérgolas Techos Imperial</span><span>Todos los derechos reservados.</span></div></div></footer>
      <a className="whatsapp" href="https://wa.me/51935853774" aria-label="Contactar por WhatsApp"><WhatsAppMark size={25} /><span>¿Hablamos?</span></a>
    </div>
  );
}
