/* SEO style: títulos específicos por experiencia, con lenguaje comercial local sobrio y sin sobreoptimización. */
import { useEffect } from "react";
import { useLocation } from "wouter";

const seoByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Pérgolas a medida y techos sol y sombra en Lima | Techos Imperial",
    description: "Diseño, fabricación e instalación de pérgolas de aluminio a medida y techos sol y sombra en Lima. Atención desde Villa El Salvador.",
  },
  "/terraza-360": {
    title: "Pérgola 360 en Lima | Videos de pérgolas a medida",
    description: "Explora Pérgola 360: recorridos en video de pérgolas a medida, lamas, iluminación y detalles de instalación en Lima.",
  },
  "/galeria": {
    title: "Galería de pérgolas de aluminio en Lima | Techos Imperial",
    description: "Fotos de pérgolas de aluminio, lamas, iluminación y techos sol y sombra para terrazas, jardines y espacios exteriores en Lima.",
  },
};

function setMeta(selector: string, attribute: "name" | "property", value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector.match(/="([^"]+)"/)?.[1] ?? "");
    document.head.appendChild(element);
  }
  element.content = value;
}

export default function SeoMeta() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = seoByPath[location] ?? seoByPath["/"];
    document.title = meta.title;
    setMeta('meta[name="description"]', "name", meta.description);
    setMeta('meta[property="og:title"]', "property", meta.title);
    setMeta('meta[property="og:description"]', "property", meta.description);
  }, [location]);

  return null;
}
