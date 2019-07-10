function getUserData() {

    var rand = Math.floor(Math.random() * authorsList.length);

    function str_rand() {
            var result       = '';
            var words        = 'qwertyuiopasdfghjklzxcvbnm';
                for( var i = 0; i < 7; ++i ) {
                    var position = Math.floor ( Math.random() * words.length - 1 );
                    result = result + words.substring(position, position + 1);
                }
            return result;
        }

    var event = new CustomEvent("shout", {
        detail: { name: authorsList[rand].name,
                  text: str_rand()
                },
        bubbles: true,
        cancelable: true
      });

    dispatchEvent(event);
};

function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)*1000;
}

var timeinterval = getRandomInt(1, 5);

var timerId = setInterval(function() {
  getUserData();
}, timeinterval);

input.onclick = function() {
  setTimeout(function() {
  clearInterval(timerId);
});
}
