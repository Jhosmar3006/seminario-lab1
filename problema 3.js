function palindromeRearranging(s){
<<<<<<< HEAD
    var abc = [26];
    for(var i=0;i<26;i++){
      abc[i]=0;
    }
    for(var i=0;i<s.length;++i){
      abc[s.charCodeAt(i)-97]++;
    }
    var cnt=0;
    for(var i=0;i<26;++i){
      if(abc[i]%2)++cnt;
    }
    if(cnt > 1){
      return false;
    }
=======
  var abc = [26];
  for(var i=0;i<26;i++){
    abc[i]=0;
  }
  for(var i=0;i<s.length;++i){
    abc[s.charCodeAt(i)-97]++;
  }
  var cnt=0;
  for(var i=0;i<26;++i){
    if(abc[i]%2)++cnt;
  }
  if(cnt > 1){
    return false;
  }
>>>>>>> 6a1126a8bf503ac503fc236a0f5c26d262bb13aa
    return true;
  }
  var s="aabbccdddee";
  console.log((palindromeRearranging(s) ? "true" : "false"));