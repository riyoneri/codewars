export function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLocaleLowerCase();
}

export function generateChatRoomNames(users: string[]): string[] {
  if (users.length === 0) return [];
  let returnArr: string[] = [];

  users.forEach((user, index) => {
    const reg = new RegExp(user, "ig");
    let names = user.split(" ");
    if (users.join("").match(reg)!.length > 1) {
      return returnArr.push(
        `${capitalise(names[0])}${
          names[1] ? " " + capitalise(names[1][0]) : ""
        }`
      );
    }
    returnArr.push(capitalise(names[0]));
  });

  return returnArr;
}
