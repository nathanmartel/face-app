import { useSelector } from 'react-redux';
import { getCoffee, getSnacks, getNaps, getStudies } from '../selectors/selectors';

const useFace = () => { 

  const coffee = useSelector(getCoffee);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  const isTired = coffee < 1 && naps < 1;
  const isHyper = coffee > 3;
  const isEducated = studies > 2;
  const isHungry = snacks < 1;

  if(isTired && isHungry) return '🤬';
  if(isHyper && isHungry) return '🤮';
  if(isTired) return '😴';
  if(isHyper) return '🙀';
  if(isEducated) return '🤯';
  if(isHungry) return '😡';

  return '😀';
};

export default useFace;
