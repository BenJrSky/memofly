<template>
  <div id="app">
      <router-view/>
  </div>
</template>


<style lang="scss">

  @import"/metrica/plugins/jvectormap/jquery-jvectormap-2.0.2.css";
  @import"/metrica/assets/css/bootstrap.min.css";
  @import"/metrica/assets/css/jquery-ui.min.css";
  @import"/metrica/assets/css/icons.min.css";
  @import"/metrica/assets/css/metisMenu.min.css";
  @import"/metrica/assets/css/app.min.css";
  @import"/metrica/assets/css/custom.css";

  body{ 
    font-size: 16px;
    color: #313F66;
  }

  .hide-this{
    width: 0px !important;
    overflow: hidden !important;
  }

  .show-this{
    display: block !important;
  }

  .show-true{
    display: block !important;
  }

  .show-false{
    display: none !important;
  }

  .menuInner-hidden{
    margin-left: 70px !important;
  }

  .page-content-wide{
    width: calc(100% - 70px) !important;
  }

   .custom-calendar{
    position: relative !important;
    margin-left: 1rem !important;
    width: 1rem;
    height: 1rem;
  }
  
  li.nav-link{
    display: block !important;
    height: auto !important;  
  }
  
  .nav-menu{
    padding-left: 0px !important;
  }

  .nav-second-level{
    padding-left: 10px !important;
  }

  .flexRow {
    display: flex;
    margin-bottom: 1.5rem !important;

  .flexCol {
    height: 100%;
  }

  }

  .title-text, .header-title{
    font-size: 1.063rem;
    font-weight: 700;
    color: #313F66;
  }

  .page-title{
    font-size: 1.188rem;
    color: #313F66;
  }

  .dataTables_info{
    font-size: 0.875rem;
  }

  .icon-lg {
    height: 32px;
    width: 32px;
  }

  .icon-xl {
    height: 48px;
    width: 48px;
}

.resize-no{
  resize: none;
}

.textarea-message{
  border:none;
}

.textarea-message:hover{
  border:2px solid #439AF4 !important;
}


//POSITION
.vertical-align-top{
  vertical-align:top !important;
}

.vertical-align-baseline{
  vertical-align: baseline !important;
}

.right-0{
  position: absolute;
  right:0;
}

.bottom-0{
  position: absolute;
  bottom:0;
}

.top-0{
  position: absolute;
  top:0%;
}

.top-10{
  position: absolute;
  top:10%;
}

.top-20{
  position: absolute;
  top:20%;
}

.top-30{
  position: absolute;
  top:30%;
}

.top-40{
  position: absolute;
  top:40%;
}

.top-50{
  position: absolute;
  top:50%;
}

//COLORS
.text-memofly{
  color: #439AF4;
}

.bg-memofly{
  background-color: #439AF4;
}

//COLORS
.text-pomodoro{
  color: #D60000;
}
.bg-pomodoro{
  background-color: #D60000;
}
.text-basilico{
  color: #0B8043;
}
.bg-basilico{
  background-color: #0B8043;
}
.text-mirtillo{
  color: #3F51B5;
}
.bg-mirtillo{
  background-color: #3F51B5;
}
.text-salvia{
  color: #33B679;
}
.bg-salvia{
  background-color: #33B679;
}
.text-banana{
  color: #F6C026;
}
.bg-banana{
  background-color: #F6C026;
}
.text-grafite{
  color: #616161;
}
.bg-grafite{
  background-color: #616161;
}
.text-lavanda{
  color: #7986CB;
}
.bg-lavanda{
  background-color: #7986CB;
}
.text-pavone{
  color: #039BE5;
}
.bg-pavone{
  background-color: #039BE5;
}
.text-uva{
  color: #8E24AA;
}
.bg-uva{
  background-color: #8E24AA;
}
.text-fenicottero{
  color: #E67C73;
}
.bg-fenicottero{
  background-color: #E67C73;
}
.text-mandarino{
  color: #F5511D;
}
.bg-mandarino{
  background-color: #F5511D;
}
.text-nessuno{
  color: #7387A1;
}
.bg-nessuno{
  background-color: #7387A1;
}



//FONT
.font-roboto{
  font-family: "Roboto",sans-serif;
}

.font-poppins{
  font-family: "Poppins",sans-serif;
}

//WEIGHT
.weight-300{
  font-weight: 300 !important;
}

.weight-400{
  font-weight: 400 !important;
}

.weight-500{
  font-weight: 500 !important;
}

.weight-600{
  font-weight: 600 !important;
}

.weight-700{
  font-weight: 700 !important;
}

.weight-800{
  font-weight: 800 !important;
}

.weight-900{
  font-weight: 900 !important;
}

//SIZE
.size-12{
  font-size: 12px !important;
}

.size-13{
  font-size: 13px !important;
}

.size-14{
  font-size: 14px !important;
}

.size-15{
  font-size: 15px !important;
}

.size-16{
  font-size: 16px !important;
}

.size-17{
  font-size: 17px !important;
}

.size-18{
  font-size: 18px !important;
}

.size-19{
  font-size: 19px !important;
}

.size-20{
  font-size: 20px !important;
}

.size-21{
  font-size: 21px !important;
}

.size-22{
  font-size: 22px !important;
}

.size-23{
  font-size: 23px !important;
}

.size-24{
  font-size: 24px !important;
}

.size-25{
  font-size: 25px !important;
}

.size-26{
  font-size: 26px !important;
}

.size-27{
  font-size: 27px !important;
}

.size-28{
  font-size: 28px !important;
}

.size-29{
  font-size: 29px !important;
}

.size-30{
  font-size: 30px !important;
}

.size-31{
  font-size: 31px !important;
}

.size-32{
  font-size: 32px !important;
}

