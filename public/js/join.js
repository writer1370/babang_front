document.addEventListener('DOMContentLoaded', function(){ 

    axios({
      method: 'get', //통신 방식
      url: 'http://localhost:8080/init/test', //통신할 페이지
      data: {} //인자로 보낼 데이터
    })
      .then(response=>{
          console.log(response);
      })
      .catch(error=>{
          console.log(error);
      })
});
