const lists = document.querySelectorAll("li");  //nav 메뉴 리스트를 지정
const main = document.querySelector('header h1'); //메인 로고를 지정

main.onclick = (event) => {  //메인 로고를 클릭 시
    event.preventDefault()  // 새로고침 작동 중지
    window.scrollTo({top:0, left:0, behavior: 'smooth'})} //화면 최상단으로 이동
    
    
lists[0].onclick = (event) => { // 첫번째 리스트 클릭 시 
    event.preventDefault()
    window.scrollTo({top:835, left:0, behavior: 'smooth'})} // top에서 835px만큼 아래로 이동
								// left는 좌우 이동이기에 주지 않음
    
lists[1].onclick = (event) => {
    event.preventDefault()
    window.scrollTo({top:1670, left:0, behavior: 'smooth'})} 
    
    
lists[2].onclick = (event) => {
    event.preventDefault()
    window.scrollTo({top:2505, left:0, behavior: 'smooth'})}
    
    
lists[3].onclick = (event) => {
    event.preventDefault()
    window.scrollTo({top:3340, left:0, behavior: 'smooth'})}
    
    
    