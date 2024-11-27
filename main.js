function dates() {
    // Set the reference date to January 21, 2005
    var x = new Date("Jan 21 2005 00:00:00");
    var y = new Date(); // Current date and time
    let seconds = Math.abs(x - y) / 1000; // Time difference in seconds

    var day = seconds / (24 * 3600); // Total days

    hh = seconds % (24 * 3600); // Remaining seconds after extracting days
    var hour = hh / 3600; // Total hours in the remainder
  
    hh %= 3600; // Remaining seconds after extracting hours
    var minutes = hh / 60; // Total minutes in the remainder
  
    hh %= 60; // Remaining seconds
    var rseconds = hh;

    // Update the HTML with the calculated time values
    document.getElementById('days').innerHTML = parseInt(day);
    document.getElementById('hours').innerHTML = parseInt(hour);
    document.getElementById('minutes').innerHTML = parseInt(minutes);
    document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

// Run the `dates` function every second
setInterval(dates, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });
}
