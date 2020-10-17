/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { Modal } from 'react-responsive-modal';
import { colors } from '../constants/styles';
import 'react-responsive-modal/styles.css';

const AddStudent = ({ open, setOpen, addStudents }) => {
  const [names, setNames] = useState('');

  const textInputCss = css`
    display: block;
    margin-bottom: 1rem;
    border: 2px solid black;
    border-radius: 3px;
    height: 10rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    outline: none;
    box-sizing: border-box;
    width: 100%;

    &:focus {
      border: 2px solid ${colors.tertiary};
    }
  `;

  const submitBtnCss = css`
    display: block;
    background-color: white;
    border: 2px solid black;
    color: black;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    float: right;
    outline: none;

    &:hover,
    &:focus {
      cursor: pointer;
      color: white;
      background-color: black;
      box-shadow: 0 5px 5px lightgrey;
      transition: all 0.2s ease-in-out;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(2px);
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameList = names.split(/[\n,]/);
    addStudents(nameList);
    setNames(''); // Empty the data in the list
    setOpen(false); // Close modal
  };

  return (
    <Modal
      styles={{
        modal: { minWidth: '40%', minHeight: '40%', borderRadius: '5px' },
      }}
      open={open}
      onClose={() => setOpen(false)}
      center
    >
      <h2>Add Students</h2>
      <div>
        <p>
          You can add multiple students at once by putting each name on a new
          line.
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            name="students"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            rows="4"
            cols="60"
            css={textInputCss}
            id="student-names-input"
          />
          <input css={submitBtnCss} type="submit" value="Add" />
        </form>
      </div>
    </Modal>
  );
};

export default AddStudent;
