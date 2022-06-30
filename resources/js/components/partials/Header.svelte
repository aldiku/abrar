<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link'
    import { router } from '@spaceavocado/svelte-router'
    import {logWith} from '../store/accountStore'
    import Moralis from 'moralis/dist/moralis.min.js'
    import { onMount } from 'svelte';
    import {ethAddress} from '../store/accountStore'

    let serverUrl = process.env.MIX_serverUrl
    let appId = process.env.MIX_appId
    let open = false;
    let user;

    onMount(()=>{
        Moralis.start({ serverUrl, appId })
    })

    const daftar = () => {
        $router.push('/login')
    }
    async function koneksikan() {
        let user = Moralis.User.current();
        if (!user) {
            try {
            user = await Moralis.authenticate({ signingMessage: "Welcome To Abrar Edu!" });
            console.log(user);
            ethAddress.set(user.get("ethAddress"));
            } catch (error) {
            console.log(error);
            }
        }else{
            ethAddress.set(user.get("ethAddress"))
            dashboard()
        }
    }

    const logout = () => {
        Moralis.User.logOut();
        ethAddress.set('');
    }

    let connect = [
        {
            icon: 'wallet.png',
            name: 'WalletConnect'
        },
        {
            icon: 'metamask.png',
            name: 'MetaMask'
        },
        {
            icon: 'trust.png',
            name: 'TrustWallet'
        },
        {
            icon: 'coinbase.png',
            name: 'Coinbase Wallet'
        },
        {
            icon: 'safepal.png',
            name: 'SafePal Wallet'
        },
        {
            icon: 'pocket.png',
            name: 'TokenPocket'
        },
        {
            icon: 'math.png',
            name: 'Math Wallet'
        },  
    ];

    let menu = [
        {
            slug: '/',
            name: 'Beranda'
        },
        {
            slug: '/tentang',
            name: 'Tentang Abrar'
        },
        {
            slug: '/univ',
            name: 'Pilihan Universitas'
        },
        {
            slug: '/program',
            name: 'Program Belajar'
        },
        {
            slug: '/sistem-kerja-kami',
            name: 'Bagaimana Kami Bekerja'
        },
        {
            slug: '/benefit',
            name: 'Benefit'
        },
        {
            slug: '/faq',
            name: 'FAQ'
        },
        {
            slug: '/kontak',
            name: 'Kontak Kami'
        }
    ];

    function log(name){
        logWith.set(name)
        open = false
        $router.push('/dashboard')
        location.reload();
    }

    let current = '/'

</script>
<nav class="navbar navbar-expand-md header shadow-sm sticky-top">
    <div class="container">
        <RouterLink cls="navbar-brand" to="/" ><img src="/assets/Logo.png" alt="logo"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navhead"
            aria-controls="navhead" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-teal" id="navhead">
            <div class="d-flex w-100 row m-0">
                <div class="col-12 col-sm w-100 mb-2 mb-sm-0">
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-search px-5" placeholder="Cari materi disini"></div>
                        <span class="position-absolute mx-2" style="transform: translateY(-130%) !important;"><img src="/assets/search-normal.png"
                                alt=""></span>
                </div>
                <div class="col-12 col-sm-auto px-0">
                    <div class="w-100 d-flex justify-content-between">
                        {#if $ethAddress == ''}
                        <button class="btn btn-border text-white" on:click={daftar}>Daftar</button>
                        <button class="btn btn-white" on:click={koneksikan}>Koneksikan</button>
                        {:else}
                        <a class="btn btn-border text-white" href="/dashboard">Dashboard</a>
                        <button class="btn btn-white" on:click={logout}>Logout</button>
                        {/if}
                    </div>
                </div>
            </div>
            <ul class="navbar-nav d-block d-sm-none mx-3">
                {#each menu as m}
                    <li class="my-2">{m.name}</li>
                {/each}
            </ul>
            
        </div>
    </div>
</nav>
<div class="d-none d-md-block nav shadow-sm">
    <div class="container d-flex justify-content-between">
        {#each menu as m}
            <a href="{m.slug}" class="py-3 text-secondary" class:menu-active="{current === m.slug}">{m.name}</a>
        {/each}
    </div>
</div>
{#if open}
<div class="modal" tabindex="-1" aria-modal="true" role="dialog" style="display: block;">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" on:click={()=> {open=false;}}></button>
      </div>
      <div class="modal-body p-3">
          <div class="text-center">
            <img src="/assets/images/link.png" alt="">
            <div class="fw-bold my-3">Connect Wallet</div>
          </div>
          <div class="row m-0">
            {#each connect as c}
            <div class="col-md-6 p-2">
                <button class="card p-2 w-100" on:click={()=>{log(c.name)}} >
                    <div class="d-flex align-items-center">
                        <img src="/assets/images/{c.icon}" alt="">
                        <span class="mx-2">{c.name}</span>
                    </div>
                </button>
            </div>
            {/each}
          </div>
      </div>
    </div>
  </div>
</div>
<div class="modal-backdrop show"/>
{/if}
