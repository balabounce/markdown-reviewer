import React from "react";
import './previewer.styles.scss';
import previewIcon from '../../assets/previewer.svg';
import scaleBtn from '../../assets/scale-icon.svg';

const Previewer = () => {
    const scaleClick = () => {
        
    }

    return (
        <div className="previewer-block">
            <section className='title-bar'>
                <div className="window-logo">
                    <img src={previewIcon} alt='logo'/>
                </div>
                <p className='title'>Previewer</p>
                <button className='scale' onClick={() => scaleClick()}>
                    <img src={scaleBtn}  alt="scale" />
                </button>
            </section>
            <section className='review-area'>
            </section>
        </div>
    )
}

export default Previewer;