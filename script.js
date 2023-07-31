//array of messages
const messages = ['A Flea can jump 350 times its body length.',
'Hummingbirds are the only birds that can fly backwards',
'Crocodiles cannot stick their tongue out.',
'Starfish do not have a brain.',
'Slugs have 4 noses.',
'Only female mosquitoes bite',
'Polar bear skin is black!',
'The only mammal capable of flight is the bat.'];
  //array greeting text
const greetingText =  [
        'WELCOME TRIVIA: ', 'TIP OF THE DAY: ', 'DID YOU KNOW THAT... '
    ];

    const concludingText = "Welcome to nature's lane...";

  //function to return random greeting text
const rndGreeting = (arr) =>  arr[Math.floor(Math.random() * arr.length)];


//function to display random message
const displayRandomMessage = (headerArr, detailArr, footerStr) => {

    let rnd = Math.floor(Math.random() * (detailArr.length));
    console.log(`
        ${headerArr} 
        ${detailArr[rnd].toUpperCase()}
        ${footerStr}`);
}

//run the program
 displayRandomMessage(rndGreeting(greetingText), messages, concludingText);

