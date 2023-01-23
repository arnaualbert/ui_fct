document.addEventListener('DOMContentLoaded',function(){

    var optionalArguments = document.querySelectorAll('#optional_arguments');

    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];
        options.style.display = "none";
    }

    fasta_id = 2;


})

function showHideRna() {
    // var optionalArguments = document.getElementsByClassName("optional_arguments")
    var optionalArguments = document.querySelectorAll('#optional_arguments');
    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];

        if (options.style.display === "none") {
            options.style.display = "block";
        } else {
            options.style.display = "none";
        }
    }
}

function addFormRna() {
    var original = document.getElementById("form_rna");
    var new_form = original.cloneNode(true);
  
    // get all the labels, inputs, and selects in the cloned fieldset
    var labels = new_form.querySelectorAll('label');
    var inputs = new_form.querySelectorAll('input, select');
    // loop over the labels, inputs, and selects, and assign a new id to each one
    labels.forEach(label => {
        label.id += '_' + fasta_id;
    });
    inputs.forEach(input => {
        input.id += '_' + fasta_id;
    });
    fasta_id = fasta_id + 1;
    var where_form = document.getElementById("forms_rna");
    where_form.appendChild(new_form);
}