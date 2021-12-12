<template>
     <div class="contenedoradmin">
    <h1 class="titularadmin">PANEL DE ACCIONES DEL OPERADOR</h1>
    <div class="accionesop">
        <div class="pnlop">
            <h3>Registrar Pedido</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt="" @click="goPedido"></button>
            </div>
        <div class="pnlop">
            <h3>Administrar productos</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt="" @click="goProductos"></button>
            </div>
        <div class="pnlop">
            <h3>Balances</h3>
        <button class="btnadmin " ><img src="../assets/entrar.png" alt="" @click="goBalance"></button>
            </div>
        </div>   
    </div> 
</template>

<script>
export default {
    name: 'Paneloperador',
    methods:{
        goProductos(){
            this.$router.push({path: '/administrar-productos'});            
        },
        goBalance(){
            this.$router.push({path: '/balance'});
        },
        goPedido(){
            this.$router.push({path: '/registrar-pedido'});
        }
    }
}
</script>

<style>
.contenedoradmin{
   background:  rgba(181, 19, 19, 0.75);
   padding-bottom: 30px;

}

.titularadmin{
    padding-top: 30px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 50px;
}

.accionesop{
    
    padding: 30px;
    display: grid;
    margin-top: 30px;
    margin-right: 300px;
    margin-left: 300px;
    grid-template-columns: repeat(1, 2fr);
    grid-gap: 10px;
    background-color: white;
    border-radius: 15px;
    align-items: center;

    
    
}

.pnlop{
    margin-left: 160px;
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