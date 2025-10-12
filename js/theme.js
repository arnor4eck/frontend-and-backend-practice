function changeTheme(){
    document.documentElement.style.setProperty('--color-background', 
        document.documentElement.style.getPropertyValue('--color-background') === '#ecf0f1' ? 
            '#555260' : '#ecf0f1'
    );
    document.documentElement.style.setProperty('--color-white',
        document.documentElement.style.getPropertyValue('--color-white') == '#ffffff' ?
        '#a8a7ae' : '#ffffff'
    );
}