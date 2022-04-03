<section>
    <div class="container-fluid mt-5 px-0" style="max-width: 920px;">
        <div class="card">
            <div class="card-body">
                <h5 class="mb-4">Оценка дисциплин, практик <span class="text-secondary">(обязательный блок)</span></h5>
                <div class="row mb-3">
                    <div class="col-5">Дисциплины, практики</div>
                    <div class="col-5">Реализующие подразделения</div>
                    <div class="col-2"></div>
                </div>
                <div class="choices-panel-1" id="choices-panel-1">
                    <div>
                    <div class="row mb-3 closeable-panel-1">
                        <div class="col-5">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div class="col-5">
                            <div class="form-group">
                                <select class="selectpicker form-control" data-width="auto" name="nums[]"  multiple data-selected-text-format="count > 3">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-2">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="d-flex  mb-3 mt-5">
                    <button class="btn btn-primary me-3 add" style="background-color: #7E202C; border-color: #7E202C;">Добавить дисциплину, практику</button>
                    <input type="hidden" value="1" id="total_chq">
                </div>
            </div>


        </div>

    </div>


</section>


<script type="text/javascript">
    var closeit = function(param) {
        $(param).parents(".closeable-panel-1").parent().empty();
        var new_chq_no = parseInt($('#total_chq').val()) -1;
        $('#total_chq').val(new_chq_no);
    };
</script>



<script type="text/javascript">
    $('.add').on('click', add);

    function add() {
        console.log('entered');
        var new_chq_no = parseInt($('#total_chq').val()) + 1;
        var new_input = `
        <div>
        <div class="row mb-3 closeable-panel-1">
                        <div class="col-5">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div class="col-5">
                            <div class="form-group">
                                <select class="selectpicker form-control" data-width="auto" name="nums[]" multiple data-selected-text-format="count > 3">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                    <option value="4">Four</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-2">
                            <button type="button" id="btn-close" onclick="closeit(this)" class="btn btn-primary mx-3" style="background-color: #7E202C; border-color: #7E202C;"><i class="bi bi-trash h6"></i></button>
                        </div>
            </div>
            </div>   
            `;

        $('#choices-panel-1').append(new_input);

        $('#total_chq').val(new_chq_no);
        $(document).ready(function() {
            $('.selectpicker').selectpicker();
        });
    }
</script>