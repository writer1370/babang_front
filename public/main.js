
/*
//const data = { authId: 'member' };

fetch('http://localhost:8080/init/menu?authId=member', {
  method: 'GET', // 또는 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  //body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('성공:', data);
})
.catch((error) => {
  console.error('실패:', error);
});
*/

  axios({
    method: 'get', //통신 방식
    url: '/api/init/test', //통신할 페이지
    data: {} //인자로 보낼 데이터
  })
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })