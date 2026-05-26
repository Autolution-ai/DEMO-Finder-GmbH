import { Wrench, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-white/70">
      <div className="container-tight grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-copper">
              <Wrench size={18} strokeWidth={2.5} />
            </span>
            <span>Finder GmbH</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            SHK-Betrieb für Berlin & Brandenburg. Kundendienst, Wartung, Service.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 flex-none text-copper" />
            <span>Greifswalder Str. 23<br />10405 Berlin</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="flex-none text-copper" />
            <a href="tel:+493070073555" className="hover:text-white">030 70073555</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="flex-none text-copper" />
            <a href="mailto:info@finder-gmbh.info" className="hover:text-white">info@finder-gmbh.info</a>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-semibold text-white">Rechtliches</div>
          <ul className="space-y-1">
            <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
            <li><a href="https://www.finder-gmbh.com" className="hover:text-white" rel="noopener">Zur Hauptseite</a></li>
          </ul>
        </div>
      </div>

      <div className="container-tight mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Finder GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
