
//create grid and container
const grid = document.createElement("div")
grid.classList.add('grid');
const container = document.createElement("div")
container.classList.add('container');

//function that create cells depending on the given size and add them to grid.
function create_grid(size) {

    for(var i=0; i < size*size; i++){
    var newDiv = document.createElement('div');
    newDiv.className = 'cell';
    grid.appendChild(newDiv);
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
    }

//add grid to container and container to body
    container.appendChild(grid);
    document.body.appendChild(container);    

//create grid with the default size
create_grid(20)
painttoblack()


function painttoblack() {
  let items = document.body.querySelectorAll('.cell');
  items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
      });
    });
}

//function that creates grid with size 20, deletes the grid created before
function changeGridSize20() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  create_grid(20);
  painttoblack()
  
}
//function that creates grid with size 50, deletes the grid created before
function changeGridSize50() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  create_grid(50);
  painttoblack()

}
//function that creates grid with size 75, deletes the grid created before
function changeGridSize75() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  create_grid(75);
  let items = document.body.querySelectorAll('.cell');
  painttoblack()
}


document.getElementById("twenty").addEventListener("mouseup", changeGridSize20);
document.getElementById("fifty").addEventListener("mouseup", changeGridSize50);
document.getElementById("seventyfive").addEventListener("mouseup", changeGridSize75);


  
  