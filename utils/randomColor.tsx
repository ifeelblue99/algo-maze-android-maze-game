export default function randomColorHOF(colors: (string | undefined)[]) {
    /*
        higher order func that returns a function that returns a random string from an array
    */
    if (colors[0] === undefined)
        throw Error("undefined color")

    return function () {

        return colors[Math.floor(Math.random() * colors.length)];

    }
}