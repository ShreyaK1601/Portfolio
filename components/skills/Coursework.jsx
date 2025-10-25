const Coursework = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Additional Skills & Tools</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-analyse' ></i>

                    <div>
                        <h3 className="skills__name">TensorFlow</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-brain' ></i>

                    <div>
                        <h3 className="skills__name">PyTorch</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-radar' ></i>

                    <div>
                        <h3 className="skills__name">OpenCV</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                </div>
            </div>

          
        </div>
    </div>
  )
}

export default Coursework