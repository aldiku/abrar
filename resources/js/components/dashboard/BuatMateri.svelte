<script>
    import Backend from '../partials/BackendUniv.svelte'
    let suggestion = [
        {
            id: "87ikgjhf",
            title: "Basic Aritmatika",
            desc: ""
        },
        {
            id: "87ikgjhf",
            title: "Kuis Aritmatika",
            desc: "Kuis"
        },
        {
            id: "87ikgjhf",
            title: "Sesi 2",
            desc: ""
        },
        {
            id: "87ikgjhf",
            title: "Sesi 3",
            desc: ""
        },
        {
            id: "87ikgjhf",
            title: "Sesi 4",
            desc: ""
        },
        {
            id: "87ikgjhf",
            title: "Summary Aritmatika",
            desc: "RIngkasan"
        },
    ];
</script>
<Backend>
    <div class="container">
        <div class="row py-3">
            <div class="col-md-8 mb-3">
                <div class="card rounded-md p-3">
                    <div class="fw-bold">Buat Materi</div>
                    <div class="separate">
                        <ul class="text-center">
                          <li><button class="btn border rounded-circle btn-teal s-40px">1</button></li>
                          <li><button class="btn border rounded-circle s-40px">2</button></li>
                          <li><button class="btn border rounded-circle s-40px">3</button></li>
                        </ul>
                      </div>
                      <div class="mb-3">
                          <div class="fw-bold">Gambar Thumbnail</div>
                          <div class="card rounded-md uploader h-100px">
                                <div class="mx-auto text-muted my-auto">Drag atau Klik untuk menggungah </div>
                          </div>
                      </div>
                      <div class="mb-3">
                          <div class="fw-bold">Judul Kursus</div>
                          <input type="text" class="form-control" placeholder="Masukkan judul kursus">
                      </div>
                      <div class="mb-3">
                        <div class="fw-bold">Deskripsi</div>
                        <textarea class="form-control" placeholder="Masukkan judul kursus"></textarea>
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold">Kelas</div>
                        <select name="kelas" id="" class="form-select">
                            <option value="">pilih kelas</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold">Jurusan</div>
                        <select name="kelas" id="" class="form-select">
                            <option value="">pilih kelas</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold">Kategori</div>
                        <select name="kelas" id="" class="form-select">
                            <option value="">pilih kelas</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-teal">Selanjutnya</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 rounded-md mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="fw-bold">Sesi Materi</div>
                        <button class="btn btn-teal btn-sm">+ Tambah</button>
                    </div> 
                    {#each suggestion as s}
                    <a class="border-bottom p-2 d-flex align-items-center" href="/sesi/{s.slug}">
                        <img src="/assets/drag.png" alt="" style="width: 24px;">
                        <div class="px-2">
                            <div class="">{s.title}
                                {#if (s.desc != '')}
                                    <div class="badge bg-success fs-08 op-4">{s.desc}</div>
                                {/if}
                            </div>
                        </div>
                    </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
        
</Backend>
<style>
    .uploader {
       background-color: #D5FCEA;
       height: 100px;
       border: 1px solid #444;
       border-style: dashed;
    }
</style>