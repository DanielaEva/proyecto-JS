$(() => { //EMPIEZA EL DOCUMENT.READY

    function desaparecerModal() {
        $(".accion").on("click", accionar)

        function accionar() {
            $(".modal").fadeOut();
        }
    }

    function opcionesCosta() {
        function verMas1() {
            $("#ventanaModal").fadeIn();
        }

        function verMas2() {
            $("#ventanaModal2").fadeIn();
        }

        function verMas3() {
            $("#ventanaModal3").fadeIn();
        }
        if ($("#selectDestino").val() === "Partido de La Costa" && $("#selectPersonas").val() === "1") {
            verMas1();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Partido de La Costa" && $("#selectPersonas").val() === "2") {
            verMas2();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Partido de La Costa" && $("#selectPersonas").val() === "3") {
            verMas3();
            desaparecerModal();
        }

    }

    function opcionesMendoza() {
        function verMas4() {
            $("#ventanaModal4").fadeIn();
        }

        function verMas5() {
            $("#ventanaModal5").fadeIn();
        }

        function verMas6() {
            $("#ventanaModal6").fadeIn();
        }

        if ($("#selectDestino").val() === "Mendoza" && $("#selectPersonas").val() === "1") {
            verMas4();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Mendoza" && $("#selectPersonas").val() === "2") {
            verMas5();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Mendoza" && $("#selectPersonas").val() === "3") {
            verMas6();
            desaparecerModal();
        }
    }

    function opcionesCordoba() {
        function verMas7() {
            $("#ventanaModal7").fadeIn();
        }

        function verMas8() {
            $("#ventanaModal8").fadeIn();
        }

        function verMas9() {
            $("#ventanaModal9").fadeIn();
        }

        if ($("#selectDestino").val() === "Córdoba" && $("#selectPersonas").val() === "1") {
            verMas7();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Córdoba" && $("#selectPersonas").val() === "2") {
            verMas8();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Córdoba" && $("#selectPersonas").val() === "3") {
            verMas9();
            desaparecerModal();
        }
    }

    function opcionesBariloche() {
        function verMas10() {
            $("#ventanaModal10").fadeIn();
        }

        function verMas11() {
            $("#ventanaModal11").fadeIn();
        }

        function verMas12() {
            $("#ventanaModal12").fadeIn();
        }

        if ($("#selectDestino").val() === "Bariloche" && $("#selectPersonas").val() === "1") {
            verMas10();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Bariloche" && $("#selectPersonas").val() === "2") {
            verMas11();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Bariloche" && $("#selectPersonas").val() === "3") {
            verMas12();
            desaparecerModal();
        }
    }

    function opcionesNorte() {
        function verMas13() {
            $("#ventanaModal13").fadeIn();
        }

        function verMas14() {
            $("#ventanaModal14").fadeIn();
        }

        function verMas15() {
            $("#ventanaModal15").fadeIn();
        }
        if ($("#selectDestino").val() === "Norte Argentino" && $("#selectPersonas").val() === "1") {
            verMas13();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Norte Argentino" && $("#selectPersonas").val() === "2") {
            verMas14();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Norte Argentino" && $("#selectPersonas").val() === "3") {
            verMas15();
            desaparecerModal();
        }
    }

    function opcionesCalafate() {
        function verMas16() {
            $("#ventanaModal16").fadeIn();
        }

        function verMas17() {
            $("#ventanaModal17").fadeIn();
        }

        function verMas18() {
            $("#ventanaModal18").fadeIn();
        }
        if ($("#selectDestino").val() === "Calafate - Ushuaia" && $("#selectPersonas").val() === "1") {
            verMas16();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Calafate - Ushuaia" && $("#selectPersonas").val() === "2") {
            verMas17();
            desaparecerModal();
        } else if ($("#selectDestino").val() === "Calafate - Ushuaia" && $("#selectPersonas").val() === "3") {
            verMas18();
            desaparecerModal();
        }
    }



    $("#btnBuscar").click(() => {

        document.getElementById("opcionInvalida").innerHTML = "";
        if ($("#selectDestino").val() === vacioDestino.value && $("#selectPersonas").val() === vacioPersonas.value) {
            $("#opcionInvalida").prepend(`<h2>SELECCIONA UNA OPCIÓN VÁLIDA</h2>`);
        }

        opcionesCosta();
        opcionesMendoza();
        opcionesCordoba();
        opcionesBariloche()
        opcionesNorte();
        opcionesCalafate();
    });


}); //TERMINA EL DOCUMENT.READY