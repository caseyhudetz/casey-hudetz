(function () {
    'use strict';

    const communitySection = document.getElementById('community');
    if (!communitySection || document.getElementById('neighborhood-experiments')) return;

    const communityContainer = communitySection.querySelector('.container');
    const communityLayout = communitySection.querySelector('.community-layout-v2');
    if (!communityContainer || !communityLayout) return;

    const tools = document.createElement('div');
    tools.className = 'community-block community-tools';
    tools.id = 'neighborhood-experiments';
    tools.innerHTML = `
        <div class="chapter-subheader fade-in visible">
            <h3>Small tools for stubborn city systems</h3>
            <p>Each starts with a familiar neighborhood frustration and turns it into something you can see, understand, or act on.</p>
        </div>
        <div class="neighborhood-grid">
            <a class="neighborhood-card neighborhood-card--stump" href="https://stump.hudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                <div class="neighborhood-card-header">
                    <span class="neighborhood-card-meta">Tree removals + 311</span>
                    <h4>Stump</h4>
                    <p class="neighborhood-question">A tree comes down. Why doesn’t a replacement request go up?</p>
                    <p class="neighborhood-description">Pairs removal and planting records to show where the handoff breaks.</p>
                </div>
                <div class="neighborhood-diagram" aria-hidden="true">
                    <span>Tree removed</span><i></i><span>Replacement?</span>
                </div>
                <span class="neighborhood-link">Follow the missing tree</span>
            </a>
            <a class="neighborhood-card neighborhood-card--gone" href="https://gone.hudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                <div class="neighborhood-card-header">
                    <span class="neighborhood-card-meta">Computer vision + 311</span>
                    <h4>Gone</h4>
                    <p class="neighborhood-question">Turn one photo into the right 311 report.</p>
                    <p class="neighborhood-description">Identifies the problem and prepares the request, without making residents learn the system first.</p>
                </div>
                <div class="neighborhood-diagram" aria-hidden="true">
                    <span>Photo</span><i></i><span>311 draft</span>
                </div>
                <span class="neighborhood-link">Try Gone</span>
            </a>
            <a class="neighborhood-card neighborhood-card--jurisdiction" href="https://jurisdiction.hudetz.workers.dev" target="_blank" rel="noopener noreferrer">
                <div class="neighborhood-card-header">
                    <span class="neighborhood-card-meta">Boundaries + public infrastructure</span>
                    <h4>Jurisdiction</h4>
                    <p class="neighborhood-question">One address. Every layer of responsibility.</p>
                    <p class="neighborhood-description">Shows who controls the ward, sidewalk, parkway tree, alley, and pipe below.</p>
                </div>
                <div class="neighborhood-layers" aria-hidden="true">
                    <span>Ward</span><span>Sidewalk</span><span>Water</span><span>Alley</span>
                </div>
                <span class="neighborhood-link">Map the layers</span>
            </a>
        </div>
        <p class="neighborhood-api-note">Working prototypes built around public data and the limits of Chicago’s current APIs.</p>
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
            <p>Public art, safer streets, and neighborhood projects.</p>
        </div>
    `;

    communityContainer.insertBefore(tools, communityLayout);
    communityContainer.insertBefore(crossing, communityLayout);
    communityContainer.insertBefore(life, communityLayout);
})();