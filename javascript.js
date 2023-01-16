
//create grid and container
const grid = document.createElement("div")
grid.classList.add('grid');
const container = document.createElement("div")
container.classList.add('container');



//function that create cells depending on the given size, add them to grid, paint them as a default to black when hover over
function create_grid(size) {

    for(var i=0; i < size*size; i++){
    var newDiv = document.createElement('div');
    newDiv.className = 'cell';
    grid.appendChild(newDiv);
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    newDiv.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "black";
      })
    }
}


//add grid to container and container to body
container.appendChild(grid);
document.body.appendChild(container);    

//create grid with the default size
create_grid(20)



function black() {
  let items = document.body.querySelectorAll('.cell');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
    item.style.backgroundColor = "black";
      });
  });
}

function rainbow() {
  let items = document.body.querySelectorAll('.cell');
  items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = getRandomColor();
      });
    });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//function that creates grid with size 20, deletes the grid created before
function changeGridSize20() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  create_grid(20);
  
  
}
//function that creates grid with size 50, deletes the grid created before
function changeGridSize50() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  create_grid(50);

}
//function that creates grid with size 75, deletes the grid created before
function changeGridSize75() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
  create_grid(75);
//  let items = document.body.querySelectorAll('.cell');
}


document.getElementById("twenty").addEventListener("mouseup", changeGridSize20);
document.getElementById("fifty").addEventListener("mouseup", changeGridSize50);
document.getElementById("seventyfive").addEventListener("mouseup", changeGridSize75);
document.getElementById("rainbow").addEventListener("mouseup",rainbow);
document.getElementById("black").addEventListener("mouseup",black)

  
  