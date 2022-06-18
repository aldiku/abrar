<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import Frontend from './partials/Frontend.svelte'

    const daftar = () => {
        console.log('ok');
    }
</script>
<Frontend>
    <div class="container py-5">
        <div class="row">
            <div class="col-md-6 d-none d-sm-flex align-items-center">
                <img src="/assets/elearning.png" class="px-5 img-fluid" alt="">
            </div>
            <div class="col-md-6 bg-white">
                <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="mhs-tab" data-bs-toggle="tab" data-bs-target="#reg-mhs" type="button" role="tab" aria-controls="home" aria-selected="true">Mahasiswa</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="univ-tab" data-bs-toggle="tab" data-bs-target="#reg-univ" type="button" role="tab" aria-controls="profile" aria-selected="false">Lembaga/Universitas</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="reg-mhs" role="tabpanel" aria-labelledby="mhs-tab">
                        <div class="p-4">
                            <RouterLink to="/"><img src="/assets/logo-color.png" alt="" cls="img-fluid"></RouterLink>
                            <div class="mt-3">
                                <h3 class="fw-bold">Daftar ke Elearning</h3>
                                <span class="op-4">Daftarkan akun untuk melanjutkan</span>
                            </div>
                            <form class="form-horisontal mt-4">
                                <div class="form-group mb-3">
                                    <label for="wa">Nomor WhatsApp</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/wa.png"
                                                alt=""></span>
                                        <input type="text" name="wa" placeholder="Masukkan nomor WhatsApp Anda"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="email">Alamat Email</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/mail.png"
                                                alt=""></span>
                                        <input type="text" name="email" placeholder="Masukkan alamat email"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="username">Username</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/user.png"
                                                alt=""></span>
                                        <input type="text" name="username" placeholder="Masukkan username"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="social">Sosial Media (opsional)</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/fb.png"
                                                alt=""></span>
                                        <input type="text" name='social' placeholder="Masukkan nama / URL profil akun"></div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6 mb-3">
                                        <label for="password">Kata Sandi</label>
                                        <div class="input-group flex-nowrap form-subscribe h-50px">
                                            <span class="input-group-text icon-form-subscribe"><img src="/assets/key.png"
                                                    alt=""></span>
                                            <input type="text" name='password' placeholder="Masukkan kata sandi"></div>
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label for="password_confirm">Konfirmasi Kata Sandi</label>
                                        <div class="input-group flex-nowrap form-subscribe h-50px">
                                            <span class="input-group-text icon-form-subscribe"><img src="/assets/key.png"
                                                    alt=""></span>
                                            <input type="text" name='password_confirm' placeholder="Masukkan kata sandi"></div>
                                    </div>
                                </div>
                                <button class="btn btn-teal w-100 btn-lg rounded-md" type="button" on:click={daftar}>Daftar</button>
                            </form>
                            <div class="d-flex justify-content-center my-2">
                                <span class="op-4"> Sudah punya akun? </span> <div class="color-teal mx-2">Verifikasi Token</div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="reg-univ" role="tabpanel" aria-labelledby="univ-tab">
                        <div class="p-4">
                            <RouterLink to="/"><img src="/assets/logo-color.png" alt="" cls="img-fluid"></RouterLink>
                            <div class="mt-3">
                                <h3 class="fw-bold">Daftar ke Elearning</h3>
                                <span class="op-4">Daftarkan akun untuk melanjutkan</span>
                            </div>
                            <form class="form-horisontal mt-4">
                                <div class="form-group mb-3">
                                    <label for="sk">SK</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/doc.png"
                                                alt=""></span>
                                        <input type="text" name="sk" placeholder="Masukkan surat keputusan"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="univ">Lembaga / Universitas</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/building.png"
                                                alt=""></span>
                                        <input type="text" name="univ" placeholder="Pilih Lembaga atau Universitas"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="username">Alamat Lembaga / Universitas</label>
                                    <div class="input-group flex-nowrap">
                                        <textarea class="form-control rounded-md" name="alamat" placeholder="Masukkan alamat Lembaga / Universitas"></textarea>
                                        </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="telp">No. Telp</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/mobile.png"
                                                alt=""></span>
                                        <input type="text" name='telp' placeholder="Masukkan nomor telpon"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="email">Alamat Email</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/mail.png"
                                                alt=""></span>
                                        <input type="text" name="email" placeholder="Masukkan alamat email"></div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="username">Username</label>
                                    <div class="input-group flex-nowrap form-subscribe h-50px">
                                        <span class="input-group-text icon-form-subscribe"><img src="/assets/user.png"
                                                alt=""></span>
                                        <input type="text" name="username" placeholder="Masukkan username"></div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6 mb-3">
                                        <label for="password">Kata Sandi</label>
                                        <div class="input-group flex-nowrap form-subscribe h-50px">
                                            <span class="input-group-text icon-form-subscribe"><img src="/assets/key.png"
                                                    alt=""></span>
                                            <input type="text" name='password' placeholder="Masukkan kata sandi"></div>
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label for="password_confirm">Konfirmasi Kata Sandi</label>
                                        <div class="input-group flex-nowrap form-subscribe h-50px">
                                            <span class="input-group-text icon-form-subscribe"><img src="/assets/key.png"
                                                    alt=""></span>
                                            <input type="text" name='password_confirm' placeholder="Masukkan kata sandi"></div>
                                    </div>
                                </div>
                                <button class="btn btn-teal w-100 btn-lg rounded-md" type="button" on:click={daftar}>Daftar</button>
                            </form>
                            <div class="d-flex justify-content-center my-2">
                                <span class="op-4"> Sudah punya akun? </span> <div class="color-teal mx-2">Verifikasi Token</div>
                            </div>
                        </div>
                    </div>
                  </div>
    
            </div>
        </div>
    </div>
</Frontend>