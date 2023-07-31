let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web, traduzco textos y hago proyectos de mecatrónica.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
