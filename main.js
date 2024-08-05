const total = document.getElementById('total');
const maleCountEl = document.getElementById('male');
const femaleCountEl = document.getElementById('female');
const upArrow = document.getElementById('up-arrow');
const downArrow = document.getElementById('down-arrow');

const randomNumber = Math.floor(Math.random() * 10) + 1; // Assuming randomNumber is defined like this

async function fetchAndDisplayFriends() {
  try {
    const response = await fetch('./data.json');
    const friends = await response.json();

    total.textContent = friends.length;

    const maleCount = friends.filter(
      (friend) => friend.gender != 'female'
    ).length;

    const femaleCount = friends.filter(
      (friend) => friend.gender != 'male'
    ).length;

    maleCountEl.textContent = maleCount;
    femaleCountEl.textContent = femaleCount;

    const container = document.getElementById('friends-container');
    friends.forEach((friend) => {
      const friendDiv = document.createElement('div');
      friendDiv.classList.add('friend');

      friendDiv.innerHTML = `
                        <div class="card" style="width: 18rem">
                        <img src="./images/${friend.rn}.jpg" class="card-img-top" alt="${friend.rn}.jpg" />
                        <div class="card-body text-center">
                            <h5 class="card-title">${friend.name} - ${friend.rn}</h5>
            
                            <p class="card-text">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </p>
                         <p class="icon">           
                        <i class="fa-brands fa-facebook-f"></i>
                         <i class="fa-brands fa-square-github"></i>
                         <p/>
                        </div>
                        </div>
                    `;

      container.append(friendDiv);
    });
  } catch (error) {
    console.error('Error fetching friends data:', error);
  }
}

fetchAndDisplayFriends();

const scrollToTop = function () {
  window.scrollTo(0, 0);
};

const scrollToBottom = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

downArrow.onclick = scrollToBottom;
upArrow.onclick = scrollToTop;
