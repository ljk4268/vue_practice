function fetchMoives(title) {
  const OMDB_API_KEY = '7035c60c123'
  return new Promise(async (resolve, reject)=>{
    try {
      const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
      // 이행 : 연산이 성공적으로 완료됨
      resolve(res)
    } catch(error) {
      console.log(error)
      // 거부 : 연산이 실패함
      reject('에러가났어요')
    }
  })
}

async function test() {
  try {
    const res = await fetchMoives('frozen')
    console.log(res)
  } catch (heropy) {
    console.log(heropy)
  }
  
}

test()

function hello() {
  fetchMoives('jobs')
    .then(res => console.log(res))
    .catch(heropy=>{ console.log(heropy)})
  
}