.size-33{
  font-size: 33px !important;
}

.size-34{
  font-size: 34px !important;
}

.size-35{
  font-size: 35px !important;
}

.size-36{
  font-size: 36px !important;
}

.size-37{
  font-size: 37px !important;
}

.size-38{
  font-size: 38px !important;
}

.size-39{
  font-size: 39px !important;
}

.size-40{
  font-size: 40px !important;
}

.size-45{
  font-size: 45px !important;
}

.size-50{
  font-size: 50px !important;
}

.size-60{
  font-size: 60px !important;
}

.size-70{
  font-size: 70px !important;
}

.size-80{
  font-size: 80px !important;
}

.size-84{
  font-size: 84px !important;
}

.size-90{
  font-size: 90px !important;
}

.size-100{
  font-size: 100px !important;
}

.size-110{
  font-size: 110px !important;
}

// XS
@media (max-width: 576px) {

  html {
    font-size: 0.8rem !important;
  }
  .abs-right-xs-0{
    position:absolute;
    right:0%;
  }

  .abs-right-xs-5{
    position:absolute;
    right:5%;
  }

  .abs-right-xs-10{
    position:absolute;
    right:10%;
  }

  .abs-right-xs-15{
    position:absolute;
    right:15%;
  }

  .abs-right-xs-20{
    position:absolute;
    right:20%;
  }

  .w-xs-100 {
    width: 100%!important;
  }
  
  .w-xs-90 {
    width: 90%!important;
  }
  
  .w-xs-80 {
    width: 80%!important;
  }
  
  .w-xs-70 {
    width: 70%!important;
  }
  
  .w-xs-60 {
    width: 60%!important;
  }
  
  .w-xs-50 {
    width: 50%!important;
  }
  
  .w-xs-40 {
    width: 40%!important;
  }
  
  .w-xs-30 {
    width: 30%!important;
  }
  
  .w-xs-25 {
    width: 25%!important;
  }
  
  .w-xs-20 {
    width: 20%!important;
  }
  
  .w-xs-15 {
    width: 15%!important;
  }
  
  .w-xs-10 {
    width: 10%!important;
  }
  
  .w-xs-5 {
    width: 5%!important;
  }

  .size-xs-12{
    font-size: 12px !important;
  }
  
  .size-xs-13{
    font-size: 13px !important;
  }
  
  .size-xs-14{
    font-size: 14px !important;
  }
  
  .size-xs-15{
    font-size: 15px !important;
  }
  
  .size-xs-16{
    font-size: 16px !important;
  }
  
  .size-xs-17{
    font-size: 17px !important;
  }
  
  .size-xs-18{
    font-size: 18px !important;
  }
  
  .size-xs-19{
    font-size: 19px !important;
  }
  
  .size-xs-20{
    font-size: 20px !important;
  }
  
  .size-xs-21{
    font-size: 21px !important;
  }
  
  .size-xs-22{
    font-size: 22px !important;
  }
  
  .size-xs-23{
    font-size: 23px !important;
  }
  
  .size-xs-24{
    font-size: 24px !important;
  }
  
  .size-xs-25{
    font-size: 25px !important;
  }
  
  .size-xs-26{
    font-size: 26px !important;
  }
  
  .size-xs-27{
    font-size: 27px !important;
  }
  
  .size-xs-28{
    font-size: 28px !important;
  }
  
  .size-xs-29{
    font-size: 29px !important;
  }
  
  .size-xs-30{
    font-size: 30px !important;
  }
  
  .size-xs-31{
    font-size: 31px !important;
  }
  
  .size-xs-32{
    font-size: 32px !important;
  }
  
  .size-xs-33{
    font-size: 33px !important;
  }
  
  .size-xs-34{
    font-size: 34px !important;
  }
  
  .size-xs-35{
    font-size: 35px !important;
  }
  
  .size-xs-36{
    font-size: 36px !important;
  }
  
  .size-xs-37{
    font-size: 37px !important;
  }
  
  .size-xs-38{
    font-size: 38px !important;
  }
  
  .size-xs-39{
    font-size: 39px !important;
  }
  
  .size-xs-40{
    font-size: 40px !important;
  }
  
  .size-xs-50{
    font-size: 50px !important;
  }
  
  .size-xs-60{
    font-size: 60px !important;
  }
  
  .size-xs-70{
    font-size: 70px !important;
  }
  
  .size-xs-80{
    font-size: 80px !important;
  }
  
  .size-xs-90{
    font-size: 90px !important;
  }

  .weight-xs-100{
    font-weight: 100 !important;
  }
  
  .weight-xs-200{
    font-weight: 200 !important;
  }
  
  .weight-xs-300{
    font-weight: 300 !important;
  }
  
  .weight-xs-400{
    font-weight: 400 !important;
  }
  
  .weight-xs-500{
    font-weight: 500 !important;
  }
  
  .weight-xs-600{
    font-weight: 600 !important;
  }
  
  .weight-xs-700{
    font-weight: 700 !important;
  }
  
  .weight-xs-800{
    font-weight: 800 !important;
  }
  
  .weight-xs-900{
    font-weight: 900 !important;
  }

  .width-xs-10{
    width:10px;
  }
  .width-xs-20{
    width:20px;
  }
  .width-xs-30{
    width:30px;
  }
  .width-xs-40{
    width:40px;
  }
  .width-xs-50{
    width:50px;
  }
  .width-xs-60{
    width:60px;
  }
  .width-xs-70{
    width:70px;
  }
  .width-xs-80{
    width:80px;
  }
  .width-xs-90{
    width:90px;
  }
  .width-xs-100{
    width:100px;
  }
  .height-xs-10{
    height:10px;
  }
  .height-xs-20{
    height:20px;
  }
  .height-xs-30{
    height:30px;
  }
  .height-xs-40{
    height:40px;
  }
  .height-xs-50{
    height:50px;
  }
  .height-xs-60{
    height:60px;
  }
  .height-xs-70{
    height:70px;
  }
  .height-xs-80{
    height:80px;
  }
  .height-xs-90{
    height:90px;
  }
  .height-xs-100{
    height:100px;
  }

}

