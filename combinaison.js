import { factorielle } from "./fatorielle.js"

const combinaison = (n ,p ) => {
    return factorielle(n) / (factorielle(n-p) * factorielle(p));
}
console.log(combinaison(8,5));
