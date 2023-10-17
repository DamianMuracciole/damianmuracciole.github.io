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
  // const cafeArte = document.getElementById('cafeArte');
  // const humulus = document.getElementById('humulus')
  // const worldCup = document.getElementById('worldCup');
  // const proyectsAnimations = document.getElementsByClassName('proyects-animations');
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

  //------ popups para los proyectos
  // cafeArte.addEventListener('click', () => {
  //   popupWindow('./cafeArteView.html','Café Arte','popup');
  // });

  // humulus.addEventListener('click', () => {
  //   popupWindow('./humulusView.html','Humulus','popup'); // 'left=100,top=100,width=320,height=320');
  // });


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

    // efectos para proyectos
    // if(window.scrollY > proyectsAnimations[0].getBoundingClientRect().top - 100){
    //   proyectsAnimations[0].classList.add('proyects-animations-active');
    // } else if (window.scrollY < proyectsAnimations[0].getBoundingClientRect().top + 50){
    //   proyectsAnimations[0].classList.remove('proyects-animations-active');
    // }
    // if(window.scrollY > proyectsAnimations[1].getBoundingClientRect().top - 100){
    //   proyectsAnimations[1].classList.add('proyects-animations-active');
    // } else if (window.scrollY < proyectsAnimations[1].getBoundingClientRect().top + 50){
    //   proyectsAnimations[1].classList.remove('proyects-animations-active');
    // }
    // if(window.scrollY > proyectsAnimations[2].getBoundingClientRect().top - 200){
    //   proyectsAnimations[2].classList.add('proyects-animations-active');
    // } else if (window.scrollY < proyectsAnimations[2].getBoundingClientRect().top + 50){
    //   proyectsAnimations[2].classList.remove('proyects-animations-active');
    // }

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
      (element.getBoundingClientRect().top - offSetMyCarrer < 0)
      ? element.style.backgroundColor = "orange"
      : element.style.backgroundColor = "white";
    })

    myCarrerline.forEach(element => {
      if (element.getBoundingClientRect().top - offSetMyCarrer < -150){
        element.classList.add('animation-on');
        element.classList.remove('animation-off');
      } else if (element.getBoundingClientRect().top - offSetMyCarrer > -200){
        element.classList.add('animation-off');
        element.classList.remove('animation-on');
      }
    })


  }


  let abrirMenu = () =>{
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    linksMovile.style.left = "-100vw";
  }

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

  let popupWindow = (uri, title,dim) => { 
    window.open(uri,title,dim) 
  };

  let quitarTextoRedes = () => {
    Array.from(networkText).forEach(element=>{
      element.style.display = 'none';
     })

  }

  let agregarTextoRedes = () => {
    Array.from(networkText).forEach(element=>{
      element.style.display = 'block'
    })
  }

  scrollEfects();
  menuResponsive();
  abrirMenu();
});


// github.com/DamianMuracciole
// linkedin.com/in/damian-muracciole
// damianmuracciole@gmail.com
// descargar CV
