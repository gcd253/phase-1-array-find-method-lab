// code your solution here
function superbowlWin(array) {
    const something = array.find((element) => element.result === 'W')
    if (something){return something.year}
}
