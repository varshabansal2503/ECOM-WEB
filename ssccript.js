<script>
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');  // Fix typo here

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {  // Fix the event listener here
        nav.classList.remove('active');
    });
}

console.log("Script loaded successfully");

</script>