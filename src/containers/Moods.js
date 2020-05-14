import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useSelector, useDispatch } from 'react-redux';
import { getCoffee, getSnacks, getNaps, getStudies } from '../selectors/selectors';
import { drinkCoffee, takeNap, eatSnack, study } from '../actions/actions';
import useFace from '../hooks/useFace';


export const Moods = () => {

  const dispatch = useDispatch();

  const coffee = useSelector(getCoffee);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  const face = useFace();


  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffee}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
