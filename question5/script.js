let john = { name: "john", surname: "Smith", id: 1 };
let pete = { name: "pete", surname: "Hunt", id: 2 };
let mary = { name: "mary", surname: "key", id: 3 };

let users = [john, pete, mary];

let usersInfo = (users) => {
  return users.map((item) => {
    return { fullName: `${item.name + item.surname}`, id: `${item.id}` };
  });
};
let usersMapped = usersInfo(users)
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName )  // John Smit.
