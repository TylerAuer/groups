import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';
import { awaitingSaveConfirmationAtom } from '../recoil/atoms';
import {
  saveSectionPrimaryKeySelector,
  saveDataSelector,
} from '../recoil/selectors/save';
import debounce from 'lodash.debounce';

const useSaveSection = () => {
  const key = useRecoilValue(saveSectionPrimaryKeySelector);
  const data = useRecoilValue(saveDataSelector);

  const setAwaitingConfirmation = useSetRecoilState(
    awaitingSaveConfirmationAtom
  );

  const saveRequest = async () => {
    setAwaitingConfirmation(true);

    fetch(`/data/section/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const saveSection = useRef(debounce(() => saveRequest(), 2000)).current;

  ////////////////////
  // IDEA
  //
  // The purpose of this hook is to return a function that will make an API call
  // that saves users data. I want to implement throttling or debouncing so
  // that the requests arrive in order, since I am overwriting all of the data
  //
  // Ideally this hook would return a function that could be called anywhere in
  // my app where I want to trigger a save call to the API
  //
  // What I think is happening: the debounce function is being created and
  // is enclosing the current value of data. Data is changing though, and that's
  // what should be send in the request.
  //
  // Why useRef --> without useRef the debounce function is regenerated whenever
  // the state changes, so when it is called again, it references a different
  // debounce function and that function is called (so no debouncing happens)
  //
  // SOLUTIONS I CAN THINK OF THAT ARE ANNOYING
  //
  // 1. Add a save idx to the data. On the backend, be sure any received data
  // has a higher save idx than is currently in the DB. This will deal with data
  // received out of order
  //
  // 2. On the front end, pass the data as a parameter in the saveSection
  // function. This should fix any closure issues. But, won't really address any
  // request-out-of-order issues

  return saveSection;
};

export default useSaveSection;
