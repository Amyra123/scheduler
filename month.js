var date1 = new Date();



function renderDate(){
var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
date1.setDate(1);
var day = date1.getDay();
var endOfMonth = new Date(date1.getFullYear(),date1.getMonth()+1,0).getDate();
var endOfPrevMonth = new Date(date1.getFullYear(),date1.getMonth(),0).getDate();

document.getElementById("CurrentDate").innerHTML = date1.toDateString();
document.getElementById("Current-month").innerHTML = monthsArray[date1.getMonth()];

var teachersBox = document.getElementsByClassName("teachersBox")[0];
var mainBox = document.getElementsByClassName("box")[0];
var teacherBtn = document.getElementById("teacher");

teacherBtn.onclick = function(){
    teachersBox.style.display="block";
    mainBox.style.display="none";
    // console.log("hi");
}

var cells = "";

for(var x=0;x<day;x++)
{
    cells+=`<div class="prev-dates">` + (endOfPrevMonth - (day-x)+1) + "</div>";
}

var dateToday = new Date();

for(let i=1;i<=endOfMonth;i++)
{
    if(i == dateToday.getDate() && date1.getMonth() == dateToday.getMonth() && date1.getFullYear() == dateToday.getFullYear())
    {
        cells += "<div class='highlight'>" + i + "</div></div>";
    }
    else{
        cells += "<div>" + i + "</div></div>";
    }
}



document.getElementsByClassName("days")[0].innerHTML = cells;

}


function moveDate(class1){
    if(class1 == 'back')
    {
        date1.setMonth(date1.getMonth()-1);
    }
    else if(class1 == 'next')
    {
        date1.setMonth(date1.getMonth()+1);
    }
    renderDate();
}