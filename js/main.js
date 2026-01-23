/**
 * Casey Hudetz Portfolio - Main JavaScript
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.querySelector('.header');
    const modal = document.getElementById('video-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const modalVideoContainer = document.getElementById('modal-video-container');
    const workItems = document.querySelectorAll('.work-item[data-video]');

    // ========================================
    // Header Scroll Effect
    // ========================================

    let lastScrollY = 0;
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    }

    function onScroll() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial check
    updateHeader();

    // ========================================
    // Video Modal
    // ========================================

    function getVideoEmbedUrl(url) {
        // Handle Vimeo URLs
        const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
        if (vimeoMatch) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&title=0&byline=0&portrait=0`;
        }

        // Handle Vimeo private URLs with hash
        const vimeoPrivateMatch = url.match(/vimeo\.com\/(\d+)\/([a-zA-Z0-9]+)/);
        if (vimeoPrivateMatch) {
            return `https://player.vimeo.com/video/${vimeoPrivateMatch[1]}?h=${vimeoPrivateMatch[2]}&autoplay=1&title=0&byline=0&portrait=0`;
        }

        // Handle YouTube URLs
        const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
        if (youtubeMatch) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
        }

        return null;
    }

    function openModal(videoUrl) {
        const embedUrl = getVideoEmbedUrl(videoUrl);
        if (!embedUrl) return;

        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('title', 'Video player');

        modalVideoContainer.innerHTML = '';
        modalVideoContainer.appendChild(iframe);

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        // Focus trap
        modalClose.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

        // Clear video to stop playback
        setTimeout(() => {
            modalVideoContainer.innerHTML = '';
        }, 300);
    }

    // Event listeners for work items
    workItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoUrl = item.getAttribute('data-video');
            if (videoUrl) {
                openModal(videoUrl);
            }
        });

        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const videoUrl = item.getAttribute('data-video');
                if (videoUrl) {
                    openModal(videoUrl);
                }
            }
        });
    });

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ========================================
    // Smooth Scroll for Navigation
    // ========================================

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Intersection Observer for Animations
    // ========================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.work-item, .project-card, .speaking-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .work-item.visible,
        .project-card.visible,
        .speaking-item.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Image Error Handling
    // ========================================

    const thumbnails = document.querySelectorAll('.work-thumbnail img');
    thumbnails.forEach(img => {
        img.addEventListener('error', () => {
            // Create a fallback placeholder
            img.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-border) 100%);
                color: var(--color-text-muted);
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            `;
            placeholder.textContent = 'Video';
            img.parentNode.appendChild(placeholder);
        });
    });

})();
