CKEDITOR.stylesSet.add('custom_styles', [

    // Inline styles
    {name: 'Highlight', element: 'span', attributes: {'class': 'bghighlight1'}},
    {name: 'Blue highlight', element: 'span', attributes: {'class': 'bghighlight2'}},
    {name: 'Computer Code', element: 'code'}
]);

CKEDITOR.editorConfig = function (config) {
    config.siteKey = (typeof contextJsParameters != 'undefined') ? contextJsParameters.siteKey : '';
    config.workspace = (typeof contextJsParameters != 'undefined') ? contextJsParameters.workspace : '';

    config.toolbar_Full = [
        ['Source', '-', 'Preview', '-', 'Templates'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'wsc', 'Scayt'],
        '/',
        ['Bold', 'Italic', 'Underline', 'Strike'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote', 'CreateDiv'],
        ['Link', 'Unlink', 'Anchor'],
        ['Image', 'Table', 'HorizontalRule', 'SpecialChar'],
        '/',
        ['Macros', 'Styles', 'Format', 'FontSize']
    ];

    // Will override default toolbar profiles provided by Jahia
    config.toolbar_Light = config.toolbar_Full;
    config.toolbar_Basic = config.toolbar_Full;
    config.toolbar_Mini = config.toolbar_Full;
    config.toolbar_User = config.toolbar_Full;

    // Apply new styles
    config.stylesSet = 'custom_styles';

    // Load CSS also in CKEditor
    config.contentsCss = [
        ((typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '') + '/modules/example-module/css/ckeditor.css'
    ];

    // Limiting formats
    config.format_tags = 'p;h1;h2;h3;h4;h5;h6';

    // Limiting font's size
    config.fontSize_sizes = 'larger;x-small;small;medium;large';

    // Loading custom templates
    config.templates_files = [((typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '') + '/modules/example-module/javascript/ckeditor_templates.js'];
}


