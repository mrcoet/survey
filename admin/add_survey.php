<?php 
include "db_conn.php";

$query = "SELECT max(survey_id) FROM surveys";

if(is_null($query)){
    $query = 0;
    $survey_id = (int)$query;
} else{
    $survey_id = (int)$query + 1;
}

$survey_title = $_POST['survey_title'];
$study_year = $_POST['study_year'];
$start_date = $_POST['start_date'];
$end_date = $_POST['end_date'];
$survey_admin_id = $_POST['survey_admin'];


$query = "INSERT INTO surveys (survey_id, title, study_year_id, start_date_m, actual_start_date, end_date_m, actual_end_date, active_m, admin_id) 
          VALUES (:survey_id, :survey_title, :study_year, :start_date, :start_date, :end_date, :end_date, 1, :survey_admin_id)";

$stm = $db->prepare($query);

$stm->bindValue(':survey_id', $survey_id);
$stm->bindValue(':survey_title', $survey_title);
$stm->bindValue(':study_year', $study_year);
$stm->bindValue(':start_date', $start_date);
$stm->bindValue(':end_date', $end_date);
$stm->bindValue(':survey_admin_id', $survey_admin_id );

$execut_success = $stm->execute();
$stm->closeCursor();

// operators
$survey_operators_arr_ids = $_POST['survey_operators'];
foreach($survey_operators_arr_ids as $op){
    $query = "INSERT INTO survey_operators (survey_id, operator_id)
            VALUES (:survey_id, :operator_id)";
    
    $stm = $db->prepare($query);
    $stm->bindValue(':survey_id', $survey_id);
    $stm->bindValue(':operator_id', $op);
    $execut_success = $stm->execute();
    $stm->closeCursor();
}


// survey_dis_?
// survey_subs_? // array
$dsub_counter = $_POST['dis_sub_counter'];



foreach($_POST['tinker_counter'] as $q){
    if ($q != 0){
        $m_t = $_POST['m_type_'+$q];
        if ($m_t == "m_1"){
            $title = $_POST['title'+$q];
            $max = $_POST['max_'+$q];
            $max_desc = $_POST['max_desc_'+$q];
            $min = $_POST['min_'+$q];
            $min_desc = $_POST['min_desc_'+$q];
            $active = $_POST['active_'+$q];
            $require = isset($_POST['require'+$q]);
        }
    }
}



?>


<table>
<?php 


    foreach ($_POST as $key => $value) {
        echo "<tr>";
        echo "<td>";
        echo $key;
        echo "</td>";
        echo "<td>";
        echo $value;
        echo "</td>";
        echo "</tr>";
    }


?>


</table>