'use strict';


import {
    popUpCall,
    blockButton
} from './modules/popUpCall';
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

blockButton();
popUpCall('.popup-call', '.call-btn', '.callBtn', () => resetInput());
popUpCall('.popup-discount', '.discount-btn', '.discountBtn', () => resetInput());
popUpCall('.popup-check', '.check-btn', '.checkBtn', () => resetInput());
popUpCall('.popup-consultation', '.consultation-btn', '.consultationBtn', () => resetInput());
calc();
sendForm('.section-form .capture-form', () => resetInput());
sendForm('main .main-form', () => resetInput());
sendForm('.popup-call .capture-form', () => resetInput());
sendForm('.popup-discount .capture-form', () => resetInput(), result);
sendForm('.popup-check .capture-form', () => resetInput());
sendForm('.popup-consultation .capture-form', () => resetInput());
btnMore();
AccardionBlock(".panelElement", ".collapseElement", ".slideInDown");
AccardionBlock(".calc-heading", ".calc-content", ".calc-container");
AccardionBlock(".btn-step", ".btn-content", ".calc-container");