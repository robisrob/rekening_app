var services = angular.module('shareTheBillApp.services', []);

services.factory('BillLoader',
                function(){
                    return [
                        {omschrijving: "Witte wijn", prijs: 3.5, selected: false, totaalSelected: 0, totaalAantal: 2},
                        {omschrijving: "Cava", prijs: 4.7, selected: false, totaalSelected: 0, totaalAantal: 3},
                        {omschrijving: "Martini Wit", prijs: 3.8, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Cristal", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Nordic tonic", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Cola light", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 2},
                        {omschrijving: "GarnaalKroketjes", prijs: 11, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Sla vijgen geit", prijs: 16.5, selected: false, totaalSelected: 0, totaalAantal: 3},
                        {omschrijving: "Kip met pepersaus", prijs: 15.8, selected: false, totaalSelected: 0, totaalAantal: 3},
                        {omschrijving: "Filet Mignon", prijs: 19.5, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Dame blanche", prijs: 6, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Coupe Bosvrucht", prijs: 7.5, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Kaastaart", prijs: 5, selected: false, totaalSelected: 0, totaalAantal: 3},
                        {omschrijving: "Cola", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Fanta", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Espresso", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Ristretto", prijs: 2.2, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Cappuccino", prijs: 2.5, selected: false, totaalSelected: 0, totaalAantal: 1},
                        {omschrijving: "Verse muntthee", prijs: 2.7, selected: false, totaalSelected: 0, totaalAantal: 1},
                    ];
});



