function getStartDay() {
    return moment().startOf('isoWeek')
}

function getEndDay() {
    return moment().endOf('isoWeek');
}

function getMonthSortAndYear() {
    return moment().format('MMM YYYY');
}

function getDaysOfWeek() {
    var days = [],
        day = getStartDay();

    while (day <= getEndDay()) {
        days.push(day);
        day = day.clone().add(1, 'd');
    }

    return days;
}

export default {getDaysOfWeek, getMonthSortAndYear, getEndDay, getStartDay}