// SM
@media (min-width: 576px) {

  html {
    font-size: 0.9rem !important;
  }

  .abs-right-sm-0{
    position:absolute;
    right:0%;
  }

  .abs-right-sm-5{
    position:absolute;
    right:5%;
  }

  .abs-right-sm-10{
    position:absolute;
    right:10%;
  }

  .abs-right-sm-15{
    position:absolute;
    right:15%;
  }

  .abs-right-sm-20{
    position:absolute;
    right:20%;
  }

  .w-sm-100 {
    width: 100%!important;
  }
  
  .w-sm-90 {
    width: 90%!important;
  }
  
  .w-sm-80 {
    width: 80%!important;
  }
  
  .w-sm-70 {
    width: 70%!important;
  }
  
  .w-sm-60 {
    width: 60%!important;
  }
  
  .w-sm-50 {
    width: 50%!important;
  }
  
  .w-sm-40 {
    width: 40%!important;
  }
  
  .w-sm-30 {
    width: 30%!important;
  }
  
  .w-sm-25 {
    width: 25%!important;
  }
  
  .w-sm-20 {
    width: 20%!important;
  }
  
  .w-sm-15 {
    width: 15%!important;
  }
  
  .w-sm-10 {
    width: 10%!important;
  }
  
  .w-sm-5 {
    width: 5%!important;
  }

  .rem-sm-10{
    font-size: 1.0rem !important;
  }

  .rem-sm-11{
    font-size: 1.1rem !important;
  }

  .rem-sm-12{
    font-size: 1.2rem !important;
  }

  .rem-sm-13{
    font-size: 1.3rem !important;
  }

  .rem-sm-14{
    font-size: 1.4rem !important;
  }

  .rem-sm-15{
    font-size: 1.5rem !important;
  }

  .rem-sm-16{
    font-size: 1.6rem !important;
  }

  .rem-sm-17{
    font-size: 1.7rem !important;
  }

  .rem-sm-18{
    font-size: 1.8rem !important;
  }

  .rem-sm-19{
    font-size: 1.9rem !important;
  }

  .rem-sm-20{
    font-size: 2.0rem !important;
  }

  .rem-sm-21{
    font-size: 2.1rem !important;
  }

  .rem-sm-22{
    font-size: 2.2rem !important;
  }

  .rem-sm-23{
    font-size: 2.3rem !important;
  }

  .rem-sm-24{
    font-size: 2.4rem !important;
  }

  .rem-sm-25{
    font-size: 2.5rem !important;
  }

  .rem-sm-26{
    font-size: 2.6rem !important;
  }
  
  .rem-sm-27{
    font-size: 2.7rem !important;
  }

  .rem-sm-28{
    font-size: 2.8rem !important;
  }

  .rem-sm-29{
    font-size: 2.9rem !important;
  }

  .rem-sm-30{
    font-size: 3.0rem !important;
  }

  .size-sm-12{
    font-size: 12px !important;
  }
  
  .size-sm-13{
    font-size: 13px !important;
  }
  
  .size-sm-14{
    font-size: 14px !important;
  }
  
  .size-sm-15{
    font-size: 15px !important;
  }
  
  .size-sm-16{
    font-size: 16px !important;
  }
  
  .size-sm-17{
    font-size: 17px !important;
  }
  
  .size-sm-18{
    font-size: 18px !important;
  }
  
  .size-sm-19{
    font-size: 19px !important;
  }
  
  .size-sm-20{
    font-size: 20px !important;
  }
  
  .size-sm-21{
    font-size: 21px !important;
  }
  
  .size-sm-22{
    font-size: 22px !important;
  }
  
  .size-sm-23{
    font-size: 23px !important;
  }
  
  .size-sm-24{
    font-size: 24px !important;
  }
  
  .size-sm-25{
    font-size: 25px !important;
  }
  
  .size-sm-26{
    font-size: 26px !important;
  }
  
  .size-sm-27{
    font-size: 27px !important;
  }
  
  .size-sm-28{
    font-size: 28px !important;
  }
  
  .size-sm-29{
    font-size: 29px !important;
  }
  
  .size-sm-30{
    font-size: 30px !important;
  }
  
  .size-sm-31{
    font-size: 31px !important;
  }
  
  .size-sm-32{
    font-size: 32px !important;
  }
  
  .size-sm-33{
    font-size: 33px !important;
  }
  
  .size-sm-34{
    font-size: 34px !important;
  }
  
  .size-sm-35{
    font-size: 35px !important;
  }
  
  .size-sm-36{
    font-size: 36px !important;
  }
  
  .size-sm-37{
    font-size: 37px !important;
  }
  
  .size-sm-38{
    font-size: 38px !important;
  }
  
  .size-sm-39{
    font-size: 39px !important;
  }
  
  .size-sm-40{
    font-size: 40px !important;
  }
  
  .size-sm-50{
    font-size: 50px !important;
  }
  
  .size-sm-60{
    font-size: 60px !important;
  }
  
  .size-sm-70{
    font-size: 70px !important;
  }
  
  .size-sm-80{
    font-size: 80px !important;
  }
  
  .size-sm-90{
    font-size: 90px !important;
  }

  .weight-sm-100{
    font-weight: 100 !important;
  }
  
  .weight-sm-200{
    font-weight: 200 !important;
  }
  
  .weight-sm-300{
    font-weight: 300 !important;
  }
  
  .weight-sm-400{
    font-weight: 400 !important;
  }
  
  .weight-sm-500{
    font-weight: 500 !important;
  }
  
  .weight-sm-600{
    font-weight: 600 !important;
  }
  
  .weight-sm-700{
    font-weight: 700 !important;
  }
  
  .weight-sm-800{
    font-weight: 800 !important;
  }
  
  .weight-sm-900{
    font-weight: 900 !important;
  }

  .width-sm-10{
    width:10px;
  }
  .width-sm-20{
    width:20px;
  }
  .width-sm-30{
    width:30px;
  }
  .width-sm-40{
    width:40px;
  }
  .width-sm-50{
    width:50px;
  }
  .width-sm-60{
    width:60px;
  }
  .width-sm-70{
    width:70px;
  }
  .width-sm-80{
    width:80px;
  }
  .width-sm-90{
    width:90px;
  }
  .width-sm-100{
    width:100px;
  }
  .height-sm-10{
    height:10px;
  }
  .height-sm-20{
    height:20px;
  }
  .height-sm-30{
    height:30px;
  }
  .height-sm-40{
    height:40px;
  }
  .height-sm-50{
    height:50px;
  }
  .height-sm-60{
    height:60px;
  }
  .height-sm-70{
    height:70px;
  }
  .height-sm-80{
    height:80px;
  }
  .height-sm-90{
    height:90px;
  }
  .height-sm-100{
    height:100px;
  }


}

