const OPTIONS = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b02107e8fmsh816f7bef0ed0e3fp16c5fajsn7fc7150adcd6',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};


const fetchIpInfo = ip =>{
    return fetch('https://ip-geolocation-and-threat-detection.p.rapidapi.com/'+ip+'', OPTIONS)
      .then(res => res.json()) 
      .catch(err => console.error(err))  
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $result = document.getElementById('results') 

$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const {value} = $input
  if (!value) return

  $submit.setAttribute('disable', '')
  $submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo(value)

  if(ipInfo){
    //console.log(ipInfo)
    $result.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disable')
  $submit.removeAttribute('aria-busy')
})