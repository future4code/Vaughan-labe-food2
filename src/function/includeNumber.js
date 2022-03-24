export default function checkForNumbers(array) {
    return array.some(element => {
        return typeof element === 'number'
    })
};
