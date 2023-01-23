document.addEventListener("DOMContentLoaded", function () {

    var optionalArguments = document.querySelectorAll('#optional_arguments');

    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];
        options.style.display = "none";
    }

    fasta_id = 2;
    //this worked
    // var options = document.getElementById('optional_arguments');
    // options.style.display = "none";

    // document.getElementById('optional_arguments').style.display='none';
    // old function (delete if everything goes well)
    // document.getElementById("add_more").addEventListener("click",function(){
    //     var c = document.getElementById("fasta_forms");
    //     var clon = c.cloneNode("fastaq_upload");
    //     document.body.appendChild(clon);
    //  })

    // clone the fasta form if the click the button 

    //this worked 
    // document.getElementById("add_more").addEventListener("click", function () {
    //     var original = document.getElementById("fasta_forms");
    //     var new_form = original.cloneNode(true);
    //     var where_form = document.getElementById("fastaq_upload");
    //     where_form.appendChild(new_form);
    // })

    // var bt_options = document.getElementsByClassName('.bt_optional_arguments');

    // var display_options = function () {
    //     if (options.style.display === "none") {
    //         options.style.display = "block";
    //     } else {
    //         options.style.display = "none";
    //     }
    // }

    // for (var i = 0; i < bt_options.length; i++) {
    //     bt_options[i].addEventListener('click', display_options, false);
    // }



    // bt_options.addEventListener('click',display_options(),false);
    // document.getElementsByClassName('bt_optional_arguments').addEventListener('click',function(){
    //     console.log('hola');
    // })

    // document.getElementByClassName('bt_optional_arguments').addEventListener('click',function(){
    //     // document.getElementById('optional_arguments').style.display='block';
    //     // console.log('hola');
    //     if (options.style.display === "none") {
    //         options.style.display = "block";
    //       } else {
    //         options.style.display = "none";
    //       }

    // })
})
// var options = document.getElementById('optional_arguments');
// options.style.display = "none";
// function display_options () {
//     if (options.style.display === "none") {
//         options.style.display = "block";
//     } else {
//         options.style.display = "none";
//     }
// }


function showHideDna() {
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

function addFormDna() {
    var original = document.getElementById("form_dna");
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
    var where_form = document.getElementById("forms_dna");
    where_form.appendChild(new_form);
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