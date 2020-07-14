$(function(){

    // $(selector).on(event,childSelector,data,function,map)
    // for the element with the id of task-list,
    // whenever a 'click' event is detected on one of its children which must have the class
    // 'delete-btn', then call the function
    $('#task-list').on('click', '.delete-btn', function(){
        // the 'this' variable is a vanilla JavaScript element        
        // this.disabled = true
        $(this).attr('disabled', true);
        $(this).parent().remove();
        

    })

    $('#add-task-btn').click(function(){
        // document.querySelector("#task-name").value
        let taskName = $('#task-name').val();

        let newTask = $(`<li>${taskName}
                        <button class="delete-btn">Delete</button>
                        </li>)`
        );

        $('#task-list').append(newTask);
    })
})