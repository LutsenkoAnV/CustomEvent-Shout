addEventListener("shout", function(event) {

    var div3 = document.createElement('div');
    div3.className = 'shout';
    div3.style.background = '#F08080';
    div3.innerHTML = event.detail.name + ' shouts '  + event.detail.text;
    document.body.appendChild(div3);

    setTimeout(function() {
      div3.style.background = '';
    }, 2000);

    var name = event.detail.name;

    if (!counts.hasOwnProperty(name)) {
      var div2 = document.createElement('div');
      div2.id = name;
      console.log(div2);
      var container = document.querySelector('.counts');
      container.appendChild(div2);
      counts[name] = 0;
    };

    var currentcount = counts[name];

    function count() {
      counts[name] = currentcount + 1;
    };
    count();

   console.log(counts[name]);

   var currentdiv = document.getElementById(name)

   console.log(currentdiv);

   currentdiv.innerHTML = name + '    ' + counts[name];

   console.log(counts);

  }, false);
