<script>
     let banner = [{
            id: '1',
            name: 'Promo',
            file: 'banner1.jpg',
            active: 'active'
        },{
            id: '2',
            name: 'Promo 2',
            file: 'banner1.jpg',
            active: ''
        },
        {
            id: '3',
            name: 'Promo 3',
            file: 'banner1.jpg',
            active: ''
        }        
    ];
</script>
<div id="carouselhome" class="carousel slide" data-bs-ride="carousel">
    
    <div class="carousel-inner">
        {#each banner as b}
            <div class="carousel-item {b.active}" data-bs-interval="5000">
                <img src="./assets/images/{b.file}" class="d-block w-100" alt="{b.name}">
            </div>
        {/each}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselhome" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselhome" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselhome" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselhome" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselhome" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  </div>