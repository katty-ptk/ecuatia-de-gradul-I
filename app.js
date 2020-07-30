// x = -b / a //

$("#submit-btn").click(function(event){
    event.preventDefault();

    $firstNum = parseInt($("#first_Num").val());
    $secondNum = parseInt($("#second_Num").val());

    if (isNaN($firstNum) || isNaN($secondNum)){
      //  alert("Please enter numbers");

      $error_text = '<h2 id="error_text">Please enter numbers. :)</h2>';
      $("body").append($error_text);

    } else {

        $x_div = document.createElement('div');
        $x_par = document.createElement('p');

        $x_value = -$secondNum / $firstNum; // x = -b / a
        $x_par.textContent = "x = " + $x_value + "  (a = " + $firstNum + ", si b = " + $secondNum + ")";
       
        $x_div.appendChild($x_par);

        $("#first_Num").val("");
        $("#second_Num").val("");

 //       $($x_par).attr("#x-value");

        $x_par.setAttribute("id", "x-value");

        document.body.appendChild($x_div);

        // alert("x = " + $x_value)
        // $x_par.textContent = "";
    }
});

