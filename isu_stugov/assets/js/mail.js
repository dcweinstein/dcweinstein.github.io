// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create a new instance of the Mandrill class from the mandrill
// library. It takes one parameter, your API key.

var m = new mandrill.Mandrill('CYjgfNh25IuYUVEMgsMn7A');

// Ping your Mandrill account using the users/ping method
$(document).ready(function() {
  $('.send-input').click(function() {
    $('.sending').css({'display': 'block'});
    var senderName = $('.form-name').val();
    var senderSubject = $('.form-subject').val();
    var senderContent = $('.form-body').val();

    console.log("name: " + senderName + "  subject: " + senderSubject + "  content: " + senderContent);
    console.log("fired");
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        "key": "CYjgfNh25IuYUVEMgsMn7A",
        "message": {
          "from_email": "isu.stugov@gmail.com",
          "to": [
              {
                "email": "davidw1@iastate.edu",
                "name": senderName,
                "type": "to"
              }
            ],
          "autotext": "true",
          "subject": senderSubject,
          "html": senderContent
        }
      }
     }).done(function(response) {
       $('.sending').css({'display': 'none'});
       $('.thank-you').css({'display': 'block'});
       $('.form-name').val("");
       $('.form-subject').val("");
       $('.form-body').val("");
       console.log("Response: " + response); // if you're into that sorta thing
       setTimeout(function() {
         $('.thank-you').css({'display': 'none'});
       }, 3000);
     });
  });
});
