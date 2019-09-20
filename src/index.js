import './index.css';
import numeral from 'numeral';

const courseValue = numeral(10101).format("$0,0.00");

console.log(`I would pay ${courseValue} for this course`);	// eslint-disable-line no-console
