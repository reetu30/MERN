const testSchema = new mongoose.Schema({
    name: String,
    testField: String
  });
  
  const TestModel = mongoose.model('Test', testSchema);
  
  const testData = new TestModel({
    name: 'Node-Mongo Connection Test',
    testField: 'It works!'
  });
  
  testData.save()
    .then(doc => {
      console.log('Test document saved:', doc);
    })
    .catch(error => {
      console.error('Error saving test document:', error);
    });