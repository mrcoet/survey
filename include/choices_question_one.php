<section>
    <div class="container-fluid mt-5 px-0" style="max-width: 920px;">
        <div class="card">
            <div class="card-body">
                <h5 class="mb-4">Вопрос: выбор только одного варианта ответа</h5>
                <div class="row mb-4">
                    <div class="col-md-3">Текст Вопроса</div>
                    <div class="col">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-3">Варианты ответа</div>
                    <div class="col q_2_choices_panel" id="q_2_choices_panel">

                        <div>
                            <div class="d-flex q_2_closable px-0 mt-2">
                                <input type="text" class="form-control w-50">
                            </div>
                        </div>
                        <div>
                            <div class="d-flex q_2_closable px-0 mt-2">
                                <input type="text" class="form-control w-50">
                            </div>
                        </div>
                    
                    </div>

                </div>
                <div class="row mb-2">
                    <div class="col-md-3"></div>
                    <div class="col">
                    <i type="button" class="bi bi-plus-square-fill h3 text_survey" id="q_2_add"></i>
                    <input type="hidden" value="1" id="q_2_q_2_total_chq">
                </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <p>
                        <input class="form-check-input" type="checkbox">
                        ответ обязателет
                    </p>
                </div>
                <div class="d-flex  mb-2">
                    <button class="btn btn-primary me-3" style="background-color: #7E202C; border-color: #7E202C;">Удалить Вопрос</button>
                    <buttion class="btn btn-primary" style="background-color: #7E202C; border-color: #7E202C;">Не задавать Вопрос</buttion>
                </div>
            </div>

        </div>
    </div>

</section>


<script type="text/javascript">
    var closeit_q_2 = function(param) {
        $(param).parents(".q_2_closable").parent().empty();
        var new_chq_no = parseInt($('#q_2_total_chq').val()) - 1;
        $('#q_2_total_chq').val(new_chq_no);
    };
</script>




<script type="text/javascript">
    $('#q_2_add').on('click', add);

    function add() {
        console.log("enterned");
        var new_chq_no = parseInt($('#q_2_total_chq').val()) + 1;
        var new_input = `
 
        <div>
            <div class="d-flex q_2_closable px-0  mt-2">
                <input type="text" class="form-control w-50">
                <button type="button" id="btn-close-1" onclick="closeit_q_2(this)" class="btn btn-primary mx-3" style="background-color: #7E202C; border-color: #7E202C;"><i class="bi bi-trash h6"></i></button>
            </div>
        </div> 
            `;

        $('#q_2_choices_panel').append(new_input);

        $('#q_2_total_chq').val(new_chq_no);
        $(document).ready(function() {
            $('.selectpicker').selectpicker();
        });
    }
</script>
