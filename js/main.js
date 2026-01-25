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
    const readerModal = document.getElementById('reader-modal');
    const readerOverlay = readerModal.querySelector('.reader-overlay');
    const readerClose = readerModal.querySelector('.reader-close');
    const readerShare = readerModal.querySelector('.reader-share');
    const readerArticle = document.getElementById('reader-article');

    // Email copy-to-clipboard functionality
    const copyEmailBtn = document.getElementById('copy-email');
    const emailToast = document.getElementById('email-toast');

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            const email = copyEmailBtn.dataset.email;
            try {
                await navigator.clipboard.writeText(email);
                emailToast.classList.add('show');
                setTimeout(() => emailToast.classList.remove('show'), 2500);
            } catch (err) {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = email;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                emailToast.classList.add('show');
                setTimeout(() => emailToast.classList.remove('show'), 2500);
            }
        });
    }

    // Header scroll effect
    let ticking = false;
    function updateHeader() {
        header.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { window.requestAnimationFrame(updateHeader); ticking = true; }
    }, { passive: true });
    updateHeader();

    // Scroll-triggered fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Vimeo autoplay on scroll for community video
    const communityVideo = document.getElementById('community-video');
    if (communityVideo) {
        const iframe = communityVideo.querySelector('iframe');
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Update iframe src to enable autoplay
                    const currentSrc = iframe.src;
                    if (!currentSrc.includes('autoplay=1')) {
                        iframe.src = currentSrc.replace('autoplay=0', 'autoplay=1');
                    }
                }
            });
        }, { threshold: 0.3 });
        videoObserver.observe(communityVideo);
    }

    // Video embed URL helper
    function getVideoEmbedUrl(url) {
        const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
        if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&title=0&byline=0&portrait=0`;
        const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
        if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
        return null;
    }

    // Video Modal
    function openVideoModal(videoUrl) {
        const embedUrl = getVideoEmbedUrl(videoUrl);
        if (!embedUrl) return;
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        modalVideoContainer.innerHTML = '';
        modalVideoContainer.appendChild(iframe);
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        modalClose.focus();
    }

    function closeVideoModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        setTimeout(() => { modalVideoContainer.innerHTML = ''; }, 300);
    }

    // Video items click handlers
    document.querySelectorAll('.video-item[data-video], .podcast-video[data-video], .podcast-video-embed[data-video], .community-video-item[data-video]').forEach(item => {
        item.addEventListener('click', () => openVideoModal(item.dataset.video));
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideoModal(item.dataset.video); }
        });
    });

    modalClose.addEventListener('click', closeVideoModal);
    modalOverlay.addEventListener('click', closeVideoModal);

    // AI Experiments Carousel
    const carouselTrack = document.getElementById('experiments-track');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const firstVideo = document.getElementById('experiment-video-1');
    let currentSlide = 0;
    const totalSlides = 3;

    function updateCarousel() {
        if (!carouselTrack) return;
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        carouselDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
        // Pause all videos except current
        document.querySelectorAll('.experiment-video').forEach((video, i) => {
            if (i !== currentSlide) video.pause();
        });
    }

    function goToSlide(index) {
        currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
        updateCarousel();
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    carouselDots.forEach(dot => {
        dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide)));
    });

    // Swipe support for carousel
    if (carouselTrack) {
        let touchStartX = 0;
        let touchEndX = 0;
        carouselTrack.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        carouselTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) goToSlide(currentSlide + 1);
                else goToSlide(currentSlide - 1);
            }
        }, { passive: true });
    }

    // First video autoplay (muted) with click to restart
    if (firstVideo) {
        // Autoplay when section comes into view
        const experimentsSection = document.getElementById('experiments');
        const autoplayObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && currentSlide === 0) {
                    firstVideo.play().catch(() => {});
                } else {
                    firstVideo.pause();
                }
            });
        }, { threshold: 0.3 });

        if (experimentsSection) autoplayObserver.observe(experimentsSection);

        // Click to restart from beginning with sound
        firstVideo.addEventListener('click', () => {
            firstVideo.currentTime = 0;
            firstVideo.muted = false;
            firstVideo.controls = true;
            firstVideo.play();
        });
    }

    // Reader Modal
    let currentArticleId = null;

    function openReader(articleId) {
        const template = document.getElementById(`article-${articleId}`);
        if (!template) return;
        currentArticleId = articleId;
        readerArticle.innerHTML = template.innerHTML;
        readerModal.classList.add('active');
        readerModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        readerClose.focus();
        // Update URL hash
        history.pushState({ article: articleId }, '', `#${articleId}`);
    }

    function closeReader() {
        readerModal.classList.remove('active');
        readerModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        currentArticleId = null;
        if (window.location.hash) history.pushState({}, '', window.location.pathname);
    }

    // Writing cards click handlers
    document.querySelectorAll('.writing-card[data-article]').forEach(card => {
        card.addEventListener('click', () => openReader(card.dataset.article));
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openReader(card.dataset.article); }
        });
    });

    readerClose.addEventListener('click', closeReader);
    readerOverlay.addEventListener('click', closeReader);

    // Share button
    readerShare.addEventListener('click', async () => {
        const url = window.location.href;
        const title = readerArticle.querySelector('h1')?.textContent || 'Article';
        if (navigator.share) {
            try { await navigator.share({ title, url }); }
            catch (err) { if (err.name !== 'AbortError') console.error(err); }
        } else {
            await navigator.clipboard.writeText(url);
            const span = readerShare.querySelector('span');
            const original = span.textContent;
            span.textContent = 'Copied!';
            setTimeout(() => { span.textContent = original; }, 2000);
        }
    });

    // Handle hash on page load
    if (window.location.hash) {
        const articleId = window.location.hash.slice(1);
        if (document.getElementById(`article-${articleId}`)) {
            setTimeout(() => openReader(articleId), 100);
        }
    }

    // Back button support
    window.addEventListener('popstate', (e) => {
        if (e.state?.article) openReader(e.state.article);
        else if (readerModal.classList.contains('active')) closeReader();
    });

    // Image error handling with better fallback
    document.querySelectorAll('.video-item img, .podcast-video img, .podcast-video-embed img').forEach(img => {
        img.addEventListener('error', function() {
            // Try hqdefault if maxresdefault fails
            if (this.src.includes('maxresdefault')) {
                this.src = this.src.replace('maxresdefault', 'hqdefault');
            } else if (this.src.includes('hqdefault')) {
                this.src = this.src.replace('hqdefault', 'mqdefault');
            } else {
                // Final fallback - show placeholder
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;background:var(--color-bg-alt);color:var(--color-text-muted);font-size:0.85rem;';
                placeholder.textContent = 'Video';
                this.parentNode.appendChild(placeholder);
            }
        });
    });

    // Image Lightbox with Gallery Navigation
    const lightbox = document.getElementById('image-lightbox');
    const lightboxOverlay = lightbox?.querySelector('.lightbox-overlay');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
    const lightboxNext = lightbox?.querySelector('.lightbox-next');
    const lightboxCounter = document.getElementById('lightbox-counter');

    // Gallery images array for community section
    let galleryImages = [];
    let currentGalleryIndex = 0;

    // Collect gallery items
    const galleryItems = document.querySelectorAll('.gallery-item[data-image]');
    galleryItems.forEach((item, index) => {
        galleryImages.push(item.dataset.image);
        item.addEventListener('click', () => openGalleryLightbox(index));
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGalleryLightbox(index); }
        });
    });

    function openGalleryLightbox(index) {
        if (!lightbox || !lightboxImage || galleryImages.length === 0) return;
        currentGalleryIndex = index;
        updateGalleryLightbox();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function updateGalleryLightbox() {
        lightboxImage.src = galleryImages[currentGalleryIndex];
        if (lightboxCounter) {
            lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
        }
        // Show/hide nav buttons
        if (lightboxPrev) {
            lightboxPrev.classList.toggle('hidden', galleryImages.length <= 1);
        }
        if (lightboxNext) {
            lightboxNext.classList.toggle('hidden', galleryImages.length <= 1);
        }
    }

    function galleryPrevious() {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGalleryLightbox();
    }

    function galleryNext() {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        updateGalleryLightbox();
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        setTimeout(() => { if (lightboxImage) lightboxImage.src = ''; }, 300);
    }

    // Lightbox navigation
    if (lightboxPrev) lightboxPrev.addEventListener('click', galleryPrevious);
    if (lightboxNext) lightboxNext.addEventListener('click', galleryNext);
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox?.classList.contains('active')) {
            if (e.key === 'ArrowLeft') galleryPrevious();
            if (e.key === 'ArrowRight') galleryNext();
        }
    });

    // Swipe support for lightbox
    if (lightbox) {
        let touchStartX = 0;
        lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        lightbox.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) galleryNext();
                else galleryPrevious();
            }
        }, { passive: true });
    }

    // Escape key handler for all modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) closeVideoModal();
            if (readerModal.classList.contains('active')) closeReader();
            if (lightbox?.classList.contains('active')) closeLightbox();
        }
    });
})();
