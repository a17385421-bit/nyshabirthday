const screens = [...document.querySelectorAll(".screen")];
const hearts = document.getElementById("hearts");
const progress = document.getElementById("progressBar");

let current = 0;


/* =========================
   FLOATING HEARTS ❤️
========================= */

function spawnHeart() {

  const heart = document.createElement("span");

  heart.className = "float-heart";

  heart.textContent =
    Math.random() > 0.2 ? "♥" : "♡";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    10 + Math.random() * 28 + "px";

  heart.style.setProperty(
    "--drift",
    Math.random() * 180 - 90 + "px"
  );

  heart.style.setProperty(
    "--rot",
    Math.random() * 90 - 45 + "deg"
  );

  heart.style.animationDuration =
    8 + Math.random() * 10 + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 19000);
}


/* Initial hearts */

for (let i = 0; i < 18; i++) {

  setTimeout(() => {
    spawnHeart();
  }, i * 400);

}


/* Continuous hearts */

setInterval(() => {

  spawnHeart();

}, 750);


/* =========================
   PAGE NAVIGATION
========================= */

function show(id) {

  const nextScreen =
    document.getElementById(id);

  if (!nextScreen) return;

  screens.forEach(screen => {

    screen.classList.remove("active");

  });

  nextScreen.classList.add("active");

  current =
    screens.indexOf(nextScreen);

  if (progress) {

    progress.style.width =
      (current / (screens.length - 1) * 100) + "%";

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  /* Small heart transition */

  for (let i = 0; i < 8; i++) {

    setTimeout(() => {

      spawnHeart();

    }, i * 80);

  }

}


/* =========================
   OPEN SURPRISE ❤️
========================= */

const openBtn =
  document.getElementById("openBtn");

if (openBtn) {

  openBtn.onclick = () => {

    show("birthday");

  };

}


/* =========================
   NEXT BUTTONS
========================= */

document
  .querySelectorAll(".next")
  .forEach(button => {

    button.onclick = () => {

      const destination =
        button.dataset.next;

      if (destination) {

        show(destination);

      }

    };

  });


/* =========================
   VODKA JOKE 🍸
========================= */

const shotCount =
  document.getElementById("shotCount");

const drinkReaction =
  document.getElementById("drinkReaction");

const zeroBtn =
  document.getElementById("zeroBtn");

const suspiciousBtn =
  document.getElementById("suspiciousBtn");


if (zeroBtn) {

  zeroBtn.onclick = () => {

    if (shotCount) {

      shotCount.textContent = "0";

    }

    if (drinkReaction) {

      drinkReaction.textContent =
        "Hmmmmm… suspicious. 🤨 I believe you, Mommy. (I absolutely don't.) 😭";

    }

  };

}


if (suspiciousBtn) {

  suspiciousBtn.onclick = () => {

    const number =
      Math.floor(Math.random() * 5) + 1;

    if (shotCount) {

      shotCount.textContent =
        number;

    }

    if (drinkReaction) {

      drinkReaction.textContent =
        `According to my highly scientific investigation: ${number} suspicious shot${number > 1 ? "s" : ""}. 🍸😂`;

    }

  };

}


/* =========================
   SONG BUTTON 🎵
========================= */

const audio =
  document.getElementById("songAudio");

const playBtn =
  document.getElementById("playBtn");

if (playBtn) {

  playBtn.onclick = () => {

    if (!audio) return;

    audio.play()
      .then(() => {

        playBtn.innerHTML =
          "Playing for Mommy ♪";

      })
      .catch(() => {

        playBtn.innerHTML =
          "Add your song first ♪";

      });

  };

}


/* =========================
   NO BUTTON 😈
========================= */

const noBtn =
  document.getElementById("noBtn");

const answerReaction =
  document.getElementById("answerReaction");

let noMoves = 0;


if (noBtn) {

  noBtn.onclick = () => {

    noMoves++;

    const x =
      Math.random() * 180 - 90;

    const y =
      Math.random() * 100 - 50;

    noBtn.style.transform =
      `translate(${x}px, ${y}px)`;


    if (answerReaction) {

      if (noMoves < 3) {

        answerReaction.textContent =
          "Nice try 😭";

      } else {

        answerReaction.textContent =
          "Mommy, you're not escaping. 😌❤️";

      }

    }

  };

}


/* =========================
   YES BUTTON ❤️
========================= */

const yesBtn =
  document.getElementById("yesBtn");


if (yesBtn) {

  yesBtn.onclick = () => {

    if (answerReaction) {

      answerReaction.textContent =
        "I KNEW IT. ❤️";

    }


    /* Heart explosion */

    for (let i = 0; i < 45; i++) {

      setTimeout(() => {

        spawnHeart();

      }, i * 35);

    }


    setTimeout(() => {

      show("final");

    }, 1000);

  };

}


/* =========================
   FINAL P.S. SURPRISE 👀❤️
========================= */

const psBtn =
  document.getElementById("psBtn");

const psMessage =
  document.getElementById("psMessage");


if (psBtn) {

  psBtn.onclick = () => {

    if (psMessage) {

      psMessage.textContent =
        "Aur haan… mujhe abhi bhi lagta hai aaj tumne vodka pi hai. 👀🍸😂";

    }


    psBtn.textContent =
      "HAHA I KNEW IT 😭❤️";


    /* BIG HEART EXPLOSION */

    for (let i = 0; i < 80; i++) {

      setTimeout(() => {

        spawnHeart();

      }, i * 25);

    }


    setTimeout(() => {

      if (psMessage) {

        psMessage.textContent =
          "Okay okay… Happy Birthday again, Mommy. 🥹❤️";

      }

    }, 2800);

  };

}


/* =========================
   INITIAL PROGRESS
========================= */

if (progress) {

  progress.style.width = "0%";

}
