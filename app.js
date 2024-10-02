// Espera até que o DOM seja carregado
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona animação ao rolar a página
    window.addEventListener("scroll", () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -100) {
          element.classList.add("visible");
        }
      });
    });
  
    // Animação de fade-in nos botões ao passar o mouse
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
      });
      button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
      });
    });
  
    // Efeito de click nos botões
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        button.classList.add("clicked");
        setTimeout(() => {
          button.classList.remove("clicked");
        }, 150);
      });
    });
  
    // Carrossel na seção de depoimentos
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;
  
    setInterval(() => {
      testimonials[currentIndex].classList.remove("visible");
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].classList.add("visible");
    }, 3000);
  });
  