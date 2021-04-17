import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';

import Content from 'components/Content';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Page from 'components/Page';

function MainPage() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 },
  });
  const words = lorem.generateParagraphs(100);

  return (
    <Page>
      <Header />
      <Content>
        <p>Демонстрация концепции работы с провайдерами данных</p>
        <p>{words}</p>
      </Content>
      <Menu />
    </Page>
  );
}

export default MainPage;
