(() => {
  const secondHand = document.querySelector(".clock-hand.seconds");
  const minuteHand = document.querySelector(".clock-hand.minutes");
  const hourHand = document.querySelector(".clock-hand.hours");
  let previousHours, previousMinutes;

  function setDate() {
    const now = new Date();
    const currentSeconds = now.getSeconds();
    const currentMinutes = now.getMinutes();
    const currentHours = now.getHours();

    const secondsDegrees = (currentSeconds * 6) + 90;
    const minutesDegrees = (currentMinutes * 6) + 90;
    const hoursDegrees = ((currentHours - 12) * 30) + 90;


    /** Handle Seconds */
    rotateHand(secondHand, secondsDegrees);

    /** Handle Minutes */
    if (currentMinutes !== previousMinutes) {
      rotateHand(minuteHand, minutesDegrees);
    }

    /** Handle Hours */
    if (currentHours !== previousHours) {
      rotateHand(hourHand, hoursDegrees);
    }
  }

  function rotateHand(element, newRotation) {
    // Remove the transition effect just before the clock rotates to 0
    // This is neccessary to prevent jumping in the animation
    if (element.classList.contains("no-transition")) {
      element.classList.remove("no-transition");
    }

    if (newRotation === 90) {
      element.classList.add("no-transition");
    }

    element.style.transform = `rotate(${newRotation}deg)`;
  }

  setInterval(setDate, 1000);
})();

