$(document).ready(function(){
    let sldID = ['#rec313044570'];
    for (let i=0; i<sldID.length; i++){
        let sliderEl = sldID[i]+' .t-slds__item'; 
        let slidercount = $(sliderEl).length; $(sliderEl).empty(); let start=0;
        if(!$(sliderEl+'[data-slide-index="0"]').length){start=1};
        for (let j=0; j<slidercount; j++){
            let sInd = j+start;
            if(start){ slideId = '#'+$(sldID[i]).next().next('div[data-record-type="396"]').attr('id');
            }else{ slideId = '#'+$(sldID[i]).next('div[data-record-type="396"]').attr('id') 
            if(j==0){sInd=slidercount-1};if(j==slidercount-1){sInd=0};
            }; $(slideId).appendTo(sliderEl+'[data-slide-index='+(sInd)+']');
        };      if(start){ $(sldID[i]).next().hide(); $(sldID[i]).next().next().hide()};
    };
 
});