window.addEventListener("load", () => {
  const table = document.getElementById("table");

  function createFirstElem() {
    const span = document.createElement("span");
    span.id = 'push';
    span.innerHTML = 'push';
    table.appendChild(span);
    setInterval(() => { // every t (i.e. 2500ms), turn off text, then turn it on after 2/3 * t (i.e. 833.33ms); then repeat
      if (document.getElementById('pop')) table.removeChild(span);
      setTimeout(() => {
        table.appendChild(span);
      }, 1786);
    }, 714);
  }

  function createSecondElem() {
    const span = document.createElement("span");
    span.id = 'pop';
    span.innerHTML = 'pop';
    setInterval(() => { // every t (i.e. 2500ms), turn off text, then turn it on after 2/3 * t (i.e. 833.33ms); then repeat
      table.appendChild(span);
      setTimeout(() => {
        if (document.getElementById('pop')) table.removeChild(span);
      }, 833);
    }, 1667);
  }
  createFirstElem();
  setTimeout(createSecondElem, 417);
});