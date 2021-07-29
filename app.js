(function()
{
    var links=document.querySelectorAll("a")
    var tabs=document.querySelectorAll(".tab")

    for(var i=0;i<links.length;i++)
    {
        var link=links[i]
        var tab=tabs[i]
        tab.addEventListener('transitionend',function()
        {
            this.classList.remove("fade")
            this.classList.remove("active")
            var id=this.parentNode.parentNode.querySelector("a.active").getAttribute("href")
            var newtab= this.parentNode.querySelector('.tab'+id)
            newtab.classList.add("active")
            newtab.classList.add("fade")
            newtab.offsetWidth
            newtab.classList.add("appear")
        })
        link.addEventListener('click',function()
        {
            if(!this.classList.contains("active"))
            {
                this.parentNode.querySelector("a.active").classList.remove("active")
                this.classList.add("active")
                var tab=this.parentNode.parentNode.querySelector(".tab.active")
                tab.classList.remove("appear")
                tab.classList.add("fade")
            }
        })
    }

    window.addEventListener("hashchange",function()
        {
            hash=window.location.hash
            var aActive=document.querySelector('a[href="'+hash+'"]')
            console.log(aActive)
            if(aActive===null)
            {
                aActive=document.querySelector("a[href='#home1']")
            }
            if(!aActive.classList.contains("active"))
            {
                aActive.parentNode.querySelector("a.active").classList.remove("active")
                aActive.classList.add("active")
                var tab=aActive.parentNode.parentNode.querySelector(".tab.active")
                tab.classList.remove("appear")
                tab.classList.add("fade")
            }
        })

})()