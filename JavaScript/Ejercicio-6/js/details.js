import { getBreedDetails } from './api.js';
import { displayBreedDetails } from './ui.js';

const breedId = new URLSearchParams(window.location.search).get('id');
console.log(getBreedDetails(breedId));
console.log(breedId);
window.addEventListener('DOMContentLoaded', () => displayBreedDetails(getBreedDetails(breedId)));