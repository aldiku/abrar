<script>
    import Backend from '../partials/BackendUniv.svelte'
    import {router} from '@spaceavocado/svelte-router'
    import MultiSelect from 'svelte-multiselect'
    import DropZone from "svelte-atoms/DropZone.svelte";
    import {ethAddress} from '../store/accountStore'

    let kelas = ['A'], jurusan = ['A'], kategory = ['5'],thumb = '',title= '',description= '',fileName= '';
   
    const opsi_kelas = [
        {
            'label': "Kelas A",
            'value': "A"
        }
    ];
    const opsi_jurusan = [
        {
            'label': "Jurusan A",
            'value': "A"
        }
    ];
    const opsi_kategory = [
        {
            'label': "Komputer",
            'value': "5"
        }
    ];

    const onChange = e => {
        let dataFile = null;
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        fileName = file ? file.name : "";
        const formData = new FormData();
        formData.append('ethAddregg', $ethAddress);
        formData.append('dataFile', file);
        const upload = fetch('/api/materi/upload_thumb', {
            method: 'POST',
            body: formData
        }).then((response) => response.json()).then((result) => {
            console.log('Success:', result);
            thumb = result.data
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    async function save_draft(){
        const send = await fetch("/api/materi/save", {
			method: 'POST',
			body: JSON.stringify({
                kelas, jurusan, kategory,thumb,title,description,fileName
            })
		})
		const res = await send.json()
		if(res.status){
            $router.push('/dashboard/materi/step2/'+res.id);
        }else{
            alert(res.message);
        }
    }
    
    let suggestion = [{
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
                            <DropZone fileTitle={fileName} dropOnPage on:drop={onChange} on:change={onChange} />
                        </div>
                      </div>
                      <div class="mb-3">
                          <div class="fw-bold">Judul Kursus</div>
                          <input type="text" class="form-control" placeholder="Masukkan judul kursus" bind:value={title}>
                      </div>
                      <div class="mb-3">
                        <div class="fw-bold">Deskripsi</div>
                        <textarea class="form-control" placeholder="Masukkan judul kursus" bind:value={description}></textarea>
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold">Kelas</div>
                        <MultiSelect bind:kelas options={opsi_kelas} on:change={()=>{kelas = kelas}}/>
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold">Jurusan</div>
                        <MultiSelect bind:jurusan options={opsi_jurusan}  />
                    </div>
                    <div class="mb-3">
                        <div class="fw-bold">Kategori</div>
                        <MultiSelect bind:kategory options={opsi_kategory} />
                    </div>
                    <button type="button" class="btn btn-teal" to="/dashboard/materi/step2" on:click={()=>{save_draft()}}>Selanjutnya</button>
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
       background-color: #D5FCEA !important;
       height: 100px;
       border: 1px solid #444;
       border-style: dashed;
    }
</style>
