if (Meteor.isClient) {
    Template.login.events({

        'click .signup':function(evt,tmpl)
        {
            console.log( 'Submitting form!' );
            var correctUser = "1";
            var correctPass = "1";
            var userInput = $('#name').val();
            var userPass = $("#pass").val();
            console.log('Hello, ' + userInput);
            evt.preventDefault(); // add this to prevent the button from submitting
            if(correctUser == userInput && correctPass == userPass) {
                Router.go('signup', {name: '/signup'});
            }else{}

        },

        'keyup #name':function(event)
        {
            $("#user-label").addClass('active');
            $(document).ready(function() {
                if($('#name').val() != "") {
                    $("#user-label").addClass('active');
                }else{
                    $("#user-label").removeClass('active');
                }
            });
        },

        'keyup #pass':function(event)
        {
            $("#pass-label").addClass('active');
            $(document).ready(function() {
                if($('#pass').val() != "") {
                    $("#pass-label").addClass('active');
                }else{
                    $("#pass-label").removeClass('active');
                }
            });
        }
    });



}



