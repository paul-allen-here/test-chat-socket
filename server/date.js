const addZeroToDate = date => date.toString().length < 2 ? `0${date}` : date;

const getDate = () => {
    let date_full = new Date();
    let year = date_full.getFullYear();
    let month = date_full.getMonth();
    let date = date_full.getDate();
    let hours = date_full.getHours();
    let minutes = date_full.getMinutes();
    let finalDate = `${addZeroToDate(minutes)}:${addZeroToDate(hours)} ${addZeroToDate(date)}.${addZeroToDate(month)}.${year}`;
    return finalDate;
}

module.exports = {addZeroToDate, getDate};