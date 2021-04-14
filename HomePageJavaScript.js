function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
  var number =0;
  function addOne(){
    document.getElementById("addTo").innerHTML = number;
    number++;
  }

  var darkMode = false;
  function changeBodyColor(){
    var backgroundColor;
    var textColor;
      if(darkMode === false){
          backgroundColor = "black";
          textColor = "White";
          darkMode = true;
          document.body.style.background = backgroundColor;
          document.getElementsByTagName(h1).style.color=textColor;
      }
      else{
          darkMode = false;
          backgroundColor = "white";
          textColor = "Black";
          document.body.style.background= backgroundColor;
          document.getElementsByTagName(h1).style.color=textColor;
      }
  }