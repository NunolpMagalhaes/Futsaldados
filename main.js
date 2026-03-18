const demoPlayers = [
  { id: 1, active: true, total: '00:11', small: '00:11', positive: true },
  { id: 2, active: true, total: '00:11', small: '00:11', positive: true },
  { id: 3, active: true, total: '00:11', small: '00:11', positive: true },
  { id: 4, active: false, total: '00:08', small: '00:03', positive: false },
  { id: 5, active: true, total: '00:11', small: '00:11', positive: true },
  { id: 6, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 7, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 8, active: true, total: '00:08', small: '00:08', positive: true },
  { id: 9, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 10, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 11, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 12, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 13, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 14, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 15, active: false, total: '00:11', small: '00:00', positive: false },
  { id: 16, active: false, total: '00:11', small: '00:00', positive: false }
];

function createPlayerCard(player) {
  const article = document.createElement('article');
  article.className = `player-card${player.active ? ' is-active' : ''}`;

  const timeClass = player.positive ? 'is-positive' : 'is-negative';
  const badge = player.active ? `<div class="active-badge">1</div>` : '';

  article.innerHTML = `
    <div class="player-number">${player.id}.</div>
    ${badge}
    <div class="player-name">Player</div>
    <div class="player-time ${timeClass}">${player.total}</div>
    <div class="player-mini">${player.small}</div>
  `;

  return article;
}

function renderDemoGrid() {
  const grid = document.getElementById('playersGrid');
  grid.innerHTML = '';
  demoPlayers.forEach((player) => grid.appendChild(createPlayerCard(player)));
}

renderDemoGrid();
