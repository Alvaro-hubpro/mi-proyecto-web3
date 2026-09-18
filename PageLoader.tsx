/* UI style: pantalla de carga sobria con grafito, dorado imperial y motivo de tres lamas. */
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 720);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-label="Cargando Pérgolas Techos Imperial">
      <div className="page-loader-mark" aria-hidden="true"><i /><i /><i /></div>
      <strong>Pérgolas<br />Techos Imperial</strong>
      <span>Preparando tu próximo espacio</span>
      <div className="page-loader-track"><i /></div>
    </div>
  );
}
