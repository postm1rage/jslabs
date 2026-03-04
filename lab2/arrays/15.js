let books = {
  Пушкин: ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
  Есенин: ["Черный человек", "Анна Снегина"],
  Донцова: ["Крутые наследнички", "Убийство на даче", "Бриллиант мутной воды"],
};

for (let author in books) {
  console.log(author + ":");
  for (let i = 0; i < books[author].length; i++) {
    console.log("- " + books[author][i]);
  }
}
