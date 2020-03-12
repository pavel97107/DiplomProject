'use strict';

import popUpCall from './modules/popUpCall';
import sendForm from './modules/sendForm';
import popUpDiscount from './modules/popUpDiscount';


popUpCall();
sendForm('.popup-content .capture-form');
sendForm('.capture-form');
sendForm('.main-form');
popUpDiscount();