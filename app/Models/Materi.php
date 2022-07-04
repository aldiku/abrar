<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;
    protected $table = "materi";
    protected $guarded = [];

    public function universitas()
    {
        return $this->hasOne(Universitas::class,'id','user_univ_id');
    }

    public function materifile()
    {
        return $this->hasMany(MateriFile::class,'id','id');
    }
}
