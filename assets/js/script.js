let currentDay = document.getElementById("currentDay")
currentDay.textContent = moment().format("MMM Do YY");

function saveTask(){
    buttonEl = $(".saveBtn");


    buttonEl.click(function(){

        var task = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        localStorage.setItem(time, task);

    })
};

function time(){
    let timeSlot = 0;
    let hour = moment().hour();

    if (hour === 9){
        let currentTime = document.getElementById("9");
        currentTime.classList.add("present");
        timeSlot = 9;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("9");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("9");
        currentTime.classList.add("future");
    };
    if (hour === 10){
        let currentTime = document.getElementById("10");
        currentTime.classList.add("present");
        timeSlot = 10;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("10");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("10");
        currentTime.classList.add("future");
    };
    if (hour === 11){
        let currentTime = document.getElementById("11");
        currentTime.classList.add("present");
        timeSlot = 11;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("11");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("11");
        currentTime.classList.add("future");
    };
    if (hour === 12){
        let currentTime = document.getElementById("12");
        currentTime.classList.add("present");
        timeSlot = 9;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("12");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("12");
        currentTime.classList.add("future");
    };
    if (hour === 13){
        let currentTime = document.getElementById("13");
        currentTime.classList.add("present");
        timeSlot = 13;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("13");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("13");
        currentTime.classList.add("future");
    };
    if (hour === 14){
        let currentTime = document.getElementById("14");
        currentTime.classList.add("present");
        timeSlot = 14;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("14");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("14");
        currentTime.classList.add("future");
    };
    if (hour === 15){
        let currentTime = document.getElementById("15");
        currentTime.classList.add("present");
        timeSlot = 15;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("15");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("15");
        currentTime.classList.add("future");
    };
    if (hour === 16){
        let currentTime = document.getElementById("16");
        currentTime.classList.add("present");
        timeSlot = 16;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("16");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("16");
        currentTime.classList.add("future");
    };
    if (hour === 17){
        let currentTime = document.getElementById("17");
        currentTime.classList.add("present");
        timeSlot = 17;
    }
    else if (timeSlot < hour){
        let currentTime = document.getElementById("17");
        currentTime.classList.add("past");
    }
    else {
        let currentTime = document.getElementById("17");
        currentTime.classList.add("future");
    };
    

};

nine = localStorage.getItem("9");
ten = localStorage.getItem("10");
eleven = localStorage.getItem("11");
twelve = localStorage.getItem("12");
thirteen = localStorage.getItem("13");
fourteen = localStorage.getItem("14");
fifteen = localStorage.getItem("15");
sixteen = localStorage.getItem("16");
seventeen = localStorage.getItem("17");

nineText = document.getElementById("nineText");
tenText = document.getElementById("tenText");
elevenText = document.getElementById("elevenText");
twelveText = document.getElementById("twelveText");
thirteenText = document.getElementById("thirteenText");
fourteenText = document.getElementById("fourteenText");
fifteenText = document.getElementById("fifteenText");
sixteenText = document.getElementById("sixteenText");
seventeenText = document.getElementById("seventeenText");

nineText.textContent = nine;
tenText.textContent = ten;
elevenText.textContent = eleven;
twelveText.textContent = twelve;
thirteenText.textContent = thirteen;
fourteenText.textContent = fourteen;
fifteenText.textContent = fifteen;
sixteenText.textContent = sixteen;
seventeenText.textContent = seventeen;

time();
saveTask();