window.addEventListener('load', () =>{
  let header = document.getElementsByTagName('header');
  const titleNav = document.getElementsByClassName('title-nav');
  const navMobile = document.getElementById('nav-mobile');
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const linksMovile = document.getElementById('links-movile')
  const navPC = document.getElementById('nav-pc');
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const cardProyects = document.querySelectorAll('.card-proyects')
  const myCarrerText = document.querySelectorAll('.text-my-carrer')
  const networkText = document.querySelectorAll(".network-text");
  const myCarrercircle = document.querySelectorAll(".circle");
  const myCarrerline = document.querySelectorAll(".line");
  const aboutMeText = document.querySelectorAll(".about-me-text")

  //------ Lógica para pasar de fondo transparente a fondo con color del header en el index.
  window.addEventListener('scroll', () => {
    scrollEfects();
  });

  window.addEventListener("resize", () => {
    menuResponsive();
  });

  //------ Menu hamburguesa  -----------
  openMenu.addEventListener('click', () => {
    cerrarMenu();
  })

  closeMenu.addEventListener('click', () => {
    abrirMenu();
  })

  cardProyects[0].addEventListener('click', () => {
    popupWindow('./cafeArteView.html','Café Arte','popup');
  });

  cardProyects[1].addEventListener('click', () => {
    popupWindow('./humulusView.html','Humulus','popup'); // 'left=100,top=100,width=320,height=320');
  });

  cardProyects[2].addEventListener('click', () => {
    popupWindow('./worldCupView.html','worldCup2019','popup'); // 'left=100,top=100,width=320,height=320':
  });

  let scrollEfects = () => {
    //valor de la altura del screen
    let ScreenHeight = window.screen.height;
    const offSetTextAboutMe = ScreenHeight * 0.7;
    const offSetMyCarrer = ScreenHeight * 0.5;

    // Efectos para la nav
    if(window.scrollY > window.innerHeight-100) {
      titleNav[0].style.opacity = '1';
    }else{
      titleNav[0].style.opacity = '0';
    }

    // Efectos para la home
    if(window.scrollY > window.innerHeight/4) {
      header[0].classList.add('solid-navBar')
    } else {
      header[0].classList.remove('solid-navBar');
    }
    if(name && window.scrollY > window.innerHeight/10){
      name.classList.add('tittle-1-off');
      description.classList.remove('tittle-1-off');
    }else{
      name.classList.remove('tittle-1-off');
      description.classList.add('tittle-1-off');
    }

    //Efectos en About Me
    aboutMeText.forEach(element => {
      (element.getBoundingClientRect().top - offSetTextAboutMe < 0)
      ? element.style.opacity = "1"
      : element.style.opacity = "0";
    })

    //Efectos para mis pasos
    myCarrerText.forEach(element => {
      (element.getBoundingClientRect().top - offSetMyCarrer < 0)
      ? element.style.right = "-3rem"
      : element.style.right = "-100vw";
    })

    myCarrercircle.forEach(element => {
      (element.getBoundingClientRect().top - offSetMyCarrer < 0)
      ? element.style.opacity = "1"
      : element.style.opacity = "0";
      (element.getBoundingClientRect().top - offSetMyCarrer < -50)
      ? element.style.backgroundColor = "orange"
      : element.style.backgroundColor = "white";
    })

    myCarrerline.forEach(element => {
      if (element.getBoundingClientRect().top - offSetMyCarrer < 0){
        element.classList.add('animation-on');
        element.classList.remove('animation-off');
      } else if (element.getBoundingClientRect().top - offSetMyCarrer > -50){
        element.classList.add('animation-off');
        element.classList.remove('animation-on');
      }
    })
  }

  // abre menu modo mobile
  let abrirMenu = () =>{
    openMenu.style.display = 'block';
    // closeMenu.style.display = 'none';
    linksMovile.style.left = "-100vw";
  }

  // cierra menu modo mobile
  let cerrarMenu = () =>{
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    linksMovile.style.left = "0vw";
  }

  let menuResponsive = () => {
    if (window.innerWidth >= 768){
      navMobile.style.display = 'none';
      navPC.style.display = 'inline-block';
      abrirMenu();
      agregarTextoRedes();
    } else {
      navMobile.style.display = 'inline-block';
      navPC.style.display = 'none';
      quitarTextoRedes();
    }
  }

  // Abre ventanas de los proyectos realizados
  let popupWindow = (uri, title,dim) => {
    window.open(uri,title,dim)
  };

  // quita texto los íconos en el modo mobile
  let quitarTextoRedes = () => {
    Array.from(networkText).forEach(element=>{
      element.style.display = 'none';
     })
  }

  // agrega texto los íconos en el modo desktop
  let agregarTextoRedes = () => {
    Array.from(networkText).forEach(element=>{
      element.style.display = 'block'
    })
  }

  scrollEfects();
  menuResponsive();
  abrirMenu();
});
