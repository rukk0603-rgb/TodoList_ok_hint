'use strict';

{
  const timeline = document.getElementById('timeline');
  for (let i = 0; i <= 1440; i += 60) {
    const divider = document.createElement('div');
    divider.classList.add('divider');
    timeline.appendChild(divider);
    divider.style.top = ((i / 60) * 60) + "px";
  };
}