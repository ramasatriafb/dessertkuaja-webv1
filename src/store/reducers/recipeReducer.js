const initState = {
    recipes: [
        {id:'1', nama: 'Pancake Dessert', nutrisi: 'sehat', bahan: ' pisang', tatacara: 'dimasak', kategori: 'Asam Urat'},
        {id:'2', nama: 'Cheese Cake', nutrisi: 'sehat', bahan: ' pisang', tatacara: 'dimasak', kategori: 'Asam Urat'},
        {id:'3', nama: 'Ice Cream', nutrisi: 'sehat', bahan: ' pisang', tatacara: 'dimasak', kategori: 'Asam Urat'}
    ]
}

const recipeReducer = (state = initState, action) => {
    return state
}


export default recipeReducer