// MD
@media (min-width: 768px) {

  html {
    font-size: 0.7rem !important;
  }

  .abs-right-md-0{
    position:absolute;
    right:0%;
  }

  .abs-right-md-5{
    position:absolute;
    right:5%;
  }

  .abs-right-md-10{
    position:absolute;
    right:10%;
  }

  .abs-right-md-15{
    position:absolute;
    right:15%;
  }

  .abs-right-md-20{
    position:absolute;
    right:20%;
  }

  .w-md-100 {
    width: 100%!important;
  }
  
  .w-md-90 {
    width: 90%!important;
  }
  
  .w-md-80 {
    width: 80%!important;
  }
  
  .w-md-70 {
    width: 70%!important;
  }
  
  .w-md-60 {
    width: 60%!important;
  }
  
  .w-md-50 {
    width: 50%!important;
  }
  
  .w-md-40 {
    width: 40%!important;
  }
  
  .w-md-30 {
    width: 30%!important;
  }
  
  .w-md-25 {
    width: 25%!important;
  }
  
  .w-md-20 {
    width: 20%!important;
  }
  
  .w-md-15 {
    width: 15%!important;
  }
  
  .w-md-10 {
    width: 10%!important;
  }
  
  .w-md-5 {
    width: 5%!important;
  }

  .rem-md-10{
    font-size: 1.0rem !important;
  }

  .rem-md-11{
    font-size: 1.1rem !important;
  }

  .rem-md-12{
    font-size: 1.2rem !important;
  }

  .rem-md-13{
    font-size: 1.3rem !important;
  }

  .rem-md-14{
    font-size: 1.4rem !important;
  }

  .rem-md-15{
    font-size: 1.5rem !important;
  }

  .rem-md-16{
    font-size: 1.6rem !important;
  }

  .rem-md-17{
    font-size: 1.7rem !important;
  }

  .rem-md-18{
    font-size: 1.8rem !important;
  }

  .rem-md-19{
    font-size: 1.9rem !important;
  }

  .rem-md-20{
    font-size: 2.0rem !important;
  }

  .rem-md-21{
    font-size: 2.1rem !important;
  }

  .rem-md-22{
    font-size: 2.2rem !important;
  }

  .rem-md-23{
    font-size: 2.3rem !important;
  }

  .rem-md-24{
    font-size: 2.4rem !important;
  }

  .rem-md-25{
    font-size: 2.5rem !important;
  }

  .rem-md-26{
    font-size: 2.6rem !important;
  }
  
  .rem-md-27{
    font-size: 2.7rem !important;
  }

  .rem-md-28{
    font-size: 2.8rem !important;
  }

  .rem-md-29{
    font-size: 2.9rem !important;
  }

  .rem-md-30{
    font-size: 3.0rem !important;
  }

  .size-md-12{
    font-size: 12px !important;
  }
  
  .size-md-13{
    font-size: 13px !important;
  }
  
  .size-md-14{
    font-size: 14px !important;
  }
  
  .size-md-15{
    font-size: 15px !important;
  }
  
  .size-md-16{
    font-size: 16px !important;
  }
  
  .size-md-17{
    font-size: 17px !important;
  }
  
  .size-md-18{
    font-size: 18px !important;
  }
  
  .size-md-19{
    font-size: 19px !important;
  }
  
  .size-md-20{
    font-size: 20px !important;
  }
  
  .size-md-21{
    font-size: 21px !important;
  }
  
  .size-md-22{
    font-size: 22px !important;
  }
  
  .size-md-23{
    font-size: 23px !important;
  }
  
  .size-md-24{
    font-size: 24px !important;
  }
  
  .size-md-25{
    font-size: 25px !important;
  }
  
  .size-md-26{
    font-size: 26px !important;
  }
  
  .size-md-27{
    font-size: 27px !important;
  }
  
  .size-md-28{
    font-size: 28px !important;
  }
  
  .size-md-29{
    font-size: 29px !important;
  }
  
  .size-md-30{
    font-size: 30px !important;
  }
  
  .size-md-31{
    font-size: 31px !important;
  }
  
  .size-md-32{
    font-size: 32px !important;
  }
  
  .size-md-33{
    font-size: 33px !important;
  }
  
  .size-md-34{
    font-size: 34px !important;
  }
  
  .size-md-35{
    font-size: 35px !important;
  }
  
  .size-md-36{
    font-size: 36px !important;
  }
  
  .size-md-37{
    font-size: 37px !important;
  }
  
  .size-md-38{
    font-size: 38px !important;
  }
  
  .size-md-39{
    font-size: 39px !important;
  }
  
  .size-md-40{
    font-size: 40px !important;
  }
  
  .size-md-50{
    font-size: 50px !important;
  }
  
  .size-md-60{
    font-size: 60px !important;
  }
  
  .size-md-70{
    font-size: 70px !important;
  }
  
  .size-md-80{
    font-size: 80px !important;
  }
  
  .size-md-90{
    font-size: 90px !important;
  }

  .weight-md-100{
    font-weight: 100 !important;
  }
  
  .weight-md-200{
    font-weight: 200 !important;
  }
  
  .weight-md-300{
    font-weight: 300 !important;
  }
  
  .weight-md-400{
    font-weight: 400 !important;
  }
  
  .weight-md-500{
    font-weight: 500 !important;
  }
  
  .weight-md-600{
    font-weight: 600 !important;
  }
  
  .weight-md-700{
    font-weight: 700 !important;
  }
  
  .weight-md-800{
    font-weight: 800 !important;
  }
  
  .weight-md-900{
    font-weight: 900 !important;
  }

  .width-md-10{
    width:10px;
  }
  .width-md-20{
    width:20px;
  }
  .width-md-30{
    width:30px;
  }
  .width-md-40{
    width:40px;
  }
  .width-md-50{
    width:50px;
  }
  .width-md-60{
    width:60px;
  }
  .width-md-70{
    width:70px;
  }
  .width-md-80{
    width:80px;
  }
  .width-md-90{
    width:90px;
  }
  .width-md-100{
    width:100px;
  }
  .height-md-10{
    height:10px;
  }
  .height-md-20{
    height:20px;
  }
  .height-md-30{
    height:30px;
  }
  .height-md-40{
    height:40px;
  }
  .height-md-50{
    height:50px;
  }
  .height-md-60{
    height:60px;
  }
  .height-md-70{
    height:70px;
  }
  .height-md-80{
    height:80px;
  }
  .height-md-90{
    height:90px;
  }
  .height-md-100{
    height:100px;
  }

}

