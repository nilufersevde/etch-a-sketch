const grid = document.createElement("div")
grid.classList.add('grid');
const container = document.createElement("div")
container.classList.add('container');

for(var i=1; i < 626; i++){
   var newDiv = document.createElement('div');
   newDiv.className = 'cell';
   grid.appendChild(newDiv);
}

container.appendChild(grid);
document.body.appendChild(container);

    let items = document.querySelectorAll('.cell');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
      });
    });
  