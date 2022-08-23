// $(document).ready(function() {
//     $('.form_popup').submit(function() { // catch the form's submit event
//     	console.log(this)
//         $.ajax({ // create an AJAX call...
//             data: $(this).serialize(), // get the form data
//             type: $(this).attr('method'), // GET or POST
//             url: $(this).attr('action'), // the file to call
//             console.log(url)
//             success: function(response) { // on success..
//                 $('#DIV_CONTAINING_FORM').html(response); // update the DIV 
//             }
//         });
//         return false;
//     });
// });