// LG
@media (min-width: 992px) {

  html {
    font-size: 0.7rem !important;
  }

  .abs-right-lg-0{
    position:absolute;
    right:0%;
  }

  .abs-right-lg-5{
    position:absolute;
    right:5%;
  }

  .abs-right-lg-10{
    position:absolute;
    right:10%;
  }

  .abs-right-lg-15{
    position:absolute;
    right:15%;
  }

  .abs-right-lg-20{
    position:absolute;
    right:20%;
  }

  .w-lg-100 {
    width: 100%!important;
  }
  
  .w-lg-90 {
    width: 90%!important;
  }
  
  .w-lg-80 {
    width: 80%!important;
  }
  
  .w-lg-70 {
    width: 70%!important;
  }
  
  .w-lg-60 {
    width: 60%!important;
  }
  
  .w-lg-50 {
    width: 50%!important;
  }
  
  .w-lg-40 {
    width: 40%!important;
  }
  
  .w-lg-30 {
    width: 30%!important;
  }
  
  .w-lg-25 {
    width: 25%!important;
  }
  
  .w-lg-20 {
    width: 20%!important;
  }
  
  .w-lg-15 {
    width: 15%!important;
  }
  
  .w-lg-10 {
    width: 10%!important;
  }
  
  .w-lg-5 {
    width: 5%!important;
  }

  .rem-lg-10{
    font-size: 1.0rem !important;
  }

  .rem-lg-11{
    font-size: 1.1rem !important;
  }

  .rem-lg-12{
    font-size: 1.2rem !important;
  }

  .rem-lg-13{
    font-size: 1.3rem !important;
  }

  .rem-lg-14{
    font-size: 1.4rem !important;
  }

  .rem-lg-15{
    font-size: 1.5rem !important;
  }

  .rem-lg-16{
    font-size: 1.6rem !important;
  }

  .rem-lg-17{
    font-size: 1.7rem !important;
  }

  .rem-lg-18{
    font-size: 1.8rem !important;
  }

  .rem-lg-19{
    font-size: 1.9rem !important;
  }

  .rem-lg-20{
    font-size: 2.0rem !important;
  }

  .rem-lg-21{
    font-size: 2.1rem !important;
  }

  .rem-lg-22{
    font-size: 2.2rem !important;
  }

  .rem-lg-23{
    font-size: 2.3rem !important;
  }

  .rem-lg-24{
    font-size: 2.4rem !important;
  }

  .rem-lg-25{
    font-size: 2.5rem !important;
  }

  .rem-lg-26{
    font-size: 2.6rem !important;
  }
  
  .rem-lg-27{
    font-size: 2.7rem !important;
  }

  .rem-lg-28{
    font-size: 2.8rem !important;
  }

  .rem-lg-29{
    font-size: 2.9rem !important;
  }

  .rem-lg-30{
    font-size: 3.0rem !important;
  }

  .size-lg-12{
    font-size: 12px !important;
  }
  
  .size-lg-13{
    font-size: 13px !important;
  }
  
  .size-lg-14{
    font-size: 14px !important;
  }
  
  .size-lg-15{
    font-size: 15px !important;
  }
  
  .size-lg-16{
    font-size: 16px !important;
  }
  
  .size-lg-17{
    font-size: 17px !important;
  }
  
  .size-lg-18{
    font-size: 18px !important;
  }
  
  .size-lg-19{
    font-size: 19px !important;
  }
  
  .size-lg-20{
    font-size: 20px !important;
  }
  
  .size-lg-21{
    font-size: 21px !important;
  }
  
  .size-lg-22{
    font-size: 22px !important;
  }
  
  .size-lg-23{
    font-size: 23px !important;
  }
  
  .size-lg-24{
    font-size: 24px !important;
  }
  
  .size-lg-25{
    font-size: 25px !important;
  }
  
  .size-lg-26{
    font-size: 26px !important;
  }
  
  .size-lg-27{
    font-size: 27px !important;
  }
  
  .size-lg-28{
    font-size: 28px !important;
  }
  
  .size-lg-29{
    font-size: 29px !important;
  }
  
  .size-lg-30{
    font-size: 30px !important;
  }
  
  .size-lg-31{
    font-size: 31px !important;
  }
  
  .size-lg-32{
    font-size: 32px !important;
  }
  
  .size-lg-33{
    font-size: 33px !important;
  }
  
  .size-lg-34{
    font-size: 34px !important;
  }
  
  .size-lg-35{
    font-size: 35px !important;
  }
  
  .size-lg-36{
    font-size: 36px !important;
  }
  
  .size-lg-37{
    font-size: 37px !important;
  }
  
  .size-lg-38{
    font-size: 38px !important;
  }
  
  .size-lg-39{
    font-size: 39px !important;
  }
  
  .size-lg-40{
    font-size: 40px !important;
  }
  
  .size-lg-50{
    font-size: 50px !important;
  }
  
  .size-lg-60{
    font-size: 60px !important;
  }
  
  .size-lg-70{
    font-size: 70px !important;
  }
  
  .size-lg-80{
    font-size: 80px !important;
  }
  
  .size-lg-90{
    font-size: 90px !important;
  }

  .weight-lg-100{
    font-weight: 100 !important;
  }
  
  .weight-lg-200{
    font-weight: 200 !important;
  }
  
  .weight-lg-300{
    font-weight: 300 !important;
  }
  
  .weight-lg-400{
    font-weight: 400 !important;
  }
  
  .weight-lg-500{
    font-weight: 500 !important;
  }
  
  .weight-lg-600{
    font-weight: 600 !important;
  }
  
  .weight-lg-700{
    font-weight: 700 !important;
  }
  
  .weight-lg-800{
    font-weight: 800 !important;
  }
  
  .weight-lg-900{
    font-weight: 900 !important;
  }

  .width-lg-10{
    width:10px;
  }
  .width-lg-20{
    width:20px;
  }
  .width-lg-30{
    width:30px;
  }
  .width-lg-40{
    width:40px;
  }
  .width-lg-50{
    width:50px;
  }
  .width-lg-60{
    width:60px;
  }
  .width-lg-70{
    width:70px;
  }
  .width-lg-80{
    width:80px;
  }
  .width-lg-90{
    width:90px;
  }
  .width-lg-100{
    width:100px;
  }
  .height-lg-10{
    height:10px;
  }
  .height-lg-20{
    height:20px;
  }
  .height-lg-30{
    height:30px;
  }
  .height-lg-40{
    height:40px;
  }
  .height-lg-50{
    height:50px;
  }
  .height-lg-60{
    height:60px;
  }
  .height-lg-70{
    height:70px;
  }
  .height-lg-80{
    height:80px;
  }
  .height-lg-90{
    height:90px;
  }
  .height-lg-100{
    height:100px;
  }

}

