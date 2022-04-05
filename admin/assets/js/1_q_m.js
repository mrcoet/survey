

function q_model_body_1(nNum, qNum){ 
    let output = `
<section>
    <div class="container-fluid mt-5 px-0 m_1_mdeletebody_q_`+qNum+`" style="max-width: 920px;">
        <div class="card">
            <div class="card-body">
                <h5 class="mb-4">Вопрос: Оценка в баллах</h5>
                <div class="row mb-4">
                    <div class="col-md-3">Текст Вопроса</div>
                    <div class="col">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-3">Минимальный балл</div>
                    <div class="col-md-1"><input type="text" class="form-control"></div>
                    <div class="col">
                        <div class="d-flex">
                            Характеристика Минимального балла <input type="text" class="form-control w-50 ms-2">
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-3">Максимальный балл</div>
                    <div class="col-md-1"><input type="text" class="form-control"></div>
                    <div class="col">
                        <div class="d-flex justify-items-between align-items-center">
                            <p>Характеристика максимального балла</p> <input type="text" class="form-control w-50 ms-2">
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                <p>
                <input class="form-check-input" type="checkbox">
                ответ обязателет</p>
                </div>
                <div class="d-flex  mb-2">
                <!-- Button trigger modal -->
                    <button type="button" class="btn bg-survey me-3" data-bs-toggle="modal" data-bs-target="#m_1_modal_q_`+qNum+`">
                        Удалить Вопрос
                        </button>
                
                <buttion class="btn bg-survey"  id="m_1_activate_q_`+qNum+`">Не задавать Вопрос</buttion>
                <input hidden id="db_m_1_activate_q_`+qNum+`" value="1">
                
                
                <!-- Modal -->
                <div class="modal fade btn" id="m_1_modal_q_`+qNum+`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <button type="button" class="btn bg-survey" id="m_1_mdelete_q_`+qNum+`" data-bs-dismiss="modal">Delete</button>
                    </div>
                    </div>
                </div>
                </div>
                
                </div>
            </div>

        </div>
    </div>

</section>`

    return output;
}

export {q_model_body_1}