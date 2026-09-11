function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        BRIEFLY<span>.</span>
      </a>

      <nav>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#about">About</a>
      </nav>

      <button className="menu-btn">
        ☰
      </button>
    </header>
  );
}

export default Navbar;