

export default function FoodBox({ data, onDelete}) {

 

  return (
    <div >
          <p>{data.name}</p>

          <div style={{width: '300px', height: '200px', display:'flex'}}>
            <img style={{objectFit: 'fill', width: '100%'}} src={data.image} alt={data.nombre} />
          </div>

          <p>Calories: {data.calories}</p>
          <p>Servings {data.servings}</p>

          <p>
            <b>Total Calories: {data.calories * data.servings} </b> kcal
          </p>

          <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}
