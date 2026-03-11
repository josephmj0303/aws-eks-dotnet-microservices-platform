/* ==== */
/* Text Editor Components Objects */
var TextEditor = {};
TextEditor.Components = {};
/* ==== */

/* ==== */
/* Text Editor Components Initialize */
TextEditor.Components.Initialize = function (Params) {

    /* Once Initialize Completed then Goto Ready State */
    TextEditor.Components.Ready(Params);

}
/* ==== */

/* ==== */
/* Text Editor Components Ready */
TextEditor.Components.Ready = function (Params) {

    /* Add Event Listener */
    TextEditor.Components.AddEventListener(Params);
}
/* ==== */

/* ==== */
/* Text Editor Components Add Event Listener */
TextEditor.Components.AddEventListener = function (Params) {

    /* Best Practices For Remove Unused Event Listener */
    TextEditor.Components.RemoveEventListener();

    if (typeof Params.TargetId !== "undefined") {

        /* ==== */
        /* Add the Text Editor Class */
        $(Params.TargetId).addClass("wysiwyg-editor light-border btn-auto-outline responsive");
        $(Params.TargetId).attr("contenteditable","true");
        $(Params.TargetId).css("overflow-x" ,"scroll");
        /* ==== */

        $('textarea[data-provide="markdown"]').each(function () {
            var $this = $(this);
            if ($this.data('markdown')) {
                $this.data('markdown').showEditor();
            }
            else $this.markdown()
            $this.parent().find('.btn').addClass('btn-white');
        })
        function showErrorAlert(reason, detail) {
            var msg = '';
            if (reason === 'unsupported-file-type') { msg = "Unsupported format " + detail; }
            else {
                //console.log("error uploading file", reason, detail);
            }
            $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
                '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
        }
    
        //but we want to change a few buttons colors for the third style
        $(Params.TargetId).ace_wysiwyg({
            toolbar:
                [
                    null,
                    'fontSize',
                    null,
                    null,
                    { name: 'insertunorderedlist', className: 'btn-success' },
                    { name: 'insertorderedlist', className: 'btn-success' },
                    null,
                    { name: 'justifyleft', className: 'btn-primary' },
                    { name: 'justifycenter', className: 'btn-primary' },
                    { name: 'justifyright', className: 'btn-primary' },
                    { name: 'justifyfull', className: 'btn-inverse' },
                    null,
                    null,
                    null,
                    'foreColor',
                    null
                ],
            'wysiwyg': {
                fileUploadError: showErrorAlert
            }
        }).prev().addClass('wysiwyg-style2');
        $('[data-toggle="buttons"] .btn').on('click', function (e) {
            alter();
            var target = $(this).find('input[type=radio]');
            var which = parseInt(target.val());
            var toolbar = $(t_TargetId).prev().get(0);
            if (which >= 1 && which <= 4) {
                toolbar.className = toolbar.className.replace(/wysiwyg\-style(1|2)/g, '');
                if (which == 1) $(toolbar).addClass('wysiwyg-style1');
                else if (which == 2) $(toolbar).addClass('wysiwyg-style2');
                if (which == 4) {
                    $(toolbar).find('.btn-group > .btn').addClass('btn-white btn-round');
                } else $(toolbar).find('.btn-group > .btn-white').removeClass('btn-white btn-round');
            }
        });
    
        //RESIZE IMAGE
        //Add Image Resize Functionality to Chrome and Safari
        //webkit browsers don't have image resize functionality when content is editable
        //so let's add something using jQuery UI resizable
        //another option would be opening a dialog for user to enter dimensions.
        if (typeof jQuery.ui !== 'undefined' && ace.vars['webkit']) {
    
            var lastResizableImg = null;
            function destroyResizable() {
                if (lastResizableImg == null) return;
                lastResizableImg.resizable("destroy");
                lastResizableImg.removeData('resizable');
                lastResizableImg = null;
            }
    
            var enableImageResize = function () {
                $('.wysiwyg-editor')
                    .on('mousedown', function (e) {
                        var target = $(e.target);
                        if (e.target instanceof HTMLImageElement) {
                            if (!target.data('resizable')) {
                                target.resizable({
                                    aspectRatio: e.target.width / e.target.height,
                                });
                                target.data('resizable', true);
    
                                if (lastResizableImg != null) {
                                    //disable previous resizable image
                                    lastResizableImg.resizable("destroy");
                                    lastResizableImg.removeData('resizable');
                                }
                                lastResizableImg = target;
                            }
                        }
                    })
                    .on('click', function (e) {
                        if (lastResizableImg != null && !(e.target instanceof HTMLImageElement)) {
                            destroyResizable();
                        }
                    })
                    .on('keydown', function () {
                        destroyResizable();
                    });
            }
    
            enableImageResize();
    
            /**
            //or we can load the jQuery UI dynamically only if needed
            if (typeof jQuery.ui !== 'undefined') enableImageResize();
            else {//load jQuery UI if not loaded
                //in Ace demo ./components will be replaced by correct components path
                $.getScript("assets/js/jquery-ui.custom.min.js", function(data, textStatus, jqxhr) {
                    enableImageResize()
                });
            }
            */
        }

        ///* ==== */
        ///* Create Text Editor */
        //let t_textarea = $(document.createElement("textarea"));
        //t_textarea.addClass("col-sm-12 no-padding");
        //t_textarea.css("width", "100% !important");
        //t_textarea.attr("Id", Params.TargetId.substring(1) + "_texteditor");
        //t_textarea.appendTo(Params.TargetId);
        //$("#" + Params.TargetId.substring(1) + "_texteditor").Editor();
        ///* ==== */
    }
}
/* ==== */

/* ==== */
/* Text Editor Components Remove Active Event Listener */
TextEditor.Components.RemoveEventListener = function () {

}
/* ==== */
