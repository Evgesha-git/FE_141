import React, { useEffect } from 'react'

const Modal = () => {

  useEffect(() => {
    console.log('Модалка отрисовалась');
    return () => console.log('Модалка удалена')
  }, []) 

  return (
    <div className="modal">
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, enim!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ullam esse vero, dolorum corporis ea optio quae eveniet architecto voluptatibus?</p>
      <p>Distinctio aliquam impedit odit blanditiis perferendis ipsum doloremque hic possimus voluptatem nesciunt, sapiente exercitationem, est vero illo. Iste, iusto nesciunt?</p>
      <p>Temporibus sequi, eos eum deleniti sit est fugit animi, possimus libero, accusantium blanditiis! Temporibus debitis dolores aliquam. Fuga, quasi tenetur.</p>
      <p>Enim quasi voluptatum quae eius autem officiis molestiae ducimus, cupiditate aliquid quam totam facere obcaecati blanditiis, itaque reiciendis sit beatae!</p>
    </div>
  )
}

export default Modal