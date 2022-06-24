



const Iframe = ({iframeURL}) => {
  return (

     <div>
      <iframe  src={iframeURL}  style={{ height: "60vh", width:"100%", border:"none"}} title="Iframe Example">
           <h2>Review</h2>
      </iframe> 
    </div>

  )
}

export default Iframe;