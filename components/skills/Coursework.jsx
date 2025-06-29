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
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-brain' ></i>

                    <div>
                        <h3 className="skills__name">PyTorch</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-radar' ></i>

                    <div>
                        <h3 className="skills__name">OpenCV</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">

                <div className="skills__data">
                    <i className='bx bx-shield' ></i>

                    <div>
                        <h3 className="skills__name">Splunk</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-shield-alt-2' ></i>

                    <div>
                        <h3 className="skills__name">Wazuh</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-git-branch' ></i>

                    <div>
                        <h3 className="skills__name">YOLO v5</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coursework