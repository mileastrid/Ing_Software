<template>
  <div class="contenedordes">
    <div class="txtDescripcion">
      <h3 class="tit">DESCRIPCIÓN</h3>
      <p class="parrafo">
        CALZADO JERMYL es una empresa manufacturera de carácter privado con
        ánimo de lucro, creada en el año 2016, la cual fabrica calzado de botas
        para personas adultas y niños en cuero o sintético, al igual que la
        línea de botas para todo tipo de personas, actualmente es una micro
        empresa la cual tiene un proceso de producción de 720 pares al mes, su
        línea de trabajo maneja la comodidad y la duración, la metodología que
        esta empresa utiliza es en línea esto significa que es un método donde
        se trabaja el proceso de producción de un proceso a otro, las personas
        trabajan en equipo , con amor y sentido de pertenencia.
      </p>
    </div>
    <div class="contenedorImagenes">
      <img src="../assets/Jpg1.jpg" alt=""  width="250" height="250"/>
      <img src="../assets/Jpg2.jpg" alt="" width="250" height="250"/>
      <img src="../assets/Jpg3.jpg" alt="" width="250" height="250"/>
      <img src="../assets/Jpg4.jpg" alt="" width="250" height="250"/>
    </div>
    <div class="containerMisionVision">
      <div class="mision">
        <h3 class="tit">MISIÓN</h3>
        <p class="parrafo">
          CALZADO JERMYL es una empresa dedicada a la producción de diferente
          tipo de calzado como bota para dama caballero, niño y niña, esta
          empresa busca la satisfacción de los clientes ofreciendo una buena
          calidad en sus materiales ya sea sintético o cuero, también busca la
          comodidad con unos precios justos, esto nos permite trabajar de una
          manera sostenida y la empresa de pertenencia familiar generando un muy
          buen entorno de la inversión.
        </p>
      </div>
      <div class="vision">
        <h3 class="tit" >VISIÓN</h3>
        <p class="parrafo">
          CALZADO JERMYL para el 2022 se convertirá en una empresa familiar
          líder consolidada, y de reconocimiento para el calzado de todo tipo
          para dama caballero y niños, buscara su expansión para el mercado
          nacional, organizando sus procesos para garantizar una atención al
          cliente personal y también brindar la calidad de los productos, para
          con esto lograr ser líderes en la fabricación de botas, mantener los
          precios al alcance y tener su desarrollo de la mercancía con talento
          humano, respetos y cumplimiento para los clientes.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Descripcion",
};
</script>

<style>
.contenedordes{
  margin: auto;
  padding: 60px;
  font-size: 25px;
  text-align: justify;
  font-weight: 400;
  color: black;
}

.contenedorImagenes{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
}

.containerMisionVision{
  display: flex;
  justify-content: space-between;
  
}

.mision{
  width: 500px;
}

.vision{
  width: 500px;
}
.parrafo{
  margin-top: 30px;
}

.tit{
  font-size: 50px ;
  font-weight: 900;
}
</style>