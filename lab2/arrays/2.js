let countries = ["Россия", "США", "Китай", "Германия"];
let population = [140000000, 300000000, 1200000000, 60000000];

function showCountries(countries, population) {
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i] + ": " + population[i]);
  }
}

showCountries(countries, population);

console.log("");

for (let i in countries) {
  console.log(countries[i] + ": " + population[i]);
}
