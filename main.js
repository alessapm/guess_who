document.addEventListener('DOMContentLoaded', function() {
//PROBLEM- each click event is still trickering old click events
//try using .removeEventListener() OR try toggling a true/false state
var questions = ['Is your person female?', 'Is your person an actor?','Is your person deceased?', 'Does your person have dark hair?', 'Does your person have facial hair?','Has this person won an Oscar?'];
var yes = document.getElementById('yesButton');
var no = document.getElementById('noButton');
var conversation = document.getElementById('conversation')
var females = document.getElementsByClassName('female');
var males = document.getElementsByClassName('male');
var actor = document.getElementsByClassName('actor');
var nonactor = document.getElementsByClassName('nonactor');
var dead = document.getElementsByClassName('dead');
var alive = document.getElementsByClassName('alive');
var brunette = document.getElementsByClassName('brunette');
var blond = document.getElementsByClassName('blond');
var facial = document.getElementsByClassName('facial');
var nofacial = document.getElementsByClassName('nofacial');
var oscar = document.getElementsByClassName('oscar');
var non = document.getElementsByClassName('non');

var q1set = true;
var q2set = true;
var q3set = true;
var q4set = true;
var q5set = true;

var checkWin = function(){
  console.log('checkWin activated')
  counter = 0;
  document.querySelectorAll('.face').forEach(function(each){
    if (each.style.background === 'dimgray'){
      counter++
    };

    // console.log(document.querySelectorAll('.face'), ' is querySelector all for face');
    console.log('counter equals ' + counter)

    if (counter === 11){
      //fix setTimeOut() here
      setTimeout(function(){
         document.getElementById('win-screen').style.visibility = 'visible';
       }, 1000);

    }
  })
}


var nope1 = function(){
      console.log('clicked no');
      for (i =0; i< females.length; i++){
        females[i].style.background = 'dimgray';
      };
      secondQ();
    };
var yes1 = function(){
      console.log('clicked yes for Q1');
      for (i =0; i< males.length; i++){
       males[i].style.background = 'dimgray';
      };
      secondQ();
    };

var nope2 = function(){
    console.log('no clicked for is it an actor')
    for (var j = 0; j < actor.length; j++){
      actor[j].style.background = 'dimgray';
    };
    checkWin();
    thirdQ()
    };

var yes2 = function(){
    console.log('yes clicked for is it an actor')
    for (var j = 0; j < nonactor.length; j++){
      nonactor[j].style.background = 'dimgray';
    };
    checkWin()
    thirdQ();
  };

var nope3 = function(){
    for (var i = 0; i < dead.length; i++){
      dead[i].style.background = 'dimgray';
    };
      checkWin();
      fourthQ();
  };

var yes3 = function(){
    for (var i = 0; i < alive.length; i++){
      alive[i].style.background = 'dimgray';
    };
      checkWin();
      fourthQ();
  };

var nope4 = function(){
    for (var i = 0; i < brunette.length; i++){
      brunette[i].style.background = 'dimgray';
    };
    checkWin();
    fifthQ()
  };


var yes4 = function(){
    for (var i = 0; i < blond.length; i++){
      blond[i].style.background = 'dimgray';
    };
    checkWin();
    fifthQ()
  };

var nope5 = function(){
      for (var i = 0; i < facial.length; i++){
        facial[i].style.background = 'dimgray';
      };
      checkWin();
      sixthQ();
    };

var yes5 = function(){
      for (var i = 0; i < nofacial.length; i++){
        nofacial[i].style.background = 'dimgray';
      };
      checkWin();
      sixthQ();
    };

var nope6 = function(){
      for (var i = 0; i < oscar.length; i++){
        oscar[i].style.background = 'dimgray';
      };
      checkWin();
    };

var yes6 = function(){
      for (var i = 0; i < non.length; i++){
        non[i].style.background = 'dimgray';
      };
      checkWin();
    };

//does your person have an Oscar?
var sixthQ = function(){
   no.removeEventListener('click', nope5);
  yes.removeEventListener('click', yes5);

  var q6 = document.createElement('p');
  q6.textContent = questions[5];
  conversation.appendChild(q6);

  yes.addEventListener('click', yes6)

  no.addEventListener('click', nope6)
};

//does your person have facial hair?
var fifthQ = function(){
  no.removeEventListener('click', nope4);
  yes.removeEventListener('click', yes4);

  var q5 = document.createElement('p');
  q5.textContent = questions[4];
  conversation.appendChild(q5);

  yes.addEventListener('click', yes5)

  no.addEventListener('click', nope5)

}; //ends fifthQ

//does your person have dark hair?
var fourthQ = function(){
  no.removeEventListener('click', nope3);
  yes.removeEventListener('click', yes3);

  var q4 = document.createElement('p');
  q4.textContent = questions[3];
  conversation.appendChild(q4);

  yes.addEventListener('click', yes4)

  no.addEventListener('click', nope4)
  }
 // ends fourth Q

//is your person deceased?
var thirdQ = function(){
  no.removeEventListener('click', nope2);
  yes.removeEventListener('click', yes2);
  var q3 = document.createElement('p');
  q3.textContent = questions[2];
  conversation.appendChild(q3);

  yes.addEventListener('click', yes3)

  no.addEventListener('click', nope3)

}

//is your person an actor?
var secondQ = function(){
  no.removeEventListener('click', nope1);
  yes.removeEventListener('click', yes1);

    var q2 = document.createElement('p');
  q2.textContent = questions[1];
  conversation.appendChild(q2);

  yes.addEventListener('click', yes2);

  no.addEventListener('click', nope2);

}; //closes second Q

// is your person female?
var firstQ = function(){
  console.log('firstQ is triggered')
    var q1 = document.createElement('p');
    q1.textContent = questions[0];
    conversation.appendChild(q1);

    yes.addEventListener('click', yes1);

    no.addEventListener('click', nope1);

}; //end of firstQ

firstQ()


document.getElementById('win-screen').on('click', function(){
  document.getElementById('win-screen').style.visibility = 'none';
  document.getElementById('win-screen').style.cursor = 'pointer';
})


}); //this closes out the DOM loaded event
