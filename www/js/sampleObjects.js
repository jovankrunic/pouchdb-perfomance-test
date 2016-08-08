var STAPPS_SAMPLE_FAVORITE = {
    "_id": "favorite",
    "name": "TU-Mensa",
    "data": {
      "geo": {
        "point": {
          "type": "Point",
          "coordinates": [
            13.32612,
            52.50978
          ]
        },
        "latitude": 52.50978,
        "longitude": 13.32612
      },
      "type": "Place",
      "subType": "FoodEstablishment",
      "name": "TU-Mensa",
      "alternateName": "MensaHardenberg",
      "uid": "MensaHardenberg",
      "address": {
        "addressCountry": "Germany",
        "addressLocality": "Berlin",
        "addressRegion": "Berlin",
        "postalCode": "10623",
        "streetAddress": "Hardenbergstraße 34"
      },
      "module": "place",
      "contextual": true,
      "typeTranslations": {
        "de": "Ort"
      },
      "subTypeTranslations": {
        "de": {
          "UniversityRoom": "Uni-Raum",
          "UniversityBuilding": "Uni-Gebäude",
          "RestRoom": "Toilette",
          "LearningRoom": "Lernraum",
          "FoodEstablishment": "Restaurant/Cafeteria",
          "UniversityLibrary": "Uni-Bibliothek"
        }
      },
      "fieldTranslations": {
        "de": {
          "uid": "ID",
          "name": "Name",
          "type": "Typ",
          "subType": "Art",
          "category": "Kategorie",
          "relevance": "Relevanz",
          "distance:geo.point.coordinates": "Entfernung",
          "subProperties.majors": "Studiengang"
        }
      },
      "fieldValueTranslations": {
        "de": {}
      },
      "updateInterval": 5000,
      "distance": 0,
      "printableDistance": "0m",
      "degree": 0,
      "opened": false,
      "closing": false,
      "closingInterval": 1800000,
      "opens": null,
      "closes": null,
      "openedToday": false,
      "school": "b-tu"
    },
    "created": "2016-07-29T09:47:51.209Z",
    "module": "favorite",
    "contextual": false,
    "typeTranslations": {
      "de": "Ding"
    },
    "subTypeTranslations": {
      "de": {
        "UniversityRoom": "Uni-Raum",
        "UniversityBuilding": "Uni-Gebäude",
        "RestRoom": "Toilette",
        "LearningRoom": "Lernraum",
        "FoodEstablishment": "Restaurant/Cafeteria",
        "UniversityLibrary": "Uni-Bibliothek"
      }
    },
    "fieldTranslations": {
      "de": {
        "uid": "ID",
        "name": "Name",
        "type": "Typ",
        "subType": "Art",
        "category": "Kategorie",
        "relevance": "Relevanz",
        "distance:geo.point.coordinates": "Entfernung",
        "subProperties.majors": "Studiengang"
      }
    },
    "fieldValueTranslations": {
      "de": {}
    },
    "type": "Favorite"
  };

  var STAPPS_SAMPLE_EVENT = {
    "type": "Date",
    "_id": "event",
    "name": "Prozessmodelle der Bauinformatik",
    "startDate": "2016-04-20T00:00:00.000Z",
    "endDate": "2016-07-20T00:00:00.000Z",
    "startTime": "12:00",
    "endTime": "14:00",
    "dayOfWeek": "wednesday",
    "duration": "PT2H",
    "frequency": "weekly",
    "frequencyMultiplier": 1,
    "dates": [
      "2016-04-20T12:00:00+00:00",
      "2016-04-27T12:00:00+00:00",
      "2016-05-04T12:00:00+00:00",
      "2016-05-11T12:00:00+00:00",
      "2016-05-18T12:00:00+00:00",
      "2016-05-25T12:00:00+00:00",
      "2016-06-01T12:00:00+00:00",
      "2016-06-08T12:00:00+00:00",
      "2016-06-15T12:00:00+00:00",
      "2016-06-22T12:00:00+00:00",
      "2016-06-29T12:00:00+00:00",
      "2016-07-06T12:00:00+00:00",
      "2016-07-13T12:00:00+00:00",
      "2016-07-20T12:00:00+00:00"
    ],
    "superEvent": {
      "type": "Event",
      "subType": "AcademicCourse",
      "uid": "179568",
      "name": "Prozessmodelle der Bauinformatik",
      "category": "Vorlesung",
      "url": "http://www.bauinformatik.tu-berlin.de/menue/aktuelles/",
      "performer": [
        {
          "type": "Person",
          "uid": "3455",
          "givenName": "Wolfgang",
          "familyName": "Huhnt",
          "gender": "male",
          "honorificPrefix": "Prof. Dr.",
          "name": "Wolfgang Huhnt",
          "module": "person",
          "contextual": false,
          "typeTranslations": {
            "de": "Person"
          },
          "subTypeTranslations": {
            "de": {
              "UniversityRoom": "Uni-Raum",
              "UniversityBuilding": "Uni-Gebäude",
              "RestRoom": "Toilette",
              "LearningRoom": "Lernraum",
              "FoodEstablishment": "Restaurant/Cafeteria",
              "UniversityLibrary": "Uni-Bibliothek"
            }
          },
          "fieldTranslations": {
            "de": {
              "uid": "ID",
              "name": "Name",
              "type": "Typ",
              "subType": "Art",
              "category": "Kategorie",
              "relevance": "Relevanz",
              "distance:geo.point.coordinates": "Entfernung",
              "subProperties.majors": "Studiengang"
            }
          },
          "fieldValueTranslations": {
            "de": {}
          }
        }
      ],
      "subProperties": {
        "semester": "SS 2016",
        "majors": [
          "Bauingenieurwesen MSc"
        ],
        "id": "06311100 L 31"
      },
      "startDate": "2016-04-20T00:00:00.000Z",
      "endDate": "2016-07-20T00:00:00.000Z",
      "module": "event",
      "contextual": false,
      "typeTranslations": {
        "de": "Veranstaltung"
      },
      "subTypeTranslations": {
        "de": {
          "AcademicCourse": "Kurs"
        }
      },
      "fieldTranslations": {
        "de": {
          "uid": "ID",
          "name": "Name",
          "type": "Typ",
          "subType": "Art",
          "category": "Kategorie",
          "relevance": "Relevanz",
          "distance:geo.point.coordinates": "Entfernung",
          "subProperties.majors": "Studiengang"
        }
      },
      "fieldValueTranslations": {
        "de": {}
      }
    },
    "module": "event",
    "contextual": true,
    "typeTranslations": {
      "de": "Termin"
    },
    "subTypeTranslations": {
      "de": {
        "UniversityRoom": "Uni-Raum",
        "UniversityBuilding": "Uni-Gebäude",
        "RestRoom": "Toilette",
        "LearningRoom": "Lernraum",
        "FoodEstablishment": "Restaurant/Cafeteria",
        "UniversityLibrary": "Uni-Bibliothek"
      }
    },
    "fieldTranslations": {
      "de": {
        "subType": "Typ"
      }
    },
    "fieldValueTranslations": {
      "de": {}
    },
    "dayToNumber": {
      "monday": 0,
      "tuesday": 1,
      "wednesday": 2,
      "thursday": 3,
      "friday": 4,
      "saturday": 5,
      "sunday": 6
    },
    "weekdayTranslations": {
      "monday": "Montag",
      "tuesday": "Dienstag",
      "wednesday": "Mittwoch",
      "thursday": "Donnerstag",
      "friday": "Freitag",
      "saturday": "Samstag",
      "sunday": "Sonntag"
    },
    "dayOfWeekNumber": 2,
    "school": "b-tu"
  };
