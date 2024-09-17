import { NavLink } from 'react-router-dom'

export default function Header() {

  function showMobileNavigationMenu() {
    let headerLinks = document.getElementById("headerLinks");
    headerLinks?.classList.toggle("mobile");

    let headerElement = document.getElementById("headerLinks");
  }

  return (
    <header>
      <div className="headerNavigationContainer">
        <nav className="headerNavigation">
          <h1>CocktailDB</h1>
          <section id="headerLinks" className="headerLinks">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  isActive ? "active" : ""
                ].join(" ")
              }
            >
              Home
            </NavLink>

            <NavLink
              to="search"
              className={({ isActive }) =>
                [
                  isActive ? "active" : ""
                ].join(" ")
              }
            >
              Search
            </NavLink>
          </section>
        </nav>
      </div>

      <section id="burgerMenu" className="material-symbols-outlined" onClick={showMobileNavigationMenu}>
          menu
      </section>
    </header>
  )
}
