<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Expense Manager</title>

        <!-- Stylesheets -->
        <!-- <link href='{{mix('css/app.css')}}' rel='stylesheet' type='text/css'> -->
        
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:200,600" rel="stylesheet" type="text/css">
    </head>
    <body>

        <noscript>
            <strong>We're sorry but the Expense Manager app doesn't work properly
            without Javascript enabled. Please enable it to continue.</strong>
        </noscript>

        <div id="app"></div>

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
