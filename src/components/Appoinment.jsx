

function Appointment() {
  return(
    <div className="a-flex">
      <div className="a-grid">
      <h1 className="c-p">Get in Touch </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing oloremque
        similique velit itaque commodi, neque voluptates.</p>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Number"/>
      <input type="text" placeholder="Email"/>
      <select name="Select Services" id="">
        <option value="">Select Services</option>
        <option value="">Wedding Makeup</option>
        <option value="">Reception Makeup</option>
        <option value="">Model Makeup</option>
      </select>
      <input className="i-message" type="text" placeholder="Message" />
      <button>Submit</button>
    </div>
    </div>
  );
}

export default Appointment