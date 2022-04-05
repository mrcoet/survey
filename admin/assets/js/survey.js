const q_model_1 = document.getElementById('choose_model_1')
const q_model_2 = document.getElementById('choose_model_2')
const q_model_3 = document.getElementById('choose_model_3')
const q_model_4 = document.getElementById('choose_model_4')

const surveyBody = document.getElementById('survey-body');


import {q_model_body_1} from './1_q_m.js';
import {q_model_body_2} from './2_q_m.js';
import {q_model_body_3} from './3_q_m.js';
import {q_model_body_4} from './4_q_m.js';


// Model 1  ==================================================

function add_model_1(){
    // var last_element = my_array[my_array.length - 1];
    let lastElement = getTinker();
    $('#survey-body').append(q_model_body_1(1, lastElement));

    $("#m_1_mdelete_q_"+lastElement).on('click', function(){
        console.log('fsfsdfwsssss');
        $(".m_1_mdeletebody_q_"+lastElement).parent().empty();
        deleteOneTinker(lastElement);
        console.log($('#tinkerArr').val());
    });

    $("#m_1_activate_q_"+lastElement).on('click', function(){
        let actSwitch = $("#db_m_1_activate_q_"+lastElement).val();
        actSwitch = parseInt(actSwitch);
        if (actSwitch == 1) {
            console.log("#db_m_1_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Activate The Question");
            $(this).removeClass();
            $(this).addClass("btn bg-activate");
            $("#db_m_1_activate_q_"+lastElement).val("0");
        } else if (actSwitch == 0) {
            console.log("#db_m_1_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Не задавать Вопрос");
            $(this).removeClass();
            $(this).addClass("btn bg-survey");
            $("#db_m_1_activate_q_"+lastElement).val("1");
        }

    });

}



// Model 2  ==================================================

function add_model_2(){
    
    let lastElement = getTinker();
    

    $('#survey-body').append(q_model_body_2(2, lastElement));
    
    let tagNam = "#m_"+2+"_add_q_"+lastElement;
    
    $(tagNam).on('click', function(){
        console.log('Fuck');
        let tagNam = "#m_"+2+"_choices_panel_q_"+lastElement;
        let classNam = "m_"+2+"_closable_q_"+lastElement;
        let counter = $("#m_2_counter_q_"+lastElement).val();
        counter = parseInt(counter) + 1;
        let btnId = "m_2_add_q_"+lastElement+"_c_"+counter;
        $("#m_2_counter_q_"+lastElement).val(counter);
        let new_input = `
        <div>
            <div class="d-flex `+classNam+`_c_`+counter+` px-0  mt-2">
                <input name="choice_q_`+lastElement+`_c_`+counter+`" type="text" class="form-control w-50">
                <button type="button"  class="btn btn-primary mx-3" id="`+btnId+`" style="background-color: #7E202C; border-color: #7E202C;"><i class="bi bi-trash h6"></i></button>
            </div>
        </div> 
        
        `;
        

        $(tagNam).append(new_input);

        $("#"+btnId).on('click', function(){
            console.log('fuuuuu');
            $(".m_"+2+"_closable_q_"+lastElement+"_c_"+counter).parent().empty();
            counter = $("#m_2_counter_q_"+lastElement).val();
            counter = parseInt(counter) - 1;
            $("#m_2_counter_q_"+lastElement).val(counter);
        });
     
    });
    
    $("#m_2_mdelete_q_"+lastElement).on('click', function(){
        console.log('fsfsdfwsssss');
        $(".m_2_mdeletebody_q_"+lastElement).parent().empty();
        deleteOneTinker(lastElement);
        console.log($('#tinkerArr').val());
    });

    $("#m_2_activate_q_"+lastElement).on('click', function(){
        let actSwitch = $("#db_m_2_activate_q_"+lastElement).val();
        actSwitch = parseInt(actSwitch);
        if (actSwitch == 1) {
            console.log("#db_m_2_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Activate The Question");
            $(this).removeClass();
            $(this).addClass("btn bg-activate");
            $("#db_m_2_activate_q_"+lastElement).val("0");
        } else if (actSwitch == 0) {
            console.log("#db_m_2_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Не задавать Вопрос");
            $(this).removeClass();
            $(this).addClass("btn bg-survey");
            $("#db_m_2_activate_q_"+lastElement).val("1");
        }

    });



}

// Model 3  ==================================================

