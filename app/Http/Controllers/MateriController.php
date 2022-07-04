<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Materi;
use DB;
use Str;

class MateriController extends Controller
{
    public function index(Request $request)
    {
        $limit = !empty($request->query('limit')) ? $request->query('limit') : 9 ;
        $limit = ($limit >= 50) ? 50 : $limit ;
        $offset = !empty($request->query('offset')) ? $request->query('offset') : 0;
        $order = !empty($request->query('order')) ? $request->query('order') : 'ASC';
        $sort = !empty($request->query('sort')) ? $request->query('sort') : 'id';
        $search = !empty($request->query('search')) ? $request->query('search') : '';
        $status = !empty($request->query('status')) ? $request->query('status') : '1';
        $page = !empty($request->query('page')) ? $request->query('page') : 1;
        $type = !empty($request->query('type')) ? $request->query('type') : '';
        if(empty($offset)){
            $offset	= ($page == 1 ) ? 0 : (($page-1)*$limit);
        }
        $out = [];
        $SQL = DB::table('materi')
        ->leftJoin('materi_categories','materi.category_id','=','materi_categories.id')
        ->select(DB::raw('materi.id,materi_name,description,thumbnail,seo_url,status'))
        ->where('materi.status',$status)
        ->when(!empty($type), function($query) use ($type) {

        })
        ->when(!empty($search), function ($query) use ($search) {
            $query->where(function($query) use ($search) {
                $query  ->where('materi.materi_name','like','%'.strtolower($search).'%')
                        ->orWhereIn('materi.description',$search);
                });
        })->groupBy('materi.id')->orderByRaw("materi.$sort $order");
        $total = DB::table('materi')->count();
        $all = $SQL->limit($limit)->offset($offset)->get()->toArray();
        if(!empty($all)){
                $out['total'] = $total;
                foreach($all as $a){
                    $participant = DB::select('SELECT COUNT(id)total from participant where materi_id = ?',[$a->id]);
                    $rows[] = [
                        'id' => $a->id,
                        'materi_name' => $a->materi_name,
                        'description' => $a->description,
                        'thumbnail' => $a->thumbnail,
                        'seo_url' => $a->seo_url,
                        'status' => (int) $a->status,
                        'participant' => $participant[0]->total,
                    ];
                }
                $out['rows'] = $rows;
        }
        $data = [
            'status' => true,
            'message' => '',
            'data' => $out
        ];
        return response()->json($data);
    }

    function detail(Request $request,$slug){
        if($slug){
            $out = Materi::where('seo_url', $slug)->with('universitas')->first();
            $data = [
                'status' => true,
                'message' => '',
                'data' => $out
            ];
            return response()->json($data);
        }
    }

    function upload_thumb(Request $request){
        $request->validate([
            'dataFile' => 'required|mimes:png,jpg,jpeg|max:2048'
        ]);
		$file = $request->file('dataFile');
 
		$nama_file = time()."_".$file->getClientOriginalName();
 
		$tujuan_upload = 'assets/materi/thumb/';
		$file->move($tujuan_upload,$nama_file);
        return response()->json(['data' => $tujuan_upload.$nama_file]);
    }

    function save(Request $request){
        request()->validate([
            'materi_name' => 'required',
            'description' => 'required',
        ]);
        try {
            $data = [
                'materi_name' => $request->materi_name,
                'description' => $request->description,
                'thumbnail' => $request->thumbnail,
                'category_id' => $request->kategory[0],
                'departmen_id' => $request->jurusan[0],
                'class_id' => $request->kelas[0],
                'seo_url' => Str::slug($request->materi_name),   
                'user_univ_id' => '174',
                'user_insert' => $request->ethAddress,
                'status' => '0',
            ];
            $categoryjson =  json_encode($request->input('kategory'),JSON_FORCE_OBJECT);
            Materi::create($data);
            $message = 'Succes';
            $status = true;
        } catch (\Illuminate\Database\QueryException $exception) {
            $message = $exception->errorInfo;
            $status = false;
        }
        
        return response()->json(
            [
                'status' => $status,
                'message' => $message,
                'data' => $request->all(),
            ]
        );
    }
}
