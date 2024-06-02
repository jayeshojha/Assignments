
export default function Listview() {
   const List = [
        {
            'name': 'I used Array.map',
            'id': 1
        },
        {
            'name': 'Not use for loop',
            'id': 2
        },
        {
            'name': 'Also give unique key for each item',
            'id': 3
        },
        {
            'name': 'Also avoide array index as a key',
            'id': 4
        }
    ]
    return (
        <>
          { 
           List.map((v)=>{
            return <li key={v.id} className="List">{v.name}</li>
           })   
          }
        </>
    )
}