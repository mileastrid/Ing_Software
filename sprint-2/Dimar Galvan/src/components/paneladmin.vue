<template>
   <div class="contenedoradmin">
    <h1 class="titularadmin">PANEL DE ACCIONNES DEL ADMINISTRADOR</h1>
    <div class="acciones">
        <div class="pnl">
            <h3>Registrar Pedido</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnl">
            <h3>Administrar Clientes</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnl">
            <h3>Administrar proveedores</h3>
        <button class="btnadmin " ><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnl">
            <h3>Administrar productos</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnl">
            <h3>Administrar operadores</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnl">
            <h3>Administrar materiales</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnl">
            <h3>Balances</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        </div>   
    </div> 
</template>

<script>
export default {
    name: "Paneladmin",
}
</script>

<style>
.contenedoradmin{
   background:  rgba(181, 19, 19, 0.75);

}

.titularadmin{
    text-align: center;
    color: white;
    font-size: 50px;
}

.acciones{
    padding: 30px;
    display: grid;
    margin: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    background-color: white;
    border-radius: 15px;
    
}

.pnl{
    padding-left: 12px;
    border: 5px solid #B51313;
    width: 360px;
    height: 120px;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 46px;
    color: #B51313;
    border-radius: 12px;
    background-color: white;
}

.btnadmin{
    background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        position: relative;
        left: 300px;
        top: 20px;
}

</style>