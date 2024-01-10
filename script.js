$(document).ready(function () {
  var menu = $(".menu");
  var scrollValue = 0;

  function updateNavigation() {
    var scrollPos = $(document).scrollTop();

    $(".opt").each(function () {
      var currLink = $(this);
      var refElement = $($(currLink.find("a").attr("href")));

      var sectionTop = refElement.offset().top;
      var sectionBottom = sectionTop + refElement.outerHeight();

      if (scrollPos >= sectionTop - 20 && scrollPos < sectionBottom) {
        $(".opt-link").removeClass("active");
        currLink.find(".opt-link").addClass("active");
      }
    });

    if (scrollPos <= 0) {
      menu.removeClass("scrolled");
    } else {
      menu.removeClass("scrolled");
    }

    scrollValue = scrollPos;
  }

  updateNavigation();

  $(window).resize(function () {
    updateNavigation();
  });

  var isScrolling;

  $(window).scroll(function () {
    updateNavigation();

    clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      menu.addClass("scrolled");
    }, 3000);
  });

  $(window).on("load", function () {
    updateNavigation();
  });

  $(document).on("scrollstop", function () {
    updateNavigation();
  });

  //  SEÇÃO POPUPS / CONFIGURACOES
  document.body.style.overflowX = "hidden";
  const toggleButtons1 = document.getElementsByClassName("btn-details1");
  const body = document.body;

  for (const toggleButton1 of toggleButtons1) {
    toggleButton1.addEventListener("click", function () {
      var blur = document.getElementById("blur");
      var popup1 = document.getElementById("popup1");

      blur.classList.toggle("active");
      popup1.classList.toggle("active");
    });
  }

  const toggleButtons2 = document.getElementsByClassName("btn-details2");
  for (const toggleButton2 of toggleButtons2) {
    toggleButton2.addEventListener("click", function () {
      var blur = document.getElementById("blur");
      var popup2 = document.getElementById("popup2");

      blur.classList.toggle("active");
      popup2.classList.toggle("active");
    });
  }

  const toggleButtons3 = document.getElementsByClassName("btn-details3");
  for (const toggleButton3 of toggleButtons3) {
    toggleButton3.addEventListener("click", function () {
      var blur = document.getElementById("blur");
      var popup3 = document.getElementById("popup3");

      blur.classList.toggle("active");
      popup3.classList.toggle("active");
    });
  }

  const toggleButtons4 = document.getElementsByClassName("btn-details4");
  for (const toggleButton4 of toggleButtons4) {
    toggleButton4.addEventListener("click", function () {
      var blur = document.getElementById("blur");
      var popup4 = document.getElementById("popup4");

      blur.classList.toggle("active");
      popup4.classList.toggle("active");
    });
  }

  const toggleButtons5 = document.getElementsByClassName("btn-details5");
  for (const toggleButton5 of toggleButtons5) {
    toggleButton5.addEventListener("click", function () {
      var blur = document.getElementById("blur");
      var popup5 = document.getElementById("popup5");

      blur.classList.toggle("active");
      popup5.classList.toggle("active");
    });
  }

  // SEÇÃO PARA REVELAR OS ELEMENTOS DA PAGINA COM ANIMACAO
  if (screen.width > 800) {
    const sr = ScrollReveal({ reset: true });

    sr.reveal(".scroll", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 300,
      reset: false,
    });

    sr.reveal(".scrolls", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 0,
      reset: false,
    });

    sr.reveal(".scrollss", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 300,
      reset: false,
    });

    var menu = $(".menu");

    function updateMenuColor() {
      var scrollPos = $(document).scrollTop();

      if (scrollPos <= 0) {
        menu.css("transition", "background-color 0.5s ease");
        menu.css("background-color", "#EF402F");
      } else {
        menu.css("transition", "background-color 0.5s ease");
        menu.css("background-color", "#ffffff");
      }
    }

    updateMenuColor();

    $(window).scroll(function () {
      updateMenuColor();
    });
  }
  //   SEÇÃO PARA TROCAR OS CARDS DO PROJETOS
  const sliderInputs = document.querySelectorAll('input[name="slider"]');
  const projectDiv = document.querySelector(".project-card");
  const imageProject = document.querySelector(".imageProject");

  sliderInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selectedIndex = Array.from(sliderInputs).indexOf(input) + 1;

      switch (selectedIndex) {
        case 1:
          projectDiv.style.backgroundImage = 'url("img/landingp.jpg")';
          imageProject.src = "img/landingp.jpg";
          break;
        case 2:
          projectDiv.style.backgroundImage = 'url("img/landingp2.jpg")';
          imageProject.src = "img/landingp2.jpg";
          break;
        case 3:
          projectDiv.style.backgroundImage = 'url("sua-imagem3.jpg")';
          imageProject.src = "img/landingp2.jpg";
          break;
        case 4:
          projectDiv.style.backgroundImage = 'url("sua-imagem4.jpg")';
          imageProject.src = "img/landingp2.jpg";
          break;
        case 5:
          projectDiv.style.backgroundImage = 'url("sua-imagem5.jpg")';
          imageProject.src = "img/landingp2.jpg";
          break;
        default:
          break;
      }

      projectDiv.style.backgroundSize = "cover";
      projectDiv.style.backgroundRepeat = "no-repeat";
    });
  });
});
