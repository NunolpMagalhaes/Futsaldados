const players = [
  { id: 1,  name: 'Player', match: '00:11', small: '00:11', active: true,  badge: '1' },
  { id: 2,  name: 'Player', match: '00:21', small: '00:21', active: true,  badge: '1' },
  { id: 3,  name: 'Player', match: '00:02', small: '00:02', active: false },
  { id: 4,  name: 'Player', match: '00:08', small: '00:03', active: false },
  { id: 5,  name: 'Player', match: '00:11', small: '00:11', active: true,  badge: '1' },
  { id: 6,  name: 'Player', match: '00:21', small: '00:00', active: false },
  { id: 7,  name: 'Player', match: '00:19', small: '00:19', active: true,  badge: '1' },
  { id: 8,  name: 'Player', match: '00:08', small: '00:08', active: true,  badge: '1' },
  { id: 9,  name: 'Player', match: '00:11', small: '00:00', active: false },
  { id: 10, name: 'Player', match: '00:21', small: '00:00', active: false },
  { id: 11, name: 'Player', match: '00:21', small: '00:00', active: false },
  { id: 12, name: 'Player', match: '00:11', small: '00:00', active: false },
  { id: 13, name: 'Player', match: '00:11', small: '00:00', active: false },
  { id: 14, name: 'Player', match: '00:11', small: '00:00', active: false },
  { id: 15, name: 'Player', match: '00:11', small: '00:00', active: false },
  { id: 16, name: 'Player', match: '00:11', small: '00:00', active: false }
];

const grid = document.getElementById('playersGrid');

if (grid) {
  grid.innerHTML = players.map((player) => `
    <article class="card ${player.active ? 'is-active' : 'is-idle'}">
      <div class="num">${player.id}.</div>
      ${player.active ? `<div class="active">${player.badge || '1'}</div>` : ''}
      <div class="player">${player.name}</div>
      <div class="time">${player.match}</div>
      <div class="small">${player.small}</div>
    </article>
  `).join('');
}
