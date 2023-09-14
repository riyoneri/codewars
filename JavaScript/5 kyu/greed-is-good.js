function score(dice) {
  dice.sort((a, b) => a - b);
  dice = dice.join("");

  let total = 0;
  for (let i = 1; i <= 6; i++) {
    const occurences = [...dice.matchAll(i)].length;
    switch (i) {
      case 1:
        if (occurences < 3) {
          total += occurences * 100;
        } else {
          total += 1000;
          total += occurences - 3 === 3 ? 1000 : (occurences - 3) * 100;
        }
        break;

      case 2:
        if (occurences >= 3) {
          occurences === 6 ? (total += 400) : (total += 200);
        }
        break;

      case 3:
        // if (occurences >= 3) {
        //   occurences === 6 ? (total += 600) : (total += 300);
        // };

        if(occurences === 3) total += 300;
        break;

      case 4:
        if (occurences >= 3){
          occurences === 6 ? (total += 800) : (total += 400);
        }
        break;

      case 5:
        if (occurences < 3) {
          total += occurences * 50;
        } else {
          total += 500;
          total += occurences - 3 === 3 ? 500 : (occurences - 3) * 50;
        }
        break;

      case 6:
        if (occurences >= 3) {
          occurences === 6 ? (total += 1200) : (total += 600);
        }
        break;
      default:
        break;
    }
  }

  // return total
  console.log(total);
}
score([2, 3, 4, 6, 2]); //0
score([4, 4, 4, 3, 3]); //400
score([2, 4, 4, 5, 4]); //450
score([1, 1, 1, 3, 3]); //
score([1, 1, 1, 1, 3]); //
score([3, 3, 3, 3, 3]); //

