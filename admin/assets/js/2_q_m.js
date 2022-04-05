function q_model_body_2(mNum, qNum) {
    let add_input = mNum+","+qNum;
    let tagNam = "m_"+mNum+"_add_q_"+qNum;
    let classNam = "m_"+mNum+"_choices_panel_q_"+qNum;
    let output = `
<section>
    <div class="container-fluid mt-5 px-0 m_2_mdeletebody_q_`+qNum+` " style="max-width: 920px;">
        <div class="card">
            <div class="card-body">
                <h5 class="mb-4">Вопрос: выбор только одного варианта ответа</h5>
                <div class="row mb-4">
                    <div class="col-md-3">Текст Вопроса</div>
                    <div class="col">
                        <textarea name="title`+qNum+`" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-3">Варианты ответа</div>
                    <div class="col q_2_choices_panel" id="`+classNam+`">

                        <div>
                            <div class="d-flex q_2_closable px-0 mt-2">
                                <input name="choice_q_`+qNum+`_c_1" type="text" class="form-control w-50">
                            </div>
                        </div>
                        <div>
                            <div class="d-flex q_2_closable px-0 mt-2">
                                <input name="choice_q_`+qNum+`_c_2" type="text" class="form-control w-50">
                            </div>
                        </div>
                    
                    </div>

                </div>
                <div class="row mb-2">
                    <div class="col-md-3"></div>
                    <div class="col">
                    <i type="button" type="button" class="bi bi-plus-square-fill h3 text_survey"  id="`+tagNam+`"></i>
                    <input type="hidden" value="2" name="choices_counter_`+qNum+`" id="m_2_counter_q_`+qNum+`">
                </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <p>
                        <input name="require_`+qNum+`" class="form-check-input" type="checkbox">
                        ответ обязателет
                    </p>
                </div>
                <div class="d-flex  mb-2">
                    <!-- Button trigger modal -->
                        <button type="button" class="btn bg-survey me-3" data-bs-toggle="modal" data-bs-target="#m_2_modal_q_`+qNum+`">
                        Удалить Вопрос
                        </button>
                    
                    <buttion class="btn bg-survey" id="m_2_activate_q_`+qNum+`">Не задавать Вопрос</buttion>
                    <input type="hidden" name="active_`+qNum+`" id="db_m_2_activate_q_`+qNum+`" value="1">
                    <input type="hidden" name="m_type_`+qNum+`" value="m_2">
                    <!-- Modal -->
                    <div class="modal fade btn" id="m_2_modal_q_`+qNum+`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog  modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn bg-survey" id="m_2_mdelete_q_`+qNum+`" data-bs-dismiss="modal">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</section>`;
    return output;
}

export {q_model_body_2}