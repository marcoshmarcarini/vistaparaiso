(function($) {
    window.fnames = new Array()
    window.ftypes = new Array()
    fnames[1]='FNAME'
    ftypes[1]='text'
    fnames[2]='FSUBNAME'
    ftypes[2]='text'
    fnames[0]='EMAIL'
    ftypes[0]='email'
    fnames[4]='PHONE'
    ftypes[4]='phone' 
        /*
        * Translated default messages for the $ validation plugin.
        * Locale: PT_PT
        */
        $.extend($.validator.messages, {
            required: "Campo de preenchimento obrigatório.",
            remote: "Por favor, corrija este campo.",
            email: "Por favor, introduza um endereço de email válido.",
            number: "Por favor, introduza um n&uacute;mero v&aacute;lido.",
            digits: "Por favor, introduza apenas d&iacute;gitos.",
            equalTo: "Por favor, introduza de novo o mesmo valor.",
            accept: "Por favor, introduza um ficheiro com uma extens&atilde;o v&aacute;lida.",
            maxlength: $.validator.format("Por favor, n&atilde;o introduza mais do que {0} caracteres."),
            minlength: $.validator.format("Por favor, introduza pelo menos {0} caracteres."),
            rangelength: $.validator.format("Por favor, introduza entre {0} e {1} caracteres."),
            range: $.validator.format("Por favor, introduza um valor entre {0} e {1}."),
            max: $.validator.format("Por favor, introduza um valor menor ou igual a {0}."),
            min: $.validator.format("Por favor, introduza um valor maior ou igual a {0}.")
        })
    }
    
    (jQuery)); var $mcj = jQuery.noConflict(true)