// challenge.ts

//Déclaration interface User avec des propriété typées
interface User {
  name: string;
  age: number;
  //   birthday: string;
}

//Déclaration des types pour le parametre et le retour de la fonction prettyPrinWilder
const prettyPrintWilder = (users: User[]): void => {
  users.map((user) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

// Typer wilders
const wilders: User[] = [];
const user1 = { name: "Pierre", age: 23 };
//adapter user2 pour qu'il n'affiche plus d'erreur
const user2 = { name: "Paul", age: 22 };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
