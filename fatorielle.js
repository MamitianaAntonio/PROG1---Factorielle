export const factorielle = (number ) => {
    if (number == 1) {
        return 1;
    }
    return number * factorielle(number - 1);
}