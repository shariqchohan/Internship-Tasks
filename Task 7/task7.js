document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            const tooltipText = trigger.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = tooltipText;
            trigger.appendChild(tooltip);
        });

        trigger.addEventListener('mouseleave', () => {
            const tooltip = trigger.querySelector('.tooltip');
            if (tooltip) {
                trigger.removeChild(tooltip);
            }
        });
    });
});
