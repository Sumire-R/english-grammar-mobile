const lessons = [
  { id: 'tenses-overview', title: '英語の時制一覧表（12種類）', images: ['01-tenses-overview.jpg', '01-tenses-tips.jpg', '01-tenses-tips-continued-a.jpg', '01-tenses-tips-continued-b.jpg'] },
  { id: 'conjunctions', title: '接続詞で文をつなぐ', images: ['02-conjunctions.jpg'] },
  { id: 'adverbs', title: '副詞の使い方（場所・時間・頻度など）', images: ['03-adverbs.jpg'] },
  { id: 'passive', title: '受け身（受動態）の作り方', images: ['04-passive.jpg'] },
  { id: 'modals', title: '助動詞の使い方', images: ['05-modals.jpg'] },
  { id: 'word-order', title: '語順の基本', images: ['06-word-order.jpg'] },
  { id: 'sentence-order-examples', title: '英語の文の並び方【例文で理解しよう！】', images: ['07-sentence-order-examples.jpg'] },
  { id: 'five-patterns', title: '第5文型までの文の形', images: ['08-five-patterns-overview.jpg'] },
  { id: 'pattern-sv', title: '第1文型（SV）', images: ['09-pattern-sv.jpg'] },
  { id: 'pattern-svc', title: '第2文型（SVC）', images: ['10-pattern-svc.jpg'] },
  { id: 'pattern-svo', title: '第3文型（SVO）', images: ['11-pattern-svo.jpg'] },
  { id: 'pattern-svoo', title: '第4文型（SVOO）', images: ['12-pattern-svoo.jpg'] },
  { id: 'pattern-svoc', title: '第5文型（SVOC）', images: ['13-pattern-svoc.jpg'] },
  { id: 'present-simple', title: '現在形（一般現在）', images: ['14-present-simple.jpg'] },
  { id: 'present-perfect', title: '現在完了形', images: ['15-present-perfect.jpg'] },
  { id: 'present-perfect-progressive', title: '現在完了進行形', images: ['16-present-perfect-progressive.jpg'] },
  { id: 'present-progressive', title: '現在進行形', images: ['17-present-progressive.jpg'] },
  { id: 'future-will', title: '未来形（will）', images: ['18-future-will.jpg'] },
  { id: 'be-going-to', title: 'be going to', images: ['19-be-going-to.jpg'] },
  { id: 'future-progressive', title: '未来進行形', images: ['20-future-progressive.jpg'] },
  { id: 'future-perfect', title: '未来完了形', images: ['21-future-perfect.jpg'] },
  { id: 'past-simple', title: '過去形（一般過去）', images: ['22-past-simple.jpg'] },
  { id: 'past-progressive', title: '過去進行形', images: ['23-past-progressive.jpg'] },
  { id: 'past-perfect', title: '過去完了形', images: ['24-past-perfect.jpg'] },
  { id: 'past-perfect-progressive', title: '過去完了進行形', images: ['25-past-perfect-progressive.jpg'] },
  { id: 'prepositions-overview', title: '前置詞の基本まとめ', images: ['26-prepositions-overview.jpg'] },
  { id: 'place-prepositions', title: '場所を表す前置詞', images: ['27-place-prepositions.jpg'] },
  { id: 'verbs-25-part1', title: '英語でよく使う動詞25選 ①', images: ['28-verbs-25-part1.jpg'] },
  { id: 'verbs-25-part2', title: '英語でよく使う動詞25選 ②', images: ['29-verbs-25-part2.jpg'] }
];

const contentsList = document.querySelector('#contents-list');
const lessonsRoot = document.querySelector('#lessons');

lessons.forEach((lesson, index) => {
  const number = String(index + 1).padStart(2, '0');
  const item = document.createElement('li');
  item.innerHTML = `<a href="#${lesson.id}"><span>${number}</span><strong>${lesson.title}</strong><span aria-hidden="true">›</span></a>`;
  contentsList.append(item);

  const previous = index === 0 ? { id: 'contents', title: '目次' } : lessons[index - 1];
  const next = index === lessons.length - 1 ? null : lessons[index + 1];
  const section = document.createElement('section');
  section.id = lesson.id;
  section.className = 'lesson page-section';
  section.setAttribute('aria-labelledby', `${lesson.id}-title`);
  section.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">LESSON ${number} / ${lessons.length}</p>
      <h2 id="${lesson.id}-title">${lesson.title}</h2>
      <p>画像をタップすると、細部まで大きく確認できます。</p>
    </div>
    <div class="material-stack">
      ${lesson.images.map((image, imageIndex) => `
        <button class="image-button material" type="button" data-image="assets/${image}" data-alt="${lesson.title}${lesson.images.length > 1 ? ` ${imageIndex + 1}` : ''}">
          <img src="assets/${image}" alt="${lesson.title}${lesson.images.length > 1 ? ` ${imageIndex + 1}` : ''}" width="1650" loading="lazy">
          <span class="zoom-label">タップして拡大</span>
        </button>`).join('')}
    </div>
    <nav class="page-nav" aria-label="教材間の移動">
      <a href="#${previous.id}"><span aria-hidden="true">←</span><small>前へ</small><strong>${previous.title}</strong></a>
      <a class="toc-link" href="#contents"><small>目次へ戻る</small><strong>全項目を見る</strong></a>
      ${next ? `<a href="#${next.id}"><small>次へ</small><strong>${next.title}</strong><span aria-hidden="true">→</span></a>` : `<a href="#cover"><small>次へ</small><strong>表紙に戻る</strong><span aria-hidden="true">↑</span></a>`}
    </nav>`;
  lessonsRoot.append(section);
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const closeButton = dialog.querySelector('.close-button');

function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'メニューを開く';
}

menuButton.addEventListener('click', () => {
  const opening = !nav.classList.contains('open');
  nav.classList.toggle('open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.querySelector('.sr-only').textContent = opening ? 'メニューを閉じる' : 'メニューを開く';
});
nav.addEventListener('click', closeMenu);

document.querySelectorAll('.image-button').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.alt;
    document.body.classList.add('modal-open');
    dialog.showModal();
  });
});

function closeLightbox() {
  dialog.close();
  document.body.classList.remove('modal-open');
  dialogImage.src = '';
}

closeButton.addEventListener('click', closeLightbox);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeLightbox(); });
dialog.addEventListener('cancel', () => document.body.classList.remove('modal-open'));
