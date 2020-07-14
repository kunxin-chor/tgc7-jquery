$(function(){

    let taskNumber = 0;

    // $(selector).on(event,childSelector,data,function,map)
    // for the element with the id of task-list,
    // whenever a 'click' event is detected on one of its children which must have the class
    // 'delete-btn', then call the function
    $('#task-list').on('click', '.delete-btn', function(){

        // the 'this' variable is a vanilla JavaScript element        
        // this.disabled = true
        $(this).attr('disabled', true);

        // extract out the task number to delete
        let taskNumberToDelete = $(this).data('fortask');
        
        $(`#task-${taskNumberToDelete}`).remove();

    })

    $('#add-task-btn').click(function(){

        taskNumber += 1; // same as: taskNumber = taskNumber + 1

        // document.querySelector("#task-name").value
        let taskName = $('#task-name').val();

        let newTask = $(`<li id='task-${taskNumber}'>${taskName}
                        
                        <div>
                            <div>
                                <button data-fortask="${taskNumber}" class="delete-btn">Delete</button>
                            </div>
                        </div>
                        
                       
                        </li>)`
        );

        $('#task-list').append(newTask);
    })
})