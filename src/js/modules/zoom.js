export function magnify(imgSelector, zoom) {
    let img = document.querySelector(imgSelector);
    let zoomGlass = img.closest('div').querySelector('.zoom');
    zoomGlass.style.backgroundImage = "url('" + img.src + "')";
    zoomGlass.style.backgroundRepeat = "no-repeat";
    zoomGlass.innerHTML = 'ASDASDa';
    // (zoomGlass as HTMLElement).style.backgroundSize = ((img as HTMLImageElement).width * zoom) + "px " + ((img as HTMLImageElement).height * zoom) + "px";
    console.log(zoomGlass.style.backgroundImage);
    // let bw: number = 3;
    // let  w: number = (zoomGlass as HTMLElement).offsetWidth / 2;
    // let h = (zoomGlass as HTMLElement).offsetHeight / 2;
    //
    // /* Execute a function when someone moves the magnifier glass over the image: */
    // (zoomGlass as HTMLElement).addEventListener("mousemove", moveMagnifier);
    // (img as HTMLImageElement).addEventListener("mousemove", moveMagnifier);
    //
    // /*and also for touch screens:*/
    // (zoomGlass as HTMLImageElement).addEventListener("touchmove", moveMagnifier);
    // (img as HTMLImageElement).addEventListener("touchmove", moveMagnifier);
    //
    //
    // function moveMagnifier(e:Event) {
    //     /* Prevent any other actions that may occur when moving over the image */
    //     e.preventDefault();
    //     /* Get the cursor's x and y positions: */
    //     let pos:{x: number,y: number}  = getCursorPos(e);
    //     let x: number = pos.x;
    //     let y:number = pos.y;
    //     /* Prevent the magnifier glass from being positioned outside the image: */
    //     if (x > (img as HTMLImageElement).width - (w / zoom)) {x = (img as HTMLImageElement).width - (w / zoom);}
    //     if (x < w / zoom) {x = w / zoom;}
    //     if (y > (img as HTMLImageElement).height - (h / zoom)) {y = (img as HTMLImageElement).height - (h / zoom);}
    //     if (y < h / zoom) {y = h / zoom;}
    //     /* Set the position of the magnifier glass: */
    //     (zoomGlass as HTMLImageElement).style.left = (x - w) + "px";
    //     (zoomGlass as HTMLImageElement).style.top = (y - h) + "px";
    //     /* Display what the magnifier glass "sees": */
    //     (zoomGlass as HTMLImageElement).style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    // }
    //
    // function getCursorPos(e:Event): {x: number,y: number} {
    //     let x: number = 0, y: number = 0;
    //     e = e || window.event;
    //     /* Get the x and y positions of the image: */
    //     let a: DOMRect = (img as HTMLImageElement).getBoundingClientRect();
    //     /* Calculate the cursor's x and y coordinates, relative to the image: */
    //     x = (e as MouseEvent).pageX - a.left;
    //     y = (e as MouseEvent).pageY - a.top;
    //     /* Consider any page scrolling: */
    //     x = x - window.pageXOffset;
    //     y = y - window.pageYOffset;
    //     return {x : x, y : y};
    // }
}
