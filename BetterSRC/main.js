iDontWantToSeeTwitchEveryTimeILoginThanks();

function iDontWantToSeeTwitchEveryTimeILoginThanks() {
  if (window.location.href === "https://www.speedrun.com/" || window.location.href === "http://www.speedrun.com/") {
    const twitchPanel = document.getElementById('twitch')  
    if (twitchPanel) {
      twitchPanel.remove();
      document.getElementsByClassName('panel')[0].style.marginTop = '-40px';
    }
  }
}

// might add more later???