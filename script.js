//array of messages
const messages = ['A Flea can jump 350 times its body length.',
'Hummingbirds are the only birds that can fly backwards',
'Crocodiles cannot stick their tongue out.',
'Starfish do not have a brain.',
'Slugs have 4 noses.',
'Only female mosquitoes bite',
'Polar bear skin is black!',
'The only mammal capable of flight is the bat.',]

//variable to store random message
const displayRandomMessage = (arr) => {
    let rnd = Math.floor(Math.random() * (arr.length));
    console.log(`TIP FOR THE DAY:
        ${arr[rnd]} `);
}

//run the program

displayRandomMessage(messages);
// let i = 500;
// for(let i = 1; i <= 500; i++)
// {
// displayRandomMessage(messages);

// }
