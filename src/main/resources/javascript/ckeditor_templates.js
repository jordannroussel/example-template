CKEDITOR.addTemplates('default',
    {
        // The name of the subfolder that contains the preview images of the templates.
        imagesPath: ((typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '') + '/modules/example-module/images/ckeditor/',
        // Template definitions.
        templates: [
            {
                title: 'List 1',
                image: 'list1.png',
                description: 'Standard bullet list',
                html: '<h3>Lorem ipsum</h3>' +
                '<ul class="standard_list">' +
                '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                '<ul>' +
                '<li>Duis et elit massa, nec porttitor libero.</li>' +
                '<li>Mauris sed est mi, id cursus justo.</li>' +
                '<li>Ut porttitor mi vitae lorem ornare ut aliquet augue laoreet.</li>' +
                '<li>In cursus purus fringilla lacus dignissim ac cursus mi sollicitudin.</li>' +
                '<li>Sed mattis faucibus lorem, eget sollicitudin risus sagittis eget.</li>' +
                '</ul>' +
                '</li>' +
                '<li>Phasellus fringilla mauris a sem porta non suscipit nibh rhoncus.' +
                '<ul>' +
                '<li>Morbi cursus aliquam justo, a venenatis sapien rutrum id.</li>' +
                '<li>Pellentesque non dolor mauris, nec scelerisque leo.</li>' +
                '<li>Sed aliquam mi sit amet lacus elementum malesuada.</li>' +
                '<li>Donec a enim quis tortor lobortis suscipit et at orci.</li>' +
                '<li>Pellentesque pulvinar neque a massa pellentesque euismod.</li>' +
                '</ul>' +
                '</li>' +
                '</ul>'
            },
            {
                title: 'Liste 2',
                image: 'list2.png',
                description: 'Standard arrow list',
                html: '<h3>Lorem ipsum</h3>' +
                '<ul class="standard_arrow_list">' +
                '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                '<ul>' +
                '<li>Duis et elit massa, nec porttitor libero.</li>' +
                '<li>Mauris sed est mi, id cursus justo.</li>' +
                '<li>Ut porttitor mi vitae lorem ornare ut aliquet augue laoreet.</li>' +
                '<li>In cursus purus fringilla lacus dignissim ac cursus mi sollicitudin.</li>' +
                '<li>Sed mattis faucibus lorem, eget sollicitudin risus sagittis eget.</li>' +
                '</ul>' +
                '</li>' +
                '<li>Phasellus fringilla mauris a sem porta non suscipit nibh rhoncus.' +
                '<ul>' +
                '<li>Morbi cursus aliquam justo, a venenatis sapien rutrum id.</li>' +
                '<li>Pellentesque non dolor mauris, nec scelerisque leo.</li>' +
                '<li>Sed aliquam mi sit amet lacus elementum malesuada.</li>' +
                '<li>Donec a enim quis tortor lobortis suscipit et at orci.</li>' +
                '<li>Pellentesque pulvinar neque a massa pellentesque euismod.</li>' +
                '</ul>' +
                '</li>' +
                '</ul>'
            }
        ]
    });