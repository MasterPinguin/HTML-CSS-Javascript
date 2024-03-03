function replaceWithGif(element) {
    var gifUrl = "imgg.gif";
    var maxLoops = 1000;
    
    var img = new Image();
    img.src = gifUrl;
    
    img.onload = function() {
      element.src = gifUrl;
      var loopCount = 0;
      
      var animationInterval = setInterval(function() {
        loopCount++;
        if (loopCount >= maxLoops) {
          clearInterval(animationInterval);
          element.src = "img.png";
        }
      }, img.duration * 1000);
    };
  }

  function replaceWithGiff(element) {
    var gifUrl = "img11.gif";
    var maxLoops = 3000;
    
    var img = new Image();
    img.src = gifUrl;
    
    img.onload = function() {
      element.src = gifUrl;
      var loopCount = 0;
      
      var animationInterval = setInterval(function() {
        loopCount++;
        if (loopCount >= maxLoops) {
          clearInterval(animationInterval);
          element.src = "img1.png";
        }
      }, img.duration * 1000);
    };
  }  

  var cvar = '0';
  var v = true;
  var ris = '0';

    function Press (n) {
      if(ris.length<7){
        if(cvar=='0'){
          cvar = n;
          ris = n;
        }else{
          cvar = cvar + n;
          ris = ris + n;
        }
        if(v==false){
          v=true;
          ris=n;
        }
        document.getElementById('Ris').textContent = ris;
        if(ris!='0'){document.getElementById('ac').textContent = 'C';}
        else{document.getElementById('ac').textContent = 'AC';}
      }
    };
    function Pressvi () {
      if(!ris.includes(",")){
        cvar = cvar + '.';
        ris = ris + ',';
      }
      document.getElementById('Ris').textContent = ris;
    };
    function Pressac () {
      let pos=0;
      if(ris=='0'){
        cvar = '0';
        ris = '0';
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("selected");
        }
      }
      else{
        ris = '0'
        document.getElementById('ac').textContent = 'AC';
        v= false;
        pos=cvar.indexOf('-'||'/'||'+'||'*');
        cvar = cvar.substring(0, pos+1);
      }
      document.getElementById('Ris').textContent = ris;
    };
    function Pressmp () {
      let si = '';
      cvar = cvar*-1;
      si = cvar;
      si = si.toString();
      si = si.replace('.', ',');
      ris = si;
      document.getElementById('Ris').textContent = ris;
    };
    function Pressc () {
      let cv=cvar;
      let pos=0;
      let si;
      while ((!isNaN(cv.charAt(pos)) || cv.charAt(pos)=='.') && pos<cv.length) {
        pos++;
      }
      pos++;
      cv = cv.substring(0, pos);
      si=eval((ris.replace(',', '.')) + '/100');
      if(pos==(cv.length+1)){cvar = si;}
      else{ cvar = cv + si;}
      si = si.toString();
      si = si.replace('.', ',');
      ris = si;
      document.getElementById('Ris').textContent = ris;
    };
    function Pressop (op) {
      cvar = cvar + op;
      v= false;
      document.getElementById('Ris').textContent = ris;
    };
    function Pressris () {
      if (Number.isInteger(eval(cvar))) {
        ris = eval(cvar);
        cvar = eval(cvar);
      }else{
        let y = (eval(cvar)).toString();
        let x = y.indexOf('.');
        let st = eval(cvar).toFixed(7-x);
        let def = (parseFloat(st)).toString();
        ris = def.replace('.', ',');
        cvar = def;
        v= false;
      }
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
      }
      document.getElementById('Ris').textContent = ris;
    };


    var myButton = document.getElementById("myButton");
    var myDiv = document.getElementById("myDiv");
    var intermediateContent = `
      <!-- Contenuto intermedio -->
      <div class="nerono"> 
        <button type="button" class="buttonupp"> <img class="fot" src="ft.png"> </button>
        <p class="mela" >  </p>
      </div>
    `;
    var finalContent = `
      <!-- Contenuto finale -->
      <div class="nero"> 
        <button type="button" class="buttonuppp"> <img class="fot" src="ft.png"> </button>
      </div>
    `;
    var timeoutDuration = 4000; // Durata in millisecondi (3 secondi)

    var originalContent = myDiv.innerHTML;
    var currentContent = originalContent;
    var timer;

    function changeContent() {
      if (currentContent === originalContent) {
        currentContent = intermediateContent;
        myDiv.innerHTML = currentContent;
        timer = setTimeout(changeContent, timeoutDuration);
      } else if (currentContent === intermediateContent) {
        currentContent = finalContent;
        myDiv.innerHTML = currentContent;
      }
    }
    function changeContentt() {
      if (currentContent === finalContent) {
        currentContent = intermediateContent;
        myDiv.innerHTML = currentContent;
        timer = setTimeout(changeContentt, timeoutDuration);
      } else if (currentContent === intermediateContent) {
        currentContent = originalContent;
        myDiv.innerHTML = currentContent;
      }
    }

    myButton.addEventListener("click", function() {
      clearTimeout(timer); // Interrompe il timeout corrente, se presente
      if (currentContent === originalContent) {changeContent();}
      else{changeContentt();}
    });

  
    var buttons = document.getElementsByClassName("button2");

  function handleClick() {
    var isButtonSelected = this.classList.contains("selected");

    // Rimuovi la classe "selected" da tutti i bottoni
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }

    // Se il bottone non era già selezionato, aggiungi la classe "selected"
    if (!isButtonSelected) {
      this.classList.add("selected");
    }
  }

  // Aggiungi il gestore di eventi click a tutti i bottoni
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
  }


  var button = document.getElementsByClassName("buttonmut");

  function handleClickk() {
    var isButtonSelected = this.classList.contains("selected");

    // Rimuovi la classe "selected" da tutti i bottoni
    for (var i = 0; i < button.length; i++) {
      button[i].classList.remove("selected");
    }

    // Se il bottone non era già selezionato, aggiungi la classe "selected"
    if (!isButtonSelected) {
      this.classList.add("selected");
    }
  }

  // Aggiungi il gestore di eventi click a tutti i bottoni
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", handleClickk);
  }

  var muto = document.getElementById("muto");
  var imgmuto = document.getElementById("imgmuto");
  var displayDuration = 4000; // Durata di visualizzazione in millisecondi (3 secondi)

  var images = [
    "si.png",
    "no.png"
  ];

  var currentImageIndex = -1;
  var currentImage = null;

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;

    var imageElement = document.createElement("img");
    imageElement.src = images[currentImageIndex];

    if (currentImage) {
      currentImage.classList.remove("mut"); // Rimuovi lo stile dall'immagine precedente, se presente
    }

    imgmuto.innerHTML = "";
    imgmuto.appendChild(imageElement);

    setTimeout(function () {
      imageElement.style.display = "none";
    }, displayDuration);

    currentImage = imageElement; 
    currentImage.classList.add("mut");
  }

  muto.addEventListener("click", showNextImage);

  function updateOrario() {
    var data = new Date();
    var ore = data.getHours();
    var minuti = data.getMinutes();
    // var secondo = data.getSeconds();
    if(ore<10){ore='0'+ore}
    if(minuti<10){minuti='0'+minuti}
    var orario = ore + ":" + minuti;
    document.getElementById("orario").innerHTML = orario;
  }

  // Aggiorna l'orario ogni secondo
  setInterval(updateOrario, 1000);