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