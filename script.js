window.addEventListener('load', () =>{
  let header = document.getElementsByTagName('header');
  const titleNav = document.getElementsByClassName('title-nav');
  const navMobile = document.getElementById('nav-mobile');
  const navPC = document.getElementById('nav-pc');
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const cafeArte = document.getElementById('cafeArte');
  const humulus = document.getElementById('humulus')
  const worldCup = document.getElementById('worldCup');
  const proyectsAnimations = document.getElementsByClassName('proyects-animations');
console.log(navMobile);
  //------ Lógica para pasar de fondo transparente a fondo con color del header en el index.
  window.addEventListener('scroll', () => {
    scrollEfects();
  });

  //navBar responsive
  
  //------ Lógica de mostrar el menu en modo mobile.
  // Abrir el menú
  // menuOpen.addEventListener('click', () => {
  //   menuOpen.style.display = 'none';
  //   menuClose.style.display = 'inline-block';
  //   nav[0].classList.add('active');
  // })
  // Cerrar el menú
  // menuClose.addEventListener('click', () => {
  //   menuClose.style.display = 'none';
  //   menuOpen.style.display = 'inline-block';
  //   nav[0].classList.remove('active');
  // })
  //- Sacar iconos cuando el ancho es >= 768px
  
  window.addEventListener("resize", () => {
    // if (window.innerWidth >= 768){
    //   navMobile.style.display = 'none';
    //   navPC.style.display = 'inline-block';
    // } else {
    //   navMobile.style.display = 'inline-block';
    //   navPC.style.display = 'none';
    // }
    menuResponsive();
  });


  //------ popups para los proyectos
  cafeArte.addEventListener('click', () => {
    popupWindow('./cafeArteView.html','Café Arte','popup');
  });

  humulus.addEventListener('click', () => {
    popupWindow('./humulusView.html','Humulus','popup'); // 'left=100,top=100,width=320,height=320');
  });

  worldCup.addEventListener('click', () => {
    popupWindow('./worldCupView.html','worldCup2019','popup'); // 'left=100,top=100,width=320,height=320':
  });

  let scrollEfects = () => {
    // Efectos para la nav
    if(window.scrollY > window.innerHeight-100) {
      titleNav[0].style.opacity = '1';
    }else{
      titleNav[0].style.opacity = '0';
    }

    // Efectos para el home
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
    if(window.scrollY > proyectsAnimations[0].getBoundingClientRect().top - 100){
      proyectsAnimations[0].classList.add('proyects-animations-active');
    } else if (window.scrollY < proyectsAnimations[0].getBoundingClientRect().top + 50){
      proyectsAnimations[0].classList.remove('proyects-animations-active');
    }
    if(window.scrollY > proyectsAnimations[1].getBoundingClientRect().top - 50){
      proyectsAnimations[1].classList.add('proyects-animations-active');
    } else if (window.scrollY < proyectsAnimations[1].getBoundingClientRect().top + 50){
      proyectsAnimations[1].classList.remove('proyects-animations-active');
    }
    if(window.scrollY > proyectsAnimations[2].getBoundingClientRect().top - 50){
      proyectsAnimations[2].classList.add('proyects-animations-active');
    } else if (window.scrollY < proyectsAnimations[2].getBoundingClientRect().top + 50){
      proyectsAnimations[2].classList.remove('proyects-animations-active');
    }

  }

  let menuResponsive = () => {
    if (window.innerWidth >= 768){
      navMobile.style.display = 'none';
      navPC.style.display = 'inline-block';
    } else {
      navMobile.style.display = 'inline-block';
      navPC.style.display = 'none';
    }
  }


  let popupWindow = (uri, title,dim) => { 
    window.open(uri,title,dim) 
  };

  scrollEfects();
  menuResponsive();
});
