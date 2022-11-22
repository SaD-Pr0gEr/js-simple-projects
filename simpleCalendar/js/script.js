// let calendarDays = {
//     1: "https://img.icons8.com/color/96/null/calendar-1.png",
//     2: "https://img.icons8.com/color/96/null/calendar-2.png",
//     3: "https://img.icons8.com/color/96/null/calendar-3.png",
//     4: "https://img.icons8.com/color/96/null/calendar-4.png",
//     5: "https://img.icons8.com/color/96/null/calendar-5.png",
//     6: "https://img.icons8.com/color/96/null/calendar-6.png",
//     7: "https://img.icons8.com/color/96/null/calendar-7.png",
//     8: "https://img.icons8.com/color/96/null/calendar-8.png",
//     9: "https://img.icons8.com/color/96/null/calendar-9.png",
//     10: "https://img.icons8.com/color/96/null/calendar-10.png",
//     11: "https://img.icons8.com/color/96/null/calendar-11.png",
//     12: "https://img.icons8.com/color/96/null/calendar-12.png",
//     13: "https://img.icons8.com/color/96/null/calendar-13.png",
//     14: "https://img.icons8.com/color/96/null/calendar-14.png",
//     15: "https://img.icons8.com/color/96/null/calendar-15.png",
//     16: "https://img.icons8.com/color/96/null/calendar-16.png",
//     17: "https://img.icons8.com/color/96/null/calendar-17.png",
//     18: "https://img.icons8.com/color/96/null/calendar-18.png",
//     19: "https://img.icons8.com/color/96/null/calendar-19.png",
//     20: "https://img.icons8.com/color/96/null/calendar-20.png",
//     21: "https://img.icons8.com/color/96/null/calendar-21.png",
//     22: "https://img.icons8.com/color/96/null/calendar-22.png",
//     23: "https://img.icons8.com/color/96/null/calendar-23.png",
//     24: "https://img.icons8.com/color/96/null/calendar-24.png",
//     25: "https://img.icons8.com/color/96/null/calendar-25.png",
//     26: "https://img.icons8.com/color/96/null/calendar-26.png",
//     27: "https://img.icons8.com/color/96/null/calendar-27.png",
//     28: "https://img.icons8.com/color/96/null/calendar-28.png",
//     29: "https://img.icons8.com/color/96/null/calendar-29.png",
//     30: "https://img.icons8.com/color/96/null/calendar-30.png",
//     31: "https://img.icons8.com/color/96/null/calendar-31.png"
// }


let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "Mai",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}


function parseCalendar(dateTime) {
    let date;
    date = dateTime.split("T")[0];
    let year, month, day;
    [year, month, day] = date.split("-");
    return [parseInt(year), parseInt(month), parseInt(day)]
}


let jsonDateTime = new Date().toJSON();
let year, month, day;
[year, month, day] = parseCalendar(jsonDateTime)
calendarMonthObject = document.getElementsByClassName("calendar_object__month")[0]
calendarDayObject = document.getElementsByClassName("calendar_object__day")[0]
calendarMonthObject.innerHTML = months[month]
calendarDayObject.innerHTML = day


// let jsonDateTime = new Date().toJSON();
// let year, month, day;
// [year, month, day] = parseCalendar(jsonDateTime)
// calendarYearObject = document.getElementById("calendarYear")
// calendarMonthObject = document.getElementById("calendarMonth")
// calendarDayObject = document.getElementById("calendarDay")
// calendarDayObject.setAttribute("src", calendarDays[day])
// calendarYearObject.innerHTML = year
// calendarMonthObject.innerHTML = months[month]
