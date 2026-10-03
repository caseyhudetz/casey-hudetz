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
            border-bottom: 1px solid var(--color-border);
        }
        .neighborhood-card {
            display: grid;
            grid-template-columns: minmax(105px, 0.55fr) minmax(150px, 0.75fr) minmax(0, 1.8fr) auto;
            grid-template-areas: 'kicker title copy link';
            gap: clamp(1.25rem, 3vw, 2.5rem);
            align-items: start;
            padding: clamp(1.75rem, 3.5vw, 2.5rem) 0;
            border-top: 1px solid var(--color-border);
            color: var(--color-text);
            text-decoration: none;
            transition: color 180ms ease;
        }
        .neighborhood-card:hover h3,
        .neighborhood-card:focus-visible h3 {
            color: var(--color-accent);
        }
        .neighborhood-card:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 8px;
        }
        .neighborhood-card-kicker {
            grid-area: kicker;
            color: var(--color-text-muted);
            font-size: 0.82rem;
            font-weight: 500;
            line-height: 1.4;
        }
        .neighborhood-card h3 {
            grid-area: title;
            margin: 0;
            font-family: var(--font-display);
            font-size: clamp(1.75rem, 2.5vw, 2.25rem);
            line-height: 1.05;
            letter-spacing: -0.035em;
            overflow-wrap: anywhere;
            transition: color 180ms ease;
        }
        .neighborhood-copy {
            grid-area: copy;
            max-width: 620px;
        }
        .neighborhood-question {
            margin: 0 0 0.65rem;
            font-family: var(--font-display);
            font-size: 1.02rem;
            font-weight: 500;
            line-height: 1.5;
        }
        .neighborhood-description {
            margin: 0;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.75;
        }
        .neighborhood-link {
            grid-area: link;
            align-self: center;
            white-space: nowrap;
            color: var(--color-accent);
            font-size: 0.9rem;
            font-weight: 600;
        }
        .neighborhood-api-note {
            max-width: 760px;
            margin: 2rem 0 0;
            color: var(--color-text-muted);
            font-size: 0.9rem;
            line-height: 1.7;
        }
        .community-crossing .experiment-card {
            background: var(--color-bg);
        }
        @media (max-width: 1000px) {
            .neighborhood-card {
                grid-template-columns: minmax(120px, 0.55fr) minmax(0, 1.45fr);
                grid-template-areas:
                    'kicker kicker'
                    'title copy'
                    '. link';
            }
            .neighborhood-link {
                justify-self: start;
                margin-top: 0.75rem;
            }
        }
        @media (max-width: 680px) {
            .neighborhood-card {
                grid-template-columns: 1fr;
                grid-template-areas:
                    'kicker'
                    'title'
                    'copy'
                    'link';
                gap: 0;
                padding: 2rem 0;
            }
            .neighborhood-card-kicker { margin-bottom: 0.75rem; }
            .neighborhood-card h3 { margin-bottom: 1.25rem; }
            .neighborhood-link { margin-top: 1.25rem; }
        }
`;
    document.head.appendChild(style);

    const tools = document.createElement('div');
    tools.className = 'community-block community-tools';
    tools.id = 'neighborhood-experiments';
    tools.innerHTML = `
        <div class="chapter-subheader fade-in visible">
            <span class="chapter-kicker">Civic tools</span>
            <h3>Tools for neighborhood problems</h3>
            <p>Small experiments that help explain how city systems work.</p>
        </div>
        <div class="neighborhood-grid">
            <a class="neighborhood-card" href="https://stump.hudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                <span class="neighborhood-card-kicker">Trees + 311</span>
                <h3>Stump</h3>
                <div class="neighborhood-copy">
                    <p class="neighborhood-question">Why doesn’t removing a tree start a replacement request?</p>
                    <p class="neighborhood-description">Tracks tree removals and planting requests to show the gap between taking a tree down and putting one back.</p>
                </div>
                <span class="neighborhood-link">Explore Stump ↗</span>
            </a>
            <a class="neighborhood-card" href="https://gone.hudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                <span class="neighborhood-card-kicker">311 + computer vision</span>
                <h3>Gone</h3>
                <div class="neighborhood-copy">
                    <p class="neighborhood-question">What if reporting a neighborhood problem took one photo?</p>
                    <p class="neighborhood-description">Photograph graffiti, a missing tree, or another street problem. Gone identifies it and prepares the right 311 request.</p>
                </div>
                <span class="neighborhood-link">Explore Gone ↗</span>
            </a>
            <a class="neighborhood-card" href="https://jurisdiction.hudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                <span class="neighborhood-card-kicker">Civic systems + maps</span>
                <h3>Jurisdiction</h3>
                <div class="neighborhood-copy">
                    <p class="neighborhood-question">Who controls this spot?</p>
                    <p class="neighborhood-description">Enter an address to see its civic and service boundaries, plus who owns the sidewalk, parkway tree, alley, and pipe below.</p>
                </div>
                <span class="neighborhood-link">Explore Jurisdiction ↗</span>
            </a>
        </div>
        <p class="neighborhood-api-note">These are working experiments, not finished products. Direct access to Chicago’s APIs would let them do more than explain and prepare.</p>
    `;

    const crossing = document.createElement('div');
    crossing.className = 'community-block community-crossing';
    crossing.innerHTML = `
        <div class="chapter-subheader fade-in visible">
            <span class="chapter-kicker">Interactive experiment</span>
            <h3>Crossing Broadway</h3>
            <p>A game about crossing one busy Chicago street.</p>
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
            <p>Satire, safer streets, public art, and neighborhood projects.</p>
        </div>
    `;

    communityContainer.insertBefore(tools, communityLayout);
    communityContainer.insertBefore(crossing, communityLayout);
    communityContainer.insertBefore(life, communityLayout);
})();