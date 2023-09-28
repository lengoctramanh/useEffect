import React, { Fragment, useEffect, useState } from 'react';
import UpButton from './components/UpButton';
import './Style.css';
const App = () => {
  const handleProgressBar = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.transform = `scale(${scroll},1)`;
    progressBar.style.opacity = `${scroll}`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleProgressBar);
  });

  // window.addEventListener('scroll', () => {
  //   console.log('hello');
  // });
  /**khi scroll xuống thì chữ hello nó tự động tăng lên,và khi scroll
   * nó sẽ thực thi hàm handleProgressBar,nó tự động tính toán pixel
   */

  return (
    <Fragment>
      <div className="App">
        <div id="progressBarContainer">
          <div id="progressBar"></div>
        </div>
        <h2>Progress Bar</h2>
        <div className="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. Contrary to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>
          <p>
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum,Lorem ipsum dolor sit amet, comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
            those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by
            Cicero are also reproduced in their exact original form, accompanied by English verions
            from the 1914 translation by H. Rackham.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed to using Content here, content here, making it look like readable English.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising
            pain was born and I will give you a complete account of the system, and expound the
            actual teachings of the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
            but because those who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful.
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
            because it is pain, but because occasionally circumstances occur in which toil and pain
            can procure him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some advantage from it? But who
            has any right to find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          </p>
        </div>

        <UpButton />
      </div>
    </Fragment>
  );
};

export default App;
