// Clock
const hour = document.getElementById('clock-hour');
const minutes = document.getElementById('clock-minutes');
const seconds = document.getElementById('clock-seconds');

const clock = () => {
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  // Add a rotation to elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000);

// Clock & date text
const textHour = document.getElementById('text-hour');
const textMinutes = document.getElementById('text-minutes');
const textAmPm = document.getElementById('text-ampm');
const dateWeek = document.getElementById('date-day-week');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

const clockText = () => {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ampm;
  let dayweek = date.getDay();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // Change the hours from 24 to 12 hours and establish whether it is AM or PM
  if (hh >= 12) {
    hh -= 12;
    ampm = 'PM';
  } else {
    ampm = 'AM';
  }

  // Detect when it's 0 AM and transform to 12 AM
  if (hh == 0) {
    hh = 12;
  }

  // Show a zero before hours
  if (hh < 10) {
    hh = `0${hh}`;
  }

  // Show time
  textHour.innerHTML = `${hh}:`;

  // Show a zero before minutes
  if (mm < 10) {
    mm = `0${mm}`;
  }

  // Show minutes
  textMinutes.innerHTML = mm;

  // Show am or pm
  textAmPm.innerHTML = ampm;

  // Show the name of the day of the week
  let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  // Get the months of the year and show it
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Show the day, the month and the year
  dateDay.innerHTML = day;
  dateWeek.innerHTML = `${week[dayweek]}`;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;
};
setInterval(clockText, 1000);

// Drak/Light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme,
  );
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
