import { moduleForModel, test } from 'ember-qunit';

moduleForModel('kerkdienst-gemist', 'Unit | Serializer | kerkdienst gemist', {
  // Specify the other units that are required for this test.
  needs: ['serializer:kerkdienst-gemist']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
