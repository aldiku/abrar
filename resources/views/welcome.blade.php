<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ isset($title) ? $title : 'Abrar'}}</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <script type="module" src="{{ asset('js/app.js') }}" defer></script>
        <style>
            @font-face {
            font-family: 'ProductSans';
            src: url('{{ asset('css/fonts/ProductSans-Regular.eot') }}');
            src: url('{{ asset('css/fonts/ProductSans-Regular.eot') }}?#iefix') format('embedded-opentype'), url('{{ asset('css/fonts/ProductSans-Regular.woff') }}') format('woff'), url('{{ asset('css/fonts/ProductSans-Regular.ttf') }}') format('truetype');
        }

        body {
            font-family: "ProductSans";
        }
        </style>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>