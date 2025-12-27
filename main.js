$(function() {
 let timerId;
  let elapsedTime = 0;
  function formatTime(milliseconds) {
    const ms = Math.floor((milliseconds % 1000) / 10);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const formattedMs = ms.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMs}`;
  }
  function updateButtons(start, stop, reset) {
    $('#start_button').prop('disabled', !start); 
    $('#stop_button').prop('disabled', !stop);   
    $('#reset_button').prop('disabled', !reset); 
  }
  $('#start_button').on('click', function() {
    updateButtons(false, true, false);
    timerId = setInterval(function() {
      elapsedTime += 10;
      $('#timer_display').text(formatTime(elapsedTime));
    }, 10);
  });
  $('#stop_button').on('click', function() {
    updateButtons(true, false, true);
    clearInterval(timerId);
  });
  $('#reset_button').on('click', function() {
    updateButtons(true, false, false);
    clearInterval(timerId);
    elapsedTime = 0;
    $('#timer_display').text(formatTime(elapsedTime));
  });
  updateButtons(true, false, false);
});