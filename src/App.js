/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  /* ----------------------------- INSTANCE ----------------------------- */
  
  const genderIcon = ['👨남자 코트는?', '👩여자 코트는?'];
  let logo = 'PostPost!';
  
  // ============= usestate =============
  
  // 기본 세팅용
  let [onLoad,        setOnLoad]       = useState(1);
  // 타이틀 제어
  let [title,         setTitle]        = useState([]);
  let [EditTitleBtn,  setEditTitleBtn] = useState(genderIcon[0]);
  // 모달 제어
  let [modal,         setModal]        = useState(false);
  let [modalIndex,    SetModalIndex]   = useState(0);
  // input 데이터 제어
  let [inputValue,    SetInputValue]   = useState('');
  // textarea 데이터 제어
  let [textareaValue, SetTextareaValue] = useState('');

  /* ------------------------------ CLASS ------------------------------- */

  class Post {
    constructor(Name, Like, Content) {
        this.Name    = Name;
        this.Like    = Like;
        this.Content = Content;
    }
  }
  /* ------------------------------ SET ------------------------------- */

  constructorTitle();

  /* ----------------------------- FUNCTION ----------------------------- */
  
  /** 임시 DB에서 불러온다는 설정용 함수*/ 
  function constructorTitle(){
    if(onLoad){
      // 임시 데이터들
      const DBTitle = ['여자 코트 추천', '파이썬 독학', '가을 맛집 추천'];
      const DBLike  = [0, 1, 3];
      const DBContent = ["여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천여자코트 추천", 
                          "파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학파이썬 독학", 
                          "가을 맛집 추천가을 맛집 추천가을 맛집 추천가을 맛집 추천가을 맛집 추천가을 맛집 추천가을 맛집 추천가을 맛집 추천"];
      // 데이터 불러오기
      for (let i in DBTitle){
        const newTitle = new Post(DBTitle[i], DBLike[i], DBContent[i]);
        title.push(newTitle);
      }
      setOnLoad(0);
    }
  }

  function onClicksetTitle(titleNumber){
    setModal(false);
    let copyTitle = [...title];
    if(copyTitle[titleNumber].Name === '여자 코트 추천'){
      copyTitle[titleNumber].Name = '남자 코트 추천';
      setTitle(copyTitle);
      setEditTitleBtn(genderIcon[1]);
    }
    else{
      copyTitle[titleNumber].Name = '여자 코트 추천';
      setTitle(copyTitle);
      setEditTitleBtn(genderIcon[0]);
    }
  }

  function onClickSort(){
    let copyTitle = [...title];
    copyTitle.sort((a, b) => (
      a.Name.localeCompare(b.Name)
    ));
    setTitle(copyTitle);
  }

  function onClickTitle(titleNumber){
    SetModalIndex(titleNumber);
    modalControl(true);
  }

  function onClickSetLike(titleNumber){
    title[titleNumber].Like ++;
    setTitle([...title]);
  }

  function writePost(){
    const newTitle = new Post(inputValue, 0, textareaValue);
    title.push(newTitle);
    setTitle([...title]);
    SetInputValue('');
    SetTextareaValue('');
  }
  function DeletePost(titleNumber){
    title.splice(titleNumber, 1);
    setTitle([...title]);
  }
  function modalControl(modalState){
    setModal(modalState);
  }

  /* --------------------------------------------------------------------- */

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>

      <div class="post-write-bar">
        <div class="post-frame">
          <div>
            <input className="post-frame__title" placeholder='제목' onChange={(e)=>{ SetInputValue(e.target.value); }} value={inputValue}></input>
            <span className='post-frame__title-line'></span>
          </div>
          <textarea placeholder='내용' className='post-frame__content' onChange={(e)=>{ SetTextareaValue(e.target.value); }}  value={textareaValue}></textarea>
          <svg
            onClick={writePost}
            class="send-button"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7828 0.219523C20.8856 0.322251 20.9564 0.452648 20.9865 0.594854C21.0166 0.737059 21.0047 0.884944 20.9523 1.02052L13.4523 20.5205C13.3992 20.6585 13.3065 20.7777 13.1859 20.8632C13.0653 20.9487 12.9221 20.9966 12.7743 21.0009C12.6265 21.0052 12.4807 20.9658 12.3553 20.8875C12.2299 20.8093 12.1304 20.6957 12.0693 20.561L8.9328 13.661L13.5468 9.04552C13.7455 8.83226 13.8537 8.55019 13.8486 8.25874C13.8434 7.96729 13.7254 7.68921 13.5192 7.48309C13.3131 7.27697 13.035 7.1589 12.7436 7.15376C12.4521 7.14862 12.1701 7.2568 11.9568 7.45552L7.3413 12.0695L0.441298 8.93452C0.306248 8.87353 0.192293 8.7739 0.113814 8.6482C0.0353359 8.5225 -0.00414826 8.37638 0.000344977 8.22826C0.00483821 8.08014 0.0531075 7.93668 0.139061 7.81597C0.225014 7.69526 0.344799 7.60272 0.483298 7.55002L19.9833 0.0500229C20.1187 -0.00206532 20.2663 -0.0137767 20.4082 0.0163077C20.5501 0.0463921 20.6802 0.116981 20.7828 0.219523Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      
      {
        title.map(function(titleName, titleNumber){
          return(
            <div className='list'>
              <div className='post-title-bar'>
                <h4 className='title-name' onClick={() => onClickTitle(titleNumber)}>{ titleName.Name } </h4> 
                <span className='like-info'><span onClick={() => onClickSetLike(titleNumber)}>👍</span> { titleName.Like }</span>
                {
                  titleName.Name.includes('코트 추천') ?  <span className="genderBtn" onClick={() => onClicksetTitle(titleNumber)}>{ EditTitleBtn }</span> : null
                }
                <span className='deleteBtn' onClick={() => DeletePost(titleNumber)}>Delete <FontAwesomeIcon icon={ faTrashCan }></FontAwesomeIcon></span>
              </div>
              <p>3월 17일 발행</p>
            </div>
          )
        })
      }
      
      <div className='SortingBar'>
        <span className='titleSortBtn' onClick={onClickSort}>가나다순 정렬</span>
      </div>
      {
        modal ? <Modal title={title[modalIndex]} modalControl={modalControl}></Modal> : null
      }
    </div>
    
  );
}

function Modal(props){
  /* ----------------------------- INSTANCE ----------------------------- */
  const PostInfo = props.title;

  return(
    <div className='modal'>
      <div className="modal__background">
        <div className="md-content">
          <div className='md-content__title-bar'>
            <div className="md-content__title-name">{PostInfo.Name}</div>
            <div className="md-content__like-info">👍 {PostInfo.Like}</div>
            <div className="md-content__date">3월 17일</div>
          </div>
          <div className="md-content__contents">{PostInfo.Content}</div>
          <div className="md-content__exit-button" onClick={() => {props.modalControl(false)}}>
            닫기
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
