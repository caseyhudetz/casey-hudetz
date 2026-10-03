(function () {
    'use strict';

    const communitySection = document.getElementById('community');
    if (!communitySection || document.getElementById('neighborhood-experiments')) return;

    const communityContainer = communitySection.querySelector('.container');
    const communityLayout = communitySection.querySelector('.community-layout-v2');
    if (!communityContainer || !communityLayout) return;

    const style = document.createElement('style');
    style.textContent = `
        .neighborhood-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        .neighborhood-card {
            position: relative;
            isolation: isolate;
            overflow: hidden;
            display: grid;
            grid-template-columns: minmax(150px, 0.45fr) minmax(0, 1.55fr);
            grid-template-areas:
                'kicker kicker'
                'title question'
                'title description'
                'title link';
            column-gap: clamp(1.5rem, 4vw, 3.5rem);
            align-items: start;
            min-height: 0;
            padding: clamp(1.5rem, 3vw, 2.25rem);
            border: 1px solid var(--color-border);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.72);
            color: var(--color-text);
            text-decoration: none;
            box-shadow: 0 14px 38px rgba(29, 46, 36, 0.07);
            backdrop-filter: blur(8px);
            transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .neighborhood-card::before {
            content: '';
            position: absolute;
            z-index: -1;
            inset: 0;
            background-image: var(--neighborhood-image);
            background-position: center;
            background-size: cover;
            opacity: 0.13;
            filter: grayscale(1) contrast(0.85);
            transition: opacity 220ms ease, transform 350ms ease;
        }
        .neighborhood-card:hover {
            transform: translateY(-5px);
            border-color: var(--color-accent);
            box-shadow: 0 22px 55px rgba(29, 46, 36, 0.14);
        }
        .neighborhood-card:hover::before {
            opacity: 0.18;
            transform: scale(1.02);
        }
        .neighborhood-card-kicker {
            grid-area: kicker;
            margin-bottom: 1.5rem;
            font-family: var(--font-body);
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.09em;
            text-transform: uppercase;
            color: var(--color-text-muted);
        }
        .neighborhood-card h3 {
            grid-area: title;
            margin: 0;
            font-family: var(--font-display);
            font-size: clamp(1.9rem, 2.6vw, 2.35rem);
            overflow-wrap: anywhere;
            line-height: 1;
        }
        .neighborhood-question {
            grid-area: question;
            margin: 0 0 0.75rem;
            font-family: var(--font-display);
            font-size: 1.08rem;
            font-weight: 500;
            line-height: 1.4;
        }
        .neighborhood-description {
            grid-area: description;
            margin: 0;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
        }
        .neighborhood-link {
            grid-area: link;
            justify-self: start;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            margin-top: 1.7rem;
            color: var(--color-accent);
            font-size: 0.9rem;
            font-weight: 600;
        }
        .neighborhood-api-note {
            max-width: 820px;
            margin: 2.25rem auto 0;
            padding-top: 1.5rem;
            border-top: 1px solid var(--color-border);
            color: var(--color-text-muted);
            text-align: center;
            font-size: 0.92rem;
            line-height: 1.65;
        }
        .community-crossing .experiment-card {
            background: rgba(255, 255, 255, 0.72);
        }
        @media (max-width: 720px) {
            .neighborhood-card {
                grid-template-columns: 1fr;
                grid-template-areas:
                    'kicker'
                    'title'
                    'question'
                    'description'
                    'link';
            }
            .neighborhood-card h3 { margin-bottom: 1rem; }
        }
    `;
    document.head.appendChild(style);

    const tools = document.createElement('div');
    tools.className = 'community-block community-tools';
    tools.id = 'neighborhood-experiments';
    tools.innerHTML = `
        <div class="chapter-subheader fade-in visible">
            <span class="chapter-kicker">Civic tools</span>
            <h3>Small software for stubborn systems</h3>
            <p>Working experiments for understanding—and eventually improving—the systems around my neighborhood.</p>
        </div>
        <div class="neighborhood-grid">
            <a class="neighborhood-card" href="https://stump.hudetz.workers.dev" target="_blank" rel="noopener noreferrer" style="--neighborhood-image: url('images/neighborhood/stump.jpg')">
                <span class="neighborhood-card-kicker">Trees + 311</span>
                <h3>Stump</h3>
                <p class="neighborhood-question">Why doesn’t removing a tree automatically start the process of replacing it?</p>
                <p class="neighborhood-description">Tracks Chicago tree removals and planting requests to expose the gap between taking a tree down and putting one back.</p>
                <span class="neighborhood-link">Explore Stump ↗</span>
            </a>
            <a class="neighborhood-card" href="https://gone.hudetz.workers.dev" target="_blank" rel="noopener noreferrer" style="--neighborhood-image: url('images/neighborhood/gone.jpg')">
                <span class="neighborhood-card-kicker">311 + computer vision</span>
                <h3>Gone</h3>
                <p class="neighborhood-question">What if reporting a neighborhood problem took one photograph?</p>
                <p class="neighborhood-description">Photograph graffiti, a missing tree, or another street-level problem. Gone identifies the issue and prepares the right 311 request.</p>
                <span class="neighborhood-link">Explore Gone ↗</span>
            </a>
            <a class="neighborhood-card" href="https://jurisdiction.hudetz.workers.dev" target="_blank" rel="noopener noreferrer" style="--neighborhood-image: url('images/neighborhood/jurisdiction.jpg')">
                <span class="neighborhood-card-kicker">Civic systems + maps</span>
                <h3>Jurisdiction</h3>
                <p class="neighborhood-question">Who actually controls this spot?</p>
                <p class="neighborhood-description">Enter an address to see its overlapping political, civic, and service boundaries—and who owns the sidewalk, parkway tree, alley, and pipe underneath.</p>
                <span class="neighborhood-link">Explore Jurisdiction ↗</span>
            </a>
        </div>
        <p class="neighborhood-api-note"><strong>Working experiments, not finished products.</strong> Direct access to Chicago’s APIs would let these move from explaining and preparing civic actions to actually initiating them.</p>
    `;

    const crossing = document.createElement('div');
    crossing.className = 'community-block community-crossing';
    crossing.innerHTML = `
        <div class="chapter-subheader fade-in visible">
            <span class="chapter-kicker">Interactive experiment</span>
            <h3>Crossing Broadway</h3>
            <p>A game about the everyday danger of crossing one busy Chicago street.</p>
        </div>
        <a href="https://crossing-broadway.hudetz.workers.dev/" target="_blank" rel="noopener noreferrer" class="experiment-card fade-in visible" aria-label="Play Cross Broadway, opens in a new tab">
            <div class="experiment-media">
                <img src="images/cross-broadway.png" alt="Cross Broadway game showing traffic moving through Lakeview streets" loading="lazy">
                <span class="experiment-badge">Interactive game</span>
            </div>
            <div class="experiment-body">
                <div class="experiment-meta">Broadway · Lakeview, Chicago</div>
                <h3 class="experiment-title">Cross Broadway</h3>
                <p class="experiment-description">Make it from Cornelia to Belmont as traffic accelerates at every corner, then explore the real crash data behind the game.</p>
                <span class="experiment-cta">Play the game <span aria-hidden="true">↗</span></span>
            </div>
        </a>
    `;

    const life = document.createElement('div');
    life.className = 'community-block community-life';
    life.innerHTML = `
        <div class="chapter-subheader fade-in visible">
            <span class="chapter-kicker">Projects + publications</span>
            <h3>Life on the block</h3>
            <p>Satire, safer streets, public art, and other attempts to make East Lakeview more connected.</p>
        </div>
    `;

    communityContainer.insertBefore(tools, communityLayout);
    communityContainer.insertBefore(crossing, communityLayout);
    communityContainer.insertBefore(life, communityLayout);
})();