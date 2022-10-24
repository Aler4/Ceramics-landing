export const cursor = (container, cursor) => {
    let area = document.querySelector(container);
    let customCursor = document.createElement('DIV');
    customCursor.classList.add(cursor);
    console.log("zoom");
    area === null || area === void 0 ? void 0 : area.addEventListener('mousemove', e => {
        let targetX = e.pageX;
        let targetY = (e.pageY - area.clientWidth) - 200;
        customCursor.style.left = (targetX - customCursor.clientWidth / 2) + "px";
        customCursor.style.top = (targetY - customCursor.clientHeight / 2) + "px";
        if (document.querySelector('.swiper-slide-zoomed')) {
            area.style.cursor = 'grab';
            customCursor.remove();
        }
        if (!document.querySelector('.swiper-slide-zoomed')) {
            area.style.cursor = 'grab';
            area.append(customCursor);
            area.style.cursor = 'none';
        }
    });
};
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
