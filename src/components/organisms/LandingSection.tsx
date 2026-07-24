export function LandingSection() {
  return (
        <section
          id="home"
          aria-label="Startbereich"
          className="hero min-h-screen"
          style={{ backgroundImage: "url(/assets/background.webp)" }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="mb-4 text-3xl md:text-5xl text-center text-white text-shadow-black text-shadow-lg font-bold">
                Das Versiegeln der Tore: <br />
                Rinaboths letzte Hoffnung
              </h1>
              <p className="mb-4 text-lg md:text-2xl text-center text-white text-shadow-black text-shadow-sm font-semibold tracking-wide">
                In den Hallen von Draken sammeln wir unsere Kräfte. <br />
                50 Klingen und drei Helden gegen die Flut der Flammensalamander.
                <br />
                Das Portal muss fallen, bevor Rinaboth zu Asche wird.
              </p>
            </div>
          </div>
        </section>
  );
}
