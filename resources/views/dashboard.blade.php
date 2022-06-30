<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ isset($title) ? $title : 'Abrar'}}</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet">
        <script type="module" src="{{ mix('js/dash.js') }}" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
        <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
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
        <script>
            const API_URL = '{{ url('api') }}';
        </script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
