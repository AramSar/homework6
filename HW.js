const diamond = function(x, token1){
  if(x===0) return "";
  const s = function( token , arg){
  if(arg <= 0) return "";
  return token + s(token, --arg);
  };

  const conc = function (x, arg1, arg2) {
    if(x<=0)return '';
    console.log(s(" ", arg1) + s(token1, arg2));
    conc(--x, --arg1, arg2 + 2);
  };

  const conc2 = function (x, arg1, arg2) {
    if(x<=0)return '';
    console.log(s(" ", arg1) + s(token1, arg2));
    conc2(--x, ++arg1, arg2 - 2);
  };
  
  if(x%2 === 0 ){ 
    conc(x/2+1, x/2, -1) 
    conc2(x/2, 0 ,x -1);
  }
  else {
    conc(x/2 + 1, x/2 , -1)
    conc2(x/2 , 1 ,x - 2);
  }
};

diamond(8, '&');

//////////////////////////////////////////////////////////////////////////////

const diamond = function(x, token1){
  if(x===0) return "";
  const s = function( token , arg){
    let str = '';
    for(arg;arg > 0; arg--){
    str = str + token;
    }
    return str;
  };
  
  const conc = function (x, arg1, arg2) {
    for(x; x>0; x--) {
      console.log(s(" ", arg1) + s(token1, arg2));
      --arg1;
      arg2 += 2;
    }
    console.log(s(" ", arg1) + s(token1, arg2));
  };

  const conc2 = function (x, arg1, arg2) {
    for(x; x>0; x--) {
          console.log(s(" ", arg1) + s(token1, arg2));
          arg1 = arg1 + 1;
          arg2 -= 2;
    }
  };
  
   if(x%2 === 0 ){ 
    conc(x/2, x/2, -1) ;
    conc2(x/2, 0 ,x -1);
  }
  else {
    conc(x/2 , x/2  , -1)
    conc2(x/2 , 1 ,x - 2);
  }
};

diamond(5, '#');


////////////////////////////////////////////////////////
const board = [
    ['x', 'o', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
const empty =[];
const nextMove = function (arr, isX) {
 for(let i = 0; i < arr.length; i++) {
   for(let j = 0; j< arr[i].length; j++){
     if(arr[i][j] === ' ') 
     { empty.push(i);
       empty.push(j);
       return empty;
     }
   }
 }
};

nextMove(board, true);
 const makeMove = function (arr, isX) {
  if(empty[0] > 2 || empty[1] > 2 || empty[0] < 0 || empty[1] < 0 || arr[empty[0]][empty[1]] !== ' ']) return -1;
  else {
     if(isX) {
       board[empty[0]][empty[1]] = 'x';
     }
     else 
       board[empty[0]][empty[1]]  = 'o';
     return 0;
  }
 } ;
 makeMove (board, false);
 console.log(board);
 //////////////////////////////////////////////////////////
 const win = function (arr) {
for(let i = 0; i < arr.length ; i++) {
     if((arr[i][0] === arr[i][1]) && (arr[i][1]===arr[i][2]) && arr[i][0] !== ' ') {console.log('horizontal');
     return { winner: arr[i][0],
              winningLocations: [[i,0],[i,1],[i,2]]
     }
     break;
     }
     if((arr[0][i] === arr[1][i]) && (arr[1][i]===arr[2][i]) && arr[0][i] !== ' ') {
    console.log('vertical');
    return { winner: arr[0][i],
              winningLocations: [[0,i],[1,i],[2,i]]
     }
     break;
  }
  if((arr[0][0] === arr[1][1]) && (arr[1][1]===arr[2][2]) && arr[0][i] !== ' ') {
    console.log('diagonal');
    return { winner: arr[0][0],
              winningLocations: [[0,0],[1,1],[2,2]]
     }
     break;
  }
  if((arr[2][0] === arr[1][1]) && (arr[1][1]===arr[0][2]) && arr[0][i] !== ' ') {
    console.log('diagonal');
    return { winner: arr[1][1],
              winningLocations: [[2,0],[1,1],[0,2]]
     }
     break;
}
  
}
   let numOfEmpty = 0;
   for(let k = 0; k < arr.length; k++) {
    for(let j = 0; j< arr.length; j++){
      if(arr[k][j]=== ' ')
        numOfEmpty++;
    }
   }
   if( numOfEmpty === 0) return {
    winner: 'none' // nobody won, game over
   }
   else return undefined;
 };
 win(board);