const screens = [...document.querySelectorAll(".screen")];
const hearts = document.getElementById("hearts");
const progress = document.getElementById("progressBar");

let current = 0;


/* FLOATING HEARTS ❤️ */

function spawnHeart() {

  const heart = document.createElement("span");

  heart.className = "float-heart";

  heart.textContent =
    Math.random() > 0.22 ? "♥" : "♡";

  heart.style.left =
    (Math.random() * 100) + "vw";

  heart.style.fontSize =
    (10 + Math.random() * 28) + "px";

  heart.style.setProperty(
    "--drift",
    (Math.random() * 180 - 90) + "px"
  );

  heart.style.setProperty(
    "--rot",
    (Math.random() * 90 - 45) + "deg"
  );

  heart.style.animationDuration =
    (8 + Math.random() * 10) + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 19000);
}


/* Start hearts */

for (let i = 0; i < 16; i++) {

  setTimeout(
    spawnHeart,
    i * 450
  );

}

setInterval(
  spawnHeart,
  700
);


/* PAGE TRANSITIONS */

function show(id) {

  const next =
    document.getElementById(id);

  if (!next) return;

  screens.forEach(screen => {

    screen.classList.remove("active");

  });

  next.classList.add("active");

  current =
    screens.indexOf(next);

  progress.style.width =
    ((current) /
    (screens.length - 1) * 100) + "%";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  /* Heart burst during transition */

  for (let i = 0; i < 7; i++) {

    setTimeout(
      spawnHeart,
      i * 80
    );

  }

}


/* OPEN SURPRISE ❤️ */

document
  .getElementById("openBtn")
  .onclick = () => {

    show("birthday");

  };


/* ALL NEXT BUTTONS */

document
  .querySelectorAll(".next")
  .forEach(button => {

    button.onclick = () => {

      show(
        button.dataset.next
      );

    };

  });


/* VODKA JOKE 🍸 */

const shotCount =
  document.getElementById("shotCount");

const reaction =
  document.getElementById("drinkReaction");


document
  .getElementById("zeroBtn")
  .onclick = () => {

    shotCount.textContent = "0";

    reaction.textContent =
      "Hmmmmm… suspicious. 🤨 I believe you, Mommy. (I absolutely don't.) 😭";

  };


document
  .getElementById("suspiciousBtn")
  .onclick = () => {

    const number =
      Math.floor(Math.random() * 5) + 1;

    shotCount.textContent =
      number;

    reaction.textContent =
      `According to my highly scientific investigation: ${number} suspicious shot${number > 1 ? "s" : ""}. 🍸😂`;

  };


/* SONG PLAYER 🎵 */

const audio =
  document.getElementById("songAudio");

const playButton =
  document.getElementById("playBtn");


playButton.onclick = () => {

  audio
    .play()
    .then(() => {

      playButton.innerHTML =
        "Playing for Mommy ♪";

    })
    .catch(() => {

      playButton.innerHTML =
        "Add assets/song.mp3 first";

    });

};


/* NO BUTTON 😈 */

const noButton =
  document.getElementById("noBtn");

const answer =
  document.getElementById("answerReaction");

let noMoves = 0;


noButton.onclick = () => {

  noMoves++;

  const x =
    Math.random() * 180 - 90;

  const y =
    Math.random() * 100 - 50;

  noButton.style.transform =
    `translate(${x}px, ${y}px)`;


  if (noMoves < 3) {

    answer.textContent =
      "Nice try 😭";

  } else {

    answer.textContent =
      "Mommy, you're not escaping. 😌❤️";

  }

};


/* YES BUTTON ❤️ */

document
  .getElementById("yesBtn")
  .onclick = () => {

    answer.textContent =
      "I KNEW IT. ❤️";


    /* Heart explosion */

    for (let i = 0; i < 35; i++) {

      setTimeout(
        spawnHeart,
        i * 40
      );

    }


    setTimeout(() => {

      show("final");

    }, 900);

  };

/* FINAL P.S. SURPRISE 👀❤️ */

const psBtn = document.getElementById("psBtn");
const psMessage = document.getElementById("psMessage");

if (psBtn) {
  psBtn.onclick = () => {

    psMessage.textContent =
      "Aur haan… mujhe abhi bhi lagta hai aaj tumne vodka pi hai. 👀🍸😂";

    psBtn.innerHTML = "HAHA I KNEW IT 😭❤️";

    for (let i = 0; i < 45; i++) {
      setTimeout(() => {
        spawnHeart();
      }, i * 35);
    }

    setTimeout(() => {
      psMessage.textContent =
        "Okay okay… Happy Birthday again, Mommy. 🥹❤️";
    }, 2500);

  };
}
/* FINAL P.S. SURPRISE 👀❤️ */

const psBtn = document.getElementById("psBtn");
const psMessage = document.getElementById("psMessage");

if (psBtn) {
  psBtn.onclick = () => {

    psMessage.textContent =
      "Aur haan… mujhe abhi bhi lagta hai aaj tumne vodka pi hai. 👀🍸😂";

    psBtn.textContent = "HAHA I KNEW IT 😭❤️";

    for (let i = 0; i < 45; i++) {
      setTimeout(() => {
        spawnHeart();
      }, i * 35);
    }

    setTimeout(() => {
      psMessage.textContent =
        "Okay okay… Happy Birthday again, Mommy. 🥹❤️";
    }, 2500);

  };
}
/* INITIAL PROGRESS */

progress.style.width = "0%";
