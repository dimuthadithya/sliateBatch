// coodinators
const sithara = document.querySelector('#sithara'); //cyan
const teamSitharaArray = [49, 50, 51, 60, 82, 102, 105, 106, 109, 112];

const thashani = document.querySelector('#thashani'); //blue
const teamThashaniArray = [53, 56, 58, 59, 64, 77, 78, 79, 80, 115];

const chavindu = document.querySelector('#chavindu'); // darkcyan
const teamChavinduArray = [4, 22, 35, 47, 61, 69, 92, 94, 103];

const shehani = document.querySelector('#shehani'); // yellow
const teamShehaniArray = [65, 12, 19, 23, 30, 33, 34, 36, 41, 43];

const njla = document.querySelector('#njla'); //green
const teamNjlaArray = [8, 5, 6, 76, 9, 63, 31, 85, 84];

const nada = document.querySelector('#nada'); //pink
const teamnadaArray = [13, 55, 62, 52, 66, 67, 68, 70, 91, 93];

const rimza = document.querySelector('#rimza'); //red
const teamRimzaArray = [7, 108, 113, 116, 83, 44, 45, 99, 107, 40];

const tharuka = document.querySelector('#tharuka'); //salmon
const teamTharukaArray = [21, 25, 26, 27, 29, 72, 74, 87, 88];

const miflan = document.querySelector('#miflan'); //aqua
const teamMiflanArray = [89, 90, 11, 18, 32, 71, 75, 39];

const dulanka = document.querySelector('#dulanka'); //blueviolet
const teamDulankaArray = [0, 1, 2, 3, 10, 17, 24, 100, 114, 46];

const unavilableStudentsArray = [
  15, 16, 17, 21, 29, 38, 39, 43, 49, 55, 58, 74, 82, 87, 96, 97, 98, 99, 111,
  112, 103
];

const h1 = document.querySelector('h1');

// elements
const container = document.querySelector('.container');
const divs = container.querySelectorAll('div');
const body = document.querySelector('body');
let dp = container.querySelectorAll('div>img');
const checkBoxes = document.querySelectorAll('input[type="checkbox');
const counterElement = document.querySelector('#count');
const totalStudents = document.querySelector('.total-students');
const goDown = document.querySelector('#go-down');
const goTop = document.querySelector('#go-up');

const containerAllDivs = document.querySelectorAll('.container > div');
const numberOfStudents =
  containerAllDivs.length - unavilableStudentsArray.length;

let dpAttrArr = [];
const unavilableStudentArrayIndex = [];
let count = 0;
const targetCount = numberOfStudents;
const duration = 1500;
const increment = (targetCount / duration) * 10;

// add findmydiv
divs.forEach((element) => {
  newDivForFindGroup = document.createElement('div');
  newDivForFindGroup.setAttribute('class', 'findmygroup');

  element.append(newDivForFindGroup);
});

const findMyGroup = document.querySelectorAll('.findmygroup');

// new element
const newBtn = document.createElement('button');
const backBtn = document.createElement('button');
backBtn.setAttribute('class', 'backbtn');

newBtn.innerHTML = 'view team members';
backBtn.innerHTML = '<i class="fa-solid fa-backward"></i>back';

// functions -------------------------------------------------
const hideDivs = function () {
  divs.forEach((element) => {
    element.style.display = 'none';
  });
};

const displayDivs = function () {
  divs.forEach((element) => {
    element.style.display = 'flex';
  });
};

const scrollToTop = function () {
  window.scrollTo(0, 0);
};

const unavilableStudents = function () {
  unavilableStudentsArray.forEach((student) => {
    unavilableStudentArrayIndex.push(student - 1);
  });

  console.log(unavilableStudentArrayIndex);

  unavilableStudentArrayIndex.forEach((element) => {
    divs[element].style.display = 'none';
  });
};