function add_model_3(){

    let lastElement = getTinker();
    

    $('#survey-body').append(q_model_body_3(3, lastElement));
    
    let tagNam = "#m_"+3+"_add_q_"+lastElement;
    
    $(tagNam).on('click', function(){
        console.log('Fuck');
        let tagNam = "#m_"+3+"_choices_panel_q_"+lastElement;
        let classNam = "m_"+3+"_closable_q_"+lastElement;
        let counter = $("#m_3_counter_q_"+lastElement).val();
        counter = parseInt(counter) + 1;
        let btnId = "m_3_add_q_"+lastElement+"_c_"+counter;
        $("#m_3_counter_q_"+lastElement).val(counter);
        let new_input = `
        <div>
            <div class="d-flex `+classNam+`_c_`+counter+` px-0  mt-2">
                <input name="choice_q_`+lastElement+`_c_`+counter+`" type="text" class="form-control w-50">
                <button type="button"  class="btn btn-primary mx-3" id="`+btnId+`" style="background-color: #7E202C; border-color: #7E202C;"><i class="bi bi-trash h6"></i></button>
            </div>
        </div> 
        
        `;
        

        $(tagNam).append(new_input);

        $("#"+btnId).on('click', function(){
            console.log('fuuuuu');
            $(".m_"+3+"_closable_q_"+lastElement+"_c_"+counter).parent().empty();
            counter = $("#m_3_counter_q_"+lastElement).val();
            counter = parseInt(counter) - 1;
            $("#m_3_counter_q_"+lastElement).val(counter);
        });
        
     
    });

    $("#m_3_mdelete_q_"+lastElement).on('click', function(){
        console.log('fsfsdfwsssss');
        $(".m_3_mdeletebody_q_"+lastElement).parent().empty();
        deleteOneTinker(lastElement);
        console.log($('#tinkerArr').val());
    });

    $("#m_3_activate_q_"+lastElement).on('click', function(){
        let actSwitch = $("#db_m_3_activate_q_"+lastElement).val();
        actSwitch = parseInt(actSwitch);
        if (actSwitch == 1) {
            console.log("#db_m_3_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Activate The Question");
            $(this).removeClass();
            $(this).addClass("btn bg-activate");
            $("#db_m_3_activate_q_"+lastElement).val("0");
        } else if (actSwitch == 0) {
            console.log("#db_m_3_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Не задавать Вопрос");
            $(this).removeClass();
            $(this).addClass("btn bg-survey");
            $("#db_m_3_activate_q_"+lastElement).val("1");
        }

    });
}


// Model 4  ==================================================

function add_model_4(){
    let lastElement = getTinker();
    
    $('#survey-body').append(q_model_body_4(4, lastElement));

    $("#m_4_mdelete_q_"+lastElement).on('click', function(){
        console.log('fsfsdfwsssss');
        $(".m_4_mdeletebody_q_"+lastElement).parent().empty();
        deleteOneTinker(lastElement);
        console.log($('#tinkerArr').val());
    });

    $("#m_4_activate_q_"+lastElement).on('click', function(){
        let actSwitch = $("#db_m_4_activate_q_"+lastElement).val();
        actSwitch = parseInt(actSwitch);
        if (actSwitch == 1) {
            console.log("#db_m_4_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Activate The Question");
            $(this).removeClass();
            $(this).addClass("btn bg-activate");
            $("#db_m_4_activate_q_"+lastElement).val("0");
        } else if (actSwitch == 0) {
            console.log("#db_m_4_activate_q_"+lastElement+" was: "+actSwitch);
            $(this).text("Не задавать Вопрос");
            $(this).removeClass();
            $(this).addClass("btn bg-survey");
            $("#db_m_4_activate_q_"+lastElement).val("1");
        }

    });
}


// ===================================================================================

$('#choose_model_1').on('click', add_model_1);
$('#choose_model_2').on('click', add_model_2);
$('#choose_model_3').on('click', add_model_3);
$('#choose_model_4').on('click', add_model_4);



function getTinker(){
    var value_arr = $('#tinkerArr').val();
    value_arr = JSON.parse(value_arr);
    console.log(value_arr);
    var last_element = value_arr[value_arr.length - 1];
    last_element = parseInt(last_element) + 1;
    value_arr.push(last_element)
    $('#tinkerArr').val(JSON.stringify(value_arr));
    return last_element;
}


function deleteOneTinker(num){
    console.log('Deleteeeeeeeeeeeeeee');
    var value_arr = $('#tinkerArr').val();
    value_arr = JSON.parse(value_arr);
    value_arr = value_arr.filter(e => e !== num)
    $('#tinkerArr').val(JSON.stringify(value_arr));
}


let deleteElement = function (mNum, qNum) {
    let tagNam = ".m_"+mNum+"_closable_q_"+qNum; // .m_2_closable_q_1
    $(tagNam).parent().empty();
};


let addChoiceElementQ2 = function(mNum, qNum) {
    let tagNam = "#m_"+mNum+"_choices_panel_q_"+qNum; // #m_2_choices_panel_q_1
    let classNam = ".m_"+mNum+"_closable_q_"+qNum;
    let add_input = mNum+","+qNum;
    let new_input = `
    <div>
        <div class="d-flex`+classNam+` px-0  mt-2">
            <input type="text" class="form-control w-50">
            <button type="button" id="btn-close-1" onclick="deleteElement(`+add_input+`)" class="btn btn-primary mx-3" style="background-color: #7E202C; border-color: #7E202C;"><i class="bi bi-trash h6"></i></button>
        </div>
    </div> 
    
    `
    $(tagNam).append(new_input);
    $(document),read(function() {
        $('.selectpicker').selectpicker();
    });
};



// //Object
// var elems_obj = {};
// elems_obj[0] = '1';
// elems_obj[1] = '2';
// elems_obj[2] = '3';
// //Array
//  var elems_arr = [];
// elems_arr.push('1');
// elems_arr.push('2');
// elems_arr.push('3');

// $('#input_hidden_field_obj').val(JSON.stringify(elems_obj));
// $('#input_hidden_field_arr').val(JSON.stringify(elems_arr));

// var value_obj = $('#input_hidden_field_obj').val();
// var value_arr = $('#input_hidden_field_arr').val();
// value_obj = JSON.parse(value_obj);
// value_arr = JSON.parse(value_arr);

// console.log(value_obj);
// console.log(value_arr);


