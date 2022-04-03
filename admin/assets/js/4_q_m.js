
function q_model_body_4(){
    let output = `
        <section>
            <div class="container-fluid mt-5 px-0" style="max-width: 920px;">
                <div class="card">
                    <div class="card-body">
                        <h5 class="mb-4">Вопрос: свободный ответ</h5>
                        <div class="row mb-4">
                            <div class="col-md-3">Текст Вопроса</div>
                            <div class="col">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                        <p>
                        <input class="form-check-input" type="checkbox">
                        ответ обязателет</p>
                        </div>
                        <div class="d-flex  mb-2">
                            <button class="btn btn-primary me-3" style="background-color: #7E202C; border-color: #7E202C;">Удалить Вопрос</button>
                            <buttion class="btn btn-primary"  style="background-color: #7E202C; border-color: #7E202C;" >Не задавать Вопрос</buttion>
                        </div>
                    </div>

                </div>
            </div>

        </section>`
    return output
}

export {q_model_body_4}