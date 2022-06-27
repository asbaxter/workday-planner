function saveTask(){
    buttonEl = $(".saveBtn");


    buttonEl.click(function(){

        task = document.getElementsByClassName('.description').value;
        console.log(task);


        


    })
};

saveTask();