
async function getData() {
    const res = await fetch('https://www.freetogame.com/api/games')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      return res.json().then(res => res.sort(() => Math.random() - 0.5))
}

export default getData