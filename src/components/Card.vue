<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../assets/Foto Diri.jpg" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Najim Rizky</h5>
        <p class="card-text">I'm not that smart, but I'm hard worker</p>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            See My Details
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="https://www.linkedin.com/in/najim-rizky" target="blank">linkedin</a>
            <a class="dropdown-item" href="https://https://github.com/najimRizky" target="blank">github</a>
            <a class="dropdown-item" href="https://instagram.com/najim_80" target="blank">instagram</a>
            <a class="dropdown-item" href="https://twitter.com/erSySz" target="blank">twitter</a>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<style scoped>
    .card{
        display: block;
        margin: auto;
    }
    .btn{
        background-color: rgb(5, 128, 87);
        transition: 0.3s;
    }

    .btn:hover{
        background-color: white;
        color: rgb(5, 128, 87);
    }

</style>