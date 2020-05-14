import React, { Component } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useSelector, useDispatch } from 'react-redux';
import { getCoffee, getSnacks, getNaps, getStudies } from '../selectors/selectors';
import { drinkCoffee, takeNap, eatSnack, study } from '../actions/actions';

// export const isTired = state => state.coffees < 1 && state.naps < 1;
// export const isHyper = state => state.coffees > 3;
// export const isEducated = state => state.studies > 2;
// export const isHungry = state => state.snacks < 1;

// export const getFace = state => {
//   if(isTired(state) && isHungry(state)) return '🤬';
//   if(isHyper(state) && isHungry(state)) return '🤮';
//   if(isTired(state)) return '😴';
//   if(isHyper(state)) return '🙀';
//   if(isEducated(state)) return '🤯';
//   if(isHungry(state)) return '😡';

//   return '😀';
// };

export const Moods = () => {

  // const { coffees, snacks, naps, studies } = this.state;
  const dispatch = useDispatch();

  const coffee = useSelector(getCoffee);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  // const face = getFace(this.state);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffee}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      {/* <Face emoji={face} /> */}
    </>
  );
};

export default Moods;
