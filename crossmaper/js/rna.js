document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showcommand').style.display = 'none';
    // select all the optional arguments
    var optionalArguments = document.querySelectorAll('#optional_arguments');
    // loop the array of all the optional arguments and hide them
    for (var i = 0; i < optionalArguments.length; i++) {
        var options = optionalArguments[i];
        options.style.display = "none";
    }

    fasta_id = 2;


})

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

// when the button is clicked hide all the optional arguments if they are present or show all the optional arguments if they are not shown
function showHideRna() {
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
    var original = document.getElementById("form_fasta");
    var new_form = original.cloneNode(true);
    var where_form = document.getElementById("fastas");
    where_form.appendChild(new_form);
}

function addFormReadLength() {
    var original = document.getElementById("form_read_length");
    var new_form = original.cloneNode(true);
    var where_form = document.getElementById("read_lengths");
    where_form.appendChild(new_form);
}
// get all the parameters and create the RnaParams object , then add it to the array

function sendRna_v2() {
    var objects = [];

    var form_fasta = document.querySelectorAll("#form_fasta");
    var fastaq = document.querySelectorAll("#fastaq");
    var genomeName = document.querySelectorAll("#genome_name");
    var readLength = document.querySelectorAll("#read_length");
    var readConfiguration = document.getElementById("read_configuration");
    var numberOfReads = document.querySelectorAll("#number_of_reads");
    var annotationsgtf = document.querySelectorAll("#annotations_gtf");
    var numberofcores = document.getElementById("number_of_cores");
    var baseerorrate = document.getElementById("base_error_rate");
    var outerDistance = document.getElementById("outer_distance");
    var standarDeviation = document.getElementById("standar_deviation");
    var coverage = document.getElementById("coverage");
    var mutationRate = document.getElementById("mutation_rate");
    var indelFraction = document.getElementById("indel_fraction");
    var indelExtended = document.getElementById("indel_extended");
    var seedRandomGenerator = document.getElementById("seed_random_generator");
    var discarambiguous = document.getElementById("discard_ambiguos");
    var haplotypeMode = document.getElementById("haplotype_mode");
    var outputDirectory = document.getElementById("output_directory");
    var verboseMode = document.getElementById("verbose_mode");
    var groupBarChart = document.getElementById("group_bar_chart");
    var reportCrossMapped = document.getElementById("report_cross_mapped");
    var mapperTemplatePath = document.getElementById("mapper_template_path");
    var maxMissmatchPerLen = document.getElementById("max_mismatch_per_len");
    var bacterialMode = document.getElementById("bact_mode");
    var maxMissmatch = document.getElementById("max_mismatch");
    var starTmp = document.getElementById("star_temp");
    var total_obj = form_fasta.length;
    
    // var rnaParams = new RnaParams(fastaq[i].value, genomeName[i].value, readLength[0].value, readConfiguration.value, numberOfReads[i].value, annotationsgtf[i].value, numberofcores.value, baseerorrate.value, outerDistance.value, standarDeviation.value, coverage.value, mutationRate.value, indelFraction.value, indelExtended.value, seedRandomGenerator.value, discarambiguous.value, haplotypeMode.value, outputDirectory.value, verboseMode.value, groupBarChart.value, reportCrossMapped.value, mapperTemplatePath.value, maxMissmatchPerLen.value, bacterialMode.value, maxMissmatch.value, starTmp.value)

    for (let i = 0; i < total_obj; i++) {
        var rnaParams = new RnaParams(fastaq[i].value, genomeName[i].value, readLength[0].value, readConfiguration.value, numberOfReads[i].value, annotationsgtf[i].value, numberofcores.value, baseerorrate.value, outerDistance.value, standarDeviation.value, coverage.value, mutationRate.value, indelFraction.value, indelExtended.value, seedRandomGenerator.value, discarambiguous.value, haplotypeMode.value, outputDirectory.value, verboseMode.value, groupBarChart.value, reportCrossMapped.value, mapperTemplatePath.value, maxMissmatchPerLen.value, bacterialMode.value, maxMissmatch.value, starTmp.value)
        console.log(rnaParams);
        
        var rnaJson = JSON.stringify(rnaParams);
        objects.push(rnaJson);
    }

    console.log(objects);



    fastaqArr = []
    for(var i = 0;i<fastaq.length;i++){
        fastaq[i]
        // fastaqArr.push(fastaq[i].value);
        fastaqArr.push(fastaq[i].files[0].name);
    }
    fastq_ls_string = fastaqArr.join(" ");

    gnArr = []
    for(var i = 0;i<genomeName.length;i++){
        genomeName[i]
        gnArr.push(genomeName[i].value);
    }
    genome_name_string = gnArr.join(" ");

    readLengthArr = []
    for(var i = 0;i<readLength.length;i++){
        readLength[i]
        readLengthArr.push(readLength[i].value);
    }
    read_length_string = readLengthArr.join(",");

    numberOfReadsArr = []
    for(var i = 0;i<numberOfReads.length;i++){
        numberOfReads[i]
        numberOfReadsArr.push(numberOfReads[i].value);
    }
    number_of_reads_string = numberOfReadsArr.join(" ");


    annotationsgtfarr = []
    for(var i = 0;i<annotationsgtf.length;i++){
        annotationsgtf[i]
        // fastaqArr.push(fastaq[i].value);
        annotationsgtfarr.push(annotationsgtf[i].files[0].name);
    }
    annotations_gtf_ls_string = fastaqArr.join(" ");
    // annotationsgtfarr = []
    // for(var i = 0;annotationsgtf.length;i++){
    //     a = annotationsgtf[i].value
    //     annotationsgtfarr.push(annotationsgtf[i].value);
    // }
    // annotations_gtf_ls_string = annotationsgtfarr.join(" ");

    // var rnaParams = new RnaParams(fastaq[i].value, genomeName[i].value, readLength[0].value, readConfiguration.value, numberOfReads[i].value, annotationsgtf[i].value, numberofcores.value, baseerorrate.value, outerDistance.value, standarDeviation.value, coverage.value, mutationRate.value, indelFraction.value, indelExtended.value, seedRandomGenerator.value, discarambiguous.value, haplotypeMode.value, outputDirectory.value, verboseMode.value, groupBarChart.value, reportCrossMapped.value, mapperTemplatePath.value, maxMissmatchPerLen.value, bacterialMode.value, maxMissmatch.value, starTmp.value)
    // param = `crossmapp RNA -g ${fastq_ls_string} -gn ${genome_name_string} -rlen ${read_length_string} -rlay ${readConfiguration.value} -N ${number_of_reads_string} -a ${annotations_gtf_ls_string} -t ${numberofcores.value} -e ${baseerorrate.value} -d ${outerDistance.value} -s ${standarDeviation.value} -C ${coverage.value} -r ${mutationRate.value} -R ${indelFraction.value} -X ${indelExtended.value} -S ${seedRandomGenerator.value} -AMB ${discarambiguous.value} -hapl ${haplotypeMode.value} -o ${outputDirectory.value} --verbose ${verboseMode.value} -gb ${groupBarChart.value} -rc ${reportCrossMapped.value} --mapper-template ${mapperTemplatePath.value} -max_mismatch_per_len ${maxMissmatchPerLen.value} -bact_mode ${bacterialMode.value} -max_mismatch ${maxMissmatch.value} -star_tmp ${starTmp.value}`
    ///// NEED TO SOLVE PROBLEM WITH -a ${annotations_gtf_ls_string}
    document.getElementById('showcommand').style.display = 'block';

    document.getElementById('command').innerHTML = `crossmapp RNA -g ${fastq_ls_string} -gn ${genome_name_string} -rlen ${read_length_string} -rlay ${readConfiguration.value} -N ${number_of_reads_string} -a ${annotations_gtf_ls_string} -t ${numberofcores.value} -e ${baseerorrate.value} -d ${outerDistance.value} -s ${standarDeviation.value} -C ${coverage.value} -r ${mutationRate.value} -R ${indelFraction.value} -X ${indelExtended.value} -S ${seedRandomGenerator.value} -AMB ${discarambiguous.value} -hapl ${haplotypeMode.value} -o ${outputDirectory.value} --verbose ${verboseMode.value} -gb ${groupBarChart.value} -rc ${reportCrossMapped.value} --mapper-template ${mapperTemplatePath.value} -max_mismatch_per_len ${maxMissmatchPerLen.value} -bact_mode ${bacterialMode.value} -max_mismatch ${maxMissmatch.value} -star_tmp ${starTmp.value}`
    // document.getElementById('command').innerHTML = `crossmapp RNA -g ${fastq_ls_string} -gn ${genome_name_string} -rlen ${read_length_string} -rlay ${readConfiguration.value} -N ${number_of_reads_string} -a ${annotations_gtf_ls_string} -t ${numberofcores.value} -e ${baseerorrate.value} -d ${outerDistance.value} -s ${standarDeviation.value} -C ${coverage.value} -r ${mutationRate.value} -R ${indelFraction.value} -X ${indelExtended.value} -S ${seedRandomGenerator.value} -AMB ${discarambiguous.value} -hapl ${haplotypeMode.value} -o ${outputDirectory.value} --verbose ${verboseMode.value} -gb ${groupBarChart.value} -rc ${reportCrossMapped.value} --mapper-template ${mapperTemplatePath.value} -max_mismatch_per_len ${maxMissmatchPerLen.value} -bact_mode ${bacterialMode.value} -max_mismatch ${maxMissmatch.value} -star_tmp ${starTmp.value}`

}