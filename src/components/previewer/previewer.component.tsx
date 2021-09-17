import React, {useState} from "react";
import './previewer.styles.scss';
import previewIcon from '../../assets/previewer.svg';
import scaleBtn from '../../assets/scale-icon.svg';
import marked from 'marked';

type PreviewerProps = {
    updateApp: (winName: string, text?: string) => void,
    data: string
}

const Previewer: React.FC<PreviewerProps> = (props) => {
    const [scaled, scale] = useState(false);


    if(scaled) {
        return (
            <div className="previewer-block scaled" >
                <section className='title-bar'>
                    <div className="window-logo">
                        <img src={previewIcon} alt='logo'/>
                    </div>
                    <p className='title'>Previewer</p>
                    <button className='scale' onClick={() => {
                        if(!scaled) {
                            props.updateApp('Editor');
                            scale(true);
                        } else {
                            props.updateApp('Neither');
                            scale(false);
                        }
                    }}>
                        <img src={scaleBtn}  alt="scale" />
                    </button>
                </section>
                <section className='review-area' dangerouslySetInnerHTML={{__html: marked(props.data)}}>
                </section>
            </div>
        )
    }

    return (
        <div className="previewer-block" >
            <section className='title-bar'>
                <div className="window-logo">
                    <img src={previewIcon} alt='logo'/>
                </div>
                <p className='title'>Previewer</p>
                <button className='scale' onClick={() => {
                    if(!scaled) {
                        props.updateApp('Editor');
                        scale(true);
                    } else {
                        props.updateApp('Neither');
                        scale(false);
                    }
                }}>
                <img src={scaleBtn}  alt="scale" />
                </button>
            </section>
            <section className='review-area' dangerouslySetInnerHTML={{__html: marked(props.data)}}>
            </section>
        </div>
    )
}

export default Previewer;