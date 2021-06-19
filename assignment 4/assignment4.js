function updateDOM(input, min, max, msg)

{

    msg = msg + " field has invalid data: " + input.value;



    var str = input.value;

    for (var i = 0; i < str.length; i++) {

        var ch = str.substring(i, i + 1)

        if ((ch < "0" || "9" < ch) && ch != '.') {

            alert(msg);

            return false;
           
        }
        
    }

    var num = 0 + str

    if (num < min || max < num) {

        alert(msg + " not in range [" + min + ".." + max + "]");

        return false;

    }
    document.getElementById("value").innerHTML = "num";
    input.value = str;

    return true;

}


function submitData(input)

{

    if (input.value != null && input.value.length != 0)

        input.value = "" + eval(input.value);

        submitData(input.form);

}



function computeFutureValue(form)

{

    if ((form.payments.value == null || form.payments.value.length == 0) ||

        (form.interest.value == null || form.interest.value.length == 0) ||

        (form.principal.value == null || form.principal.value.length == 0)) {

        return;

    }



    if (!checkNumber(form.payments, 1, 480, "# of payments") ||

        !checkNumber(form.interest, .001, 99, "Interest") ||

        !checkNumber(form.principal, 1, 10000000, "Principal")) {

        form.fv.value = "Invalid";

        return;

    }

    document.getElementById("rate").innerHTML = "i";

    var i = form.interest.value;

    if (i > 1.0) {

        i = i / 100.0;

        form.interest.value = i;

    }

    i /= 12;


   var pow = form.principal.value;

    for (var j = 0; j < form.payments.value *12; j++)

        pow = (pow * i) + (pow *1);

    form.fv.value = pow

        form.totalint.value = (form.fv.value - form.principal.value)

}
document.getElementById("month").innerHTML = "pow";