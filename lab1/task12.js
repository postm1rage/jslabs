let crows = 7;

switch (crows) {
    case 1:
        console.log("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        console.log("На ветке сидит " + crows + " вороны");
        break;
    default:
        console.log("На ветке сидит " + crows + " ворон");
}