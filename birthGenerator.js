function generateRandomBirthday() {
    let year = Math.floor(Math.random() * (new Date().getFullYear() - 1991 + 1)) + 1991;
    let month = Math.floor(Math.random() * 12);
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let day = Math.floor(Math.random() * daysInMonth) + 1;
    let randomBirthday = new Date(year, month, day);
    return randomBirthday.toLocaleDateString();
}

export default generateRandomBirthday;