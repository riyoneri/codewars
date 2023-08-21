export function amIAfraid(day: string, num: number): boolean {
  switch (day) {
    case "Monday":
      if (num === 12) return true;
      return false;

    case "Tuesday":
      if (num > 95) return true;
      return false;

    case "Wednesday":
      if (num === 34) return true;
      return false;

    case "Thursday":
      if (num === 0) return true;
      return false;

    case "Friday":
      if (num % 2 === 0) return true;
      return false;

    case "Saturday":
      if (num === 56) return true;
      return false;

    default:
      if (num === 666 || num === -666) return true;
      return false;
  }
}

// console.log(amIAfraid("Monday", 13));
// console.log(amIAfraid("Sunday", -666));
