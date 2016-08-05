(function() {

    angular.module('starter').factory('BirthdayService', ['$q', BirthdayService]);

    function BirthdayService($q) {
        var _db;
        var _birthdays;

        return {
            initDB: initDB,
            emptyDB: emptyDB,
            getAllBirthdays: getAllBirthdays,
            addBirthday: addBirthday,
            updateBirthday: updateBirthday,
            deleteBirthday: deleteBirthday,
            addRandomBirthdays: addRandomBirthdays
        };

        function initDB() {
            // Creates the database or opens if it already exists
            _db = new PouchDB('stapps', {adapter: 'websql'});
            _db.info().then(console.log.bind(console));
        };

        function emptyDB() {
          return $q.when(_db.destroy().then(function () {
            _db = new PouchDB('stapps', {adapter: 'websql'});
            return _db;
          }));
        };

        function addBirthday(birthday) {
            // birthday._id = Date.now();
            return $q.when(_db.put(birthday));
        };

        function addRandomBirthdays(n) {
          var promises = [];
          var types =  ['favorite', 'event'];
          var type = 'event';
          var i;

          var addRandomBirthday = function(birthday) {
            return $q.when(addBirthday(birthday));
          }

          for (i=1; i<=n; i++) {
            type = types[Math.floor(Math.random() * types.length)];
            promises.push(addRandomBirthday(generateRandomItem(type)));
          }
          return $q.all(promises);
        };

        function updateBirthday(birthday) {
            return $q.when(_db.put(birthday));
        };

        function deleteBirthday(birthday) {
            return $q.when(_db.remove(birthday));
        };

        function getAllBirthdays() {
                return $q.when(_db.allDocs({ include_docs: true}))
                          .then(function(docs) {

                            // Each row has a .doc object and we just want to send an
                            // array of birthday objects back to the calling controller,
                            // so let's map the array to contain just the .doc objects.
                            _birthdays = docs.rows.map(function(row) {
                                // Dates are not automatically converted from a string.
                                // row.doc.Date = new Date(row.doc.Date);
                                return row.doc;
                            });

                            // Listen for changes on the database.
                            // _db.changes({ live: true, since: 'now', include_docs: true})
                            //    .on('change', onDatabaseChange);
                            console.log(_birthdays);
                           return _birthdays;
                         });
        };

        function onDatabaseChange(change) {
            var index = findIndex(_birthdays, change.id);
            var birthday = _birthdays[index];

            if (change.deleted) {
                if (birthday) {
                    _birthdays.splice(index, 1); // delete
                }
            } else {
                if (birthday && birthday._id === change.id) {
                    _birthdays[index] = change.doc; // update
                } else {
                    _birthdays.splice(index, 0, change.doc) // insert
                }
            }
        }

        function findIndex(array, id) {
          var low = 0, high = array.length, mid;
          while (low < high) {
            mid = (low + high) >>> 1;
            array[mid]._id < id ? low = mid + 1 : high = mid
          }
          return low;
        }

        function generateRandomItem (type) {
          var generatedItem = null;
            switch(type) {
              case 'favorite':
                generatedItem = angular.copy(STAPPS_SAMPLE_FAVORITE);
                break;
              case 'event':
                generatedItem = angular.copy(STAPPS_SAMPLE_EVENT);
                break;
              default:
                generatedItem = angular.copy(STAPPS_SAMPLE_EVENT);
            }
            generatedItem['_id'] = generatedItem['_id'] + '-' + generateUUID();
          return generatedItem;
        }

        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
            });
            return uuid;
        };
    }
})();
