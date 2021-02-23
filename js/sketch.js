'use strict'

let currentAbv;
let targetAbv;
let transferVol;

let dilution;
let finalYield;
let waterAddition;

let currentDiv = document.getElementById( "current" );
let targetDiv = document.getElementById( "target" );
let volumeDiv = document.getElementById( "volume" );

let dilutionText;
let finialResults;
let addText;

function setup() {

    dilutionText = createElement( "h3",'' );
    dilutionText.parent( document.getElementById( "dilution" ) );
    finialResults = createElement( "h3", '' );
    finialResults.parent( document.getElementById( "dilution" ) );
    addText = createElement( "h3", '' );
    addText.parent( document.getElementById( "dilution" ) );

}

function draw() {

}

function currAbvInputEvent( v ) {

    if ( !isNaN( v ) ) {

        currentAbv = v;

        if ( !isNaN( targetAbv ) && !( targetAbv === 0 ) ) {

            dilution = getDilutionFactor( currentAbv, targetAbv );
            displayDilution();

            console.log( "dilution factor:: " + dilution );

            transferVolInputEvent( transferVol );
        }

    }

}

function targetAbvInputEvent( v ) {

    if ( !isNaN( v ) ) {

        targetAbv = v;

        if ( !isNaN( currentAbv ) ) {

            dilution = getDilutionFactor( currentAbv, targetAbv );
            displayDilution();

            transferVolInputEvent( transferVol );

        }
    }
}

function transferVolInputEvent( v ) {

    if ( !isNaN( v ) ) {

        transferVol = v;

        if ( !isNaN( dilution ) ) {

            finalYield = getTotalVolume( transferVol, dilution );
            waterAddition = finalYield - transferVol;

            displayResult();

        }

        console.log( "final Yield:: " + finalYield );
        console.log( "water addition:: " + waterAddition );

    }

}

let displayDilution = () => {

    dilutionText.html( "Dilution Factor is " + dilution.toFixed( 2 ) );

}

let displayResult = () => {

    finialResults.html( "Your final volume will be " + finalYield.toFixed(2) + "bbl.");
    addText.html( "You should add " + waterAddition.toFixed(2) +"bbl of water.\n Good work!");
}

let getDilutionFactor = ( c, t ) => c / t;
let getTotalVolume = ( tv, d ) => tv * d;
