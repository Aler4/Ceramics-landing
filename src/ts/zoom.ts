export const cursor = (container: string, cursor: string) => {
    let area: HTMLElement | null = document.querySelector(container)
    let customCursor: HTMLElement | null = document.createElement('DIV');
    customCursor.classList.add(cursor);

    console.log("zoom")
    area?.addEventListener('mousemove', e => {
        let targetX = e.pageX;
        let targetY = (e.pageY - (area as Element).clientWidth) - 200;
        (customCursor as HTMLElement).style.left = ( targetX - (customCursor as Element).clientWidth / 2 ) + "px";
        (customCursor as HTMLElement).style.top = ( targetY - (customCursor as Element).clientHeight / 2 ) + "px";

        if(document.querySelector('.swiper-slide-zoomed')) {
            (area as HTMLElement).style.cursor = 'grab';
            (customCursor as HTMLElement).remove();
        }
        if(!document.querySelector('.swiper-slide-zoomed')) {
            (area as HTMLElement).style.cursor = 'grab';
            (area as HTMLElement).append((customCursor as Element));
            (area as HTMLElement).style.cursor = 'none';
        }
    });
}
//
//     function getCursorPos(e:Event) {
//         var x = 0, y = 0;
//         e = e || window.event;
//         /*get the x and y positions of the image:*/
//        let a: DOMRect = (area as Element).getBoundingClientRect();
//         /*calculate the cursor's x and y coordinates, relative to the image:*/
//         x = (e).pageX - a.left;
//         y = e.pageY - a.top;
//         /*consider any page scrolling:*/
//         x = x - window.pageXOffset;
//         y = y - window.pageYOffset;
//         return {x : x, y : y};
//     }
// }