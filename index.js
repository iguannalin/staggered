window.addEventListener("load", () => {
  const table = document.getElementById("table");
  const t = 4000;

  function createFirstElem() {
    const span = document.createElement("span");
    span.id = 'push';
    span.innerHTML = 'push';
    table.appendChild(span);
    const ratio = t/4;
    setInterval(() => { // every t (i.e. 2500ms), turn off text, then turn it on after 2/3 * t (i.e. 833.33ms); then repeat
      if (document.getElementById('pop')) table.removeChild(span);
      setTimeout(() => {
        table.appendChild(span);
      }, ratio*3);
    }, ratio);
  }

  function createSecondElem() {
    const span = document.createElement("span");
    span.id = 'pop';
    span.innerHTML = 'pop';
    const ratio = t/3;
    setInterval(() => { // every t (i.e. 2500ms), turn off text, then turn it on after 2/3 * t (i.e. 833.33ms); then repeat
      table.appendChild(span);
      setTimeout(() => {
        if (document.getElementById('pop')) table.removeChild(span);
      }, ratio);
    }, ratio*2);
  }
  createFirstElem();
  setTimeout(createSecondElem, (t/3)/2);
});