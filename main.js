function myFunction(){
    // Apply form to Army

        let applyForm = alert("Armiyaga hujjatlar topshirish bo'limiga hush kelibsiz");
        let didGraduate = confirm("O'rta talimni tamomladingizmi?");
        // Yosh mosligi
        let age = prompt("Yoshingizni kiriting"); 
        let gender = prompt("Jinsingizni kiriting");                                                                                                                    
        if ( age <= 18 || gender !== 'erkak' ){
          alert('Yosh va Jins to\'gri kelmadi')}
        else if ((age > 18 && age < 35)&&(gender === 'erkak')){
            alert('Yosh va jins to\'g\'ri keladi')
        }
        else {
        alert('Armiyaga borishga qarilik qilasiz')
        }
        let healthConfirmation = prompt('Sog\'ligiz buyicha muammo bormi?');
        switch(healthConfirmation){
        case'Ha':
        case'yes':
        case'ha':
          alert('Shifokorga uchrashing va so\'rovnamani qayta to\'ldiring');
          break;
          case'yo\'q':
          default:
          alert('Sog\'ligiz to\'g\'ri keladi')
      }
    let liveLocation = prompt('Yashash hudidingizni kiriting');
    switch(liveLocation){
      case'toshkent':
      case 'jizzax':
      case 'sirdaryo':
      case 'Guliston':
        alert('Yashash hududiz mos keldi')
        break;
      default:
        alert('Bu hudud bizga qarashli emas')
    }
    let howLong = prompt('Qancha muddatga borishni rejalashtirmoqdasiz?')
    switch(howLong){
      case '3 oy':
      case '6 oy':
        let day = prompt('Kunni tanglang');
        switch(day){
          case 'dushanba':
          case 'seshanba':
          case 'chorshanba':
          case 'payshanba':
          case 'juma':
            alert('Kun mos keldi')
            break;
          default:
            alert('Bu kunlari bizda qatnov mavjud emas')
        }
      let time = prompt ('Junab ketish vaqtini tanlang');
      switch(time){
        case 'ertalab':
        case 'tushda':
        case 'Kechqurun':
          alert('Junab ketish vaqti mos')
          break;
        default:
          alert('Vaqt tugri kelmadi')
      }
      alert('Qabul qilindi')
    }
    let user = confirm('Yuqoridegi malumotlarni hammasini tuldirdizmi?');

    let finalConfiguration = confirm('Malumotlar tugriligga aminmisiz?');
    
    if ((age > 18 && age < 35)&&(gender === 'erkak')&&(healthConfirmation ==="yo'q")&&(time === 'ertalab' || time ==="tushda" || time ==="kechqurun")&&(day === 'dushnba'|| day ==="seshanba"||day==="chorshanba")&&(howLong === '3 oy' || howLong === '6 oy'))
      alert('sizda hamma malumotlar tugri , ketishga tayyorgarli kuring')
}