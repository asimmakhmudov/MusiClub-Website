const checkbox = document.getElementById("checkbox")
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
var menuList = document.getElementById("menuList");
        menuList.style.maxHeight = "0px";
        function toggleMenu(){
            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "500px";
            }
            else {
                menuList.style.maxHeight = "0px"
            }
        }

       