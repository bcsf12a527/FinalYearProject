(function($) {
  
	// custom checkbox skin plugin
	$('input').iCheck({
    checkboxClass: 'icheckbox_minimal-orange',
    radioClass: 'iradio_minimal-orange',
    increaseArea: '20%' // optional
  });
	
	// sign in form 1
	$('#signIn_1').click(function (e)
	{
	    $('#form_1').removeClass('fail');
		var username = $.trim($('#un_1').val());
	    var password = $.trim($('#pw_1').val());

	    if (username === '' || password === '')
	    {
	        $('#form_1').removeClass('success').addClass('fail');
	        return false;
	    }
	    else
	    {
	        $('#form_1').removeClass('fail').addClass('success');
			$('#form_1').removeClass('fail').removeClass('animated');
	    }
	    $.getJSON
        (
            {
	            url : "/AccountController/UserExistance",
	            data : { "username": $('#un_1').val() },
	            type: "Post",
                success : function(result)
	            {
                    if(result == true)
                    {
                        $('#hd_1').innerHtml = "User Already exists";
                        $('#hd_1').show();
                        return false;
                    }
                    else
                    {
                        $('#hd_1').innerHtml = "User doesn't exists";
                        $('#hd_1').show();
                    }
	            }
            }
        );

	    function displayData(response)
	    {
	        if (response == true)
	        {
	            $('#hd_1').innerHtml = "User Already exists";
	            $('#hd_1').show();
	        }
	        else
	        {
	            $('#hd_1').innerHtml = "User doesn't exists";
	            $('#hd_1').show();
	            return false;
	        }
	    }
	});

})(jQuery);


// wizard sign up form
jQuery(function($) {
	
    var current;
    var navstep;

    current = $('.page-container').find('.current');
    navstep = $('.nav-step').find('.active');

    $('.page-container li').not(current).hide();
    setDynamics(current);

    $('.nav-step-btn').on('click', function (e) {
        if ($(this).parent().attr('id') === "next") {
            e.preventDefault();
            if (current.next().length === 0) return;

            if (current.index() < 2) {
                showHideWizardPage(current.next(), navstep.next());
            }

            setconfirmvalues();
        } else if ($(this).parent().attr('id') === "prev") {
            e.preventDefault();
            if (current.prev().length === 0) return;

            showHideWizardPage(current.prev(), navstep.prev());
        }
    });

    function showHideWizardPage(p, n) {
        p.addClass('current').addClass('animated').show();
        n.addClass('active');

        current.removeClass('current').removeClass('animated').hide();
        navstep.removeClass('active');

        current = p;
        navstep = n;
        setDynamics(current);
    }

    function setDynamics(current) {
        var index = current.index();
        var max = current.parent().children().length - 1;
        $('#prev').toggleClass("invisible", index < 1);
        $('#next').toggleClass("remove", index >= max);
        $('#submit').toggleClass("remove", index < max);
        $('#stepNo').text(index + 1);
    }
    function setconfirmvalues()
    {
        var value = $("#Name").val();
        $("#Name_Confirm").text(value);

        var value = $("#CNIC").val();
        $("#CNIC_Confirm").text(value);

        var value = $("#Address").val();
        $("#Address_Confirm").text(value);

        var value = $("#DOB").val();
        $("#DOB_Confirm").text(value);

        var value = $("#Gender").val();
        $("#Gender_Confirm").text(value);

        var value = $("#Career_Start").val();
        $("#Career_Start_Confirm").text(value);

        var value = $("#Type").val();
        $("#Type_Confirm").text(value);

        var value = $("#Avarage_Duration").val();
        $("#Avarage_Duration_Confirm").text(value);

        var value = $("#Phone_No").val();
        $("#Phone_No_Confirm").text(value);

        var value = $("#Username").val();
        $("#Username_Confirm").text(value);

        var value = $("#Email").val();
        $("#Email_Confirm").text(value);

        var value = $("#Password").val();
        $("#Password_Confirm").text(value);
    }
});
