

const DynamicUserPage = async ({params}) => {
    const {userId} = await params;
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const res = await data.json();

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
   <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn  btn-primary">
        delete
      </button>
    </div>
    <p>{res.name}</p>

    <p>{res.company.catchPhrase}</p>
  </div>
</div>
    );
};

export default DynamicUserPage;