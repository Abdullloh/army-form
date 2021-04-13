function myFunction(){
    // Apply form to Army

        let applyForm = alert("Armiyaga hujjatlar topshirish bo'limiga hush kelibsiz");
        let didGraduate = confirm("O'rta talimni tamomladingizmi");
        // Yosh mosligi
        let gender 
        let age = prompt("Yoshingizni kiriting");                                                                                                                     
        if ( age <= 18 ){
          alert('Siz hali armiyaga borishga yetarli yoshda emassiz')}
        else if (age > 18 && age < 35){
            alert('Yosh to\'g\'ri keladi')
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
}