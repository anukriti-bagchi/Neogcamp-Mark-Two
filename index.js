
//read Input
const chalk = require('chalk');
var readlineSync = require('readline-sync');

const log = console.log;
log(chalk.black.bgCyanBright('Hello there! Welcome to the HARRY POTTER quiz'));
var userName = readlineSync.question('\nLet me know your name here : ');

var score = [0,0], k,j ;
 
log(chalk.bgBlackBright.bgBlackBright(`\nHey ${userName} , let's check if you are the biggest Potterhead?🤔
Come on make the Harry Potter fandom proud!!❤\n`));
log(chalk.yellowBright(`Current Score:  ${score[0]}`));

//function
function play(question,answer,k)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    log(chalk.green('Congrats! You are right..🤩\n'));
    score[k]++;
    log(chalk.yellowBright(`Current Score:  ${score[k]}
    -----------------------------------------------------`));
  }
  else
  {
    log(chalk.magenta('Sorry,Wrong answer...😢\n'));
    score[k]--;
    log(chalk.yellowBright(`Current Score:  ${score[k]}`));  }
}
//array of objects 
var questions =[
  {
    question: chalk.red(`
      What spell did Harry use to kill Lord Voldemort?

        a) Expecto Patronum.
        b) Expelliarmus.
        c) Avada Kedavra.
        d) Accio\n`),
    answer:"b"
  },
  {
    question:chalk.red(`
     'Wit beyond measure is man's greatest treasure' is the  motto of which house?

       a) Gryffindor
       b) Hufflepuff
       c) Slytherin
       d) Ravenclaw\n`),
    answer:"d"
  },
  {
    question:chalk.red(`
     What was the name of the joke shop founded by the Weasley twins at 93 Diagon Alley?
   
      a) Weasley’s Witchcraft Wonders
      b) Weasley’s Worldwide Whompers
      c) Weasley’s Wicked Whatsits
      d) Weasley’s Wizard Wheezes\n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    Who saved a centaur from being strangled by Professor Umbridge in the Forbidden Forest??

    a) Grawp
    b) Buckbeak
    c) Hagrid
    d) Luna\n`),
    answer:"a"
  },
  {
    question:chalk.red(`
    What position does Harry play on his Quidditch team? 

    a) Chaser
    b) Keeper
    c) Bludger
    d) Seeker\n`),
    answer:"d"
  }

];

var questions2 =[
  {
    question: chalk.yellow(`
    Who poses as Mad-Eye Moody, Harry’s 4th year Defense Against the Dark Arts professor? 

    a) Voldemort
    b) Peter Pettigrew
    c) Barty Crouch Jr.
    d) Sirius Black\n`),
    answer:"c"
  },
  {
    question: chalk.yellow(`
    Albus Dumbledore destroyed which Horcrux?

    a) Slytherin’s locket
    b) Nagini
    c) Hufflepuff’s cup
    d) Marvolo Gaunt’s ring\n`),
    answer:"d"
  },
  {
    question:chalk.yellow(`
    Finish the inscription on Dobby’s tombstone: ‘Here lies Dobby…?

    a) ‘A true friend’
    b) ‘The best servant’
    c) ‘A free Elf’
    d) ‘Master of socks’\n`),
    answer:"c"
  }
];

//data of high scores for score1
var highSCORES=
[
  {
    name:"Anushree",
    scoree:4
  },
  {
    name:"Kritika",
    scoree:2
  }
]

var highSCORES2=
[
  {
    name:"Sanjana",
    scoree:2
  }
]

//loop around object
for(var i =0; i<questions.length;i++)
{
  var curr = questions[i];
  play(curr.question, curr.answer,k = 0);
}

console.log('Here we finish the quiz!!');

if(score[0]>=4)
{
log(chalk.greenBright(`Damn you are true fan! You scored : ${score[0]}`));

console.log('You deserve to be in the Gryffindor House.')
for(var i=1;i<highSCORES.length;i++)
{
  var curr = highSCORES[i];
  if(curr.scoree<score[0]){
       console.log('\nCongrats! You are the highest scorer in first round' );
      }
    }
    console.log('\nNow to check if you are a diehard fan we have bonus round!!');
    var ans = readlineSync.question('Type yes/no : ');
    if(ans.toLowerCase()==="yes")
    {
      for(var i =0; i<questions2.length;i++)
      {
      var curr2 = questions2[i];
      play(curr2.question, curr2.answer,k = 1);
      }
      log(chalk.blueBright("Now you are the winner of Hogwarts House Cup"));
      console.log("You scored:"+ score[1]);

      for(var i=0;i<highSCORES2.length;i++)
      {
      var curr2 = highSCORES2[i];
      if(curr2.scoree<score[1])
        {
        console.log('Congrats! You have beaten '+ curr2.name + " " + "in bonus round" );
        console.log('Please send your winning screenshot!')
        }
      }
      console.log("!!😎");
    }
      else
      {
        log(chalk.green('Oops , we will wait for you!'));
      }
    }

  else
  {
    log(chalk.yellow('no worry! Your score is:'+ score[0]));
    log(chalk.redBright.bgWhite('You can re-watch Harry Potter and come back anytime 😉'));
  }