var express = require('express');
var app = express();

var PORT = process.env.PORT || 5000;

app.get('/', function(request, response) {
  response.send('hello world');

  var qpx = require('./gapi');
  var data = qpx.parseResponseData({
     "kind": "qpxExpress#tripsSearch",
     "trips": {
      "kind": "qpxexpress#tripOptions",
      "requestId": "OzP22zMlxDPPqfe3C0NVUD",
      "data": {
       "kind": "qpxexpress#data",
       "airport": [
        {
         "kind": "qpxexpress#airportData",
         "code": "ORD",
         "city": "CHI",
         "name": "Chicago O'Hare"
        },
        {
         "kind": "qpxexpress#airportData",
         "code": "SFO",
         "city": "SFO",
         "name": "San Francisco International"
        },
        {
         "kind": "qpxexpress#airportData",
         "code": "YYZ",
         "city": "YTO",
         "name": "Toronto Lester B Pearson"
        }
       ],
       "city": [
        {
         "kind": "qpxexpress#cityData",
         "code": "CHI",
         "name": "Chicago"
        },
        {
         "kind": "qpxexpress#cityData",
         "code": "SFO",
         "name": "San Francisco"
        },
        {
         "kind": "qpxexpress#cityData",
         "code": "YTO",
         "name": "Toronto"
        }
       ],
       "aircraft": [
        {
         "kind": "qpxexpress#aircraftData",
         "code": "320",
         "name": "Airbus A320"
        },
        {
         "kind": "qpxexpress#aircraftData",
         "code": "321",
         "name": "Airbus A321"
        },
        {
         "kind": "qpxexpress#aircraftData",
         "code": "739",
         "name": "Boeing 737"
        },
        {
         "kind": "qpxexpress#aircraftData",
         "code": "763",
         "name": "Boeing 767"
        },
        {
         "kind": "qpxexpress#aircraftData",
         "code": "E75",
         "name": "Embraer RJ-175"
        }
       ],
       "tax": [
        {
         "kind": "qpxexpress#taxData",
         "id": "XY",
         "name": "US Immigration Fee"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "RC",
         "name": "Canadian Harmonized Sales Tax (ON)"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "ZP",
         "name": "US Flight Segment Tax"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "AY_001",
         "name": "US September 11th Security Fee"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "US_001",
         "name": "US Transportation Tax"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "XA",
         "name": "USDA APHIS Fee"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "YC",
         "name": "US Customs Fee"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "XF",
         "name": "US Passenger Facility Charge"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "SQ",
         "name": "Toronto Airport Improvement Fee"
        },
        {
         "kind": "qpxexpress#taxData",
         "id": "CA",
         "name": "Canadian Air Travelers Security Charge"
        }
       ],
       "carrier": [
        {
         "kind": "qpxexpress#carrierData",
         "code": "AC",
         "name": "Air Canada"
        }
       ]
      },
      "tripOption": [
       {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD529.64",
        "id": "O4cQ8IIK3GILZYzVf6LfgN004",
        "slice": [
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 295,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 295,
            "flight": {
             "carrier": "AC",
             "number": "754"
            },
            "id": "GMFv41DaRxl3iESB",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "0",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LejtonLn5-ZIHSCj",
              "aircraft": "320",
              "arrivalTime": "2016-02-03T05:55-05:00",
              "departureTime": "2016-02-02T22:00-08:00",
              "origin": "SFO",
              "destination": "YYZ",
              "originTerminal": "I",
              "destinationTerminal": "1",
              "duration": 295,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         },
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 354,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 354,
            "flight": {
             "carrier": "AC",
             "number": "759"
            },
            "id": "G-0LPsDe5qku2A-M",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "1",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LSlFv2ROMKrtWpn0",
              "aircraft": "320",
              "arrivalTime": "2016-02-05T23:09-08:00",
              "departureTime": "2016-02-05T20:15-05:00",
              "origin": "YYZ",
              "destination": "SFO",
              "originTerminal": "1",
              "destinationTerminal": "I",
              "duration": 354,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         }
        ],
        "pricing": [
         {
          "kind": "qpxexpress#pricingInfo",
          "fare": [
           {
            "kind": "qpxexpress#fareInfo",
            "id": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "carrier": "AC",
            "origin": "SFO",
            "destination": "YTO",
            "basisCode": "T21X1TG"
           },
           {
            "kind": "qpxexpress#fareInfo",
            "id": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "carrier": "AC",
            "origin": "YTO",
            "destination": "SFO",
            "basisCode": "T21S1TG"
           }
          ],
          "segmentPricing": [
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "segmentId": "GMFv41DaRxl3iESB"
           },
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "segmentId": "G-0LPsDe5qku2A-M"
           }
          ],
          "baseFareTotal": "USD433.00",
          "saleFareTotal": "USD433.00",
          "saleTaxTotal": "USD96.64",
          "saleTotal": "USD529.64",
          "passengers": {
           "kind": "qpxexpress#passengerCounts",
           "adultCount": 1
          },
          "tax": [
           {
            "kind": "qpxexpress#taxInfo",
            "id": "US_001",
            "chargeType": "GOVERNMENT",
            "code": "US",
            "country": "US",
            "salePrice": "USD32.48"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "AY_001",
            "chargeType": "GOVERNMENT",
            "code": "AY",
            "country": "US",
            "salePrice": "USD5.60"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XF",
            "chargeType": "GOVERNMENT",
            "code": "XF",
            "country": "US",
            "salePrice": "USD4.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "ZP",
            "chargeType": "GOVERNMENT",
            "code": "ZP",
            "country": "US",
            "salePrice": "USD8.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XA",
            "chargeType": "GOVERNMENT",
            "code": "XA",
            "country": "US",
            "salePrice": "USD3.96"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XY",
            "chargeType": "GOVERNMENT",
            "code": "XY",
            "country": "US",
            "salePrice": "USD7.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "YC",
            "chargeType": "GOVERNMENT",
            "code": "YC",
            "country": "US",
            "salePrice": "USD5.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "SQ",
            "chargeType": "GOVERNMENT",
            "code": "SQ",
            "country": "CA",
            "salePrice": "USD18.10"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "RC",
            "chargeType": "GOVERNMENT",
            "code": "RC",
            "country": "CA",
            "salePrice": "USD2.30"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "CA",
            "chargeType": "GOVERNMENT",
            "code": "CA",
            "country": "CA",
            "salePrice": "USD9.20"
           }
          ],
          "fareCalculation": "SFO AC YTO Q7.50 199.00T21X1TG AC SFO Q7.50 219.00T21S1TG USD 433.00 END ZP SFO YYZ XT 5.50YC 7.00XY 3.96XA 32.48US 8.00ZP 5.60AY 9.20CA 2.30RC 18.10SQ 4.50XF SFO4.50",
          "latestTicketingTime": "2015-12-30T12:21-05:00",
          "ptc": "ADT"
         }
        ]
       },
       {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD529.64",
        "id": "O4cQ8IIK3GILZYzVf6LfgN003",
        "slice": [
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 295,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 295,
            "flight": {
             "carrier": "AC",
             "number": "758"
            },
            "id": "GCYGy7NHMF57-iwj",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "0",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LOeFgid2ZkAhAuKv",
              "aircraft": "320",
              "arrivalTime": "2016-02-02T15:25-05:00",
              "departureTime": "2016-02-02T07:30-08:00",
              "origin": "SFO",
              "destination": "YYZ",
              "originTerminal": "I",
              "destinationTerminal": "1",
              "duration": 295,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         },
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 354,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 354,
            "flight": {
             "carrier": "AC",
             "number": "759"
            },
            "id": "G-0LPsDe5qku2A-M",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "1",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LSlFv2ROMKrtWpn0",
              "aircraft": "320",
              "arrivalTime": "2016-02-05T23:09-08:00",
              "departureTime": "2016-02-05T20:15-05:00",
              "origin": "YYZ",
              "destination": "SFO",
              "originTerminal": "1",
              "destinationTerminal": "I",
              "duration": 354,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         }
        ],
        "pricing": [
         {
          "kind": "qpxexpress#pricingInfo",
          "fare": [
           {
            "kind": "qpxexpress#fareInfo",
            "id": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "carrier": "AC",
            "origin": "SFO",
            "destination": "YTO",
            "basisCode": "T21X1TG"
           },
           {
            "kind": "qpxexpress#fareInfo",
            "id": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "carrier": "AC",
            "origin": "YTO",
            "destination": "SFO",
            "basisCode": "T21S1TG"
           }
          ],
          "segmentPricing": [
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "segmentId": "GCYGy7NHMF57-iwj"
           },
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "segmentId": "G-0LPsDe5qku2A-M"
           }
          ],
          "baseFareTotal": "USD433.00",
          "saleFareTotal": "USD433.00",
          "saleTaxTotal": "USD96.64",
          "saleTotal": "USD529.64",
          "passengers": {
           "kind": "qpxexpress#passengerCounts",
           "adultCount": 1
          },
          "tax": [
           {
            "kind": "qpxexpress#taxInfo",
            "id": "US_001",
            "chargeType": "GOVERNMENT",
            "code": "US",
            "country": "US",
            "salePrice": "USD32.48"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "AY_001",
            "chargeType": "GOVERNMENT",
            "code": "AY",
            "country": "US",
            "salePrice": "USD5.60"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XF",
            "chargeType": "GOVERNMENT",
            "code": "XF",
            "country": "US",
            "salePrice": "USD4.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "ZP",
            "chargeType": "GOVERNMENT",
            "code": "ZP",
            "country": "US",
            "salePrice": "USD8.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XA",
            "chargeType": "GOVERNMENT",
            "code": "XA",
            "country": "US",
            "salePrice": "USD3.96"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XY",
            "chargeType": "GOVERNMENT",
            "code": "XY",
            "country": "US",
            "salePrice": "USD7.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "YC",
            "chargeType": "GOVERNMENT",
            "code": "YC",
            "country": "US",
            "salePrice": "USD5.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "SQ",
            "chargeType": "GOVERNMENT",
            "code": "SQ",
            "country": "CA",
            "salePrice": "USD18.10"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "RC",
            "chargeType": "GOVERNMENT",
            "code": "RC",
            "country": "CA",
            "salePrice": "USD2.30"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "CA",
            "chargeType": "GOVERNMENT",
            "code": "CA",
            "country": "CA",
            "salePrice": "USD9.20"
           }
          ],
          "fareCalculation": "SFO AC YTO Q7.50 199.00T21X1TG AC SFO Q7.50 219.00T21S1TG USD 433.00 END ZP SFO YYZ XT 5.50YC 7.00XY 3.96XA 32.48US 8.00ZP 5.60AY 9.20CA 2.30RC 18.10SQ 4.50XF SFO4.50",
          "latestTicketingTime": "2015-12-30T12:21-05:00",
          "ptc": "ADT"
         }
        ]
       },
       {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD529.64",
        "id": "O4cQ8IIK3GILZYzVf6LfgN002",
        "slice": [
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 295,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 295,
            "flight": {
             "carrier": "AC",
             "number": "738"
            },
            "id": "Gxo7+mi5EQmwWsWg",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "0",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LTw8k9vZ-GhFphQB",
              "aircraft": "321",
              "arrivalTime": "2016-02-02T19:45-05:00",
              "departureTime": "2016-02-02T11:50-08:00",
              "origin": "SFO",
              "destination": "YYZ",
              "originTerminal": "I",
              "destinationTerminal": "1",
              "duration": 295,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         },
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 354,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 354,
            "flight": {
             "carrier": "AC",
             "number": "759"
            },
            "id": "G-0LPsDe5qku2A-M",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "1",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LSlFv2ROMKrtWpn0",
              "aircraft": "320",
              "arrivalTime": "2016-02-05T23:09-08:00",
              "departureTime": "2016-02-05T20:15-05:00",
              "origin": "YYZ",
              "destination": "SFO",
              "originTerminal": "1",
              "destinationTerminal": "I",
              "duration": 354,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         }
        ],
        "pricing": [
         {
          "kind": "qpxexpress#pricingInfo",
          "fare": [
           {
            "kind": "qpxexpress#fareInfo",
            "id": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "carrier": "AC",
            "origin": "SFO",
            "destination": "YTO",
            "basisCode": "T21X1TG"
           },
           {
            "kind": "qpxexpress#fareInfo",
            "id": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "carrier": "AC",
            "origin": "YTO",
            "destination": "SFO",
            "basisCode": "T21S1TG"
           }
          ],
          "segmentPricing": [
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "segmentId": "Gxo7+mi5EQmwWsWg"
           },
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "segmentId": "G-0LPsDe5qku2A-M"
           }
          ],
          "baseFareTotal": "USD433.00",
          "saleFareTotal": "USD433.00",
          "saleTaxTotal": "USD96.64",
          "saleTotal": "USD529.64",
          "passengers": {
           "kind": "qpxexpress#passengerCounts",
           "adultCount": 1
          },
          "tax": [
           {
            "kind": "qpxexpress#taxInfo",
            "id": "US_001",
            "chargeType": "GOVERNMENT",
            "code": "US",
            "country": "US",
            "salePrice": "USD32.48"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "AY_001",
            "chargeType": "GOVERNMENT",
            "code": "AY",
            "country": "US",
            "salePrice": "USD5.60"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XF",
            "chargeType": "GOVERNMENT",
            "code": "XF",
            "country": "US",
            "salePrice": "USD4.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "ZP",
            "chargeType": "GOVERNMENT",
            "code": "ZP",
            "country": "US",
            "salePrice": "USD8.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XA",
            "chargeType": "GOVERNMENT",
            "code": "XA",
            "country": "US",
            "salePrice": "USD3.96"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XY",
            "chargeType": "GOVERNMENT",
            "code": "XY",
            "country": "US",
            "salePrice": "USD7.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "YC",
            "chargeType": "GOVERNMENT",
            "code": "YC",
            "country": "US",
            "salePrice": "USD5.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "SQ",
            "chargeType": "GOVERNMENT",
            "code": "SQ",
            "country": "CA",
            "salePrice": "USD18.10"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "RC",
            "chargeType": "GOVERNMENT",
            "code": "RC",
            "country": "CA",
            "salePrice": "USD2.30"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "CA",
            "chargeType": "GOVERNMENT",
            "code": "CA",
            "country": "CA",
            "salePrice": "USD9.20"
           }
          ],
          "fareCalculation": "SFO AC YTO Q7.50 199.00T21X1TG AC SFO Q7.50 219.00T21S1TG USD 433.00 END ZP SFO YYZ XT 5.50YC 7.00XY 3.96XA 32.48US 8.00ZP 5.60AY 9.20CA 2.30RC 18.10SQ 4.50XF SFO4.50",
          "latestTicketingTime": "2015-12-30T12:21-05:00",
          "ptc": "ADT"
         }
        ]
       },
       {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD529.64",
        "id": "O4cQ8IIK3GILZYzVf6LfgN001",
        "slice": [
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 293,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 293,
            "flight": {
             "carrier": "AC",
             "number": "756"
            },
            "id": "GP4MzEoUYZQz5ADy",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "0",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LqsOZ3Cv2kAb6T01",
              "aircraft": "763",
              "arrivalTime": "2016-02-02T21:58-05:00",
              "departureTime": "2016-02-02T14:05-08:00",
              "origin": "SFO",
              "destination": "YYZ",
              "originTerminal": "I",
              "destinationTerminal": "1",
              "duration": 293,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         },
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 354,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 354,
            "flight": {
             "carrier": "AC",
             "number": "759"
            },
            "id": "G-0LPsDe5qku2A-M",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "1",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LSlFv2ROMKrtWpn0",
              "aircraft": "320",
              "arrivalTime": "2016-02-05T23:09-08:00",
              "departureTime": "2016-02-05T20:15-05:00",
              "origin": "YYZ",
              "destination": "SFO",
              "originTerminal": "1",
              "destinationTerminal": "I",
              "duration": 354,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         }
        ],
        "pricing": [
         {
          "kind": "qpxexpress#pricingInfo",
          "fare": [
           {
            "kind": "qpxexpress#fareInfo",
            "id": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "carrier": "AC",
            "origin": "SFO",
            "destination": "YTO",
            "basisCode": "T21X1TG"
           },
           {
            "kind": "qpxexpress#fareInfo",
            "id": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "carrier": "AC",
            "origin": "YTO",
            "destination": "SFO",
            "basisCode": "T21S1TG"
           }
          ],
          "segmentPricing": [
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "segmentId": "GP4MzEoUYZQz5ADy"
           },
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "segmentId": "G-0LPsDe5qku2A-M"
           }
          ],
          "baseFareTotal": "USD433.00",
          "saleFareTotal": "USD433.00",
          "saleTaxTotal": "USD96.64",
          "saleTotal": "USD529.64",
          "passengers": {
           "kind": "qpxexpress#passengerCounts",
           "adultCount": 1
          },
          "tax": [
           {
            "kind": "qpxexpress#taxInfo",
            "id": "US_001",
            "chargeType": "GOVERNMENT",
            "code": "US",
            "country": "US",
            "salePrice": "USD32.48"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "AY_001",
            "chargeType": "GOVERNMENT",
            "code": "AY",
            "country": "US",
            "salePrice": "USD5.60"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XF",
            "chargeType": "GOVERNMENT",
            "code": "XF",
            "country": "US",
            "salePrice": "USD4.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "ZP",
            "chargeType": "GOVERNMENT",
            "code": "ZP",
            "country": "US",
            "salePrice": "USD8.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XA",
            "chargeType": "GOVERNMENT",
            "code": "XA",
            "country": "US",
            "salePrice": "USD3.96"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XY",
            "chargeType": "GOVERNMENT",
            "code": "XY",
            "country": "US",
            "salePrice": "USD7.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "YC",
            "chargeType": "GOVERNMENT",
            "code": "YC",
            "country": "US",
            "salePrice": "USD5.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "SQ",
            "chargeType": "GOVERNMENT",
            "code": "SQ",
            "country": "CA",
            "salePrice": "USD18.10"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "RC",
            "chargeType": "GOVERNMENT",
            "code": "RC",
            "country": "CA",
            "salePrice": "USD2.30"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "CA",
            "chargeType": "GOVERNMENT",
            "code": "CA",
            "country": "CA",
            "salePrice": "USD9.20"
           }
          ],
          "fareCalculation": "SFO AC YTO Q7.50 199.00T21X1TG AC SFO Q7.50 219.00T21S1TG USD 433.00 END ZP SFO YYZ XT 5.50YC 7.00XY 3.96XA 32.48US 8.00ZP 5.60AY 9.20CA 2.30RC 18.10SQ 4.50XF SFO4.50",
          "latestTicketingTime": "2015-12-30T12:21-05:00",
          "ptc": "ADT"
         }
        ]
       },
       {
        "kind": "qpxexpress#tripOption",
        "saleTotal": "USD538.14",
        "id": "O4cQ8IIK3GILZYzVf6LfgN005",
        "slice": [
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 385,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 251,
            "flight": {
             "carrier": "AC",
             "number": "5904"
            },
            "id": "GCz1sMaMk2me0+MS",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "0",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "L4KXD3xANuRB0niG",
              "aircraft": "739",
              "arrivalTime": "2016-02-02T14:59-06:00",
              "departureTime": "2016-02-02T08:48-08:00",
              "origin": "SFO",
              "destination": "ORD",
              "originTerminal": "3",
              "destinationTerminal": "1",
              "duration": 251,
              "operatingDisclosure": "OPERATED BY UNITED",
              "mileage": 1841,
              "secure": true
             }
            ],
            "connectionDuration": 46
           },
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 88,
            "flight": {
             "carrier": "AC",
             "number": "7584"
            },
            "id": "GW-aFFtdTHD+MdEi",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "0",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LeqBomXSA7z9aue+",
              "aircraft": "E75",
              "arrivalTime": "2016-02-02T18:13-05:00",
              "departureTime": "2016-02-02T15:45-06:00",
              "origin": "ORD",
              "destination": "YYZ",
              "originTerminal": "2",
              "destinationTerminal": "1",
              "duration": 88,
              "operatingDisclosure": "OPERATED BY AIR CANADA EXPRESS - SKY REGIONAL",
              "mileage": 434,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         },
         {
          "kind": "qpxexpress#sliceInfo",
          "duration": 354,
          "segment": [
           {
            "kind": "qpxexpress#segmentInfo",
            "duration": 354,
            "flight": {
             "carrier": "AC",
             "number": "759"
            },
            "id": "G-0LPsDe5qku2A-M",
            "cabin": "COACH",
            "bookingCode": "T",
            "bookingCodeCount": 9,
            "marriedSegmentGroup": "1",
            "leg": [
             {
              "kind": "qpxexpress#legInfo",
              "id": "LSlFv2ROMKrtWpn0",
              "aircraft": "320",
              "arrivalTime": "2016-02-05T23:09-08:00",
              "departureTime": "2016-02-05T20:15-05:00",
              "origin": "YYZ",
              "destination": "SFO",
              "originTerminal": "1",
              "destinationTerminal": "I",
              "duration": 354,
              "mileage": 2253,
              "meal": "Food for Purchase",
              "secure": true
             }
            ]
           }
          ]
         }
        ],
        "pricing": [
         {
          "kind": "qpxexpress#pricingInfo",
          "fare": [
           {
            "kind": "qpxexpress#fareInfo",
            "id": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "carrier": "AC",
            "origin": "SFO",
            "destination": "YTO",
            "basisCode": "T21X1TG"
           },
           {
            "kind": "qpxexpress#fareInfo",
            "id": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "carrier": "AC",
            "origin": "YTO",
            "destination": "SFO",
            "basisCode": "T21S1TG"
           }
          ],
          "segmentPricing": [
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "segmentId": "GCz1sMaMk2me0+MS"
           },
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "A2eDVJwmN5pIDBejsVAJ73u6Fr69aqLPo8UUBiKvZKZZGhE",
            "segmentId": "G-0LPsDe5qku2A-M"
           },
           {
            "kind": "qpxexpress#segmentPricing",
            "fareId": "AbmEcZAlJFs0u9elPiFUXd8uH9z58vnbaOxSjlhrmSB+lSE",
            "segmentId": "GW-aFFtdTHD+MdEi"
           }
          ],
          "baseFareTotal": "USD433.00",
          "saleFareTotal": "USD433.00",
          "saleTaxTotal": "USD105.14",
          "saleTotal": "USD538.14",
          "passengers": {
           "kind": "qpxexpress#passengerCounts",
           "adultCount": 1
          },
          "tax": [
           {
            "kind": "qpxexpress#taxInfo",
            "id": "US_001",
            "chargeType": "GOVERNMENT",
            "code": "US",
            "country": "US",
            "salePrice": "USD32.48"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "AY_001",
            "chargeType": "GOVERNMENT",
            "code": "AY",
            "country": "US",
            "salePrice": "USD5.60"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XF",
            "chargeType": "GOVERNMENT",
            "code": "XF",
            "country": "US",
            "salePrice": "USD9.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "ZP",
            "chargeType": "GOVERNMENT",
            "code": "ZP",
            "country": "US",
            "salePrice": "USD12.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XA",
            "chargeType": "GOVERNMENT",
            "code": "XA",
            "country": "US",
            "salePrice": "USD3.96"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "XY",
            "chargeType": "GOVERNMENT",
            "code": "XY",
            "country": "US",
            "salePrice": "USD7.00"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "YC",
            "chargeType": "GOVERNMENT",
            "code": "YC",
            "country": "US",
            "salePrice": "USD5.50"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "SQ",
            "chargeType": "GOVERNMENT",
            "code": "SQ",
            "country": "CA",
            "salePrice": "USD18.10"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "RC",
            "chargeType": "GOVERNMENT",
            "code": "RC",
            "country": "CA",
            "salePrice": "USD2.30"
           },
           {
            "kind": "qpxexpress#taxInfo",
            "id": "CA",
            "chargeType": "GOVERNMENT",
            "code": "CA",
            "country": "CA",
            "salePrice": "USD9.20"
           }
          ],
          "fareCalculation": "SFO AC X/CHI AC YTO Q SFOYTO7.50 199.00T21X1TG AC SFO Q7.50 219.00T21S1TG USD 433.00 END ZP SFO ORD YYZ XT 5.50YC 7.00XY 3.96XA 32.48US 12.00ZP 5.60AY 9.20CA 2.30RC 18.10SQ 9.00XF SFO4.50 ORD4.50",
          "latestTicketingTime": "2015-12-30T12:21-05:00",
          "ptc": "ADT"
         }
        ]
       }
      ]
     }
    }
  );

  var query = {
      "request": {
        "passengers": {
          "adultCount": 1
        },
        "slice": [
          {
            "origin": "SFO",
            "destination": "YYZ",
            "date": "2016-02-02"
          },
          {
            "origin": "YYZ",
            "destination": "SFO",
            "date": "2016-02-05"
          }
        ],
        "solutions": 5
      }
    };

  var sms = require('./sms');

  var smsBody = sms.buildSmsBody(data, query, function(body) {
    console.log(body);
    //sms.sendMessage('+18584618959', body);
  });
});

app.get('/cron/check', function(request, response) {

});

app.post('/flights', function(request, response) {

});

app.listen(PORT, function() {
  console.log('app running');
});