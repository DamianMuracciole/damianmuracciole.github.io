window.addEventListener('load', () =>{
  let header = document.getElementsByTagName('header');
  const name = document.getElementById('name');
  const description = document.getElementById('description');
  const cafeArte = document.getElementById('cafeArte');
  const humulus = document.getElementById('humulus')
  const worldCup = document.getElementById('worldCup');

  

  //------ Lógica para pasar de fondo transparente a fondo con color del header en el index.
  window.addEventListener('scroll', () => {
    scrollEfects();
  });

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
  }

  let popupWindow = (uri, title,dim) => { 
    window.open(uri,title,dim) 
  };

  scrollEfects();
});

