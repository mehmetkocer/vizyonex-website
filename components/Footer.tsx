import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-text-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-text-light font-bold text-lg">V</span>
              </div>
              <h3 className="text-2xl font-bold">Vizyonex</h3>
            </div>
            <p className="text-text-light/80 leading-relaxed">
              Endüstriyel çelik konstrüksiyon ve mimari çelik projelerinde 
              uzman ekibimizle, güvenilir ve kaliteli çözümler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/vizyonex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-text-light/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 text-text-light group-hover:text-text-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/vizyonex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-text-light/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
                title="Instagram"
              >
                <svg className="w-5 h-5 text-text-light group-hover:text-text-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.99.013 6.77.072 5.55.132 4.806.333 4.17.63c-.677.32-1.25.748-1.82 1.32-.572.571-1.001 1.144-1.32 1.821-.298.636-.499 1.38-.559 2.6C.013 7.99 0 8.396 0 12.017c0 3.624.013 4.09.072 5.311.06 1.22.26 1.964.558 2.6.319.677.748 1.25 1.32 1.82.571.572 1.144 1.001 1.821 1.32.636.298 1.38.499 2.6.559 1.22.059 1.626.072 5.311.072 3.624 0 4.09-.013 5.311-.072 1.22-.06 1.964-.26 2.6-.558.677-.319 1.25-.748 1.82-1.32.572-.571 1.001-1.144 1.32-1.821.298-.636.499-1.38.559-2.6.059-1.22.072-1.626.072-5.311 0-3.624-.013-4.09-.072-5.311-.06-1.22-.26-1.964-.558-2.6-.319-.677-.748-1.25-1.32-1.82C18.566.881 17.993.452 17.316.134c-.636-.298-1.38-.499-2.6-.559C13.496.013 13.09 0 12.017 0zm0 2.16c3.554 0 3.97.014 5.378.072 1.297.059 2.003.275 2.473.456.621.242 1.064.532 1.532 1 .468.468.758.911 1 1.532.181.47.397 1.176.456 2.473.058 1.408.072 1.824.072 5.378 0 3.554-.014 3.97-.072 5.378-.059 1.297-.275 2.003-.456 2.473-.242.621-.532 1.064-1 1.532-.468.468-.911.758-1.532 1-.47.181-1.176.397-2.473.456-1.408.058-1.824.072-5.378.072-3.554 0-3.97-.014-5.378-.072-1.297-.059-2.003-.275-2.473-.456-.621-.242-1.064-.532-1.532-1-.468-.468-.758-.911-1-1.532-.181-.47-.397-1.176-.456-2.473-.058-1.408-.072-1.824-.072-5.378 0-3.554.014-3.97.072-5.378.059-1.297.275-2.003.456-2.473.242-.621.532-1.064 1-1.532.468-.468.911-.758 1.532-1 .47-.181 1.176-.397 2.473-.456 1.408-.058 1.824-.072 5.378-.072z"/>
                  <path d="M12.017 5.838c-3.403 0-6.158 2.758-6.158 6.159 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.159-6.158-6.159zm0 10.155c-2.209 0-3.997-1.789-3.997-3.996s1.788-3.996 3.997-3.996S16.014 9.788 16.014 12s-1.788 3.996-3.997 3.996zM19.846 5.595c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/+902244441234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-text-light/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 text-text-light group-hover:text-text-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-light">Hızlı Erişim</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-text-light/80 hover:text-accent transition-colors">
                Ana Sayfa
              </a>
              <a href="#vision-mission" className="block text-text-light/80 hover:text-accent transition-colors">
                Vizyon & Misyon
              </a>
              <a href="#services" className="block text-text-light/80 hover:text-accent transition-colors">
                Hizmetlerimiz
              </a>
              <a href="#showcase" className="block text-text-light/80 hover:text-accent transition-colors">
                Projelerimiz
              </a>
              <a href="#contact" className="block text-text-light/80 hover:text-accent transition-colors">
                İletişim
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-light">Hizmetlerimiz</h3>
            <nav className="space-y-2">
              <a href="#services" className="block text-text-light/80 hover:text-accent transition-colors">
                Endüstriyel Tesisler
              </a>
              <a href="#services" className="block text-text-light/80 hover:text-accent transition-colors">
                Ticari Yapılar
              </a>
              <a href="#services" className="block text-text-light/80 hover:text-accent transition-colors">
                Mimari Çelik
              </a>
              <a href="#services" className="block text-text-light/80 hover:text-accent transition-colors">
                Proje Yönetimi
              </a>
              <a href="#services" className="block text-text-light/80 hover:text-accent transition-colors">
                Teknik Danışmanlık
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-light">İletişim Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-text-light/80 text-sm">
                  <p>Organize Sanayi Bölgesi</p>
                  <p>1. Cadde No: 45/A</p>
                  <p>16140 Nilüfer / Bursa</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+902244441234" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                  +90 (224) 444 12 34
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@vizyonex.com" className="text-text-light/80 hover:text-accent transition-colors text-sm">
                  info@vizyonex.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-text-light/80 text-sm">
                  <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                  <p>Cumartesi: 09:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-text-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-text-light/80 text-sm">
                © {currentYear} Vizyonex. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-4 text-xs text-text-light/60">
                <a href="/privacy" className="hover:text-accent transition-colors">
                  Gizlilik Politikası
                </a>
                <span>|</span>
                <a href="/terms" className="hover:text-accent transition-colors">
                  Kullanım Şartları
                </a>
                <span>|</span>
                <a href="/kvkk" className="hover:text-accent transition-colors">
                  KVKK
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-xs text-text-light/60">
                Tasarım & Geliştirme: Vizyonex
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-text-light/60">Powered by</span>
                <svg className="w-4 h-4 text-text-light/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs font-medium text-text-light/80">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Badge */}
      <div className="bg-primary-dark py-2">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-text-light/50">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>ISO 9001:2015 Kalite Yönetim Sistemi Belgeli</span>
              <span className="text-accent">•</span>
              <span>TSE Hizmet Yeterlilik Belgeli</span>
              <span className="text-accent">•</span>
              <span>Çevre Dostu Üretim</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}