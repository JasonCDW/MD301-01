const $main = $('main');
const $selector = $('#filter');
// const $template = $('#image-template')

const apiURL = 'https://raw.githubusercontent.com/CodePartnersMD/MD301-01/master/02-jquery-selectors-events/lab/page-1.json'
const apiURL2 = 'https://raw.githubusercontent.com/CodePartnersMD/MD301-01/master/03-flexbox-templating/lab/page-2.json';

const HornImg = function(imageObj) {
  this.title = imageObj.title;
  this.image_url = imageObj.image_url;
  this.description = imageObj.description;
  this.keyword = imageObj.keyword;
  this.horns = imageObj.horns;
}

let HornsArray = [];

// $template.attr('class', 'hidden')
HornImg.prototype.renderHorns = imgObj => {
  let hornTemplate = $('#image-template').html();
  let handleBarsTemplate = Handlebars.compile(hornTemplate);
  return handleBarsTemplate(imgObj);
  // let $HornClone = $('#image-template').clone()
  // $main.append($HornClone)
  // $HornClone.attr('id', imgObj.keyword)
  // $HornClone.find('img').attr('src', imgObj.image_url)
  // $HornClone.find('p').text(imgObj.description)
  // $HornClone.find('h2').text(imgObj.title)
  // // $HornClone.attr('class', 'shown');
}


$($selector).on('change', () => {
  $('section').hide();
  $(`section[id=${event.target.value}]`).show();
})

$.getJSON(apiURL, response => {
  response.forEach((val) => {
    let newHorn = new HornImg(val);
    HornsArray.push(newHorn);
    $main.append(newHorn.renderHorns(val));
    $selector.append(`<option value=${newHorn.keyword}>${newHorn.keyword}</option>`);
  })
})

