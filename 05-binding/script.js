$(function(){

    /* Method 1: Cache the this in our own variable and then reuse it later
    $('#load-btn').click(function(){
        // store what ever this is referring to inside a variable
        let self = this;
        axios.get('data.json').then(function(response){
            console.log(response.data);
            // vanila js: self.disabled = true;
               $(self).attr('disabled', true);
        })
    })
    */

    /* Method 2: Use arrow functions */
        $('#load-btn').click(function(){
        // the promise for axios is an arrow function,
        // so that the this inside it will be the same
        // as the this outside of it
        console.log(this);
        axios.get('data.json').then((response)=>{
            console.log(this);
            console.log(response.data);
            // vanila js: this.disabled = true;
               $(this).attr('disabled', true);
        })
    })
    

    /* Method 3: Use bind()
     $('#load-btn').click(function(){
         
         let f = function(response){
            console.log(this);
            // vanila js: self.disabled = true;
            $(this).attr('disabled', true);
        };

        f = f.bind(this);

        axios.get('data.json').then(f);
    })
    */
    


})