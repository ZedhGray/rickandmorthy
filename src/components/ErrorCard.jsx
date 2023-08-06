const ErrorCard = () => {
  return (
    <article className="ErrorCard">
      <div className="ErrorCard_Data">
        <h2>❌ Hey! You must provide a valid ID</h2>
        <h2>Only numbers between</h2>
        <p>1 to 126 😥</p>
      </div>
      <div className="ErrorCard_img">
        <img src="https://i.gifer.com/ZiaV.gif" alt="rick" />
      </div>
    </article>
  )
}

export default ErrorCard
