export function Navigation() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute -top-full left-0 z-50 focus:top-0 p-4 bg-primary text-primary-content rounded-br-lg"
      >
        Zum Hauptinhalt springen
      </a>

      <header className="bg-base-200/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <nav
          aria-label="Hauptnavigation"
          className="navbar container mx-auto gap-3 justify-between"
        >
          <div className="navbar-start flex-1">
            <a
              href="#"
              aria-label="Zurück zur Startseite"
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-full inline-block"
            >
              <img
                src="assets/d20.ico"
                alt=""
                aria-hidden="true"
                className="hexagon h-12 w-12 md:h-16 md:w-16 shadow-md"
              />
            </a>
          </div>

          <div className="navbar-center justify-start md:justify-center flex-1 text-3xl p-1 underline">
            <a
              href="#home"
              className="inline-block -m-5 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-md"
            >
              Rinaboth
            </a>
          </div>

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Menü öffnen"
              aria-haspopup="menu"
              className="btn btn-ghost lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              role="menu"
              className="menu menu-lg dropdown-content bg-base-200 rounded-box gap-3 z-10 mt-3 w-52 p-2 shadow"
            >
              <li role="none">
                <a
                  href="#heroes"
                  role="menuitem"
                  className="inline-block p-1 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Helden
                </a>
              </li>
              <li role="none">
                <a
                  href="#world"
                  role="menuitem"
                  className="inline-block p-1 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Die Welt
                </a>
              </li>
              <li role="none">
                <a
                  href="#history"
                  role="menuitem"
                  className="inline-block p-1 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Die Geschichte
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end hidden lg:flex flex-1">
            <ul className="menu menu-horizontal text-3xl lg:gap-4 px-1">
              <li>
                <a
                  href="#heroes"
                  className="inline-block p-1 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-md"
                >
                  Helden
                </a>
              </li>
              <li>
                <a
                  href="#world"
                  className="inline-block p-1 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-md"
                >
                  Die Welt
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="inline-block p-1 underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-md"
                >
                  Die Geschichte
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
