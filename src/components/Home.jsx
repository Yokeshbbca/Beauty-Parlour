

function Home() {

  const sideBar = () => {
      let list = document.querySelector('.d-list-hidden').classList
      list.add("d-list-visible");
    }

  return (
    <header>
      <div className="project-title">
        <span>
          Beauty<span className="c-p">Parlour</span>
        </span>
      </div>
      <div className="d-list">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>+91 9876543210</li>
        </ul>
        <button className="t-bar" onChange={() => sideBar()}>&equiv;</button>
        <div className="d-list-hidden">
          <ul className="h-ul">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Home