document.addEventListener("DOMContentLoaded", function () {
    const pagesList = ['index', 'empresas', 'directivos', 'nosotros'];

    const currentPath = window.location.pathname;
    // console.log(currentPath);

    if(currentPath === '/dist/' || currentPath === '/'){ // Home page to development / production
        document.getElementById('index').classList.remove("header-item-inactive");
        document.getElementById('index').classList.add("header-item-active");

    }else{ // Others pages in production
        pagesList.forEach(page => {
            if (currentPath.includes(`/${page}`)){
                document.getElementById(page).classList.remove("header-item-inactive");
                document.getElementById(page).classList.add("header-item-active");
            }
        });
    }
})