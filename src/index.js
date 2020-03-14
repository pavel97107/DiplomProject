'use strict';

import popUpCall from './modules/popUpCall';
import sendForm from './modules/sendForm';
import btnMore from './modules/btnMore';
import AccardionBlock from './modules/widthBlockAcardeon';
import calc from './modules/calcAccardion';


popUpCall('.popup-call', '.call-btn', '.callBtn');
popUpCall('.popup-discount', '.discount-btn', '.discountBtn');
popUpCall('.popup-check', '.check-btn', '.checkBtn');
popUpCall('.popup-consultation', '.consultation-btn', '.consultationBtn');
sendForm('.popup-call .capture-form');
sendForm('.section-form .capture-form');
sendForm('.popup-discount .capture-form');
sendForm('.popup-check .capture-form');
sendForm('.popup-consultation .capture-form');
sendForm('.main-form');
btnMore();
AccardionBlock(".panelElement", ".collapseElement", ".slideInDown");
AccardionBlock(".calc-heading", ".calc-content", ".calc-container");
calc();