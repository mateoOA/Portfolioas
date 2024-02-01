import "./Certificates.css"

function Certificates() {
  return (
    <>
      <iframe
        src="../../../public/EF SET Certificate.pdf#toolbar=0"
        width="100%"
        height="600px"
        className="Efset"
      ></iframe>
        <span className="Horizontal">    
            <iframe
                src="../../../public/Henry Certificado.pdf#toolbar=0"
                width="48%"
                height="200px"
                className="Henry"
                ></iframe>

            <iframe
                src="../../../public/CERTIFICADO CISMA MATEO.pdf#toolbar=0"
                width="48%"
                height="200px"
                ></iframe>
        </span>
    </>
  );
}

export default Certificates;