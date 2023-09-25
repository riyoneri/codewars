export function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLocaleLowerCase();
}

export function splitAndReturn(
  s: string,
  location: number = 0,
  index?: number
): string {
  let str = s.toLocaleLowerCase().split(" ");
  console.log(index && str[location][index - 1]);
  return index
    ? capitalise(str[location][index - 1])
    : capitalise(str[location]);
}

export function generateChatRoomNames(users: string[]): string[] {
  if (users.length === 0) return [];

  return users
    .map((user) => {
      if (
        users.filter(
          (usr) => splitAndReturn(usr, 0) === splitAndReturn(user, 0)
        ).length <= 1
      ) {
        return capitalise(user.split(" ")[0]);
      }

      if (
        users.filter(
          (usr) =>
            splitAndReturn(usr, 0) === splitAndReturn(user, 0) &&
            splitAndReturn(usr, 1, 1) === splitAndReturn(user, 1, 1)
        ).length === 1
      ) {
        return `${splitAndReturn(user, 0)} ${splitAndReturn(user, 1, 1)}`;
      }
      return `${splitAndReturn(user, 0)} ${splitAndReturn(user, 1)}`; //
    })
    .sort();
}

// console.log(generateChatRoomNames([]));
// console.log(generateChatRoomNames(["Joe Bloggs"]));
// console.log(generateChatRoomNames(["JOE Bloggs"]));
// console.log(generateChatRoomNames(["Joe Bloggs", "John Smith"]));
// console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe"]));
// console.log(
//   generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"])
// );
console.log(
  generateChatRoomNames([
    "Joe Bloggs",
    "John Smith",
    "Jane Doe",
    "Jane Bloggs",
    "John Scott",
  ])
);

// Check if array is 0 return empty string
// if one name exitst return that one name
// Loop in all names and find:
//  if 2 names exist with same front names return n
//  if 3 names exist with same front names and starting second later return