const updateTeamColors = function () {
  teamSitharaArray.forEach((member) => {
    divs[member].children[3].classList.add('goldenrod');
  });

  teamThashaniArray.forEach((member) => {
    divs[member].children[3].classList.add('blue');
  });

  teamChavinduArray.forEach((member) => {
    divs[member].children[3].classList.add('darkcyan');
  });

  teamShehaniArray.forEach((member) => {
    divs[member].children[3].classList.add('yellow');
  });

  teamNjlaArray.forEach((member) => {
    divs[member].children[3].classList.add('green');
  });

  teamnadaArray.forEach((member) => {
    divs[member].children[3].classList.add('pink');
  });

  teamRimzaArray.forEach((member) => {
    divs[member].children[3].classList.add('red');
  });

  teamTharukaArray.forEach((member) => {
    divs[member].children[3].classList.add('salmon');
  });

  teamMiflanArray.forEach((member) => {
    divs[member].children[3].classList.add('aqua');
  });

  teamDulankaArray.forEach((member) => {
    divs[member].children[3].classList.add('blueviolet');
  });
};

// teams
const teamTharuka = function () {
  teamTharukaArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamRimza = function () {
  teamRimzaArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamNada = function () {
  teamnadaArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamNjla = function () {
  teamNjlaArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamShehani = function () {
  teamShehaniArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamChavindu = function () {
  teamChavinduArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamThashani = function () {
  teamThashaniArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamSithara = function () {
  teamSitharaArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamDulanka = function () {
  teamDulankaArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};
const teamMiflan = function () {
  teamMiflanArray.forEach((member) => {
    divs[member].style.display = 'flex';
  });
};

const updateH1 = function () {
  h1.innerHTML = `team ${newBtn.parentElement.id}`;
};

// remove unavilableStudents
unavilableStudents();
updateTeamColors();

// eventListeners ---------------------------------------------
findMyGroup.forEach((element) => {
  element.addEventListener('click', (event) => {
    console.log(event.target.parentElement.children[3].classList[1]);

    switch (event.target.parentElement.children[3].classList[1]) {
      case 'aqua':
        hideDivs();
        // updateH1();
        teamMiflan();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'cyan':
        hideDivs();
        // updateH1();
        teamSithara();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'blue':
        hideDivs();
        // updateH1();
        teamThashani();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'darkcyan':
        hideDivs();
        // updateH1();
        teamChavindu();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'yellow':
        hideDivs();
        // updateH1();
        teamShehani();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'green':
        hideDivs();
        // updateH1();
        teamNjla();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'pink':
        hideDivs();
        // updateH1();
        teamNada();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'red':
        hideDivs();
        // updateH1();
        teamRimza();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'salmon':
        hideDivs();
        // updateH1();
        teamTharuka();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'aqua':
        hideDivs();
        // updateH1();
        teamMiflan();
        body.append(backBtn);

        scrollToTop();
        break;
      case 'blueviolet':
        hideDivs();
        // updateH1();
        teamDulanka();
        body.append(backBtn);

        scrollToTop();
        break;
      default:
        break;
    }
  });
});

/*
// team sithara 61
sithara.addEventListener('click', (event) => {
  sithara.children[1].style.display = 'none';
  sithara.append(newBtn);
});

// team tashani 54
thashani.addEventListener('click', (event) => {
  thashani.children[1].style.display = 'none';
  thashani.append(newBtn);
});

// team chavindu 95
chavindu.addEventListener('click', (event) => {
  chavindu.children[1].style.display = 'none';
  chavindu.append(newBtn);
});

// team shehani 66
shehani.addEventListener('click', (event) => {
  shehani.children[1].style.display = 'none';
  shehani.append(newBtn);
});

// team njla 9
njla.addEventListener('click', (event) => {
  njla.children[1].style.display = 'none';
  njla.append(newBtn);
});

// team nada 14
nada.addEventListener('click', (event) => {
  nada.children[1].style.display = 'none';
  nada.append(newBtn);
});

// team rimza 8
rimza.addEventListener('click', (event) => {
  rimza.children[1].style.display = 'none';
  rimza.append(newBtn);
});

// team miflan 40
miflan.addEventListener('click', (event) => {
  miflan.children[1].style.display = 'none';
  miflan.append(newBtn);
});

// team tharuka 28
tharuka.addEventListener('click', (event) => {
  tharuka.children[1].style.display = 'none';
  tharuka.append(newBtn);
});

// team dulanka
dulanka.addEventListener('click', (event) => {
  dulanka.children[1].style.display = 'none';
  dulanka.append(newBtn);
});

// newbtn click event
newBtn.addEventListener('click', (event) => {
  hideDivs();

  if (newBtn.parentElement.id == 'miflan') {
    updateH1();
    teamMiflan();
    body.append(backBtn);

    scrollToTop();
  } else if (newBtn.parentElement.id == 'tharuka') {
    updateH1();
    teamTharuka();
    body.append(backBtn);
    scrollToTop();
  } else if (newBtn.parentElement.id == 'rimza') {
    updateH1();
    teamRimza();
    body.append(backBtn);

    scrollToTop();
  } else if (newBtn.parentElement.id == 'nada') {
    updateH1();
    teamNada();
    body.append(backBtn);

    scrollToTop();
  } else if (newBtn.parentElement.id == 'njla') {
    updateH1();
    teamNjla();
    body.append(backBtn);
    scrollToTop();
  } else if (newBtn.parentElement.id == 'shehani') {
    updateH1();
    teamShehani();
    body.append(backBtn);
    scrollToTop();
  } else if (newBtn.parentElement.id == 'chavindu') {
    updateH1();
    teamChavindu();
    body.append(backBtn);
    scrollToTop();
  } else if (newBtn.parentElement.id == 'thashani') {
    updateH1();
    teamShehani();
    body.append(backBtn);
    scrollToTop();
  } else if (newBtn.parentElement.id == 'sithara') {
    updateH1();
    teamSithara();
    scrollToTop();
  } else if (newBtn.parentElement.id == 'dulanka') {
    updateH1();
    teamDulanka();
    body.append(backBtn);
    scrollToTop();
  } else 'something wrong error:newBtnClickEvent';
});
*/

// backbtn click event
backBtn.addEventListener('click', (event) => {
  location.reload();
});

// blured effect with jq
/*
$(document).ready(function (e) {
  $('.container > div').mouseenter(function (e) {
    $('.container > div').addClass('blurred');
    $(e.target).removeClass('blurred');
  });

  $('.container > div').mouseleave(function () {
    $('.container > div').removeClass('blurred');
    $(e.target).removeClass('blurred');
  });
});
*/

// add same dp for dp unavilable users
dp.forEach((element) => {
  if (element.getAttribute('src').length == 0) {
    element.setAttribute('src', './images/none.png');
    dpAttrArr.push(element);
  } else {
    dpAttrArr.push(element);
  }
});

dp = dpAttrArr;

// filter options
checkBoxes.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (checkBoxes[0].checked) {
      hideDivs();

      divs[1].style.display = 'flex';
      divs[7].style.display = 'flex';
      divs[8].style.display = 'flex';
      divs[13].style.display = 'flex';
      divs[27].style.display = 'flex';
      divs[39].style.display = 'flex';
      divs[53].style.display = 'flex';
      divs[60].style.display = 'flex';
      divs[65].style.display = 'flex';
      divs[94].style.display = 'flex';
      updateTeamColors();
      body.append(backBtn);
      scrollToTop();
    } else if (checkBoxes[1].checked) {
      hideDivs();

      divs[21].style.display = 'flex';
      divs[59].style.display = 'flex';

      body.append(backBtn);
      scrollToTop();
    } else {
      displayDivs();
      unavilableStudents();
    }
  });
});

const interval = setInterval(function () {
  count += increment;
  counterElement.textContent = Math.round(count);

  if (count >= targetCount) {
    clearInterval(interval);
  }
}, 10);

goDown.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

goTop.addEventListener('click', () => {
  scrollToTop();
});
