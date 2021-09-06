import React, {useState} from "react";
import './previewer.styles.scss';
import previewIcon from '../../assets/previewer.svg';
import scaleBtn from '../../assets/scale-icon.svg';

type PreviewerProps = {
    updateApp: (winName: string) => void,
}

const Previewer: React.FC<PreviewerProps> = (props) => {
    const [closed, close] = useState(false);

    return (
        <div className="previewer-block" >
            <section className='title-bar'>
                <div className="window-logo">
                    <img src={previewIcon} alt='logo'/>
                </div>
                <p className='title'>Previewer</p>
                <button className='scale' onClick={() => {
                    if(!closed) {
                        props.updateApp('Editor')
                        close(true);
                    } else {
                        props.updateApp('Neither');
                        close(false);
                    }
                }}>
                    <img src={scaleBtn}  alt="scale" />
                </button>
            </section>
            <section className='review-area'>
            </section>
        </div>
    )
}

export default Previewer;