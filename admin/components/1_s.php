<?php
$query_operators = "
SELECT users.last_name, users.user_id
FROM users
INNER JOIN users_roles
WHERE users.user_id = users_roles.user_id
AND users_roles.role_id = 2
";

$operators_statement = $db->prepare($query_operators);
$operators_statement->execute();
$operators = $operators_statement->fetchAll();
$operators_statement->closeCursor();

$query_survey_admin = "
SELECT users.last_name, users.user_id
FROM users
INNER JOIN users_roles
WHERE users.user_id = users_roles.user_id
AND users_roles.role_id = 1
";

$survey_adminoperators_statement = $db->prepare($query_survey_admin);
$survey_adminoperators_statement->execute();
$survey_admins = $survey_adminoperators_statement->fetchAll();
$survey_adminoperators_statement->closeCursor();


$query_study_years = "SELECT * FROM study_year";
$study_years_statement = $db->prepare($query_study_years);
$study_years_statement->execute();
$study_years = $study_years_statement->fetchAll();
$study_years_statement->closeCursor();

?>



<section>
    <div class="container-fluid mt-5 px-0" style="max-width: 920px;">
        <div class="card">
            <div class="card-body">
                <h5 class="mb-4">Создание и редактирование опроса по качеству образования</h5>
                <div class="row mb-3">
                    <div class="col-3">Название опроса</div>
                    <div class="col"><input type="text" name="survey_title" class="form-control" placeholder="Название опроса..."></div>
                </div>
                <div class="row mb-3">
                    <div class="col-3">Учебный год</div>
                    <div class="col">
                        <select class="form-select" name="study_year" aria-label="Default select example">
                            <?PHP foreach($study_years as $study_year): ?>
                            <option value="<?php echo $study_year['study_year_id'] ?>"><?php echo $study_year['study_year']  ?></option>
                            <?php endforeach ?>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-3">Дата начала опроса</div>
                    <div class="col"><input type="date" name="start_date" class="form-control"></div>
                </div>
                <div class="row mb-3">
                    <div class="col-3">Дата Окончамия опроса</div>
                    <div class="col"><input type="date" name="end_name" class="form-control"></div>
                </div>
                <div class="row mb-3">
                    <div class="col-3">Администратор опроса</div>
                    <div class="col">
                        <select class="form-select" name="survey_admin" aria-label="Default select example">
                            <?php foreach($survey_admins as $admin): ?>
                                <option value="<?php echo $admin['user_id'] ?>"><?php echo $admin['last_name'] ?></option>
                            <?php endforeach; ?>
                        </select></div>
                </div>
                <div class="row mb-3">
                    <div class="col-3">Операторы опроса</div>
                    <div class="col">
                        <div class="form-group">
                            <select class="selectpicker form-control" name="survey_operators[]" data-width="auto" multiple multiple data-selected-text-format="count > 3">
                                <?php foreach($operators as $operator): ?>
                                    <option value="<?php echo $operator['user_id'] ?>"><?php echo $operator['last_name'] ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                    </div>
                </div>
                <div class="d-flex  mb-3">
                    <button type="button" class="btn btn-primary mx-3" style="background-color: #7E202C; border-color: #7E202C;">Остановить опрос</button>
                    <buttion type="button" class="btn btn-primary"  style="background-color: #7E202C; border-color: #7E202C;" >Скрыть опрос</buttion>
                </div>
            </div>

        </div>
    </div>

</section>
