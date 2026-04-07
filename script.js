/* Hamburger Menü */

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

/* Google-Kalender / Belegungsübersicht */
function loadCalendar() {
  document.getElementById("calendar").innerHTML =
    '<iframe src="https://calendar.google.com/calendar/embed?src=c_3cefeec9444682c8c041438c3617d1929b203faa276b41f3b27dbbf1a57d6fd5%40group.calendar.google.com&ctz=Europe%2FBerlin" style="border: 0" width="870" height="600" frameborder="0" scrolling="no" class="google-kalender" ></iframe>';

  document.querySelector(".calendar-btn").style.display = "none";
  document.querySelector(".calendar-info").style.display = "none";
}
