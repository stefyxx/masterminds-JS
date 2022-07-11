//io recupero dall'api un valore in un obj-> x manipolarlo devo utilizzare Object.value()

import * as chrono from 'chrono-node';

//{periode : {startDatum: '2021-10-23T00:00:00', eindDatum: '2022-06-17T00:00:00'}}

var activePeriod = Object.values(el.periode).map(elem=>new Date(elem));
//opp
var activePeriod1 = (el.periode.startDatum.split('T')[0] !== '1960 - 01 - 01') ? Object.values(el.periode).map(elem => new Date(elem)) : chrono.nl.parseDate(el.omschrijving);