// XL
@media (min-width: 1200px) {

  html {
    font-size: 0.7rem !important;
  }

  .survey-model-img-bg{
    object-fit:none !important;
  }

  .survey-model-img-bg-wrapper{
    z-index: -10;
  }

  .abs-right-xl-0{
    position:absolute;
    right:0%;
  }

  .abs-right-xl-2{
    position:absolute;
    right:2%;
  }

  .abs-right-xl-3{
    position:absolute;
    right:3%;
  }

  .abs-right-xl-5{
    position:absolute;
    right:5%;
  }

  .abs-right-xl-10{
    position:absolute;
    right:10%;
  }

  .abs-right-xl-15{
    position:absolute;
    right:15%;
  }

  .abs-right-xl-20{
    position:absolute;
    right:20%;
  }

  .w-xl-100 {
    width: 100%!important;
  }
  
  .w-xl-90 {
    width: 90%!important;
  }
  
  .w-xl-80 {
    width: 80%!important;
  }
  
  .w-xl-70 {
    width: 70%!important;
  }
  
  .w-xl-60 {
    width: 60%!important;
  }
  
  .w-xl-50 {
    width: 50%!important;
  }
  
  .w-xl-40 {
    width: 40%!important;
  }
  
  .w-xl-30 {
    width: 30%!important;
  }
  
  .w-xl-25 {
    width: 25%!important;
  }
  
  .w-xl-20 {
    width: 20%!important;
  }
  
  .w-xl-15 {
    width: 15%!important;
  }
  
  .w-xl-10 {
    width: 10%!important;
  }
  
  .w-xl-5 {
    width: 5%!important;
  }

  .rem-xl-10{
    font-size: 1.0rem !important;
  }

  .rem-xl-11{
    font-size: 1.1rem !important;
  }

  .rem-xl-12{
    font-size: 1.2rem !important;
  }

  .rem-xl-13{
    font-size: 1.3rem !important;
  }

  .rem-xl-14{
    font-size: 1.4rem !important;
  }

  .rem-xl-15{
    font-size: 1.5rem !important;
  }

  .rem-xl-16{
    font-size: 1.6rem !important;
  }

  .rem-xl-17{
    font-size: 1.7rem !important;
  }

  .rem-xl-18{
    font-size: 1.8rem !important;
  }

  .rem-xl-19{
    font-size: 1.9rem !important;
  }

  .rem-xl-20{
    font-size: 2.0rem !important;
  }

  .rem-xl-21{
    font-size: 2.1rem !important;
  }

  .rem-xl-22{
    font-size: 2.2rem !important;
  }

  .rem-xl-23{
    font-size: 2.3rem !important;
  }

  .rem-xl-24{
    font-size: 2.4rem !important;
  }

  .rem-xl-25{
    font-size: 2.5rem !important;
  }

  .rem-xl-26{
    font-size: 2.6rem !important;
  }
  
  .rem-xl-27{
    font-size: 2.7rem !important;
  }

  .rem-xl-28{
    font-size: 2.8rem !important;
  }

  .rem-xl-29{
    font-size: 2.9rem !important;
  }

  .rem-xl-30{
    font-size: 3.0rem !important;
  }

  .size-xl-12{
    font-size: 12px !important;
  }
  
  .size-xl-13{
    font-size: 13px !important;
  }
  
  .size-xl-14{
    font-size: 14px !important;
  }
  
  .size-xl-15{
    font-size: 15px !important;
  }
  
  .size-xl-16{
    font-size: 16px !important;
  }
  
  .size-xl-17{
    font-size: 17px !important;
  }
  
  .size-xl-18{
    font-size: 18px !important;
  }
  
  .size-xl-19{
    font-size: 19px !important;
  }
  
  .size-xl-20{
    font-size: 20px !important;
  }
  
  .size-xl-21{
    font-size: 21px !important;
  }
  
  .size-xl-22{
    font-size: 22px !important;
  }
  
  .size-xl-23{
    font-size: 23px !important;
  }
  
  .size-xl-24{
    font-size: 24px !important;
  }
  
  .size-xl-25{
    font-size: 25px !important;
  }
  
  .size-xl-26{
    font-size: 26px !important;
  }
  
  .size-xl-27{
    font-size: 27px !important;
  }
  
  .size-xl-28{
    font-size: 28px !important;
  }
  
  .size-xl-29{
    font-size: 29px !important;
  }
  
  .size-xl-30{
    font-size: 30px !important;
  }
  
  .size-xl-31{
    font-size: 31px !important;
  }
  
  .size-xl-32{
    font-size: 32px !important;
  }
  
  .size-xl-33{
    font-size: 33px !important;
  }
  
  .size-xl-34{
    font-size: 34px !important;
  }
  
  .size-xl-35{
    font-size: 35px !important;
  }
  
  .size-xl-36{
    font-size: 36px !important;
  }
  
  .size-xl-37{
    font-size: 37px !important;
  }
  
  .size-xl-38{
    font-size: 38px !important;
  }
  
  .size-xl-39{
    font-size: 39px !important;
  }
  
  .size-xl-40{
    font-size: 40px !important;
  }
  
  .size-xl-50{
    font-size: 50px !important;
  }
  
  .size-xl-60{
    font-size: 60px !important;
  }
  
  .size-xl-70{
    font-size: 70px !important;
  }
  
  .size-xl-80{
    font-size: 80px !important;
  }
  
  .size-xl-90{
    font-size: 90px !important;
  }

  .weight-xl-100{
    font-weight: 100 !important;
  }
  
  .weight-xl-200{
    font-weight: 200 !important;
  }
  
  .weight-xl-300{
    font-weight: 300 !important;
  }
  
  .weight-xl-400{
    font-weight: 400 !important;
  }
  
  .weight-xl-500{
    font-weight: 500 !important;
  }
  
  .weight-xl-600{
    font-weight: 600 !important;
  }
  
  .weight-xl-700{
    font-weight: 700 !important;
  }
  
  .weight-xl-800{
    font-weight: 800 !important;
  }
  
  .weight-xl-900{
    font-weight: 900 !important;
  }

  .width-xl-10{
    width:10px;
  }
  .width-xl-20{
    width:20px;
  }
  .width-xl-30{
    width:30px;
  }
  .width-xl-40{
    width:40px;
  }
  .width-xl-50{
    width:50px;
  }
  .width-xl-60{
    width:60px;
  }
  .width-xl-70{
    width:70px;
  }
  .width-xl-80{
    width:80px;
  }
  .width-xl-90{
    width:90px;
  }
  .width-xl-100{
    width:100px;
  }
  .height-xl-10{
    height:10px;
  }
  .height-xl-20{
    height:20px;
  }
  .height-xl-30{
    height:30px;
  }
  .height-xl-40{
    height:40px;
  }
  .height-xl-50{
    height:50px;
  }
  .height-xl-60{
    height:60px;
  }
  .height-xl-70{
    height:70px;
  }
  .height-xl-80{
    height:80px;
  }
  .height-xl-90{
    height:90px;
  }
  .height-xl-100{
    height:100px;
  }

}

