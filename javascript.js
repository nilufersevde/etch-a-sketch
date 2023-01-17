
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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getgrey() {
  let colors = [
    "rgb(88,88,88)",
    "rgb(96,96,96)",
    "rgb(104,104,104)",
    "rgb(105,105,105)",
    "rgb(112,112,112)",
    "rgb(120,120,120)",
    "rgb(128,128,128)",
    "rgb(136,136,136)",
    "rgb(144,144,144)",
    "rgb(152,152,152)",
    "rgb(160,160,160)",
    "rgb(168,168,168)",
    "rgb(169,169,169)",
    "rgb(176,176,176)",
    "rgb(184,184,184)",
  ];
  
  let random_color = colors[Math.floor(
        Math.random() * colors.length)];
  
    return random_color
  }

document.getElementById("rainbow").addEventListener("mouseup",rainbow);
function rainbow() {
  let items = document.body.querySelectorAll('.cell');
  items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = getRandomColor();
      });
    });
}
document.getElementById("black").addEventListener("mouseup",black);
function black() {
  let items = document.body.querySelectorAll('.cell');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
    item.style.backgroundColor = "black";
      });
  });
}
document.getElementById("reset").addEventListener("mouseup",reset);
function reset() {
  let items = document.body.querySelectorAll('.cell');
  items.forEach(item => {
        item.style.backgroundColor = "white";
      });
    }
document.getElementById("charcoal").addEventListener("mouseup",charcoal);
function charcoal() {
  let items = document.body.querySelectorAll('.cell');
  items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = getgrey();
      });
  });
}

document.getElementById("twenty").addEventListener("mouseup", function() {
  deletecurrentgrid()
  create_grid(20);
})
document.getElementById("fifty").addEventListener("mouseup", function() {
  deletecurrentgrid()
  create_grid(50);
})
document.getElementById("seventyfive").addEventListener("mouseup", function() {
  deletecurrentgrid()
  create_grid(75);

})


function deletecurrentgrid() {
  let currentGrid = document.querySelectorAll(".cell");
  currentGrid.forEach((div) => {
    return div.remove();
  });
}



  
  