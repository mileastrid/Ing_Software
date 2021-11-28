<template>
    <div class="modal" tabindex="-1">
        <div class="contenedor">
            <div id="head">
                <h4 id="titulo">Agregar operador</h4><img src="../assets/cerrar.png" alt="">
            </div><br>
            <form name="frmOperador">
                <div class="form-group">
                    <label for="txtInfo" id="label"><b>Nombre: </b></label><br>
                    <input type="text" name="txtInfo" id="txtInfo" class="form-control" placeholder="Ingresar nombre">
                </div>

                <div class="form-group">
                    <label for="txtInfo" id="label"><b>Apellido: </b></label><br>
                    <input type="text" name="txtInfo" id="txtInfo" class="form-control" placeholder="Ingresar apellido">
                </div>

                <div class="form-group">
                    <label for="txtInfo" id="label"><b>Identificación:</b></label><br>
                    <input type="text" name="txtInfo" id="txtInfo" class="form-control"
                        placeholder="Ingresar identificación">
                </div>

                <div class="form-group">
                    <label for="txtInfo" id="label"><b>Celular:</b> </label><br>
                    <input type="text" name="txtInfo" id="txtInfo" class="form-control" placeholder="Ingresar celular">
                </div>

                <div class="form-group">
                    <label for="txtInfo" id="label"><b>Correo: </b></label><br>
                    <input type="text" name="txtInfo" id="txtInfo" class="form-control" placeholder="Ingresar correo">
                </div>

                <div class="form-group">
                    <label for="txtInfo" id="label"><b>Contraseña: </b></label><br>
                    <input type="text" name="txtInfo" id="txtInfo" class="form-control"
                        placeholder="Ingresar contraseña">
                </div>
            </form><br>
            <div id="footer">
                <button id="btn" align="center"><b>Guardar operador</b></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegistrarOperador"
}
</script>

<style>
.contenedor{
    width: 350px;
    height: 540px;
    margin: auto;
    background: #fff;
    box-shadow: 1px 7px 25px rgba(0,0,0, 0.4);
    transition: all 500ms ease;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 20px;
}
.form-control{
    color:black;
    border-color: black;
    font-family: 'Red Hat Text', sans-serif;
    margin-left: 30px;
    width: 275px;
    height: 25px;
    margin-bottom: 10px;
}
#label{
    font-family: 'Red Hat Text', sans-serif;
    margin-left: 30px;
}
#titulo{
    color: white;
    font-family: 'Red Hat Text', sans-serif;
    margin-left: 30px;
    font-size: 23px;
    top: 10px;
    position: relative;
}
#head{
    background: #B51313;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
}
#footer{
    background: rgba(0,0,0, 0.75);
    color: white;
    height: 45px;
}
#btn{
    border-color: white;
    margin-left: 80px;
    margin-top: 10px;
    font-family: 'Red Hat Text', sans-serif;
    color: white;
    background: 0;
    font-size: 15px;
    width: 190px;
}
#btn:hover{
  background-color: white;
  color: rgba(51, 51, 51);
}
#close{
    height: 30px;
    width: 30px;
    background: 0;
    position: fixed;
    margin-left: 300px;
    top: 80px;
    border: none;
    color:white;
    font-size: 25px;
}
</style>