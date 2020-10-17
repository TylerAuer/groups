import React, { useState } from 'react';

const initialState = {
  sections: [
    {
      id: 0,
      name: 'Section Name',
      disallowed_pairings: [],
      students: [],
      // History of groupings
      iterations: [],
    },
  ],
};



const useManageAppState() {
  const [data, setData] = useState(initialState)
  const 


}