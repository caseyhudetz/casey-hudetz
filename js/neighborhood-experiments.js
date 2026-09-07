(function () {
    'use strict';

    const communitySection = document.getElementById('community');
    if (!communitySection || document.getElementById('neighborhood-experiments')) return;

    const style = document.createElement('style');
    style.textContent = `
        .neighborhood-experiments {
            padding: 7rem 0;
            background: var(--color-bg-alt);
        }
        .neighborhood-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.25rem;
            margin-top: 3rem;
        }
        .neighborhood-card {
            display: flex;
            flex-direction: column;
            min-height: 340px;
            padding: 2rem;
            border: 1px solid rgba(26, 26, 26, 0.12);
            border-radius: 18px;
            background: var(--color-bg);
            color: var(--color-text);
            text-decoration: none;
            transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .neighborhood-card:hover {
            transform: translateY(-5px);
            border-color: var(--color-accent);
            box-shadow: 0 18px 45px rgba(0,0,0,0.08);
        }
        .neighborhood-card-kicker {
            margin-bottom: auto;
            font-family: 'Inter', sans-serif;
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.09em;
            text-transform: uppercase;
            color: var(--color-text-muted);
        }
        .neighborhood-card h3 {
            margin: 3rem 0 0.85rem;
            font-family: 'Space Grotesk', sans-serif;
            font-size: clamp(2rem, 3vw, 2.7rem);
            line-height: 1;
        }
        .neighborhood-question {
            margin: 0 0 1rem;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.08rem;
            font-weight: 500;
            line-height: 1.4;
        }
        .neighborhood-description {
            margin: 0;
            color: var(--color-text-muted);
            font-size: 0.95rem;
            line-height: 1.65;
        }
        .neighborhood-link {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            margin-top: 1.7rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--color-accent);
        }
        .neighborhood-api-note {
            max-width: 820px;
            margin: 2.25rem auto 0;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(26, 26, 26, 0.12);
            color: var(--color-text-muted);
            text-align: center;
            font-size: 0.92rem;
            line-height: 1.65;
        }
        @media (max-width: 900px) {
            .neighborhood-grid { grid-template-columns: 1fr; }
            .neighborhood-card { min-height: 300px; }
        }
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.className = 'neighborhood-experiments';
    section.id = 'neighborhood-experiments';
    section.innerHTML = `
        <div class="container">
            <div class="section-header fade-in visible">
                <h2 class="section-title">Neighborhood Experiments</h2>
                <p class="section-subtitle">Small tools for understanding and improving the place where I live</p>
            </div>
            <div class="neighborhood-grid">
                <a class="neighborhood-card" href="https://stump.caseymhudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                    <span class="neighborhood-card-kicker">Trees + 311</span>
                    <h3>Stump</h3>
                    <p class="neighborhood-question">Why doesn’t removing a tree automatically start the process of replacing it?</p>
                    <p class="neighborhood-description">Tracks Chicago tree removals and planting requests to expose the gap between taking a tree down and putting one back.</p>
                    <span class="neighborhood-link">Explore Stump ↗</span>
                </a>
                <a class="neighborhood-card" href="https://gone.caseymhudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                    <span class="neighborhood-card-kicker">311 + computer vision</span>
                    <h3>Gone</h3>
                    <p class="neighborhood-question">What if reporting a neighborhood problem took one photograph?</p>
                    <p class="neighborhood-description">Photograph graffiti, a missing tree or another street-level problem. Gone identifies the issue and prepares the right 311 request.</p>
                    <span class="neighborhood-link">Explore Gone ↗</span>
                </a>
                <a class="neighborhood-card" href="https://github.com/caseyhudetz/jurisdiction" target="_blank" rel="noopener noreferrer">
                    <span class="neighborhood-card-kicker">Civic systems + maps</span>
                    <h3>Jurisdiction</h3>
                    <p class="neighborhood-question">Who actually controls this spot?</p>
                    <p class="neighborhood-description">Enter an address and see the overlapping political, civic and service boundaries around it, plus who actually owns the sidewalk, parkway tree, alley and pipe underneath.</p>
                    <span class="neighborhood-link">Explore Jurisdiction ↗</span>
                </a>
            </div>
            <p class="neighborhood-api-note fade-in visible"><strong>Working experiments, not finished products.</strong> Direct access to Chicago’s APIs would let these move from explaining and preparing civic actions to actually initiating them.</p>
        </div>
    `;

    communitySection.parentNode.insertBefore(section, communitySection);
})();