<script>
    export let id;
    export let title;
    export let linkShare;
    export let tag;
</script>
<div class="modal fade" id="{id}" tabindex="-1" aria-labelledby="{id}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Share</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <a target="_blank" class="btn btn-dark rounded-md mb-3"
                    href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&amp;sdk=joey&amp;u={linkShare}r&amp;display=popup&amp;ref=plugin&amp;src=share_button"><img
                        src="/assets/fb.png" alt=""><span class="mx-2"> Share Via Facebook</span></a>
                        <a target="_blank" class="btn btn-dark rounded-md mb-3"
                    href="https://twitter.com/intent/tweet?hashtags={tag}&url={linkShare}&via=abrar"><img
                        src="/assets/tw.png" alt=""><span class="mx-2"> Share Via Twitter</span></a>
                        <a target="_blank" class="btn btn-dark rounded-md mb-3"
                    href="https://wa.me/?text={title}%0A%0A{linkShare}"><img
                        src="/assets/wa.png" alt=""><span class="mx-2"> Share Via WhatsApp</span></a>
                        <slot></slot>
            </div>
        </div>
    </div>
</div>