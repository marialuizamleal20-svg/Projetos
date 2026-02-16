const testimonials = [
  {
    text: '“Qualidade incrível e entrega super rápida. A UrbanVibe virou minha loja favorita!”',
    author: '— Mariana, São Paulo'
  },
  {
    text: '“As peças vestem muito bem e os acabamentos são impecáveis. Recomendo muito.”',
    author: '— Lucas, Belo Horizonte'
  },
  {
    text: '“Comprei para presentear e chegou antes do prazo. Atendimento excelente!”',
    author: '— Renata, Curitiba'
  }
];

let currentIndex = 0;
const textElement = document.getElementById('testimonial-text');
const authorElement = document.getElementById('testimonial-author');

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  textElement.textContent = testimonials[currentIndex].text;
  authorElement.textContent = testimonials[currentIndex].author;
}, 4500);

const newsletterForm = document.querySelector('.newsletter-form');
const formMessage = document.getElementById('form-message');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Cadastro realizado com sucesso! Confira seu e-mail para o cupom.';
  newsletterForm.reset();
});
