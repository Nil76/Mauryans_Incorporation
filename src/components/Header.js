function Header() {
  return (
    <header>
      <video src="/video1.mp4" loop autoPlay muted></video>
      <h1>Helloo I'm Nikesh Maurya</h1>
      <div className="row">
      <a href="/Nikesh-CV.pdf" download>
  <button className="btn" style={{ cursor: "pointer" }}>
    Get CV
  </button>
</a>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
