function saveTask(){
    buttonEl = $(".saveBtn");


    buttonEl.click(function(){

        var task = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        console.log(time);
        console.log(task);

        localStorage.setItem(time, task);

    })
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

saveTask();