document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('showcommand').style.display = 'none';
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

// only fasta,gz files are allowed
var _validFileExtensions = ["fastq.gz"];    
function Validate(oForm) {
    var arrInputs = oForm.getElementsByTagName("input");
    for (var i = 0; i < arrInputs.length; i++) {
        var oInput = arrInputs[i];
        if (oInput.type == "file") {
            var sFileName = oInput.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }
                
                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }
            }
        }
    }
  
    return true;
}

function addFormReferenceOrganism() {
    var original = document.getElementById("reference_organism");
    var new_form = original.cloneNode(true);
    var where_form = document.getElementById("references_organisms");
    where_form.appendChild(new_form);
}


// function batchmode() {
//     var fasta0 = document.getElementById("fasta0");
//     var fasta1 = document.getElementById("fasta1");
//     var isactivated = document.getElementById("isactivated");
//     if(fasta0.hasAttribute("directory")&&fasta1.hasAttribute("directory")){
//     fasta0.removeAttribute("directory");
//     fasta0.removeAttribute("webkitdirectory");
//     fasta0.removeAttribute("mozdirectory");
//     fasta0.removeAttribute("msdirectory");
//     fasta0.removeAttribute("odirectory");
//     fasta1.removeAttribute("directory");
//     fasta1.removeAttribute("webkitdirectory");
//     fasta1.removeAttribute("mozdirectory");
//     fasta1.removeAttribute("msdirectory");
//     fasta1.removeAttribute("odirectory");
//     isactivated.innerHTML = 'Batch mode deactivated'    
//   }else{
//     fasta0.setAttribute("directory", "");
//     fasta0.setAttribute("webkitdirectory", "");
//     fasta0.setAttribute("mozdirectory", "");
//     fasta0.setAttribute("msdirectory", "");
//     fasta0.setAttribute("odirectory", "");
//     fasta1.setAttribute("directory", "");
//     fasta1.setAttribute("webkitdirectory", "");
//     fasta1.setAttribute("mozdirectory", "");
//     fasta1.setAttribute("msdirectory", "");
//     fasta1.setAttribute("odirectory", "");
//     isactivated.innerHTML = 'Batch mode activated'
//   }

// }
function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}



