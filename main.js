'use strict';

{
  const timeline = document.getElementById('timeline');
  for (let i = 0; i <= 720; i += 30) {
    const divider = document.createElement('div');
    divider.classList.add('divider');
    timeline.appendChild(divider);
    divider.style.left = (i) + "px";
  };
}