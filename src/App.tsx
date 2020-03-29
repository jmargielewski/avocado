import React from 'react';

interface Props {
  name: string;
}

const App = (props: Props): JSX.Element => {
  const jsx = (
    <div>
      <h1>{props.name}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis repudiandae distinctio,
      natus libero ex! Doloribus est dolorem ratione perferendis, illum, ab a odio officiis commodi
      voluptatem maiores ex vel?
    </div>
  );
  return jsx;
};

export default App;
