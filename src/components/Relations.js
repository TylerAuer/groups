import React from 'react';
import { relationGraph } from '../recoil/relations';
import { useRecoilValue } from 'recoil';

const Relations = () => {
  const relations = useRecoilValue(relationGraph);

  return (
    <section>
      <h2>Relations</h2>
      <div>Show matrix here.</div>
    </section>
  );
};

export default Relations;
