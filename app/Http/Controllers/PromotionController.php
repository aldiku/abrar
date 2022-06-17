<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PromotionController extends Controller
{
    public function univ(Request $request)
    {
        $now = date('Y-m-d H:i:s');
        $list = DB::select("SELECT u.university_name, u.address, u.logo, u.description, u.slug_university FROM promotion p JOIN university u ON p.target_id = u.id WHERE p.module = 'university' AND p.expired_at >= '$now' AND p.point >= 0 LIMIT 4");
        $data = [
            'status' => true,
            'message' => '',
            'data' => $list
        ];
        return response()->json($data);
    }
}
