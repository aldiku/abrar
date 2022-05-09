<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
</script>
<div class="footer py-2 py-md-4">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <RouterLink cls="navbar-brand" to="/" ><img src="/assets/Logo.png" alt="logo"></RouterLink>
            </div>
            <div class="col-md-3">
                <div class="text-white mt-3">
                    <div class="h4 fw-bold">Elearning</div>
                    <div class="address">
                        Ruko Grand Galaxy Bekasi <br>
Blok RSA 1 No 37 Lantai 2 <br>
Bekasi Selatan 17148
                    </div>
                    <div class="social d-flex mt-3">
                        <a class="sos-icon text-center" href="https://facebook.com/abrar" target="_blank"><img src="/assets/fb.png" alt="fb"></a>
                        <a class="sos-icon text-center" href="https://twitter.com/abrar"  target="_blank"><img src="/assets/tw.png" alt="tw"></a>
                        <a class="sos-icon text-center" href="https://instagram.com/abrar"  target="_blank"><img src="/assets/ig.png" alt="ig"></a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-white mt-3">
                    <div class="h4 fw-bold">Sitemap</div>
                    <div class="d-grid">
                        <RouterLink cls="text-white" to="/about" >Tentang Kami</RouterLink>
                        <RouterLink cls="text-white" to="/faq" >FAQ</RouterLink>
                        <RouterLink cls="text-white" to="/disclaimer" >Syarat & Ketentuan</RouterLink>
                        <RouterLink cls="text-white" to="/privacy" >Kebijakan Privasi</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-white mt-3">
                    <div class="h4 fw-bold">Lainnya</div>
                    <div class="d-grid">
                        <RouterLink cls="text-white" to="/kemitraan" >Bergabung Kemitraan</RouterLink>
                        <RouterLink cls="text-white" to="/panduan" >Panduan</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-white mt-3">
                    <div class="h4 fw-bold">Berlangganan</div>
                    <div class="card rounded-md">
                       <div class="p-3">
                           <p class="card-title op-4">Berlangganan untuk mendapatkan informasi terbaru dari ELearning</p>
                           <div class="input-group flex-nowrap form-subscribe">
                            <span class="input-group-text icon-form-subscribe"><img src="/assets/mail.png"
                                    alt=""></span>
                            <input type="text" placeholder="Masukkan alamat email"></div>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
<div class="copyright text-center bg-dark py-3">
<span class="text-white">Copyright {new Date().getFullYear()} Elearning</span>
</div>
