$(document).ready(function() {

    jQuery(document).ready(function(){
        $('.phone').mask('+380 (99) 999 99 99', {placeholder: "+380 (___) ___ __ __"});
        $('.salary').mask('000.000', {reverse: true});
        $('.date').mask('00.00.0000');
    });

    iniLimitCount();
    initAllSelect2();
    initDatePicker();

    $('.limitInput').keyup(function(){
        let count = $(this).val().length + ' / 256';
        $('#' + $(this).data('label-id')).text(count);
    });
});

function iniLimitCount() {
    $('.limitInput').each(function (key, element) {
        let count = $(this).val().length + ' / 256';
        $('#' + $(this).data('label-id')).text(count);
    });
}

function showDeleteModal(id){
    $("#Modal" + id).modal('show');
}

function initAllSelect2() {
    $('.select2Input').each(function (key, element) {
        $(this).select2({
            placeholder: "Select the " + $(this).data('label'),
            minimumInputLength: 2,
            templateResult: function(data, container) {
                if (data.element) {
                    $(container).addClass('form-control');
                }

                return data.text;
            },
            ajax: {
                url: $(this).data('url-data'),
                dataType: 'json',
                data: function (params) {
                    return {
                        q: $.trim(params.term)
                    };
                },
                processResults: function (data) {
                    return {
                        results: data
                    };
                },
                cache: true,
            }
        });
    });
}
function initDatePicker() {
    $('.date').datepicker({
        format: 'dd.mm.yy',
        endDate: new Date()
    });
}

setTimeout(function() {
    $('#status-block').fadeOut(300);
}, 3000);
