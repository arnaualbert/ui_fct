document.addEventListener("DOMContentLoaded", function () {


    var optionalArguments = document.querySelectorAll('#optional_arguments');
    // optionalArguments.style.display = 'block';
    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];
        options.style.display = "none";
    }
    // var options = document.getElementById('optional_arguments');
    // document.getElementById('optional_arguments').style.display = 'none';
    // options.style.display = "none";
    // clone the fasta form if the click the button 
    // document.getElementById("add_more").addEventListener("click",function(){
    //     var original = document.getElementById("fasta_forms");
    //     var new_form = original.cloneNode(true);
    //     var where_form = document.getElementById("fastaq_upload");
    //     where_form.appendChild(new_form);
    // })
   
    fasta_id = 2;
    // fasta_form = [];

    // fasta_form.push( "<label for='myfile'>Fastaq "+fasta_id+":</label>");
    // fasta_form.push("<input type='file' id='fastaq"+fasta_id+"' name='fastaq"+fasta_id+"'>")


    // cambia id pero del fieldset
    // document.getElementById("add_more").addEventListener("click",function(){
    //     var original = document.getElementById("fasta_forms");
    //     var new_form = original.cloneNode(true);
    //     new_form.setAttribute("id", "fastaq"+fasta_id+"");
    //     new_form.setAttribute("name", "fastaq"+fasta_id+"");
        
    //     fasta_id = fasta_id + 1;
    //     var where_form = document.getElementById("fastaq_upload");
    //     where_form.appendChild(new_form);
    // })

    //funciona
    // document.getElementById("add_more").addEventListener("click",function(){
    //     var original = document.getElementById("fasta_forms");
    //     var new_form = original.cloneNode(true);

    //     // get all the labels, inputs, and selects in the cloned fieldset
    //     var labels = new_form.querySelectorAll('label');
    //     var inputs = new_form.querySelectorAll('input, select');
    //     // loop over the labels, inputs, and selects, and assign a new id to each one
    //     labels.forEach(label => {
    //         label.id += '_' + fasta_id;
    //     });
    //     inputs.forEach(input => {
    //         input.id += '_' + fasta_id;
    //     });
    //     fasta_id = fasta_id + 1;
    //     var where_form = document.getElementById("fastaq_upload");
    //     where_form.appendChild(new_form);
    // })
    //acaba



    // var bt_options = document.getElementsByClassName('bt_optional_arguments');
    // var bt_options = document.querySelectorAll('.bt_optional_arguments');

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
})

// function display_options() {

//     if (options.style.display === "none") {
//         options.style.display = "block";
//     } else {
//         options.style.display = "none";
//     }
// }

//solo funciona con una
// function showHide() {
//     var optionalArguments = document.getElementById('optional_arguments');
//     if (optionalArguments.style.display === "none") {
//         optionalArguments.style.display = "block";
//     } else {
//         optionalArguments.style.display = "none";
//     }
// }

function showHide() {
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

// function showHide() {
//     var optionalArguments = document.querySelectorAll('.optional_arguments');
//     for (var i = 0; i < optionalArguments.length; i++) {
//         var options = optionalArguments[i];

//         if (options.style.display === "none") {
//             options.style.display = "block";
//         } else {
//             options.style.display = "none";
//         }
//     }
// }

// function addForm() {
//     var original = document.getElementById("fasta_forms");
//     var new_form = original.cloneNode(true);
  
//     // get all the labels, inputs, and selects in the cloned fieldset
//     var labels = new_form.querySelectorAll('label');
//     var inputs = new_form.querySelectorAll('input, select');
//     // loop over the labels, inputs, and selects, and assign a new id to each one
//     labels.forEach(label => {
//         label.id += '_' + fasta_id;
//     });
//     inputs.forEach(input => {
//         input.id += '_' + fasta_id;
//     });
//     fasta_id = fasta_id + 1;
//     var where_form = document.getElementById("fastaq_upload");
//     where_form.appendChild(new_form);
//   }

function addForm() {
    var original = document.getElementById("form_demultiplex");
    var new_form = original.cloneNode(true);
  
    // get all the labels, inputs, and selects in the cloned fieldset

    // var labels = new_form.querySelectorAll('label');
    // var inputs = new_form.querySelectorAll('input, select');
    // loop over the labels, inputs, and selects, and assign a new id to each one
    
    // labels.forEach(label => {
    //     label.id += '_' + fasta_id;
    // });
    // inputs.forEach(input => {
    //     input.id += '_' + fasta_id;
    // });
    // fasta_id = fasta_id + 1;
    var where_form = document.getElementById("forms");
    where_form.appendChild(new_form);
  }


  function sendDemultiplexing(){
    var objects = [];



    var total_forms = document.querySelectorAll("#form_demultiplex");
    var fasta0 = document.querySelectorAll("#fasta0");
    var fasta1 = document.querySelectorAll("#fasta1");
    var output_dir = document.querySelectorAll("#output_dir");
    var refGenomes = document.querySelectorAll("#ref_genome");
    var sampleNames = document.querySelectorAll("#sample_name");
    var numberofthreads = document.querySelectorAll("#num_of_threads");
    var readsperchunk = document.querySelectorAll("#reads_per_chunk");
    var replacements = document.querySelectorAll("#replace");
    var skipRemovingTmpFilesFrom = document.querySelectorAll("#skip_removing_tmp_files");
    var witDB = document.querySelectorAll("#wit_db");
    var total_obj = total_forms.length;



    for (let i = 0; i < total_obj; i++) {
        var demultiplex_params = new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value,refGenomes[i].value,sampleNames[i].value,numberofthreads[i].value,readsperchunk[i].value,replacements[i].value,skipRemovingTmpFilesFrom[i].value,witDB[i].value)
        objects.push(demultiplex_params);
    }
    
    console.log(objects);

  }