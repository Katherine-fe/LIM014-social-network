export default () => {
  const viewHome = '<h1> Hola grupo cereza</h1>';
  const element = document.createElement('div');
  element.className = 'view-home';
  element.innerHTML = viewHome;
  return element;
};
