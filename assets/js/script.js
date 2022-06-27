function saveTask(){
    buttonEl = $(".saveBtn");


    buttonEl.click(function(){

        let task = document.querySelector(".description").value;
        let time = $(this).parent().attr("id");

        console.log(time);
        console.log(task);

        localStorage.setItem(time, task);

    })
};

saveTask();