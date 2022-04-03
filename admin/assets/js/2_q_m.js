function q_model_body_2(mNum, qNum) {
    let add_input = mNum+","+qNum;
    let tagNam = "m_"+mNum+"_add_q_"+qNum;
    let classNam = "m_"+mNum+"_choices_panel_q_"+qNum;
    let output = `
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
                    <div class="col q_2_choices_panel" id="`+classNam+`">

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
                    <i type="button" class="bi bi-plus-square-fill h3 text_survey"  id="`+tagNam+`"></i>
                    <input type="hidden" value="1" id="m_2_counter_q_`+qNum+`">
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

</section>`;
    return output;
}

export {q_model_body_2}