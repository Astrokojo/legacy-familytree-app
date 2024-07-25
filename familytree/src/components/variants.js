// Fade in animation
export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0,
            scale: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}

// Slide in animation
export const slideIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                duration: 1,
                delay: delay,
            }
        }
    }
}

// Rotate in animation
export const rotateIn = (delay) => {
    return {
        hidden: {
            opacity: 0,
            rotate: -180,
        },
        show: {
            opacity: 1,
            rotate: 0,
            transition: {
                type: 'tween',
                duration: 1.5,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}
