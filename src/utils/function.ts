export function smoothScroll(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth", // Add smooth scrolling behavior
        });
    }
}
