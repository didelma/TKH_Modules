//codePen link: https://codepen.io/didelma/pen/KKmxBda?editors=0012

const quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "

const splits = quote.split(' ');

console.log(splits);
console.log(quote.split(' ').map(w => w.replace(/[sS]/g, '$')));
console.log(quote.replace(/[sS]/g, "$"));