// get all the parameters and create the Demultiplex object , then add it to the array
function sendDemultiplexing() {
    var objects = [];

    var total_forms = document.querySelectorAll("#form_demultiplex");
    var fasta0 = document.querySelectorAll("#fasta0");
    var fasta1 = document.querySelectorAll("#fasta1");
    var output_dir = document.querySelectorAll("#output_dir");
    var refGenomes = document.querySelectorAll("#ref_genome");
    var organismName = document.querySelectorAll("#organism_name");
    var numberofthreads = document.querySelectorAll("#num_of_threads");
    var readsperchunk = document.querySelectorAll("#reads_per_chunk");
    var replacements = document.querySelectorAll("#replace");
    var skipRemovingTmpFilesFrom = document.querySelectorAll("#skip_removing_tmp_files");
    var witDB = document.querySelectorAll("#wit_db");
    var total_obj = total_forms.length;

    fasta0q = [];
    fsata1q = [];
    var replacementsarray = [];

    for(var i=0;i<fasta0.length;i++){
        fasta0q.push(fasta0[i].files[0].name);
    }
    fasta0q_ls_string = fasta0q.join(" ");

    for(var i=0;i<fasta1.length;i++){
        fsata1q.push(fasta1[i].files[0].name);
    }
    fasta1q_ls_string = fsata1q.join(" ");
    for(let i = 0;i < replacements.length;i++){
        if(replacements[i].files.length > 0){
        replacementsarray.push(replacements[i].files[0].name);}else{
            replacementsarray.push()
        }
        console.log(replacements[i].files.length)
    }
    replacements_ls = replacementsarray.join(" ");

    //array
    var organismNamearray = [];
    var referencesgenomesarray = [];
    var output_dirarr = [];
    var numberofthreadsarr = [];
    var readsperchunkarr = [];
    var skipRemovingTmpFilesFromarr = [];
    var witDBarr = [];
    //loops
    for(let i = 0;i<refGenomes.length;i++){
        referencesgenomesarray.push(refGenomes[i].value);
    }
    for(let i = 0;i < organismName.length;i++){
        organismNamearray.push(organismName[i].value);    
    }
    //////////////  ///////////////////////////////////  //////////////////////////////////
    for(let i = 0;i < numberofthreads.length;i++){
        numberofthreadsarr.push(numberofthreads[i].value);    
    }
    for(let i = 0;i < readsperchunk.length;i++){
        readsperchunkarr.push(readsperchunk[i].value);    
    }
    for(let i = 0;i < skipRemovingTmpFilesFrom.length;i++){
        skipRemovingTmpFilesFromarr.push(skipRemovingTmpFilesFrom[i].value);    
    }
    for(let i = 0;i < witDB.length;i++){
        witDBarr.push(witDB[i].value);    
    }
    for(let i = 0;i < output_dir.length;i++){
        output_dirarr.push(output_dir[i].value);    
    }
    //list
    referencegenomes = referencesgenomesarray.join(" ");
    organism_ls = organismNamearray.join(" ");
    ////////////////////////////////////////////////////////////////
    num_of_threads = numberofthreadsarr.join(" ");
    reads_per_chunk = readsperchunkarr.join(" ");
    skip_removing_tmp_files = skipRemovingTmpFilesFromarr.join(" ");
    wit_db = witDBarr.join(" ");
    output_dir = output_dirarr.join(" ");


    
    //new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value, refGenomes[i].value, organismName[i].value, numberofthreads[i].value, readsperchunk[i].value, replacements[i].value, skipRemovingTmpFilesFrom[i].value, witDB[i].value)
    //param = `--fastq1 ${fastas_fs_ls_string} --fastq2 ${fastas_rv_ls_string} --outdir ${output_dir} --refGenomes ${ref_genome_string} --sampleNames ${organism_name_string} --trheads ${num_of_threads} --nreads_per_chunk ${reads_per_chunk} --replace ${rpl_ls_str} --skip_removing_tmp_files ${skip_removing_tmp_files} --wit_db ${wit_db}`
    document.getElementById('showcommand').style.display = 'block';
    document.getElementById('command').innerHTML = `split_pooledSeqWGS_parallel.py -fastq1 ${fasta0q_ls_string} --fastq2 ${fasta1q_ls_string} --outdir ${output_dir} --refGenomes ${referencegenomes} --sampleNames ${organism_ls} --trheads ${num_of_threads} --nreads_per_chunk ${reads_per_chunk} --replace ${replacements_ls} --skip_removing_tmp_files ${skip_removing_tmp_files} --wit_db ${wit_db}`

    // var listofifle = [];
    // for (i = 0; i < fasta0.length; i++) {
    //     let file = fasta0[i];
    //     listofifle.push(file.files[0].name);
    //     // do things with file
    // }
    // console.log(listofifle)

    // for (let i = 0; i < total_obj; i++) {
    //     if (fasta0[i].value != "" && fasta1[i].value != "" && output_dir[i].value != "" && refGenomes[i].value != "" && organismName[i].value != "" && !isNaN(numberofthreads[i].value) && !isNaN(readsperchunk[i].value)) {
    //         if (!isNaN(numberofthreads[i].value) && !isNaN(readsperchunk[i].value)) {
    //             var demultiplex_params = new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value, referencesgenomesarray, organismNamearray, numberofthreads[i].value, readsperchunk[i].value, replacements[i].value, skipRemovingTmpFilesFrom[i].value, witDB[i].value)
    //             objects.push(demultiplex_params);
    //         } else {
    //             numberofthreads[i].value = "16";
    //             readsperchunk[i].value = "";
    //             var demultiplex_params = new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value, refGenomes[i].value, organismName[i].value, numberofthreads[i].value, readsperchunk[i].value, replacements[i].value, skipRemovingTmpFilesFrom[i].value, witDB[i].value)
    //             var demultiplexJSON = JSON.stringify(demultiplex_params);
    //             objects.push(demultiplexJSON);
    //         }
    //     } else {
    //         alert("Please fill in all the required fields");
    //         objects = null;
    //     }
    // }
    // console.log(objects);





    // new Demultiplex(fasta0[i].value, fasta1[i].value, output_dir[i].value, refGenomes[i].value, organismName[i].value, numberofthreads[i].value, readsperchunk[i].value, replacements[i].value, skipRemovingTmpFilesFrom[i].value, witDB[i].value)
    // param = `--fastq1 ${fastas_fs_ls_string} --fastq2 ${fastas_rv_ls_string} --outdir ${output_dir} --refGenomes ${ref_genome_string} --sampleNames ${organism_name_string} --trheads ${num_of_threads} --nreads_per_chunk ${reads_per_chunk} --replace ${rpl_ls_str} --skip_removing_tmp_files ${skip_removing_tmp_files} --wit_db ${wit_db}`


}