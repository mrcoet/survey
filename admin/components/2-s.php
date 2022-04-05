<?php 

$query_disiplines = "SELECT * FROM disciplines";
$query_subdivisions = "SELECT * FROM subdivisions";

$statement = $db->prepare($query_disiplines);
$statement->execute();
$disiplines = $statement->fetchAll();
$statement->closeCursor();

$statement = $db->prepare($query_subdivisions);
$statement->execute();
$subs = $statement->fetchAll();
$statement->closeCursor()

?>

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
                            <select class="form-select" name="survey_dis_1" aria-label="Default select example">
                            <?php foreach($disiplines as $dis): ?>
                                <option value="<?PHP echo $dis['discipline_id'] ?>"><?php echo $dis['dis_name'] ?></option>
                            <?php endforeach; ?>    
                            </select>
                        </div>

                        <div class="col-5">
                            <div class="form-group">
                                <select class="selectpicker form-control" data-width="auto" name="survey_subs_1[]"  multiple data-selected-text-format="count > 3">
                                <?php foreach($subs as $sub): ?>
                                    <option value="<?PHP echo $sub['subdivision_id'] ?>"><?php echo $sub['sub_name'] ?></option>
                                <?php endforeach; ?> 
                                </select>
                            </div>
                        </div>
                 
                    </div>
                    </div>
                </div>
                <div class="d-flex  mb-3 mt-5">
                    <button type="button" class="btn btn-primary me-3 add" style="background-color: #7E202C; border-color: #7E202C;">Добавить дисциплину, практику</button>
                    <input type="hidden" name="dis_sub_counter" id="dis_sub_counter" value="1">
                </div>
            </div>


        </div>

    </div>


</section>


<script type="text/javascript">
    var closeit = function(param) {
        $(param).parents(".closeable-panel-1").parent().empty();
        // var new_dis_sub_counter = parseInt($('#dis_sub_counter').val()) -1;
        // $('#dis_sub_counter').val(new_dis_sub_counter);
    };
</script>



<script type="text/javascript">
    $('.add').on('click', add);

    function add() {
        console.log('entered');
        var new_dis_sub_counter = parseInt($('#dis_sub_counter').val()) + 1;
        var new_input = `
        <div>
        <div class="row mb-3 closeable-panel-1">
                        <div class="col-5">
                            <select class="form-select" name="survey_dis_`+new_dis_sub_counter+`" aria-label="Default select example">
                            <?php foreach($disiplines as $dis): ?>
                                <option value="<?PHP echo $dis['discipline_id'] ?>"><?php echo $dis['dis_name'] ?></option>
                            <?php endforeach; ?>
                            </select>
                        </div>

                        <div class="col-5">
                            <div class="form-group">
                                <select class="selectpicker form-control" data-width="auto" name="survey_subs_`+new_dis_sub_counter+`[]" multiple data-selected-text-format="count > 3">
                                <?php foreach($subs as $sub): ?>
                                    <option value="<?PHP echo $sub['subdivision_id'] ?>"><?php echo $sub['sub_name'] ?></option>
                                <?php endforeach; ?> 
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

        $('#dis_sub_counter').val(new_dis_sub_counter);
        $(document).ready(function() {
            $('.selectpicker').selectpicker();
        });
    }
</script>