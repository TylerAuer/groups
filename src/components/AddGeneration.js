/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Modal } from 'react-responsive-modal';
// import { colors } from '../constants/styles';
import 'react-responsive-modal/styles.css';

const AddGeneration = ({ open, setOpen }) => {
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

  return (
    <Modal
      styles={{
        modal: { minWidth: '40%', minHeight: '40%', borderRadius: '5px' },
      }}
      open={open}
      onClose={() => setOpen(false)}
      center
    >
      <h2>Generate New Groups</h2>
      <div>
        <form>
          <input id="group-size" type="range" min="2" max="8" />
          <br />
          <input list="handle-uneveness" id="handle-unevenness" />
          <datalist id="handle-uneveness">
            <option value="One larger group" />
            <option value="Multiple groups with 1 more" />
            <option value="One smaller group" />
            <option value="Multiple groups with 1 fewer" />
          </datalist>
          <br />
          <input css={submitBtnCss} type="submit" value="Generate Groups" />
        </form>
      </div>
    </Modal>
  );
};

export default AddGeneration;
