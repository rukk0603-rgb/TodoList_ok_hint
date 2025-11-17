'use strict';

{
  const timeline = document.getElementById('timeline');
  for (let i = 0; i <= 24; i++) {
    const divider = document.createElement('div');
    divider.classList.add('divider');
    divider.style.top = (i * 100) + "px"; 
    timeline.appendChild(divider);

  for (let i = 0; i <= 48; i++) {
    const halfDivider = document.createElement('div');
    halfDivider.classList.add('halfD');
    halfDivider.style.top = ((i * 100) / 2) + "px";
    timeline.appendChild(halfDivider);
  }
  
    const label = document.createElement('span');
    label.textContent = `${i}:00`;
    label.style.position = 'absolute';
    label.style.left = '100px';
    label.style.top = (i * 100 - 8) + "px";
    timeline.appendChild(label);
  };
}