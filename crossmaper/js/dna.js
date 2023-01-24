document.addEventListener('DOMContentLoaded',function(){

    var optionalArguments = document.querySelectorAll('#optional_arguments');

    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];
        options.style.display = "none";
    }

    fasta_id = 2;


})

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

function addFormDna() {
    var original = document.getElementById("form_dna");
    var new_form = original.cloneNode(true);
  
    // get all the labels, inputs, and selects in the cloned fieldset
    // var labels = new_form.querySelectorAll('label');
    // var inputs = new_form.querySelectorAll('input, select');
    // // loop over the labels, inputs, and selects, and assign a new id to each one
    // labels.forEach(label => {
    //     label.id += '_' + fasta_id;
    // });
    // inputs.forEach(input => {
    //     input.id += '_' + fasta_id;
    // });
    // fasta_id = fasta_id + 1;
    var where_form = document.getElementById("forms_dna");
    where_form.appendChild(new_form);
}

function sendDna(){

    var objects = [];

    var total_forms = document.querySelectorAll("#form_dna");
    var fastaq = document.querySelectorAll("#fastaq");
    var genomeName = document.querySelectorAll("#genome_name");
    var readLength = document.querySelectorAll("#read_length");
    var readConfiguration = document.querySelectorAll("#read_configuration");
    var numberOfReads = document.querySelectorAll("#number_of_reads");
    var numberofcores = document.querySelectorAll("#number_of_cores");
    var baseerorrate = document.querySelectorAll("#base_error_rate");
    var outerDistance = document.querySelectorAll("#outer_distance");
    var standarDeviation = document.querySelectorAll("#standar_deviation");
    var coverage = document.querySelectorAll("#coverage");
    var mutationRate = document.querySelectorAll("#mutation_rate");
    var indelFraction = document.querySelectorAll("#indel_fraction");
    var indelExtended = document.querySelectorAll("#indel_extended");
    var seedRandomGenerator = document.querySelectorAll("#seed_random_generator");
    var discarambiguous = document.querySelectorAll("#discard_ambiguos");
    var haplotypeMode = document.querySelectorAll("#haplotype_mode");
    var outputDirectory = document.querySelectorAll("#output_directory");
    var verboseMode = document.querySelectorAll("#verbose_mode");
    var groupBarChart = document.querySelectorAll("#group_bar_chart");
    var reportCrossMapped = document.querySelectorAll("#report_cross_mapped");
    var mapperTemplatePath = document.querySelectorAll("#mapper_template_path");
    var minSeedLength = document.querySelectorAll("#min_seed_length");
    var matchingScore = document.querySelectorAll("#matching_score");
    var mismatchPenalty = document.querySelectorAll("#mismatch_penalty");
    var total_obj = total_forms.length;


    for (var i = 0; i < total_obj; i++) {
        var dnaParams = new DnaParams(fastaq[i].value, genomeName[i].value, readLength[i].value,readConfiguration[i].value,numberOfReads[i].value, numberOfReads[i].value,numberofcores[i].value, baseerorrate[i].value, outerDistance[i].value, standarDeviation[i].value, coverage[i].value, mutationRate[i].value, indelFraction[i].value, indelExtended[i].value, seedRandomGenerator[i].value, discarambiguous[i].value, haplotypeMode[i].value, outputDirectory[i].value, verboseMode[i].value, groupBarChart[i].value, reportCrossMapped[i].value, mapperTemplatePath[i].value,minSeedLength[i].value,matchingScore[i].value,mismatchPenalty[i].value);
        objects.push(dnaParams);
    }
    
    console.log(objects);
}