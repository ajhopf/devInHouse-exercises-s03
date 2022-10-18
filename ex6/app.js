const verifyPalindrome = string => {
  console.log('\nOriginal string: ', string);

  //remove whitespaces and make all letters lower case
  const formattedString = string.split(' ').join('').toLowerCase();
  console.log('String to lower case and no whitespaces: ', formattedString);

  const arrayFromString = formattedString.split('');

  const reversedString = arrayFromString.reverse().join('');

  console.log('Strings to compare: ', formattedString, ' / ', reversedString);
  console.log(`Is it a palindrome? ${formattedString == reversedString}`);
  return formattedString == reversedString;
};

verifyPalindrome('Hello my friend');
verifyPalindrome('Andre');
verifyPalindrome('luz azul');
verifyPalindrome('osso');
verifyPalindrome('Rats live on no evil star');
verifyPalindrome('Ana');
verifyPalindrome('Mr Owl ate my metal worm');
