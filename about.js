window.addEventListener("scroll",progressAll)

function progressAll()
{
    const triggerProgress = (window.innerHeight /2) *2;
    console.log(triggerProgress);
    const progressTop = document.getElementById("container");

    const progressStart = progressTop.getBoundingClientRect().top;
    console.log(progressStart);

    if(progressStart < triggerProgress)
    {

    
        //HTML
        const progress=document.getElementById("progressDoneHtml");
        progress.style.width=progress.getAttribute("data-done");

        //CSS
        const progressCss=document.getElementById("progressDoneCss");
        progressCss.style.width=progressCss.getAttribute("data-done");

        //BOOTSTRAP
        const progressBootstrap=document.getElementById("progressDoneBootstrap");
        progressBootstrap.style.width=progressBootstrap.getAttribute("data-done");

        //SASS
        const progressSass=document.getElementById("progressDoneSass");
        progressSass.style.width=progressSass.getAttribute("data-done");

        //JAVASCRIPT
        const progressJavaScript=document.getElementById("progressDoneJavaScript");
        progressJavaScript.style.width=progressJavaScript.getAttribute("data-done");

        //REACTJS
        const progressReactJS=document.getElementById("progressDoneReactJS");
        progressReactJS.style.width=progressReactJS.getAttribute("data-done");

    }

}