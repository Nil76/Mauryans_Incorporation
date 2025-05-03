import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Consulting Engineer" img="card1.png" text="A consulting engineer is a professional who provides expert advice and solutions in various engineering fields to clients.These professionals often work on a project basis, helping businesses, governments, and organizations design, implement, and manage engineering projects. Here's a detailed overview of the role and responsibilities of a consulting engineer " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Engineering Planning" img="card2.png" text="Engineering planning is a critical phase in the lifecycle of any engineering project, ensuring that all aspects of the project are thoroughly considered and systematically managed from inception to completion. Here’s an overview of the key components of engineering planning" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="CNC Programming" img="card3.png" text="CNC (Computer Numerical Control) programming is the process of creating a set of instructions for CNC machines to follow in order to perform various machining tasks such as cutting, drilling, milling, and turning. These machines use computer-generated code to control the movement and operation of machine tools. Here’s an overview of CNC programming" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
