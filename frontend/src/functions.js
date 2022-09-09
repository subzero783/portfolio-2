

export function activate_text_fade_down(active, elements){

    if(active){
        var i = 0.4;
        elements.forEach((element, key) => {
            i += 0.16;
            var timing = i;
            element.style.cssText += "transition-duration:"+(timing)+"s";
            element.classList.add("come_down");
        });

    }else{
        elements.forEach((element) => {
            element.classList.remove("come_down");
        });
    }
}