export function shuffle(a : any[]) {
  //Shuffle array fuction 
  // We use a for where in i we save the length of the array and it will substract every time.
  // Then in j we get a random number between 0 and the actual valor of i.
  // In the array we change the position i and j for j and i.
  // EXAMPLE:
  // if i=8 and j=2 the value in position 8 will become the valor of position 2 and viceversa.
  // [a[8], a[2]] = [a[2], a[8]];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
