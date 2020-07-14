$(function(){
    $('#add-task-btn').click(function(){


        // Version 2: each of the <li> has a button
        let newTask = $(`<li>${taskName}
                        <button>Delete</button>
                        </li>)`
        );
        newTask.find('button').click(function(){
            newTask.remove();
        });

        $('#task-list').append(newTask);


    })
})