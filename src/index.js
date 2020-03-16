'use strict';


import popUpCall from './modules/popUpCall';
import btnMore from './modules/btnMore';
import AccardionBlock from './modules/widthBlockAcardeon';
import {
    sendForm,
    resetInput
} from './modules/sendForm';
import {
    calc,
    result
} from './modules/calcAccardion';


popUpCall('.popup-call', '.call-btn', '.callBtn', () => resetInput());
popUpCall('.popup-discount', '.discount-btn', '.discountBtn', () => resetInput());
popUpCall('.popup-check', '.check-btn', '.checkBtn', () => resetInput());
popUpCall('.popup-consultation', '.consultation-btn', '.consultationBtn', () => resetInput());
calc();
sendForm('.popup-call .capture-form', result);
sendForm('.section-form .capture-form');
sendForm('.popup-discount .capture-form');
sendForm('.popup-check .capture-form');
sendForm('.popup-consultation .capture-form');
sendForm('.main-form');
btnMore();
AccardionBlock(".panelElement", ".collapseElement", ".slideInDown");
AccardionBlock(".calc-heading", ".calc-content", ".calc-container");
AccardionBlock(".btn-step", ".btn-content", ".calc-container");