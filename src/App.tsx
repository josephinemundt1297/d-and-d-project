import { LandingSection } from "./components/organisms/LandingSection";
import { Navigation } from "./components/organisms/Navigation";
import { CharacterSection } from "./features/characters/CharacterSection";

function App() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <LandingSection />

        <CharacterSection />

        <section id="world" aria-labelledby="world-heading" className="py-16">
          <div className="container mx-auto px-4 md:px-10">
            <h2
              id="world-heading"
              className="text-4xl md:text-5xl mt-2.5 font-bold text-center text-secondary tracking-tighter"
            >
              Die Welt von Rinaboth
            </h2>
            <div
              className="divider w-55 mb-16 divider-primary mx-auto"
              aria-hidden="true"
            ></div>
            <figure className="flex items-center justify-center mb-10">
              <img
                src="./assets/rinaboth.webp"
                alt="Geografische Karte der Welt Rinaboth"
                className="rounded-3xl shadow-lg w-full md:w-3/4"
              />
            </figure>
            <div className="text-lg max-w-3xl mx-auto mb-16 space-y-4">
              <p>
                Einst war Rinaboth ein Reich der Harmonie, dessen Name die
                Einheit von Mensch (Rina – Fluss) und Zwerg (Both – Stein)
                besiegelte. Doch vor 250 Jahren versiegte die königliche
                Blutlinie in einer Tragödie, die das Land in achtzig Jahre
                blutiger Erbfolgekriege stürzte.
              </p>
              <p>
                <strong>Die Ära der Sieben Lords:</strong> Seit 120 Jahren
                herrscht ein brüchiger Frieden. Sieben Lords teilen das Land
                unter sich auf. Während an der Oberfläche Turniere und
                "Gentleman-Duelle" das Volk unterhalten, tobt im Schatten ein
                unerbittlicher Kampf um Steuern, Macht und Territorium.
              </p>
              <p>
                <strong>Das Schicksal der einfachen Leute:</strong> Für die
                Bewohner von Rinaboth sind politische Wechsel Alltag geworden.
                Man wettet auf den nächsten Lord, während man die Last der
                Steuern trägt. Doch nun droht eine Gefahr, die kein politisches
                Ränkespiel lösen kann: Die flammenden Hügel beben, und die
                "Flüsse aus Stein" fordern ihren Tribut.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="text-center mb-3">
                <h3 className="text-3xl text-center text-secondary font-semibold tracking-wide">
                  Die sieben Städte und deren Lords
                </h3>
                <div
                  className="divider w-55 divider-primary mt-2 mx-auto"
                  aria-hidden="true"
                ></div>
              </div>
              <ul className="list-disc list-inside md:w-max md:mx-auto mb-10 text-lg space-y-2">
                <li>
                  <strong>West Farthing</strong> – Lord Earnest Hellingway –
                  „Das goldene Herz des Westmeeres“
                </li>
                <li>
                  <strong>King's Rest</strong> – Lord Henry Altsworth – „König
                  Heinrich“
                </li>
                <li>
                  <strong>Greenrun</strong> – Lord Tanner von Blackshire
                </li>
                <li>
                  <strong>Highfield</strong> – Acnologika
                </li>
                <li>
                  <strong>Southchapel</strong> – Erzbischof Seaward Goodwill
                </li>
                <li>
                  <strong>Flaming Hills</strong> – Lord Ghrakun Donnerspeer
                </li>
                <li>
                  <strong>Letzte Bastion</strong> – Oberkommandantin Coldara
                  Bludmore
                </li>
              </ul>
              <a
                href="https://www.worldanvil.com/w/tiangra-voltikun/a/rinaboth-location"
                aria-label="Erfahre mehr über die Welt von Rinaboth auf World Anvil"
                rel="noopener noreferrer"
                target="_blank"
                className="btn bg-amber-400 dark:btn-warning dark:text-amber-950 btn-soft btn-lg self-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Erfahre mehr
              </a>
            </div>
          </div>
        </section>

        <section
          id="history"
          aria-labelledby="history-heading"
          className="py-16 bg-base-200"
        >
          <div className="container mx-auto px-4 md:px-10">
            <h2
              id="history-heading"
              className="text-4xl md:text-5xl mt-2.5 font-bold text-center text-secondary tracking-tighter"
            >
              Die Geschichte von Rinaboth
            </h2>
            <div
              className="divider w-55 mb-16 divider-primary mx-auto"
              aria-hidden="true"
            ></div>

            <div className="text-base md:text-lg max-w-3xl mx-auto mb-16 space-y-4">
              <p>
                <strong>
                  Vor 250 Jahren: Das Ende der königlichen Blutlinie
                </strong>
                – Ein tragischer Unfall führt zum Tod des letzten Königs und
                seiner Erbin, was die Dynastie auslöscht und das Land in Chaos
                stürzt.
              </p>
              <p>
                <strong>250–170 Jahre zuvor: Die Erbfolgekriege</strong> – Ohne
                legitimen Thronfolger kämpfen rivalisierende Adelsfamilien um
                die Macht, was zu achtzig Jahren blutiger Konflikte führt.
              </p>
              <p>
                <strong>170–120 Jahre zuvor: Die Ära der Sieben Lords</strong> –
                Sieben mächtige Lords teilen Rinaboth unter sich auf, etablieren
                ein fragiles Gleichgewicht und führen das Land in eine Zeit
                relativen Friedens.
              </p>
              <p>
                <strong>120 Jahre zuvor: Aufstieg der Flammensalamander</strong>{" "}
                – Die flammenden Hügel erwachen zum Leben, und die "Flüsse aus
                Stein" beginnen, Opfer zu fordern, was die Bevölkerung in Angst
                und Schrecken versetzt.
              </p>
              <p>
                <strong>Gegenwart: Das Versiegeln der Tore</strong> – Drei
                Helden sammeln sich in den Hallen von Draken, um die Tore zu den
                flammenden Hügeln zu versiegeln und Rinaboth vor der drohenden
                Zerstörung zu retten.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="text-center mb-8">
                <h3 className="text-3xl text-center text-secondary font-semibold tracking-wide">
                  Die wichtigsten Ereignisse in Rinaboths Geschichte
                </h3>
                <div
                  className="divider w-55 divider-primary mt-2 mx-auto"
                  aria-hidden="true"
                ></div>
              </div>

              <ul
                className="timeline timeline-vertical mb-16"
                aria-label="Historische Zeitleiste"
              >
                <li>
                  <div className="timeline-start timeline-box text-lg md:text-xl">
                    Das Ende der königlichen Blutlinie
                  </div>
                  <div className="timeline-middle" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      focusable="false"
                      className="text-primary h-10 w-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr className="bg-primary" aria-hidden="true" />
                </li>
                <li>
                  <hr className="bg-primary" aria-hidden="true" />
                  <div className="timeline-middle" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      focusable="false"
                      className="text-primary h-10 w-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box text-lg md:text-xl">
                    Kampf der rivalisierenden Königreiche
                  </div>
                  <hr className="bg-primary" aria-hidden="true" />
                </li>
                <li>
                  <hr className="bg-primary" aria-hidden="true" />
                  <div className="timeline-start timeline-box text-lg md:text-xl">
                    Die Ära der sieben Lords
                  </div>
                  <div className="timeline-middle" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      focusable="false"
                      className="text-primary h-10 w-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr aria-hidden="true" />
                </li>
                <li>
                  <hr aria-hidden="true" />
                  <div className="timeline-middle" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      focusable="false"
                      className="h-10 w-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box text-lg md:text-xl">
                    Aufstieg der Flammensalamander
                  </div>
                  <hr aria-hidden="true" />
                </li>
                <li>
                  <hr aria-hidden="true" />
                  <div className="timeline-start timeline-box text-lg md:text-xl">
                    Das Versiegeln des Portals
                  </div>
                  <div className="timeline-middle" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      focusable="false"
                      className="h-10 w-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <figure className="flex items-center justify-center mb-10">
                <img
                  src="./assets/location.webp"
                  alt="Geografische Karte der Welt Rinaboth"
                  className="rounded-3xl shadow-lg w-full md:w-3/4"
                />
                <figcaption className="sr-only">
                  Karte, die zeigt, wo sich die Helden derzeit in Draken
                  befinden.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-base-300">
        <div className="container mx-auto px-4 py-8 text-center text-sm opacity-70">
          &copy; SL Voltikun / Erstellt von Josephine Mundt
        </div>
      </footer>
    </>
  );
}

export default App;
