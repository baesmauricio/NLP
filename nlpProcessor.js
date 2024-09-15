const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const { SentimentAnalyzer, TfIdf } = require('natural');
const analyzer = new SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

// Función para tokenizar
function tokenizeText(text) {
  return tokenizer.tokenize(text);
}

// Función para analizar el sentimiento
function analyzeSentiment(text) {
  const tokens = tokenizeText(text);
  return analyzer.getSentiment(tokens);
}

// Función para extraer palabras clave
function extractKeywords(text) {
  const tfidf = new TfIdf();
  tfidf.addDocument(text);

  const keywords = [];
  tfidf.listTerms(0).forEach(item => {
    keywords.push(item.term);
  });

  return keywords;
}

module.exports = { tokenizeText, analyzeSentiment, extractKeywords };
