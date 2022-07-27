/**
 * Реализация 1 - копим оценки в объекте, потом сортируем
 */
class Competition1 {
  constructor(participant_count) {
    this.scores = {};
    this.best_works = [];
    for (let i = 0; i < participant_count; i++) {
      this.scores[i] = 0;
    }
  }
  
  like(id) {
    this.scores[id] += 1;
  }

  dislike(id) {
    this.scores[id] -= 1;
  }

  get_best_works(count) {
    return Object
      .keys(this.scores)
      .sort((a, b) => this.scores[b] - this.scores[a])
      .slice(0, count);
  }
}

/**
 * Реализация 2 - ведем статистику сразу.
 */
class Competition2 {
  constructor(participant_count) {
    this.scores = {};
    this.orderedWorks = [];
    for (let i = 0; i < participant_count; i++) {
      this.scores[i] = 0;
      this.orderedWorks.push(i);
    }
  }

  change_score(id, delta) {
    this.scores[id] += delta;
    this.orderedWorks.splice(this.orderedWorks.findIndex(i => i === id), 1);
    this.orderedWorks.splice(this.orderedWorks.findIndex(i => this.scores[i] <= this.scores[id]), 0, id);
  }
  
  like(id) {
    this.change_score(id, 1);
  }

  dislike(id) {
    this.change_score(id, -1);
  }

  get_best_works(count) {
    return this.orderedWorks.slice(0, count);
  }
}

/**
 * Раннер конкурса с помощью выбранной реализации
 */
const run = (className) => {
  // Онлайн-конкурс с тремя работами
  const instance = new className(3);
  
  // Лайки и дислайки для первой работы 
  instance.like(0);
  instance.like(0);
  instance.dislike(0);
  instance.dislike(0);
  instance.dislike(0);
  instance.dislike(0);
  instance.like(0);
  
  // Лайки и дислайки для второй работы 
  instance.like(1);
  instance.like(1);
  
  // Лайки и дислайки для третьей работы 
  instance.like(2);
  
  // Вывод состояния
  console.log(JSON.stringify(instance.scores));
  
  // Вывод лучших работ
  console.log(instance.get_best_works(3))
}

// run(Competition1);
// run(Competition2);


const map = new Map();
map.set('a', 1);
map.delete('a');
