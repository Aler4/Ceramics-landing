export const cursor = (container, cursor) => {
    let area = document.querySelector(container);
    let customCursor = document.createElement('DIV');
    customCursor.classList.add(cursor);
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
