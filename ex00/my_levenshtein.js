function my_levenshtein (string_1, string_2){
    if(string_1.length !== string_2.length){
      return -1;
    }
    var differences = 0;
    for (var i = 0; i < string_1.length; i++){
      if (string_1[i] !== string_2[i]){
        differences ++;
      }
    }
    return differences;
  } 