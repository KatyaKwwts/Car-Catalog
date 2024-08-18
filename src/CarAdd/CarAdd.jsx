export default function CarAdd() {
    return (
      <>
      
      <form class="form" action="" method="post" >
            <h2>Create new car</h2>
            <div>            
                <input class="input" type="text" placeholder="Mark" />
                <input class="input" type="text" placeholder="Year of manufacture "/>
                <input class="input" type="text" placeholder="Color"/>
                <input class="input" type="text" placeholder="Volume"/>
                <input class="input" type="text" placeholder="Price"/>
                <button class="btn" type="submit">Create</button>
            </div>
        </form>
      
      </>
    );
}