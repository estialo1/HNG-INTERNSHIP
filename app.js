const day = document.querySelector('.day')
const time = document.querySelector('.time')


function updateDateTime() {
  const now = new Date();
  const utcDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
                          now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

  const formattedDate = utcDate.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayOfWeek = utcDate.toLocaleDateString("en-US", { weekday: 'long' });

  const formattedTime = utcDate.toLocaleTimeString("en-US", {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC'
  });
day.textContent =dayOfWeek
time.textContent =formattedTime
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
