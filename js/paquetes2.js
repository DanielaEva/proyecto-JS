$(() => { //empieza el document.ready


    $(".btnPaquete1").click(() => {
        $(".resumenPQT").append(`<div class="infopqt1">
                                        <h2 class="h2Paquetes"> MAR DE AJO </h2>
                                        <p pPaquetes>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam.</p>
                                        <button class="cerrarpqt1 botonPaquetes">CERRAR</button>
                                        </div>`);
        $(".cerrarpqt1").click(() => {
            $(".infopqt1").fadeOut();
        })
    });

    $(".btnPaquete2").click(() => {
        $(".resumenPQT").append(`<div class="infopqt2">
                                        <h2 class="h2Paquetes"> SAN RAFAEL </h2>
                                        <p class="pPaquetes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam.</p>
                                        <button class="cerrarpqt2 botonPaquetes">CERRAR</button>
                                        </div>`);
        $(".cerrarpqt2").click(() => {
            $(".infopqt2").fadeOut();
        })
    });

    $(".btnPaquete3").click(() => {
        $(".resumenPQT").append(`<div class="infopqt3">
                                        <h2 class="h2Paquetes"> VILLA GENERAL BELGRANO </h2>
                                        <p class="pPaquetes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam.</p>
                                        <button class="cerrarpqt3 botonPaquetes">CERRAR</button>
                                        </div>`);
        $(".cerrarpqt3").click(() => {
            $(".infopqt3").fadeOut();
        })
    });

    $(".btnPaquete4").click(() => {
        $(".resumenPQT").append(`<div class="infopqt4">
                                        <h2 class="h2Paquetes"> SAN CARLOS DE BARILOCHE </h2>
                                        <p class="pPaquetes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam.</p>
                                        <button class="cerrarpqt4 botonPaquetes">CERRAR</button>
                                        </div>`);
        $(".cerrarpqt4").click(() => {
            $(".infopqt4").fadeOut();
        })
    });

    $(".btnPaquete5").click(() => {
        $(".resumenPQT").append(`<div class="infopqt5">
                                        <h2 class="h2Paquetes"> JUJUY </h2>
                                        <p class="pPaquetes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam.</p>
                                        <button class="cerrarpqt5 botonPaquetes">CERRAR</button>
                                        </div>`);
        $(".cerrarpqt5").click(() => {
            $(".infopqt5").fadeOut();
        })
    });

    $(".btnPaquete6").click(() => {
        $(".resumenPQT").append(`<div class="infopqt6">
                                        <h2 class="h2Paquetes"> GLACIARES </h2>
                                        <p class="pPaquetes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ut ipsam omnis odio officiis libero recusandae? Quis possimus accusantium quam, enim sunt voluptatem asperiores! Labore adipisci in porro quasi quisquam.</p>
                                        <button class="cerrarpqt6 botonPaquetes">CERRAR</button>
                                        </div>`);
        $(".cerrarpqt6").click(() => {
            $(".infopqt6").fadeOut();
        })
    });

}); //termina el document.ready