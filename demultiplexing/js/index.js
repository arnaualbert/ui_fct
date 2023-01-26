document.addEventListener("DOMContentLoaded", function () {


    // if(navigator.userAgent.includes("Firefox")){
    //     document.
    // }

    // select all the optional arguments
    var optionalArguments = document.querySelectorAll('#optional_arguments');
    // loop the array of all the optional arguments and hide them
    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];
        options.style.display = "none";
    }

})

// when the button is clicked hide all the optional arguments if they are present or show all the optional arguments if they are not shown
function showHide() {
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

// clone the first form and add it to the div
function addForm() {
    var original = document.getElementById("form_demultiplex");
    var new_form = original.cloneNode(true);

    var where_form = document.getElementById("forms");
    where_form.appendChild(new_form);
}

// get all the parameters and create the Demultiplex object , then add it to the array
function sendDemultiplexing() {
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
        if (fasta0[i].value != "" && fasta1[i].value != "" && output_dir[i].value != "" && refGenomes[i].value != "" && sampleNames[i].value != "" && !isNaN(numberofthreads[i].value) && !isNaN(readsperchunk[i].value)) {
            if (!isNaN(numberofthreads[i].value) && !isNaN(readsperchunk[i].value)) {
                var demultiplex_params = new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value, refGenomes[i].value, sampleNames[i].value, numberofthreads[i].value, readsperchunk[i].value, replacements[i].value, skipRemovingTmpFilesFrom[i].value, witDB[i].value)
                objects.push(demultiplex_params);
            } else {
                numberofthreads[i].value = "16";
                readsperchunk[i].value = "";
                var demultiplex_params = new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value, refGenomes[i].value, sampleNames[i].value, numberofthreads[i].value, readsperchunk[i].value, replacements[i].value, skipRemovingTmpFilesFrom[i].value, witDB[i].value)
                var demultiplexJSON = JSON.stringify(demultiplex_params);
                objects.push(demultiplexJSON);
            }
        } else {
            alert("Please fill in all the required fields");
            objects = null;
        }
    }
    console.log(objects);


}