// XXL
@media (min-width: 1600px){

  html {
    font-size: 0.7rem !important;
  }

  .abs-right-xxl-0{
    position:absolute;
    right:0%;
  }

  .abs-right-xxl-2{
    position:absolute;
    right:2%;
  }

  .abs-right-xxl-3{
    position:absolute;
    right:3%;
  }

  .abs-right-xxl-5{
    position:absolute;
    right:5%;
  }

  .abs-right-xxl-10{
    position:absolute;
    right:10%;
  }

  .abs-right-xxl-15{
    position:absolute;
    right:15%;
  }

  .abs-right-xxl-20{
    position:absolute;
    right:20%;
  }

  .col-xxl-1 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-xxl-2 {
    flex: 0 0 16.666666%;
    max-width: 16.666666%;
  }

  .col-xxl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-xxl-5 {
    flex: 0 0 41.666666%;
    max-width: 41.666666%;
  }

  .col-xxl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.3333333%;
  }

  .col-xxl-8 {
    flex: 0 0 66.666666%;
    max-width: 66.666666%;
  }

  .col-xxl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.3333333%;
  }

  .col-xxl-11 {
    flex: 0 0 91.666666%;
    max-width: 91.6666666%;
  }

  .col-xxl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .rem-xxl-10{
    font-size: 1.0rem !important;
  }

  .rem-xxl-11{
    font-size: 1.1rem !important;
  }

  .rem-xxl-12{
    font-size: 1.2rem !important;
  }

  .rem-xxl-13{
    font-size: 1.3rem !important;
  }

  .rem-xxl-14{
    font-size: 1.4rem !important;
  }

  .rem-xxl-15{
    font-size: 1.5rem !important;
  }

  .rem-xxl-16{
    font-size: 1.6rem !important;
  }

  .rem-xxl-17{
    font-size: 1.7rem !important;
  }

  .rem-xxl-18{
    font-size: 1.8rem !important;
  }

  .rem-xxl-19{
    font-size: 1.9rem !important;
  }

  .rem-xxl-20{
    font-size: 2.0rem !important;
  }

  .rem-xxl-21{
    font-size: 2.1rem !important;
  }

  .rem-xxl-22{
    font-size: 2.2rem !important;
  }

  .rem-xxl-23{
    font-size: 2.3rem !important;
  }

  .rem-xxl-24{
    font-size: 2.4rem !important;
  }

  .rem-xxl-25{
    font-size: 2.5rem !important;
  }

  .rem-xxl-26{
    font-size: 2.6rem !important;
  }
  
  .rem-xxl-27{
    font-size: 2.7rem !important;
  }

  .rem-xxl-28{
    font-size: 2.8rem !important;
  }

  .rem-xxl-29{
    font-size: 2.9rem !important;
  }

  .rem-xxl-30{
    font-size: 3.0rem !important;
  }

  .size-xxl-12{
    font-size: 12px !important;
  }
  
  .size-xxl-13{
    font-size: 13px !important;
  }
  
  .size-xxl-14{
    font-size: 14px !important;
  }
  
  .size-xxl-15{
    font-size: 15px !important;
  }
  
  .size-xxl-16{
    font-size: 16px !important;
  }
  
  .size-xxl-17{
    font-size: 17px !important;
  }
  
  .size-xxl-18{
    font-size: 18px !important;
  }
  
  .size-xxl-19{
    font-size: 19px !important;
  }
  
  .size-xxl-20{
    font-size: 20px !important;
  }
  
  .size-xxl-21{
    font-size: 21px !important;
  }
  
  .size-xxl-22{
    font-size: 22px !important;
  }
  
  .size-xxl-23{
    font-size: 23px !important;
  }
  
  .size-xxl-24{
    font-size: 24px !important;
  }
  
  .size-xxl-25{
    font-size: 25px !important;
  }
  
  .size-xxl-26{
    font-size: 26px !important;
  }
  
  .size-xxl-27{
    font-size: 27px !important;
  }
  
  .size-xxl-28{
    font-size: 28px !important;
  }
  
  .size-xxl-29{
    font-size: 29px !important;
  }
  
  .size-xxl-30{
    font-size: 30px !important;
  }
  
  .size-xxl-31{
    font-size: 31px !important;
  }
  
  .size-xxl-32{
    font-size: 32px !important;
  }
  
  .size-xxl-33{
    font-size: 33px !important;
  }
  
  .size-xxl-34{
    font-size: 34px !important;
  }
  
  .size-xxl-35{
    font-size: 35px !important;
  }
  
  .size-xxl-36{
    font-size: 36px !important;
  }
  
  .size-xxl-37{
    font-size: 37px !important;
  }
  
  .size-xxl-38{
    font-size: 38px !important;
  }
  
  .size-xxl-39{
    font-size: 39px !important;
  }
  
  .size-xxl-40{
    font-size: 40px !important;
  }
  
  .size-xxl-50{
    font-size: 50px !important;
  }
  
  .size-xxl-60{
    font-size: 60px !important;
  }
  
  .size-xxl-70{
    font-size: 70px !important;
  }
  
  .size-xxl-80{
    font-size: 80px !important;
  }
  
  .size-xxl-90{
    font-size: 90px !important;
  }

  .weight-xxl-100{
    font-weight: 100 !important;
  }
  
  .weight-xxl-200{
    font-weight: 200 !important;
  }
  
  .weight-xxl-300{
    font-weight: 300 !important;
  }
  
  .weight-xxl-400{
    font-weight: 400 !important;
  }
  
  .weight-xxl-500{
    font-weight: 500 !important;
  }
  
  .weight-xxl-600{
    font-weight: 600 !important;
  }
  
  .weight-xxl-700{
    font-weight: 700 !important;
  }
  
  .weight-xxl-800{
    font-weight: 800 !important;
  }
  
  .weight-xxl-900{
    font-weight: 900 !important;
  }

  .width-xxl-10{
    width:10px;
  }
  .width-xxl-20{
    width:20px;
  }
  .width-xxl-30{
    width:30px;
  }
  .width-xxl-40{
    width:40px;
  }
  .width-xxl-50{
    width:50px;
  }
  .width-xxl-60{
    width:60px;
  }
  .width-xxl-70{
    width:70px;
  }
  .width-xxl-80{
    width:80px;
  }
  .width-xxl-90{
    width:90px;
  }
  .width-xxl-100{
    width:100px;
  }
  .height-xxl-10{
    height:10px;
  }
  .height-xxl-20{
    height:20px;
  }
  .height-xxl-30{
    height:30px;
  }
  .height-xxl-40{
    height:40px;
  }
  .height-xxl-50{
    height:50px;
  }
  .height-xxl-60{
    height:60px;
  }
  .height-xxl-70{
    height:70px;
  }
  .height-xxl-80{
    height:80px;
  }
  .height-xxl-90{
    height:90px;
  }
  .height-xxl-100{
    height:100px;
  }

}














</style>
