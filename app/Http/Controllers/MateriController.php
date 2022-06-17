<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class MateriController extends Controller
{
    public function index(Request $request)
    {
        $data = [
            'status' => true,
            'message' => '',
            'data' => ''
        ];
        return response()->json($data);
    }
}
