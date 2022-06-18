<script>
    import Backend from '../partials/BackendUniv.svelte'
    let Univ = [
        {
            id: "1",
            university_name: "Universitas Brawijaya",
            slug_university: "brawijaya",
            logo: "brawijaya.png",
            last_message: "Mungkin bisa dibagikan modul belajar pend. ag..."
        },
        {
            id: "1",
            university_name: "Universitas Indonesia",
            slug_university: "ui",
            logo: "ui.png",
            last_message: "Mungkin bisa dibagikan modul belajar pend. ag..."
        },
        {
            id: "1",
            university_name: "Universitas Negeri Surakarta",
            slug_university: "uns",
            logo: "uns.png",
            last_message: "Mungkin bisa dibagikan modul belajar pend. ag..."
        },
        {
            id: "1",
            university_name: "Universitas Diponegoro",
            slug_university: "undip",
            logo: "undip.jpg",
            last_message: "Mungkin bisa dibagikan modul belajar pend. ag..."
        },
        
    ];
</script>
<Backend>
    <div class="container">
        <div class="row py-3">
            <div class="col-md-4 mb-3">
                <div class="btn card p-2">
                    <div class="d-flex justify-content-between">
                        <div class=""></div>
                        <div class="">Kirim Pesan </div>
                        <img src="/assets/edit2.png" alt="" style="width:24px">
                    </div>
                </div>
                <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="univ-tab" data-bs-toggle="tab" data-bs-target="#reg-univ" type="button" role="tab" aria-controls="profile" aria-selected="false">Universitas</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="mhs-tab" data-bs-toggle="tab" data-bs-target="#reg-mhs" type="button" role="tab" aria-controls="home" aria-selected="true">Mahasiswa</button>
                    </li>
                  </ul>
                  <div class="card tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="reg-univ" role="tabpanel" aria-labelledby="univ-tab">
                        {#each Univ as u}
                        <div class="card p-2 m-1">
                            <div class="d-flex">
                                <img src="/assets/univ/{u.logo}" alt="" class="img-thumbnail rounded rounded-circle s-40px">
                                <div class="d-flex flex-column px-2 lh-normal">
                                    <div class="d-flex justify-content-between">
                                        <span class="fw-bold">{u.university_name}</span>
                                        <span class="text-muted fs-09">12:01 AM</span>
                                    </div>
                                    <span class="op-06 fs-09 text-truncate-1">{u.last_message}</span>
                                </div>
                            </div>
                        </div>
                        {/each}
                    </div>
                    <div class="tab-pane fade" id="reg-mhs" role="tabpanel" aria-labelledby="mhs-tab">
                        <div class="text-center">
                            Tidak ada pesan
                        </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-8">
                <div class="card p-3 rounded-md mb-3">
                    <div class="d-flex border-bottom pb-2">
                        <img src="/assets/univ/undip.jpg" alt="" class="img-thumbnail rounded rounded-circle s-40px">
                        <div class="d-flex flex-column px-2 lh-normal">
                            <div class="d-flex justify-content-between">
                                <span class="fw-bold">Universitas Diponegoro</span>
                                <span class="text-muted fs-09">12:01 AM</span>
                            </div>
                            <span class="op-06 fs-09 text-truncate-1">Online</span>
                        </div>
                    </div>
                    <div class="chat"  style="height: 300px">
                    </div>
                    <div class="row border-top pt-2">
                        <div class="col form-group position-relative  h-50px">
                            <input type="text" class="form-control rounded-pill px-5" placeholder="Tuliskan pesan...">
                            <img src="/assets/emoji.png" alt="" class="s-24px p-0" style="top: -32px;
                            position: relative;
                            left: 10px;">
                            <img src="/assets/attach-square.png" alt="" class="s-24px p-0" style="top: 6px;
                            position: absolute;
                            right: 20px;">
                        </div>
                        <div class="col-auto">
                            <img src="/assets/send.png" alt="" class="p-0 btn s-40px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
</Backend>
