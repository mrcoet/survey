<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/css/bootstrap-select.min.css" integrity="sha512-mR/b5Y7FRsKqrYZou7uysnOdCIJib/7r5QeJMFvLNHNhtye3xJp1TdJVPLtetkukFn227nKpXD9OjUc09lx97Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/admin/assets/css/style.css">
    <title>Document</title>
</head>

<body>
    <script>
        //         window.onbeforeunload = function() {
        //         console.log("Refresh!!!!");
        //         // window.location.href = 'index.php';
        // };
        const pageAccessedByReload = (
            (window.performance.navigation && window.performance.navigation.type === 1) ||
            window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload')
        );
        if (pageAccessedByReload) {
            window.location.href = 'index.php';
        }

        // window.onbeforeunload = function() {
        //     alert("Dude, are you sure you want to leave? Think of the kittens!");
        // }
    </script>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #7E202C;">
        <div class="container-fluid px-5">
            <a href="" class="navbar-brand">lQuan</a>
            <div><i class="bi bi-box-arrow-right text-light h3"></i></div>


        </div>


    </nav>
    <main>
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 px-sm-2 border-start border-end border-1 border-secondary">
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 min-vh-100">
                        <div class="d-flex align-items-center justify-content-start pt-3">
                            <h6><i class="bi bi-journal-text"></i> Активные опросы</h6>
                        </div>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Качество образования</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Качество образования</a>
                            </li>
                        </ul>

                        <div class="d-flex align-items-center justify-content-start pt-3">
                            <h6><i class="bi bi-command"></i> Администрирование</h6>
                        </div>

                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Опросы</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Пользователи</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col py-3">
                    <form action="/admin/add_survey.php" method="POST">
                        <div id="survey-body">
                            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.14.0-beta2/js/bootstrap-select.min.js" integrity="sha512-FHZVRMUW9FsXobt+ONiix6Z0tIkxvQfxtCSirkKc5Sb4TKHmqq1dZa8DphF0XqKb3ldLu/wgMa8mT6uXiLlRlw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>